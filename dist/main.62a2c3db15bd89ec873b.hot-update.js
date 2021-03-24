/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar scrollWindow = function scrollWindow() {\n  var topMenu = document.querySelector('.top-menu'),\n      headerMain = document.querySelector('.header-main'),\n      top = document.getElementById('totop');\n  document.getElementById('totop').style.display = 'none';\n  window.addEventListener('scroll', function (event) {\n    if (topMenu.offsetTop < window.scrollY && window.screen.width < 768) {\n      topMenu.classList.add('sticky');\n    } else {\n      topMenu.classList.remove('sticky');\n    }\n\n    var height = document.documentElement.scrollTop;\n    var header = document.querySelector('.header-main').offsetHeight;\n\n    if (height < header) {\n      top.style.display = 'none';\n    } else {\n      top.style.display = 'block';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollWindow);\n\n//# sourceURL=webpack://diplom/./src/modules/scroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("34307485f02f45b21f59")
/******/ })();
/******/ 
/******/ }
);