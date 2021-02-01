"use strict";

let buildFolder = "build";
let sourceFolder = "source";

let path = {
  dest: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
    video: `${buildFolder}/video/`,
    fonts: `${buildFolder}/fonts/`,
  },

  source: {
    html: [`${sourceFolder}/*.html`, `!${sourceFolder}/_*.html`],
    css: `${sourceFolder}/less/common/style.less`,
    js: `${sourceFolder}/js/**/*.js`,
    img: `${sourceFolder}/img/**/*.{jpg,png,svg,ico}`,
    video: `${sourceFolder}/video/**/*.{mp4,ogv,webm}`,
    fonts: `${sourceFolder}/fonts/**/*.{woff2,woff}`,
  },

  watch: {
    html: `${sourceFolder}/**/*.html`,
    css: `${sourceFolder}/less/**/*.less`,
    js: `${sourceFolder}/js/**/*.js`,
    img: `${sourceFolder}/img/**/*.{jpg,png,svg,ico}`,
  },

  clean: `./${buildFolder}/`,
};

let { src, dest } = require("gulp");
let gulp = require("gulp");
let ghPages = require("gulp-gh-pages");
let server = require("browser-sync").create();
let fileInclude = require("gulp-file-include");
let HTMLValidator = require("gulp-w3c-html-validator");
let HTMLmin = require("gulp-htmlmin");
let del = require("del");
let less = require("gulp-less");
let autoPrefixer = require("gulp-autoprefixer");
let gcmq = require("gulp-group-css-media-queries");
let cleanCss = require("gulp-clean-css");
let sourcemap = require("gulp-sourcemaps");
let rename = require("gulp-rename");
let plumber = require("gulp-plumber");
let babel = require("gulp-babel");
let terser = require("gulp-terser");
let imagemin = require("gulp-imagemin");
let webp = require("gulp-webp");
let svgSprite = require("gulp-svg-sprite");

function createServer() {
  server.init({
    server: `${buildFolder}/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });
}

function html() {
  return src(path.source.html)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(HTMLValidator())
    .pipe(HTMLValidator.reporter())
    .pipe(dest(path.dest.html))
    .pipe(
      HTMLmin({
        removeComments: true,
        collapseWhitespace: true,
      })
    )
    .pipe(
      rename({
        extname: ".min.html",
      })
    )
    .pipe(dest(path.dest.html))
    .pipe(server.stream());
}

function css() {
  return src(path.source.css)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(gcmq())
    .pipe(
      autoPrefixer({
        cascade: true,
      })
    )
    .pipe(dest(path.dest.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(sourcemap.write("."))
    .pipe(dest(path.dest.css))
    .pipe(server.stream());
}

function js() {
  return src(path.source.js)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(dest(path.dest.js))
    .pipe(sourcemap.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(terser())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(sourcemap.write("."))
    .pipe(dest(path.dest.js))
    .pipe(server.stream());
}

function images() {
  return src(path.source.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(path.dest.img))
    .pipe(server.stream());
}

function sprite() {
  return gulp
    .src([`${sourceFolder}/img/icon-*.svg`])
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../icons/sprite.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest(path.dest.img));
}

function copyFiles() {
  return src([path.source.fonts, path.source.img, path.source.video], {
    base: sourceFolder,
  }).pipe(dest(buildFolder));
}

gulp.task("webp", function () {
  return src(path.source.img)
    .pipe(
      webp({
        quality: 85,
      })
    )
    .pipe(dest(path.dest.img));
});

function watchFiles() {
  gulp.watch([path.watch.html], gulp.series(html, refresh));
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function refresh(done) {
  server.reload();
  done();
}

function clean() {
  return del(path.clean);
}

let build = gulp.series(
  clean,
  copyFiles,
  gulp.series(html, css, js, images, sprite)
);
let watch = gulp.series(build, gulp.parallel(watchFiles, createServer));

exports.sprite = sprite;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
