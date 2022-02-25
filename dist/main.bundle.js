/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./src/templates.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar state = {\n  input: ['dog', 'cat'],\n  images: []\n};\n\nvar template = function template(currentState) {\n  return \"\\n  \".concat((0,_templates__WEBPACK_IMPORTED_MODULE_0__.templateHeader)(), \"\\n  \").concat((0,_templates__WEBPACK_IMPORTED_MODULE_0__.templateSearchBar)(currentState), \"\\n  \").concat((0,_templates__WEBPACK_IMPORTED_MODULE_0__.imagesTemplate)(currentState), \"\\n\");\n};\n\nvar update = function update(newState) {\n  state = _objectSpread(_objectSpread({}, state), newState);\n  window.dispatchEvent(new Event('statechange'));\n};\n\nvar getImages = function getImages(query) {\n  return fetch(\"https://api.unsplash.com/search/photos?client_id=\".concat(\"v_4mcQahaN0T95u-el5EmlDWSq1B16zJyYjkEtRYwm4\", \"&query=\").concat(query)).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return json.results.map(function (obj) {\n      return obj.urls.small;\n    });\n  }).then(function (imageList) {\n    return update({\n      images: imageList\n    });\n  });\n};\n\nvar render = function render(htmlString, el) {\n  // eslint-disable-next-line no-param-reassign\n  el.innerHTML = htmlString;\n  document.querySelector('input').addEventListener('keydown', function (event) {\n    if (event.key === 'Enter') {\n      var input = event.target.value;\n      getImages(input);\n    }\n  });\n};\n\nwindow.addEventListener('statechange', function () {\n  render(template(state), document.querySelector('#root'));\n});\nrender(template(state), document.querySelector('#root'));\n\n//# sourceURL=webpack://ciclgallery/./src/index.js?");

/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"templateHeader\": () => (/* binding */ templateHeader),\n/* harmony export */   \"templateSearchBar\": () => (/* binding */ templateSearchBar),\n/* harmony export */   \"imagesTemplate\": () => (/* binding */ imagesTemplate)\n/* harmony export */ });\nvar templateHeader = function templateHeader() {\n  return \"\\n  <header class=\\\"header\\\">\\n    <h1 class=\\\"header__title\\\">LOGO</h1>\\n  </header>\";\n};\nvar templateSearchBar = function templateSearchBar(_ref) {\n  var input = _ref.input;\n  var search = \"\\n  <section class=\\\"search\\\">\\n    <input class=\\\"search__input\\\" type=\\\"text\\\" placeholder=\\\"search\\\">\\n    <ul class=\\\"search__list\\\">\";\n  input.forEach(function (item) {\n    search += \"\\n      <li class=\\\"search__item\\\">\".concat(item, \"</li>\");\n  });\n  search += \"\\n    </ul>\\n  </section>\";\n  return search;\n};\nvar imagesTemplate = function imagesTemplate(_ref2) {\n  var images = _ref2.images;\n  var imgs = \"\\n  <section class=\\\"images\\\">\\n    <ul class=\\\"images__list\\\">\";\n  images.forEach(function (item) {\n    imgs += \"\\n      <li class=\\\"images__item\\\"><img class=\\\"images__el\\\" src=\\\"\".concat(item, \"\\\"></li>\");\n  });\n  imgs += \"\\n    </ul>\\n  </section>\";\n  return imgs;\n};\n\n//# sourceURL=webpack://ciclgallery/./src/templates.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;