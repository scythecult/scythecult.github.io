/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/index/components/filter.js":
/*!**********************************************!*\
  !*** ./source/js/index/components/filter.js ***!
  \**********************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filter = function filter(targetContainer) {
  var form = document.querySelector(".filter-form");
  var targetElements = targetContainer.children;

  var findElement = function findElement(searchTerm) {
    if (searchTerm.length >= 3 || searchTerm.length === 0) {
      var _iterator = _createForOfIteratorHelper(targetElements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var target = _step.value;

          if (target.dataset.title.includes(searchTerm)) {
            target.classList.remove("latest-devs__card--hidden");
          } else {
            target.classList.add("latest-devs__card--hidden");
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };

  var onFilterKeyup = function onFilterKeyup(evt) {
    var searchTerm = evt.target.value.toLowerCase().trim();
    findElement(searchTerm, targetElements);
  };

  form.addEventListener("keyup", onFilterKeyup);
};



/***/ }),

/***/ "./source/js/index/components/house-card.js":
/*!**************************************************!*\
  !*** ./source/js/index/components/house-card.js ***!
  \**************************************************/
/*! exports provided: renderCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCards", function() { return renderCards; });
var Pictures = ["img/house-1", "img/house-2", "img/house-3"];
var Status = {
  IndependentLiving: {
    className: "house-card__lable--ind",
    text: "Independent Living"
  },
  SupportAvailable: {
    className: "house-card__lable--sup",
    text: "Restaurant & Support available"
  }
};

var getRandomElement = function getRandomElement() {
  var rand = 0 - 0.5 + Math.random() * (Pictures.length - 1 - 0 + 1);
  return Math.abs(Math.round(rand));
};

var createHouseCardMarkup = function createHouseCardMarkup(houseData) {
  var id = houseData.id,
      title = houseData.title,
      address = houseData.address,
      type = houseData.type,
      price = houseData.price;
  var picture = Pictures[getRandomElement()];
  var status = Status[type];
  return "\n  <li class=\"latest-devs__card house-card\" data-title=\"".concat(title.toLowerCase(), "\">\n  <a class=\"house-card__img-link\" href=\"/details/").concat(id, "\">\n  <picture>\n    <source type=\"image/webp\" srcset=\"").concat(picture, ".webp 1x, ").concat(picture, "@2x.webp 2x\">\n    <img class=\"house-card__img\" src=\"").concat(picture, ".jpg\" srcset=\"").concat(picture, "@2x.jpg 2x\" width=\"377\" height=\"227\" alt=\"Image of ").concat(title, "\">\n  </picture>\n  </a>\n  <p class=\"house-card__label ").concat(status.className, "\">").concat(status.text, "</p>\n  <div class=\"house-card__desc page-text\">\n    <h3 class=\"house-card__title page-subtitle\">").concat(title, "</h3>\n    <address class=\"house-card__address\">").concat(address, "</address>\n    <p class=\"house-card__sale-info\">New Properties for Sale from <b class=\"house-card__price\">\xA3").concat(price, "</b>\n    </p>\n    <p class=\"house-card__avail\">Shared Ownership Available</p>\n  </div>\n</li>\n  ");
};

var generateCardElements = function generateCardElements(cardData, template) {
  return cardData.map(function (it) {
    return template(it);
  });
};

var renderCards = function renderCards(houseData, container) {
  var cards = generateCardElements(houseData, createHouseCardMarkup).join("\n");
  container.insertAdjacentHTML("beforeend", cards);
};



/***/ }),

/***/ "./source/js/index/main.js":
/*!*********************************!*\
  !*** ./source/js/index/main.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_house_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/house-card */ "./source/js/index/components/house-card.js");
/* harmony import */ var _components_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter */ "./source/js/index/components/filter.js");


var URL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";
var houseList = document.querySelector(".latest-devs__houses");

var handleResponse = function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
};

var response = fetch(URL, {
  method: "GET",
  credentials: "same-origin"
});
response.then(handleResponse).then(function (houseData) {
  Object(_components_house_card__WEBPACK_IMPORTED_MODULE_0__["renderCards"])(houseData, houseList);
}).then(function () {
  return Object(_components_filter__WEBPACK_IMPORTED_MODULE_1__["filter"])(houseList);
});

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************!*\
  !*** multi ./source/js/index/main.js ./source/js/index/components/filter.js ./source/js/index/components/house-card.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\_webdev\_test-tasks\projects\fuse8\source\js\index\main.js */"./source/js/index/main.js");
__webpack_require__(/*! D:\_webdev\_test-tasks\projects\fuse8\source\js\index\components\filter.js */"./source/js/index/components/filter.js");
module.exports = __webpack_require__(/*! D:\_webdev\_test-tasks\projects\fuse8\source\js\index\components\house-card.js */"./source/js/index/components/house-card.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map