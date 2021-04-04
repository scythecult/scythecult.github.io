/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/comments.js":
/*!************************************!*\
  !*** ./src/components/comments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderComments": () => (/* binding */ renderComments),
/* harmony export */   "showCommentsLoaderButton": () => (/* binding */ showCommentsLoaderButton),
/* harmony export */   "hideCommentsLoaderButton": () => (/* binding */ hideCommentsLoaderButton),
/* harmony export */   "commentsConfig": () => (/* binding */ commentsConfig)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");




const commentsConfig = {
  STEP: 5,
  toRender: [],
  counter: 0,
};

const createCommentMarkup = (commentData) => {
  const { avatar, message, name } = commentData;

  return `<li class="social__comment">
          <img
          class="social__picture"
          src="${avatar}"
          alt="${name}"
          width="35" height="35">
          <p class="social__text">${message}</p>
          </li>`;
};

const renderComments = (commentsData) => {
  const commentsBlockElements = commentsData.map((comment) =>
    createCommentMarkup(comment)
  );

  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.renderAdjacent)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.commentsList, commentsBlockElements.join("\n"));
  commentsConfig.counter += commentsData.length;
  showCommentsLoadedCount(commentsConfig.counter);
};

const showCommentsLoadedCount = (count) => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.preview.commentsFrom.textContent = count;
};

const showCommentsLoaderButton = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.commentsLoader, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.commentsLoader.addEventListener(
    "click",
    onCommentsLoaderButtonClick
  );
};

const hideCommentsLoaderButton = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.commentsLoader, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.commentsLoader.removeEventListener(
    "click",
    onCommentsLoaderButtonClick
  );
};

const onCommentsLoaderButtonClick = (evt) => {
  evt.preventDefault();

  if (commentsConfig.toRender.length <= commentsConfig.STEP) {
    hideCommentsLoaderButton();
  }

  renderComments(commentsConfig.toRender.splice(0, commentsConfig.STEP));
};




/***/ }),

/***/ "./src/components/consts.js":
/*!**********************************!*\
  !*** ./src/components/consts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTS": () => (/* binding */ CONSTS)
/* harmony export */ });
const CONSTS = {
  LOAD_URL: "https://22.javascript.pages.academy/kekstagram/data",
  SEND_URL: "https://22.javascript.pages.academy/kekstagram/",
  HIDDEN: "hidden",
  MODAL: "modal-open",
  MODAL_LOAD: "img-upload__message--loading",
  PICTURE: "picture",
  FILTER_HIDDEN: "img-filters--inactive",
  FILTER_ACTIVE: "img-filters__button--active",
  FILTER_DEFAULT: "filter-default",
  FILTER_RANDOM: "filter-random",
  FILTER_DISCUSSED: "filter-discussed",
  FILTER_RANDOM_MAX: 10,
  DEBOUNCE_INTERVAL: 500,
  SLIDER_MAX_VALUE: 100,
  SLIDER_DEFAULT_VALUE: 20,
  EFFECT_MIN_VALUE: 0,
  EFFECT_MAX_VALUE: 1,
  MARVIN_MAX_VALUE: 100,
  PHOBOS_MAX_VALUE: 3,
  HEAT_MIN_VALUE: 1,
  HEAT_MAX_VALUE: 3,
  EFFECT_PROPORTION: 100,
  START_CHAR: "#",
  MAX_HASH_LENGTH: 5,
  MAX_CHAR_LENGTH: 20,
};




/***/ }),

/***/ "./src/components/dom-elements.js":
/*!****************************************!*\
  !*** ./src/components/dom-elements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "preview": () => (/* binding */ preview),
/* harmony export */   "upload": () => (/* binding */ upload),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "effects": () => (/* binding */ effects),
/* harmony export */   "slider": () => (/* binding */ slider),
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
const elements = {
  body: document.querySelector("body"),
  main: document.querySelector("main"),
  fullsceenPicture: document.querySelector(".big-picture"),
  picturesContainer: document.querySelector(".pictures"),
  commentsList: document.querySelector(".social__comments"),
  commentsLoader: document.querySelector(".social__comments-loader"),
  closePreview: document.querySelector("#picture-cancel"),
};

const preview = {
  bigPicture: elements.fullsceenPicture.querySelector(".big-picture__img img"),
  caption: elements.fullsceenPicture.querySelector(".social__caption"),
  commentsFrom: elements.fullsceenPicture.querySelector(".comments-count-from"),
  commentsTo: elements.fullsceenPicture.querySelector(".comments-count"),
  likes: elements.fullsceenPicture.querySelector(".likes-count"),
};

const filter = {
  container: document.querySelector(".img-filters"),
  buttons: document.querySelectorAll(".img-filters__button"),
};

const upload = {
  imageUpload: document.querySelector("#upload-file"),
  imageOverlay: document.querySelector(".img-upload__overlay"),
  imagePreview: document.querySelector(".img-upload__preview img"),
  closePreview: document.querySelector("#upload-cancel"),
};

const scale = {
  container: document.querySelector(".img-upload__scale"),
  valueInput: document.querySelector(".scale__control--value"),
};

const effects = {
  default: document.querySelector("#effect-none"),
  container: document.querySelector(".img-upload__effects"),
};

const slider = {
  container: document.querySelector(".img-upload__effect-level"),
  bar: document.querySelector(".effect-level__line"),
  pin: document.querySelector(".effect-level__pin"),
  depth: document.querySelector(".effect-level__depth"),
  effectLevel: document.querySelector(".effect-level__value"),
};

const form = {
  body: document.querySelector(".img-upload__form"),
  container: document.querySelector(".img-upload__text"),
  hashInput: document.querySelector(".text__hashtags"),
  textareaInput: document.querySelector(".text__description"),
  submit: document.querySelector(".img-upload__submit"),
};




/***/ }),

/***/ "./src/components/effect-slider.js":
/*!*****************************************!*\
  !*** ./src/components/effect-slider.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setSliderDefaults": () => (/* binding */ setSliderDefaults),
/* harmony export */   "onPinMousedown": () => (/* binding */ onPinMousedown)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");



const onPinMousedown = (evt) => {
  evt.preventDefault();

  const start = new Coords(evt.clientX);
  const selectedEffect = getSelectedEffect();

  const onMousemove = (moveEvt) => {
    const shift = new Coords(start.x - moveEvt.clientX);
    const pinX = _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.pin.offsetLeft - shift.x;
    const proportion = Math.floor(
      (pinX / (_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.bar.offsetWidth - _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.pin.offsetWidth)) *
        _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_MAX_VALUE
    );
    start.x = moveEvt.clientX;

    if (!(pinX < 0 || pinX > _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.bar.offsetWidth)) {
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.pin.style.left = `${pinX}px`;
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.depth.style.width = `${pinX}px`;
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.effectLevel.setAttribute(
        "value",
        `${
          proportion > _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_MAX_VALUE
            ? _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_MAX_VALUE
            : proportion
        }`
      );
      setEffectDepth(selectedEffect, proportion);
    }
  };

  const onMouseup = () => {
    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("mouseup", onMouseup);
  };

  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("mouseup", onMouseup);
};

const getSelectedEffect = () => {
  return _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.getAttribute("class");
};

const setEffectDepth = (effectName, proportion) => {
  const effectProp = proportion / _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.EFFECT_PROPORTION;
  const { style } = _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview;

  switch (effectName) {
    case "effects__preview--chrome":
      style.filter = `grayscale(${effectProp})`;
      break;
    case "effects__preview--sepia":
      style.filter = `sepia(${effectProp})`;
      break;
    case "effects__preview--marvin":
      style.filter = `invert(${proportion}%)`;
      break;
    case "effects__preview--phobos":
      style.filter = `blur(${
        effectProp * _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.PHOBOS_MAX_VALUE > _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.PHOBOS_MAX_VALUE
          ? _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.PHOBOS_MAX_VALUE
          : effectProp * _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.PHOBOS_MAX_VALUE
      }px)`;
      break;
    case "effects__preview--heat":
      style.filter = `brightness(${
        effectProp * _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HEAT_MAX_VALUE < _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HEAT_MIN_VALUE
          ? _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HEAT_MIN_VALUE
          : effectProp * _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HEAT_MAX_VALUE
      })`;
      break;
    default:
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.removeAttribute("style");
      break;
  }
};

const setSliderDefaults = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.pin.style.left = `${_consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_MAX_VALUE}%`;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.depth.style.width = `${_consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_MAX_VALUE}%`;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.effectLevel.setAttribute("value", `${_consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_MAX_VALUE}`);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.removeAttribute("style");
};

const Coords = function (x) {
  this.x = x;
};




/***/ }),

/***/ "./src/components/effects.js":
/*!***********************************!*\
  !*** ./src/components/effects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaulEffectValue": () => (/* binding */ setDefaulEffectValue),
/* harmony export */   "onEffectClick": () => (/* binding */ onEffectClick)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _effect_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effect-slider.js */ "./src/components/effect-slider.js");
/* harmony import */ var _scale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scale.js */ "./src/components/scale.js");






const EffectsMap = {
  chrome: "effects__preview--chrome",
  sepia: "effects__preview--sepia",
  marvin: "effects__preview--marvin",
  phobos: "effects__preview--phobos",
  heat: "effects__preview--heat",
  none: "effects__preview--none",
};

const onEffectClick = (evt) => {
  const effect = evt.target.closest(".effects__radio");

  if (!effect) return;
  const effectId = clearEffectName(effect, "effect-");
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.className = EffectsMap[effectId];
  hideSliderByDefault(effect);
  (0,_scale_js__WEBPACK_IMPORTED_MODULE_4__.setDefaultScaleValue)();
  (0,_effect_slider_js__WEBPACK_IMPORTED_MODULE_3__.setSliderDefaults)();
};

const clearEffectName = (effectName, toClear) => {
  return effectName.getAttribute("id").replace(`${toClear}`, "");
};

const hideSliderByDefault = (effect) => {
  if (effect.hasAttribute("checked")) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.container, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
  } else {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.container, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
  }
};

const setDefaulEffectValue = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.effects.default.checked = true;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.effects.default.focus();
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.removeAttribute("class");
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.removeAttribute("style");
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.effectLevel.setAttribute("value", _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SLIDER_DEFAULT_VALUE);
};




/***/ }),

/***/ "./src/components/form-validation.js":
/*!*******************************************!*\
  !*** ./src/components/form-validation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onFormSubmitClick": () => (/* binding */ onFormSubmitClick),
/* harmony export */   "onInputKeyup": () => (/* binding */ onInputKeyup),
/* harmony export */   "setFormDefaults": () => (/* binding */ setFormDefaults)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _recieve_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recieve-data.js */ "./src/components/recieve-data.js");
/* harmony import */ var _modal_handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-handler.js */ "./src/components/modal-handler.js");





const onInputKeyup = (evt) => {
  evt.preventDefault();
  const hashInput = _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput;
  const hashInputArray = _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput.value.toLowerCase().split(" ");
  const customMessage = checkHashInput(hashInputArray);

  if (customMessage.length !== 0) {
    hashInput.style.border = "2px solid tomato";
    hashInput.setCustomValidity(customMessage.join("\n"));
    hashInput.reportValidity();
  } else {
    hashInput.removeAttribute("style");
    hashInput.setCustomValidity("");
  }
};

const onFormSubmitClick = (evt) => {
  evt.preventDefault();
  if (_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput.validity.valid) {
    const formDataBody = new FormData(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.body);
    (0,_recieve_data_js__WEBPACK_IMPORTED_MODULE_2__.sendData)(_consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.SEND_URL, formDataBody).then(_modal_handler_js__WEBPACK_IMPORTED_MODULE_3__.handleSuccess, _modal_handler_js__WEBPACK_IMPORTED_MODULE_3__.handleError);
  } else {
    return;
  }
};

const setFormDefaults = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput.value = "";
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput.removeAttribute("style");
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.textareaInput.value = "";
};

const checkHashInput = (input) => {
  const invalidities = [];

  input.forEach((hashtag, i) => {
    if (hashtag === "") {
      invalidities.pop();
    } else if (checkStringStartsWith(hashtag, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.START_CHAR)) {
      invalidities.push("хэш-тег начинается с символа # (решётка)");
    } else if (checkStringHasOnlyChar(hashtag, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.START_CHAR)) {
      invalidities.push("хеш-тег не может состоять только из одной решётки");
    } else if (findNoSpaceHashtag(hashtag, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.START_CHAR)) {
      invalidities.push("хэш-теги разделяются пробелами");
    } else if (checkUniqueElements(hashtag, input, i)) {
      invalidities.push(
        "один и тот же хэш-тег не может быть использован дважды"
      );
    } else if (input.length > _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MAX_HASH_LENGTH) {
      invalidities.push("нельзя указать больше пяти хэш-тегов");
    } else if (hashtag.length > _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MAX_CHAR_LENGTH) {
      invalidities.push(
        "максимальная длина одного хэш-тега 20 символов, включая решётку"
      );
    }
  });

  return Array.from(new Set(invalidities));
};

const checkUniqueElements = (string, elements, index) => {
  return elements.indexOf(string, index + 1) !== -1;
};

const checkStringHasOnlyChar = (string, char) => {
  return string.includes(char) && string.length === 1;
};

const checkStringStartsWith = (string, char) => {
  return !string.startsWith(char);
};

const findNoSpaceHashtag = (string, char) => {
  const state = true;
  let position = 0;

  while (state) {
    let foundPosition = string.indexOf(char, position);

    if (foundPosition === -1) break;

    position = foundPosition + 1;
  }

  return position > 1;
};




/***/ }),

/***/ "./src/components/image-upload.js":
/*!****************************************!*\
  !*** ./src/components/image-upload.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadHandler": () => (/* binding */ uploadHandler),
/* harmony export */   "setImageUploadDefaults": () => (/* binding */ setImageUploadDefaults)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _scale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scale.js */ "./src/components/scale.js");
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects.js */ "./src/components/effects.js");
/* harmony import */ var _effect_slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effect-slider.js */ "./src/components/effect-slider.js");
/* harmony import */ var _form_validation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-validation.js */ "./src/components/form-validation.js");








const uploadHandler = () => {
  const onUploadInputChange = (evt) => {
    evt.preventDefault();
    setImageFromFile();
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imageOverlay, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.container, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.scale.container.addEventListener("click", _scale_js__WEBPACK_IMPORTED_MODULE_3__.onScaleClick);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.pin.addEventListener("mousedown", _effect_slider_js__WEBPACK_IMPORTED_MODULE_5__.onPinMousedown);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.effects.container.addEventListener("click", _effects_js__WEBPACK_IMPORTED_MODULE_4__.onEffectClick);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.container.addEventListener("focusin", onInputFocusin);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.container.addEventListener("focusout", onInputFocusout);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput.addEventListener("keyup", _form_validation_js__WEBPACK_IMPORTED_MODULE_6__.onInputKeyup);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.submit.addEventListener("click", _form_validation_js__WEBPACK_IMPORTED_MODULE_6__.onFormSubmitClick);
    document.addEventListener("keydown", onEscKeydown);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.closePreview.addEventListener("click", onClosePreviewButtonClick);
  };

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imageUpload.addEventListener("change", onUploadInputChange);
};

const onEscKeydown = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    setImageUploadDefaults();
  }
};

const onClosePreviewButtonClick = (evt) => {
  evt.preventDefault();
  setImageUploadDefaults();
};

const setImageFromFile = () => {
  const file = _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imageUpload.files[0];
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.src = URL.createObjectURL(file);

  const onUploadPreviewLoad = () => {
    URL.revokeObjectURL(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.src);

    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.removeEventListener("load", onUploadPreviewLoad);
  };

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imagePreview.addEventListener("load", onUploadPreviewLoad);
};

const resoreFileInputValue = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imageUpload.value = "";
};

// TODO REFACTOR BELOW FUNCTIONS
const onInputFocusin = (evt) => {
  const input = evt.target.closest(".text__hashtags");
  const textarea = evt.target.closest(".text__description");

  if (!input && !textarea) return;

  if (input || textarea) {
    document.removeEventListener("keydown", onEscKeydown);
  }
};

const onInputFocusout = (evt) => {
  const input = evt.target.closest(".text__hashtags");
  const textarea = evt.target.closest(".text__description");

  if (!input && !textarea) return;

  if (input || textarea) {
    document.addEventListener("keydown", onEscKeydown);
  }
};

const setImageUploadDefaults = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.imageOverlay, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
  resoreFileInputValue();
  (0,_scale_js__WEBPACK_IMPORTED_MODULE_3__.setDefaultScaleValue)();
  (0,_effects_js__WEBPACK_IMPORTED_MODULE_4__.setDefaulEffectValue)();
  (0,_form_validation_js__WEBPACK_IMPORTED_MODULE_6__.setFormDefaults)();
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.scale.container.removeEventListener("click", _scale_js__WEBPACK_IMPORTED_MODULE_3__.onScaleClick);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.slider.pin.removeEventListener("mousedown", _effect_slider_js__WEBPACK_IMPORTED_MODULE_5__.onPinMousedown);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.effects.container.removeEventListener("click", _effects_js__WEBPACK_IMPORTED_MODULE_4__.onEffectClick);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.container.removeEventListener("focusin", onInputFocusin);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.container.removeEventListener("focusout", onInputFocusout);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.hashInput.removeEventListener("keyup", _form_validation_js__WEBPACK_IMPORTED_MODULE_6__.onInputKeyup);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.submit.removeEventListener("click", _form_validation_js__WEBPACK_IMPORTED_MODULE_6__.onFormSubmitClick);
  document.removeEventListener("keydown", onEscKeydown);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.upload.closePreview.removeEventListener("click", onClosePreviewButtonClick);
};




/***/ }),

/***/ "./src/components/modal-handler.js":
/*!*****************************************!*\
  !*** ./src/components/modal-handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "handleSuccess": () => (/* binding */ handleSuccess)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.js */ "./src/components/templates.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _image_upload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-upload.js */ "./src/components/image-upload.js");






const handleError = (error) => {
  (0,_image_upload_js__WEBPACK_IMPORTED_MODULE_4__.setImageUploadDefaults)();
  renderErrorModal();
  const errorModal = document.querySelector(".error");
  const errorDescription = errorModal.querySelector(".error__description");
  errorDescription.textContent = error;

  const onErrorModalClick = (evt) => {
    evt.preventDefault();
    const closeModal = evt.target.closest(".error__button");
    const inner = evt.target.closest(".error__inner");

    if (evt.target !== inner) {
      errorModal.remove();
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
    }

    if (!closeModal) return;

    if (closeModal) {
      errorModal.remove();
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
    }

    errorModal.removeEventListener("click", onErrorModalClick);
    document.removeEventListener("keydown", onErrorModalKeydown);
  };

  const onErrorModalKeydown = (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      errorModal.remove();
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
      errorModal.removeEventListener("click", onErrorModalClick);
      document.removeEventListener("keydown", onErrorModalKeydown);
    }
  };

  errorModal.addEventListener("click", onErrorModalClick);
  document.addEventListener("keydown", onErrorModalKeydown);
};

const handleSuccess = () => {
  (0,_image_upload_js__WEBPACK_IMPORTED_MODULE_4__.setImageUploadDefaults)();
  renderSuccessModal();
  const successModal = document.querySelector(".success");
  const onSuccessModalClick = (evt) => {
    evt.preventDefault();
    const closeModal = evt.target.closest(".success__button");
    const inner = evt.target.closest(".success__inner");

    if (evt.target !== inner) {
      successModal.remove();
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
    }

    if (!closeModal) return;

    if (closeModal) {
      successModal.remove();
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
    }

    successModal.removeEventListener("click", onSuccessModalClick);
    document.removeEventListener("keydown", onSuccessModalKeydown);
  };

  const onSuccessModalKeydown = (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      successModal.remove();
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
      successModal.removeEventListener("click", onSuccessModalClick);
      document.removeEventListener("keydown", onSuccessModalKeydown);
    }
  };

  successModal.addEventListener("click", onSuccessModalClick);
  document.addEventListener("keydown", onSuccessModalKeydown);
};

const renderSuccessModal = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.main, [_templates_js__WEBPACK_IMPORTED_MODULE_1__.templates.successModal]);
};

const renderErrorModal = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.main, [_templates_js__WEBPACK_IMPORTED_MODULE_1__.templates.errorModal]);
};




/***/ }),

/***/ "./src/components/pictures-filter.js":
/*!*******************************************!*\
  !*** ./src/components/pictures-filter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "picturesFilter": () => (/* binding */ picturesFilter)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _response_handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-handler.js */ "./src/components/response-handler.js");





const picturesFilter = (picturesData) => {
  const onFilterClick = (evt) => {
    evt.preventDefault();

    const filterName = evt.target.getAttribute("id");
    const filterButton = evt.target.closest(".img-filters__button");
    const pictureElements = document.querySelectorAll(".picture");
    const data = picturesData.slice();

    if (!filterName && !filterButton) return;

    if (filterButton) {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.clearAllElementsClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.filter.buttons, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_ACTIVE);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addElementClass)(filterButton, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_ACTIVE);
    }

    const filterDefault = () => {
      const filteredByDefault = (0,_response_handler_js__WEBPACK_IMPORTED_MODULE_3__.createPictureElements)(data);

      removePictureElements(pictureElements);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.picturesContainer, filteredByDefault);
    };

    const filterRandom = () => {
      const getRandom = () => data[(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(data.length)];
      const random = new Array(data.length).fill("").map(getRandom);
      const randomUnique = Array.from(new Set(random)).slice(
        0,
        _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_RANDOM_MAX
      );
      const randomElements = (0,_response_handler_js__WEBPACK_IMPORTED_MODULE_3__.createPictureElements)(randomUnique);

      removePictureElements(pictureElements);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.picturesContainer, randomElements);
    };

    const filterDiscussed = () => {
      const getMostDiscussed = (a, b) => b.comments.length - a.comments.length;
      const descending = data.slice().sort(getMostDiscussed);
      const descendingElements = (0,_response_handler_js__WEBPACK_IMPORTED_MODULE_3__.createPictureElements)(descending);

      removePictureElements(pictureElements);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.elements.picturesContainer, descendingElements);
    };

    if (filterName) {
      switch (filterName) {
        case _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_DEFAULT:
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.debounce)(filterDefault, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.DEBOUNCE_INTERVAL)();
          break;
        case _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_RANDOM:
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.debounce)(filterRandom, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.DEBOUNCE_INTERVAL)();
          break;
        case _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_DISCUSSED:
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.debounce)(filterDiscussed, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.DEBOUNCE_INTERVAL)();
          break;
      }
    }
  };

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.filter.container.addEventListener("click", onFilterClick);
};

const removePictureElements = (elements) => {
  for (const element of elements) {
    element.remove();
  }
};




/***/ }),

/***/ "./src/components/preview.js":
/*!***********************************!*\
  !*** ./src/components/preview.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewHandler": () => (/* binding */ previewHandler)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.js */ "./src/components/comments.js");





const previewHandler = (picturesData) => {
  const onPictureClick = (evt) => {
    const picture = evt.target.closest(".picture");

    if (!picture) return;
    if (picture) {
      evt.preventDefault();

      const clickedPictureData = getPictureDataById(picture, picturesData);
      setPreviewInfo(clickedPictureData);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.fullsceenPicture, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
      _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.closePreview.addEventListener(
        "click",
        onPreviewCloseButtonClick
      );
      document.addEventListener("keydown", onDocumentKeydown);
    }
  };

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.picturesContainer.addEventListener("click", onPictureClick);

  return picturesData;
};

const getPictureDataById = (element, pictures) => {
  const id = parseInt(element.getAttribute("id"), 10);
  return pictures.find((picture) => picture.id === id);
};

const setPreviewInfo = (clickedPictureData) => {
  const { url, likes, comments, description } = clickedPictureData;
  const commentsStart = comments.length > 5 ? 5 : comments.length;

  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.preview.bigPicture.src = url;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.preview.caption.textContent = description;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.preview.commentsFrom.textContent = commentsStart;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.preview.commentsTo.textContent = comments.length;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.preview.likes.textContent = likes;

  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.commentsList);
  _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.toRender = comments.slice();
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__.renderComments)(_comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.toRender.splice(0, _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.STEP));

  if (comments.length <= _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.STEP) {
    (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__.hideCommentsLoaderButton)();
  } else {
    (0,_comments_js__WEBPACK_IMPORTED_MODULE_3__.showCommentsLoaderButton)();
  }
};

const onPreviewCloseButtonClick = (evt) => {
  evt.preventDefault();

  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.fullsceenPicture, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
  _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.toRender = [];
  _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.counter = 0;
  document.removeEventListener("keydown", onDocumentKeydown);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.picturesContainer.removeEventListener(
    "click",
    onPreviewCloseButtonClick
  );
};

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();

    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.addElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.fullsceenPicture, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.HIDDEN);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.body, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL);
    _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.toRender = [];
    _comments_js__WEBPACK_IMPORTED_MODULE_3__.commentsConfig.counter = 0;
    document.removeEventListener("keydown", onDocumentKeydown);
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.picturesContainer.removeEventListener(
      "click",
      onPreviewCloseButtonClick
    );
  }
};




/***/ }),

/***/ "./src/components/recieve-data.js":
/*!****************************************!*\
  !*** ./src/components/recieve-data.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "sendData": () => (/* binding */ sendData)
/* harmony export */ });
const loadData = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error(
    `Не удается зарузить фотографии. Перезагрузите страницу. ${response.status}`
  );
};

const sendData = async (url, body) => {
  const response = await fetch(url, { method: "POST", body });

  if (!response.ok) {
    throw new Error(
      `Rejected: Не удалось опубликовать фотографию ${response.status}`
    );
  }
};




/***/ }),

/***/ "./src/components/response-handler.js":
/*!********************************************!*\
  !*** ./src/components/response-handler.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPictureElements": () => (/* binding */ createPictureElements),
/* harmony export */   "responseSuccess": () => (/* binding */ responseSuccess),
/* harmony export */   "responseError": () => (/* binding */ responseError)
/* harmony export */ });
/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts.js */ "./src/components/consts.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates.js */ "./src/components/templates.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");





const responseSuccess = (response) => {
  const picturesData = response;
  const pictureElementBlocks = createPictureElements(picturesData);

  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.picturesContainer, pictureElementBlocks);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.filter.container, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.FILTER_HIDDEN);

  return picturesData;
};

const responseError = (errorMessage) => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.renderElements)(_dom_elements_js__WEBPACK_IMPORTED_MODULE_1__.elements.main, [_templates_js__WEBPACK_IMPORTED_MODULE_2__.templates.loadMessages]);
  const loadError = document.querySelector(".img-upload__message");
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.removeElementClass)(loadError, _consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.MODAL_LOAD);
  loadError.textContent = `${errorMessage}`;
};

const createPictureElements = (response) => {
  return response.map((item) => {
    const { id, url, likes, comments } = item;
    const pictureElement = _templates_js__WEBPACK_IMPORTED_MODULE_2__.templates.fetchPicture.cloneNode(true);

    pictureElement.setAttribute("id", id);
    pictureElement.querySelector(".picture__img").src = url;
    pictureElement.querySelector(".picture__likes").textContent = likes;
    pictureElement.querySelector(".picture__comments").textContent =
      comments.length;

    return pictureElement;
  });
};




/***/ }),

/***/ "./src/components/scale.js":
/*!*********************************!*\
  !*** ./src/components/scale.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onScaleClick": () => (/* binding */ onScaleClick),
/* harmony export */   "setDefaultScaleValue": () => (/* binding */ setDefaultScaleValue)
/* harmony export */ });
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements.js */ "./src/components/dom-elements.js");


const ScaleMap = {
  STEP: 25,
  MIN_VALUE: 25,
  MAX_VALUE: 100,
  DEFAULT_VALUE: 100,
  PROPORTION: 100,
};

const onScaleClick = (evt) => {
  evt.preventDefault();
  const buttons = {
    dec: evt.target.closest(".scale__control--smaller"),
    inc: evt.target.closest(".scale__control--bigger"),
  };

  if (!buttons.dec && !buttons.inc) return;

  if (buttons.dec) {
    setScaleValue(buttons.dec);
  }

  if (buttons.inc) {
    setScaleValue(buttons.inc);
  }
};

const setScaleValue = (control) => {
  const scaleValue = parseInt(_dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.value, 10);

  if (control.classList.contains("scale__control--smaller")) {
    const minValue =
      scaleValue > ScaleMap.MIN_VALUE
        ? scaleValue - ScaleMap.STEP
        : ScaleMap.MIN_VALUE;

    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.value = `${minValue}%`;
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.setAttribute("value", `${minValue}%`);

    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.upload.imagePreview.style.transform = `scale(${
      minValue / ScaleMap.PROPORTION
    })`;
  }

  if (control.classList.contains("scale__control--bigger")) {
    const maxValue =
      scaleValue < ScaleMap.MAX_VALUE
        ? scaleValue + ScaleMap.STEP
        : ScaleMap.MAX_VALUE;

    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.value = `${maxValue}%`;
    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.setAttribute("value", `${maxValue}%`);

    _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.upload.imagePreview.style.transform = `scale(${
      maxValue / ScaleMap.PROPORTION
    })`;
  }
};

const setDefaultScaleValue = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.value = `${ScaleMap.DEFAULT_VALUE}%`;
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.scale.valueInput.setAttribute("value", `${ScaleMap.DEFAULT_VALUE}%`);
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.upload.imagePreview.removeAttribute("style");
};




/***/ }),

/***/ "./src/components/templates.js":
/*!*************************************!*\
  !*** ./src/components/templates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templates": () => (/* binding */ templates)
/* harmony export */ });
const templates = {
  fetchPicture: document
    .querySelector("#picture")
    .content.querySelector(".picture"),
  errorModal: document.querySelector("#error").content.querySelector(".error"),
  successModal: document
    .querySelector("#success")
    .content.querySelector(".success"),
  loadMessages: document
    .querySelector("#messages")
    .content.querySelector(".img-upload__message"),
};




/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderElements": () => (/* binding */ renderElements),
/* harmony export */   "clearContainer": () => (/* binding */ clearContainer),
/* harmony export */   "removeElementClass": () => (/* binding */ removeElementClass),
/* harmony export */   "addElementClass": () => (/* binding */ addElementClass),
/* harmony export */   "clearAllElementsClass": () => (/* binding */ clearAllElementsClass),
/* harmony export */   "renderAdjacent": () => (/* binding */ renderAdjacent),
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger),
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
const renderElements = (where, elements) => {
  where.append(...elements);
};

const renderAdjacent = (container, elements, where = "beforeend") => {
  container.insertAdjacentHTML(where, elements);
};

const clearContainer = (container) => {
  container.innerHTML = "";
};

const removeElementClass = (element, className) => {
  element.classList.remove(className);
};

const addElementClass = (element, className) => {
  element.classList.add(className);
};

const clearAllElementsClass = (elements, className) => {
  for (const element of elements) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }
};

const getRandomInteger = (arrayLength) => {
  return Math.floor(Math.random() * 0.5 * arrayLength);
};

const debounce = (fn, debounceInterval) => {
  let lastTimeout;

  return () => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(fn, debounceInterval);
  };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_consts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/consts.js */ "./src/components/consts.js");
/* harmony import */ var _components_response_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/response-handler.js */ "./src/components/response-handler.js");
/* harmony import */ var _components_recieve_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/recieve-data.js */ "./src/components/recieve-data.js");
/* harmony import */ var _components_preview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/preview.js */ "./src/components/preview.js");
/* harmony import */ var _components_pictures_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pictures-filter.js */ "./src/components/pictures-filter.js");
/* harmony import */ var _components_image_upload_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/image-upload.js */ "./src/components/image-upload.js");







(0,_components_recieve_data_js__WEBPACK_IMPORTED_MODULE_2__.loadData)(_components_consts_js__WEBPACK_IMPORTED_MODULE_0__.CONSTS.LOAD_URL)
  .then(_components_response_handler_js__WEBPACK_IMPORTED_MODULE_1__.responseSuccess, _components_response_handler_js__WEBPACK_IMPORTED_MODULE_1__.responseError)
  .then(_components_preview_js__WEBPACK_IMPORTED_MODULE_3__.previewHandler)
  .then(_components_pictures_filter_js__WEBPACK_IMPORTED_MODULE_4__.picturesFilter)
  .then(_components_image_upload_js__WEBPACK_IMPORTED_MODULE_5__.uploadHandler);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map