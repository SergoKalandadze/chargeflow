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

/***/ "./constants/config.js":
/*!*****************************!*\
  !*** ./constants/config.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const dotenv = __webpack_require__(/*! dotenv-flow */ \"dotenv-flow\")\r\ndotenv.config({\r\n    silent: true\r\n})\r\n\r\nmodule.exports = {\r\n    portMain: \"3000\",\r\n    portMainSSL: \"3001\",\r\n    portSocket: \"5000\",\r\n    portSocketSSL: \"5001\",\r\n    mongoURL: \"mongodb://0.0.0.0:27017\",\r\n    portRedis: \"6379\",\r\n    redisURL: \"127.0.0.1\",\r\n\r\n}\r\n\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./constants/config.js?");

/***/ }),

/***/ "./controllers/purchase.ctrl.js":
/*!**************************************!*\
  !*** ./controllers/purchase.ctrl.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\nconst purchaseHlp = __webpack_require__(/*! ../helpers/purchase.hlp */ \"./helpers/purchase.hlp.js\")\r\n\r\nconst purchase = async (req, res) => {\r\n\r\n    try {\r\n\r\n        const userId = req.body[\"userId\"]\r\n\r\n        const skus = req.body[\"skus\"] \r\n\r\n        if(!userId) {\r\n            return res.status(400).json({success: false, message: \"UserId not provided\"})\r\n        }\r\n\r\n        if(!skus || skus !== typeof Array || skus.length === 0) {\r\n            return res.status(400).json({success: false, message: \"SKUs of items not provided\"})\r\n        }\r\n\r\n        const timestamp = req.body[\"timestamp\"] && req.body[\"timestamp\"] !== \"null\" ? req.body[\"timestamp\"] : Date.now()\r\n\r\n        const result = await purchaseHlp.purchase(userId, skus, timestamp)\r\n\r\n        if(result) {\r\n\r\n            return res.status(200).json(result)\r\n\r\n        }\r\n\r\n        return res.status(500).json({success: false, message: \"Cannot create an order\"})\r\n\r\n    } catch (ex) {\r\n\r\n        console.log(`payment.ctrl -> error to create order: ${ex}`)\r\n\r\n        return res.status(500).json({success: false, message: \"Cannot create an order\"})\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = {\r\n    purchase\r\n}\r\n\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./controllers/purchase.ctrl.js?");

/***/ }),

/***/ "./dal/items.data.js":
/*!***************************!*\
  !*** ./dal/items.data.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const data = __webpack_require__(/*! ../storage/data */ \"./storage/data.js\")\r\n\r\nconst getItemsBySkus = skus => {\r\n    const items = []\r\n\r\n    skus.forEach(sku => {\r\n        const item = data.testData.find(obj => sku === obj.sku)\r\n        if (item) {\r\n            items.push(item)\r\n        }\r\n    });\r\n\r\n    return items\r\n}\r\n\r\nmodule.exports = {\r\n    getItemsBySkus\r\n}\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./dal/items.data.js?");

/***/ }),

/***/ "./helpers/purchase.hlp.js":
/*!*********************************!*\
  !*** ./helpers/purchase.hlp.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ShortUniqueId = __webpack_require__(/*! short-unique-id */ \"short-unique-id\")\r\nconst dal = __webpack_require__(/*! ../dal/items.data */ \"./dal/items.data.js\")\r\n\r\nconst purchase = (userId, skus, timestamp) => {\r\n\r\n    const items = dal.getItemsBySkus(skus) \r\n\r\n    //Here we will send our request to Payment Service\r\n    // and initiate async communication between all other services\r\n\r\n    if (items && items.length > 0) {\r\n\r\n        return {\r\n            success: true,\r\n            purchaseId: new ShortUniqueId({length: 10}),\r\n            timestamp,\r\n            userId,\r\n            skus\r\n        }\r\n\r\n    }\r\n\r\n    return null\r\n\r\n}\r\n\r\nmodule.exports = {\r\n    purchase\r\n}\r\n\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./helpers/purchase.hlp.js?");

/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*global window, global*/\nvar util = __webpack_require__(/*! util */ \"util\")\nvar assert = __webpack_require__(/*! assert */ \"assert\")\nfunction now() { return new Date().getTime() }\n\nvar slice = Array.prototype.slice\nvar console\nvar times = {}\n\nif (typeof global !== \"undefined\" && global.console) {\n    console = global.console\n} else if (typeof window !== \"undefined\" && window.console) {\n    console = window.console\n} else {\n    console = {}\n}\n\nvar functions = [\n    [log, \"log\"],\n    [info, \"info\"],\n    [warn, \"warn\"],\n    [error, \"error\"],\n    [time, \"time\"],\n    [timeEnd, \"timeEnd\"],\n    [trace, \"trace\"],\n    [dir, \"dir\"],\n    [consoleAssert, \"assert\"]\n]\n\nfor (var i = 0; i < functions.length; i++) {\n    var tuple = functions[i]\n    var f = tuple[0]\n    var name = tuple[1]\n\n    if (!console[name]) {\n        console[name] = f\n    }\n}\n\nmodule.exports = console\n\nfunction log() {}\n\nfunction info() {\n    console.log.apply(console, arguments)\n}\n\nfunction warn() {\n    console.log.apply(console, arguments)\n}\n\nfunction error() {\n    console.warn.apply(console, arguments)\n}\n\nfunction time(label) {\n    times[label] = now()\n}\n\nfunction timeEnd(label) {\n    var time = times[label]\n    if (!time) {\n        throw new Error(\"No such label: \" + label)\n    }\n\n    delete times[label]\n    var duration = now() - time\n    console.log(label + \": \" + duration + \"ms\")\n}\n\nfunction trace() {\n    var err = new Error()\n    err.name = \"Trace\"\n    err.message = util.format.apply(null, arguments)\n    console.error(err.stack)\n}\n\nfunction dir(object) {\n    console.log(util.inspect(object) + \"\\n\")\n}\n\nfunction consoleAssert(expression) {\n    if (!expression) {\n        var arr = slice.call(arguments, 1)\n        assert.ok(false, util.format.apply(null, arr))\n    }\n}\n\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./node_modules/console-browserify/index.js?");

/***/ }),

/***/ "./routes/purchase.route.js":
/*!**********************************!*\
  !*** ./routes/purchase.route.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\nconst purchaseCtrl = __webpack_require__(/*! ../controllers/purchase.ctrl */ \"./controllers/purchase.ctrl.js\")\r\n\r\nrouter.post('/', purchaseCtrl.purchase)\r\n\r\nmodule.exports = router\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./routes/purchase.route.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\nconst express = __webpack_require__(/*! express */ \"express\")\r\nconst app = express()\r\nconst fs = __webpack_require__(/*! fs */ \"fs\")\r\nconst https = __webpack_require__(/*! https */ \"https\")\r\nconst http = __webpack_require__(/*! http */ \"http\")\r\nconst bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\")\r\nconst cors = __webpack_require__(/*! cors */ \"cors\")\r\nconst { portMain, portMainSSL, hostName } = __webpack_require__(/*! ./constants/config */ \"./constants/config.js\")\r\nconst purchase = __webpack_require__(/*! ./routes/purchase.route */ \"./routes/purchase.route.js\")\r\n\r\napp.use(cors())\r\n\r\napp.use(bodyParser.json({limit: '5mb'}))\r\napp.use(bodyParser.urlencoded({limit:'5mb', extended:true}))\r\n\r\napp.get('/checking', (req, res) => {\r\n\r\n    res.json({\"message\": \"Welcome To The Server!\"})\r\n\r\n})\r\n\r\napp.use('/purchase', purchase)\r\n\r\nif (shared.USE_SSL) {\r\n\r\n    const httpsOptions = {\r\n        cert: fs.readFileSync('./ssl/certificate.crt'),\r\n        ca: fs.readFileSync('./ssl/ca_bundle.crt'),\r\n        key: fs.readFileSync('./ssl/private.key'),\r\n    }\r\n\r\n    const httpsServer = https.createServer(httpsOptions, app)\r\n\r\n    httpsServer.listen(portMainSSL, hostName, () => {\r\n        console.log('SSL server is running on port', portMainSSL)\r\n    })\r\n\r\n} else {\r\n\r\n    const httpServer = http.createServer(app)\r\n\r\n    httpServer.listen(portMain, () => {\r\n        console.log('Server is running on port', portMain)\r\n    })\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./server.js?");

/***/ }),

/***/ "./storage/data.js":
/*!*************************!*\
  !*** ./storage/data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testData = [\r\n    {\r\n        sku: 1,\r\n        name: \"White Sneakers\",\r\n        timestamp: 1702050707,  \r\n    }\r\n]);\n\n//# sourceURL=webpack://chargeflow-shopping-cart/./storage/data.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv-flow":
/*!******************************!*\
  !*** external "dotenv-flow" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv-flow");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "short-unique-id":
/*!**********************************!*\
  !*** external "short-unique-id" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("short-unique-id");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	
/******/ })()
;