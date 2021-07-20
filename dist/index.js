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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar app = express();\r\nvar port = 3000;\r\nvar initialState = {\r\n    cart: [],\r\n    products: [\r\n        {\r\n            'id': '1',\r\n            'image': 'https://arepa.s3.amazonaws.com/camiseta.png',\r\n            'title': 'Camiseta',\r\n            'price': 25,\r\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\r\n        },\r\n        {\r\n            'id': '3',\r\n            'image': 'https://arepa.s3.amazonaws.com/mug.png',\r\n            'title': 'Mug',\r\n            'price': 10,\r\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\r\n        },\r\n        {\r\n            'id': '4',\r\n            'image': 'https://arepa.s3.amazonaws.com/pin.png',\r\n            'title': 'Pin',\r\n            'price': 4,\r\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\r\n        },\r\n        {\r\n            'id': '5',\r\n            'image': 'https://arepa.s3.amazonaws.com/stickers1.png',\r\n            'title': 'Stickers',\r\n            'price': 2,\r\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\r\n        },\r\n        {\r\n            'id': '6',\r\n            'image': 'https://arepa.s3.amazonaws.com/stickers2.png',\r\n            'title': 'Stickers',\r\n            'price': 2,\r\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\r\n        },\r\n        {\r\n            'id': '7',\r\n            'image': 'https://arepa.s3.amazonaws.com/hoodie.png',\r\n            'title': 'Hoodie',\r\n            'price': 35,\r\n            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\r\n        },\r\n    ],\r\n};\r\napp.get(\"/\", function (req, res) {\r\n    res.send('Hello TypeScript');\r\n});\r\napp.get('/api/v1', function (req, res) {\r\n    res.json(initialState);\r\n});\r\napp.listen(port, function () {\r\n    console.log(\"App Listening on port: \" + port);\r\n});\r\n\n\n//# sourceURL=webpack://webpack-practical-course/./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;