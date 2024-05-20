/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/resources/static/script/globalScript.ts":
/*!**********************************************************!*\
  !*** ./src/main/resources/static/script/globalScript.ts ***!
  \**********************************************************/
/***/ (() => {

eval("// Disable all img from being dragged\nconst images = document.getElementsByTagName('img');\nfor (let image of Array.from(images)) {\n    image.draggable = false;\n}\nconst hamburgerListItems = document.getElementsByClassName('hamburger-list-items');\nconst hamburgerButton = document.getElementById('hamburger-menu-icon');\nfunction toggleListItemsView() {\n    Array.from(hamburgerListItems).forEach((element) => {\n        if (element.style.display === 'none') {\n            element.style.display = 'block';\n        }\n        else {\n            element.style.display = 'none';\n        }\n    });\n}\nhamburgerButton.addEventListener('click', toggleListItemsView);\n\n\n//# sourceURL=webpack://sigwarth-software-website/./src/main/resources/static/script/globalScript.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main/resources/static/script/globalScript.ts"]();
/******/ 	
/******/ })()
;