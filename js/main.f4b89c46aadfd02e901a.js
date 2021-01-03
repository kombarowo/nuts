/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/_sprite.svg":
/*!********************************!*\
  !*** ./src/assets/_sprite.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "_sprite",
  "use": "_sprite-usage",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" id=\"_sprite\">\n  <symbol id=\"_sprite_cross\" viewBox=\"0 0 123.05 123.05\">\n    <path d=\"M121.325,10.925l-8.5-8.399c-2.3-2.3-6.1-2.3-8.5,0l-42.4,42.399L18.726,1.726c-2.301-2.301-6.101-2.301-8.5,0l-8.5,8.5\n\t\tc-2.301,2.3-2.301,6.1,0,8.5l43.1,43.1l-42.3,42.5c-2.3,2.3-2.3,6.1,0,8.5l8.5,8.5c2.3,2.3,6.1,2.3,8.5,0l42.399-42.4l42.4,42.4\n\t\tc2.3,2.3,6.1,2.3,8.5,0l8.5-8.5c2.3-2.3,2.3-6.1,0-8.5l-42.5-42.4l42.4-42.399C123.625,17.125,123.625,13.325,121.325,10.925z\" />\n  </symbol>\n  <symbol id=\"_sprite_arrow\" viewBox=\"0 0 451.847 451.847\">\n    <path d=\"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751\n\t\tc12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0\n\t\tc12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z\" />\n  </symbol>\n  <symbol id=\"_sprite_facebook\" viewBox=\"0 0 12 21\">\n    <path d=\"M3.85156 20.9839V12.0386H0.84375V8.48389H3.85156V5.67139C3.85156 4.18701 4.26823 3.04118 5.10156 2.23389C5.9349 1.40055 7.04167 0.983887 8.42188 0.983887C9.54167 0.983887 10.4531 1.03597 11.1562 1.14014V4.3042H9.28125C8.57812 4.3042 8.09635 4.46045 7.83594 4.77295C7.6276 5.03337 7.52344 5.45003 7.52344 6.02295V8.48389H10.8438L10.375 12.0386H7.52344V20.9839H3.85156Z\" />\n  </symbol>\n  <symbol id=\"_sprite_twitter\" viewBox=\"0 0 20 18\">\n    <path d=\"M17.9297 4.92139C17.9557 5.02555 17.9688 5.19482 17.9688 5.4292C17.9688 7.3042 17.513 9.1141 16.6016 10.8589C15.6641 12.7078 14.349 14.1792 12.6562 15.2729C10.8073 16.4969 8.6849 17.1089 6.28906 17.1089C3.9974 17.1089 1.90104 16.4969 0 15.2729C0.286458 15.299 0.611979 15.312 0.976562 15.312C2.8776 15.312 4.58333 14.7261 6.09375 13.5542C5.18229 13.5542 4.375 13.2938 3.67188 12.7729C2.99479 12.2261 2.52604 11.549 2.26562 10.7417C2.52604 10.7677 2.77344 10.7808 3.00781 10.7808C3.3724 10.7808 3.73698 10.7417 4.10156 10.6636C3.16406 10.4552 2.38281 9.97347 1.75781 9.21826C1.13281 8.46305 0.820312 7.60368 0.820312 6.64014V6.56201C1.39323 6.90055 2.00521 7.08285 2.65625 7.10889C2.10938 6.71826 1.66667 6.22347 1.32812 5.62451C0.989583 5.02555 0.820312 4.37451 0.820312 3.67139C0.820312 2.94222 1.01562 2.25212 1.40625 1.60107C2.42188 2.87712 3.65885 3.89274 5.11719 4.64795C6.60156 5.40316 8.17708 5.81982 9.84375 5.89795C9.79167 5.58545 9.76562 5.27295 9.76562 4.96045C9.76562 4.23128 9.94792 3.5542 10.3125 2.9292C10.6771 2.27816 11.1719 1.77035 11.7969 1.40576C12.4219 1.04118 13.099 0.858887 13.8281 0.858887C14.4271 0.858887 14.974 0.976074 15.4688 1.21045C15.9896 1.44482 16.4453 1.75732 16.8359 2.14795C17.7734 1.96566 18.6458 1.64014 19.4531 1.17139C19.1406 2.13493 18.5417 2.89014 17.6562 3.43701C18.4375 3.33285 19.2188 3.11149 20 2.77295C19.4271 3.60628 18.737 4.32243 17.9297 4.92139Z\" />\n  </symbol>\n  <symbol id=\"_sprite_instagram\" viewBox=\"0 0 18 18\">\n    <path d=\"M9 4.4917C8.19271 4.4917 7.4375 4.70003 6.73438 5.1167C6.05729 5.50732 5.51042 6.0542 5.09375 6.75732C4.70312 7.43441 4.50781 8.1766 4.50781 8.98389C4.50781 9.79118 4.70312 10.5464 5.09375 11.2495C5.51042 11.9266 6.05729 12.4735 6.73438 12.8901C7.4375 13.2808 8.19271 13.4761 9 13.4761C9.80729 13.4761 10.5495 13.2808 11.2266 12.8901C11.9297 12.4735 12.4766 11.9266 12.8672 11.2495C13.2839 10.5464 13.4922 9.79118 13.4922 8.98389C13.4922 8.1766 13.2839 7.43441 12.8672 6.75732C12.4766 6.0542 11.9297 5.50732 11.2266 5.1167C10.5495 4.70003 9.80729 4.4917 9 4.4917ZM9 11.9136C8.19271 11.9136 7.5026 11.6271 6.92969 11.0542C6.35677 10.4813 6.07031 9.79118 6.07031 8.98389C6.07031 8.1766 6.35677 7.48649 6.92969 6.91357C7.5026 6.34066 8.19271 6.0542 9 6.0542C9.80729 6.0542 10.4974 6.34066 11.0703 6.91357C11.6432 7.48649 11.9297 8.1766 11.9297 8.98389C11.9297 9.79118 11.6432 10.4813 11.0703 11.0542C10.4974 11.6271 9.80729 11.9136 9 11.9136ZM14.7422 4.29639C14.7161 4.58285 14.599 4.83024 14.3906 5.03857C14.2083 5.24691 13.974 5.35107 13.6875 5.35107C13.401 5.35107 13.1536 5.24691 12.9453 5.03857C12.737 4.83024 12.6328 4.58285 12.6328 4.29639C12.6328 4.00993 12.737 3.76253 12.9453 3.5542C13.1536 3.34587 13.401 3.2417 13.6875 3.2417C13.974 3.2417 14.2214 3.34587 14.4297 3.5542C14.638 3.76253 14.7422 4.00993 14.7422 4.29639ZM17.7109 5.35107C17.6589 4.59587 17.5417 3.94482 17.3594 3.39795C17.125 2.74691 16.7604 2.18701 16.2656 1.71826C15.7969 1.22347 15.237 0.858887 14.5859 0.624512C14.0391 0.44222 13.388 0.338053 12.6328 0.312012C11.9036 0.259928 10.6927 0.233887 9 0.233887C7.30729 0.233887 6.08333 0.259928 5.32812 0.312012C4.59896 0.338053 3.96094 0.44222 3.41406 0.624512C2.76302 0.858887 2.1901 1.22347 1.69531 1.71826C1.22656 2.18701 0.875 2.74691 0.640625 3.39795C0.458333 3.94482 0.341146 4.59587 0.289062 5.35107C0.263021 6.08024 0.25 7.29118 0.25 8.98389C0.25 10.6766 0.263021 11.9006 0.289062 12.6558C0.341146 13.3849 0.458333 14.0229 0.640625 14.5698C0.875 15.2209 1.22656 15.7938 1.69531 16.2886C2.1901 16.7573 2.76302 17.0959 3.41406 17.3042C3.96094 17.5125 4.59896 17.6297 5.32812 17.6558C6.08333 17.7078 7.30729 17.7339 9 17.7339C10.6927 17.7339 11.9036 17.7078 12.6328 17.6558C13.388 17.6297 14.0391 17.5256 14.5859 17.3433C15.237 17.1089 15.7969 16.7573 16.2656 16.2886C16.7604 15.7938 17.125 15.2209 17.3594 14.5698C17.5417 14.0229 17.6458 13.3849 17.6719 12.6558C17.724 11.9006 17.75 10.6766 17.75 8.98389C17.75 7.29118 17.737 6.08024 17.7109 5.35107ZM15.8359 14.1401C15.5234 14.9214 14.9635 15.4813 14.1562 15.8198C13.7396 15.9761 13.0365 16.0802 12.0469 16.1323C11.5 16.1584 10.6927 16.1714 9.625 16.1714H8.375C7.33333 16.1714 6.52604 16.1584 5.95312 16.1323C4.98958 16.0802 4.28646 15.9761 3.84375 15.8198C3.0625 15.5073 2.5026 14.9474 2.16406 14.1401C2.00781 13.6974 1.90365 12.9943 1.85156 12.0308C1.82552 11.4578 1.8125 10.6506 1.8125 9.60889V8.35889C1.8125 7.31722 1.82552 6.50993 1.85156 5.93701C1.90365 4.94743 2.00781 4.2443 2.16406 3.82764C2.47656 3.02035 3.03646 2.46045 3.84375 2.14795C4.28646 1.9917 4.98958 1.88753 5.95312 1.83545C6.52604 1.80941 7.33333 1.79639 8.375 1.79639H9.625C10.6667 1.79639 11.474 1.80941 12.0469 1.83545C13.0365 1.88753 13.7396 1.9917 14.1562 2.14795C14.9635 2.46045 15.5234 3.02035 15.8359 3.82764C15.9922 4.2443 16.0964 4.94743 16.1484 5.93701C16.1745 6.48389 16.1875 7.29118 16.1875 8.35889V9.60889C16.1875 10.6506 16.1745 11.4578 16.1484 12.0308C16.0964 12.9943 15.9922 13.6974 15.8359 14.1401Z\" />\n  </symbol>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sprite_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/_sprite.svg */ "./src/assets/_sprite.svg");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_scrollAnimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollAnimate */ "./src/js/modules/scrollAnimate.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");




window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_scrollAnimate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  new _modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"]('.slider', {
    slideClass: 'slider__slide',
    wrapperClass: 'slider__wrapper',
    prevBtnClass: 'preview__btn--prev',
    nextBtnClass: 'preview__btn--next',
    pagination: '.pagination',
    autoplay: 8
  });
});

/***/ }),

/***/ "./src/js/modules/scrollAnimate.js":
/*!*****************************************!*\
  !*** ./src/js/modules/scrollAnimate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollAnimate; });
function scrollAnimate() {
  var animItems = document.querySelectorAll('[data-anim]');

  if (animItems.length > 0) {
    var anim = function anim() {
      var animStart = 4;
      animItems.forEach(function (item) {
        var animClass = item.dataset.anim,
            animRepeat = item.dataset.animRepeat,
            animDelay = item.dataset.animDelay,
            itemHeight = item.offsetHeight,
            itemOffset = calcOffset(item);
        var animStartPoint;

        if (itemHeight > window.innerHeight) {
          animStartPoint = window.innerHeight - window.innerHeight / animStart;
        } else {
          animStartPoint = window.innerHeight - itemHeight / animStart;
        }

        if (pageYOffset > itemOffset.top - animStartPoint && pageYOffset < itemOffset.top + itemHeight) {
          item.classList.add(animClass);
          item.style.animationDelay = "".concat(animDelay);
        } else {
          if (animRepeat !== 'once') {
            item.classList.remove(animClass);
            item.style.animationDelay = "0s";
          }
        }
      });
    };

    var calcOffset = function calcOffset(elem) {
      var coords = elem.getBoundingClientRect();
      var scrollY = pageYOffset || document.documentElement.scrollTop;
      var scrollX = pageXOffset || document.documentElement.scrollWidth;
      return {
        top: coords.top + scrollY,
        left: coords.left + scrollX
      };
    };

    window.addEventListener('scroll', anim);
    setTimeout(function () {
      anim();
    }, 500);
  }
}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider(container, options) {
    _classCallCheck(this, Slider);

    //DOM elements
    this.$el = document.querySelector(container);
    this.$wrapper = document.querySelector('.' + options.wrapperClass);
    this.$nextBtn = document.querySelector('.' + options.nextBtnClass);
    this.$prevBtn = document.querySelector('.' + options.prevBtnClass);
    this.$pagination = document.querySelector(options.pagination); //Slide props

    this.slideWidth = this.$el.querySelector('.' + options.slideClass).getBoundingClientRect().width;
    this.slidesCount = this.$wrapper.children.length;
    this.currentSlidesCount = Math.ceil(this.$wrapper.getBoundingClientRect().width / this.slideWidth); //Scroll & Drag

    this.currentScroll = 0;
    this.maxScroll = this.slideWidth * this.slidesCount - this.$wrapper.offsetWidth;
    this.pressed = false;
    this.startX; //Autoplay

    this.autoplay = options.autoplay * 1000;
    this.autoplayTimer; //Init

    this.init();
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      var _this = this;

      //Binds
      this.switchSlide = this.switchSlide.bind(this);
      this.onDragStart = this.onDragStart.bind(this);
      this.onDragEnter = this.onDragEnter.bind(this);
      this.onDragMove = this.onDragMove.bind(this);
      this.onDragEnd = this.onDragEnd.bind(this); //Btns

      this.$nextBtn.addEventListener('click', function () {
        return _this.switchSlide(-1);
      });
      this.$prevBtn.addEventListener('click', function () {
        return _this.switchSlide(1);
      }); //Slider

      this.$el.addEventListener('mouseenter', this.onDragEnter);
      this.$el.addEventListener('mousedown', this.onDragStart);
      this.$el.addEventListener('touchstart', this.onDragStart);
      this.$el.addEventListener('mousemove', this.onDragMove);
      this.$el.addEventListener('touchmove', this.onDragMove);
      this.$el.addEventListener('mouseup', this.onDragEnd);
      this.$el.addEventListener('touchend', this.onDragEnd);
      this.$el.addEventListener('mouseleave', function () {
        return _this.setAutoplay(_this.autoplay);
      }); //Pagination

      this.setPagination(this.currentSlidesCount); //Autoplay

      this.setAutoplay(this.autoplay);
    } //Drag methods

  }, {
    key: "onDragEnter",
    value: function onDragEnter() {
      this.$el.style.cursor = 'grab';
      this.stopAutoplay();
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(e) {
      if (!e.touches) {
        this.$el.style.cursor = 'grabbing';
        this.startX = e.pageX - this.$el.getBoundingClientRect().left;
      } else {
        //Touch devices
        this.startX = e.changedTouches[0].clientX - this.$el.getBoundingClientRect().left;
      }

      this.pressed = true;
    }
  }, {
    key: "onDragMove",
    value: function onDragMove(e) {
      e.preventDefault();
      var dragSpeed = 100;
      if (!this.pressed) return;
      var range;

      if (!e.touches) {
        range = e.pageX - this.$el.getBoundingClientRect().left - this.startX;
      } else {
        //Touch devices
        range = e.changedTouches[0].clientX - this.$el.getBoundingClientRect().left - this.startX;
      }

      var countRange = Math.round(range / (this.slideWidth - dragSpeed));

      if (Math.abs(countRange) >= 1) {
        this.switchSlide(countRange);
        this.pressed = false;
        return;
      }
    }
  }, {
    key: "onDragEnd",
    value: function onDragEnd() {
      this.pressed = false;
      this.$el.style.cursor = 'grab';
    } //Slide methods

  }, {
    key: "switchSlide",
    value: function switchSlide(i) {
      var scroll = i * this.slideWidth; //If the last slide

      if (Math.abs(this.currentScroll + scroll + 1) >= this.maxScroll) {
        this.currentSlidesCount = Math.ceil(this.$wrapper.getBoundingClientRect().width / this.slideWidth);
        this.$wrapper.style.left = "".concat(0, "px");
        this.setPagination(this.currentSlidesCount);
        this.currentScroll = 0;
        return;
      } //If the first slide


      if (this.currentScroll + scroll - 1 > 0) {
        this.currentSlidesCount = this.slidesCount;
        this.$wrapper.style.left = "-".concat(this.maxScroll, "px");
        this.setPagination(this.currentSlidesCount);
        this.currentScroll = -this.maxScroll;
        return;
      }

      this.currentScroll += scroll;
      this.currentSlidesCount -= i;
      this.setScroll(this.currentScroll);
      this.setPagination(this.currentSlidesCount);
    }
  }, {
    key: "toNextSlide",
    value: function toNextSlide() {
      this.switchSlide(-1);
    } //Scroll & pagination methods

  }, {
    key: "setScroll",
    value: function setScroll(scroll) {
      this.$wrapper.style.left = "".concat(scroll, "px");
    }
  }, {
    key: "setPagination",
    value: function setPagination(currentSlideIndex) {
      var paginationInner = this.$pagination.children[0];
      paginationInner.style.width = currentSlideIndex / this.slidesCount * 100 + '%';
    } //Autoplay methods

  }, {
    key: "setAutoplay",
    value: function setAutoplay(sec) {
      this.toNextSlide = this.toNextSlide.bind(this);
      this.autoplayTimer = setInterval(this.toNextSlide, sec);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      clearInterval(this.autoplayTimer);
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi @babel/polyfill ./src/js/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.f4b89c46aadfd02e901a.js.map