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

/***/ "./source/js/components/toggle-temperature.js":
/*!****************************************************!*\
  !*** ./source/js/components/toggle-temperature.js ***!
  \****************************************************/
/*! exports provided: onCheckboxClick, onCheckboxKeydown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCheckboxClick", function() { return onCheckboxClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCheckboxKeydown", function() { return onCheckboxKeydown; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./source/js/components/utils.js");


var onCheckboxClick = function onCheckboxClick() {
  toggleCheckedAttribute();
  toggleActiveClass();
};

var onCheckboxKeydown = function onCheckboxKeydown(evt) {
  if (evt.key === " ") {
    evt.preventDefault();
    toggleCheckedAttribute();
    toggleActiveClass();
  }
};

var toggleActiveClass = function toggleActiveClass() {
  _utils_js__WEBPACK_IMPORTED_MODULE_0__["elements"].tempContainer.classList.toggle(_utils_js__WEBPACK_IMPORTED_MODULE_0__["CLASSES"].ACTIVE);
};

var toggleCheckedAttribute = function toggleCheckedAttribute() {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["elements"].tempCheckbox.hasAttribute("checked")) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["elements"].tempCheckbox.removeAttribute("checked");
  } else {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["elements"].tempCheckbox.setAttribute("checked", "");
  }
};



/***/ }),

/***/ "./source/js/components/utils.js":
/*!***************************************!*\
  !*** ./source/js/components/utils.js ***!
  \***************************************/
/*! exports provided: elements, CLASSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return elements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASSES", function() { return CLASSES; });
var elements = {
  tempContainer: document.querySelector(".cargo__temp"),
  tempLabel: document.querySelector(".cargo__check-label"),
  tempCheckbox: document.querySelector(".cargo__check")
};
var CLASSES = {
  ACTIVE: "temp-active"
};


/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/utils.js */ "./source/js/components/utils.js");
/* harmony import */ var _components_toggle_temperature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/toggle-temperature.js */ "./source/js/components/toggle-temperature.js");


_components_utils_js__WEBPACK_IMPORTED_MODULE_0__["elements"].tempLabel.addEventListener("click", _components_toggle_temperature_js__WEBPACK_IMPORTED_MODULE_1__["onCheckboxClick"]);
_components_utils_js__WEBPACK_IMPORTED_MODULE_0__["elements"].tempContainer.addEventListener("keydown", _components_toggle_temperature_js__WEBPACK_IMPORTED_MODULE_1__["onCheckboxKeydown"]);

/***/ }),

/***/ 0:
/*!**************************************************************************************************************!*\
  !*** multi ./source/js/main.js ./source/js/components/toggle-temperature.js ./source/js/components/utils.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\_webdev\_test-tasks\projects\dot-dot\source\js\main.js */"./source/js/main.js");
__webpack_require__(/*! D:\_webdev\_test-tasks\projects\dot-dot\source\js\components\toggle-temperature.js */"./source/js/components/toggle-temperature.js");
module.exports = __webpack_require__(/*! D:\_webdev\_test-tasks\projects\dot-dot\source\js\components\utils.js */"./source/js/components/utils.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map