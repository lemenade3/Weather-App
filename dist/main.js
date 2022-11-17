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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins/Poppins-Light.ttf */ \"./src/fonts/Poppins/Poppins-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins/Poppins-Regular.ttf */ \"./src/fonts/Poppins/Poppins-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Poppins/Poppins-Thin.ttf */ \"./src/fonts/Poppins/Poppins-Thin.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./background.svg */ \"./src/background.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: title-font;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: city-font;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n@font-face {\\n  font-family: standard-font;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\nbody {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat;\\n  background-size: cover;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 100vh;\\n  padding: 0;\\n  margin: 0;\\n}\\nbody #main {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\nbody #main #right {\\n  display: flex;\\n  flex-direction: column;\\n}\\nbody #main #right #weatherIcon {\\n  height: 250px;\\n}\\nbody #main #right #extraData {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 15px;\\n  border-style: solid;\\n  padding: 10px;\\n  background-color: rgba(165, 165, 165, 0.5);\\n}\\nbody #main #right #extraData div {\\n  display: flex;\\n}\\nbody #main #right #extraData div div {\\n  width: 110px;\\n  height: 40px;\\n  font-family: standard-font;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 1.3rem;\\n  border-right: solid;\\n}\\nbody #main #right #extraData div:last-child {\\n  border-right: none;\\n}\\nbody #bottom {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\nbody #bottom #forecastContainer {\\n  display: flex;\\n  width: 80vw;\\n  overflow: auto;\\n  border-style: solid;\\n  border-radius: 15px;\\n  background-color: rgba(165, 165, 165, 0.5);\\n  padding: 10px;\\n  margin: 20px;\\n}\\nbody #bottom #forecastContainer .time {\\n  display: flex;\\n  flex-direction: column;\\n  border-right: solid;\\n  padding: 10px;\\n  align-items: center;\\n  justify-content: center;\\n}\\nbody #bottom #forecastContainer:last-child {\\n  border-right: none;\\n}\\nbody #bottom #forecastContainer img {\\n  height: 60px;\\n}\\nbody #bottom #units {\\n  position: absolute;\\n  right: 15px;\\n  bottom: 15px;\\n  height: 70px;\\n  width: 70px;\\n  border-radius: 35px;\\n  border: solid;\\n  background-color: rgba(165, 165, 165, 0.5);\\n  font-family: city-font;\\n  font-size: 1.4rem;\\n}\\nbody #bottom #units:hover {\\n  background-color: rgba(165, 165, 165, 0.9);\\n  height: 74px;\\n  width: 74px;\\n  border-radius: 37px;\\n  right: 13px;\\n  bottom: 13px;\\n}\\n\\n#form {\\n  margin: 15px;\\n  margin-right: 0px;\\n  border-style: none;\\n  border-bottom-style: solid;\\n  border-color: rgb(33, 37, 103);\\n  border-width: 4px;\\n  width: 250px;\\n  height: 1.5rem;\\n  border-bottom-left-radius: 2px;\\n  border-bottom-right-radius: 2px;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n#form input {\\n  width: 90%;\\n  border: none;\\n  padding: 5px;\\n  background-color: none;\\n  font-family: standard-font;\\n  font-size: 1.2rem;\\n}\\n#form input:focus {\\n  outline: none;\\n}\\n\\n.data {\\n  height: 20px;\\n  width: 180px;\\n  font-family: standard-font;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#weather {\\n  font-family: title-font;\\n  font-size: 2rem;\\n}\\n\\n#city {\\n  font-family: city-font;\\n  font-size: 3.5rem;\\n}\\n\\n#temp {\\n  font-family: title-font;\\n  font-size: 2.5rem;\\n}\\n\\n#masthead {\\n  font-family: standard-font;\\n  margin: 5px;\\n  padding: 2px;\\n  font-size: 1rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callAPI\": () => (/* binding */ callAPI),\n/* harmony export */   \"changeUnit\": () => (/* binding */ changeUnit)\n/* harmony export */ });\nlet unit = 'metric'\n\nfunction changeUnit() {\n    if (unit === 'metric') {\n        unit = 'imperial'\n    } else if (unit === 'imperial') {\n        unit = 'metric'\n    }\n}\n\nasync function getWeatherData(value) {\n    let city = value\n    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5f9ff8597ccefcd57f95ed9c70d2de3e&units=${unit}`\n\n    const response = await fetch(url, {mode: 'cors'});\n    const weatherData = await response.json();\n    return weatherData;\n}\n\nlet results = {\n    currentCity: 0,\n    currentTemp: 0,\n    currentWeather: 0,\n    currentWeatherIcon: 0,\n    currentMax: 0,\n    currentMin: 0,\n    currentHumidity: 0,\n    forecastObjects: []\n}\n\nasync function storeCurrentCity(weatherData) {\n    let data = await weatherData;\n    results.currentCity = data.city.name\n}\n\nasync function storeCurrentTemp(weatherData) {\n    let data = await weatherData;\n    results.currentTemp = data.list[0].main.temp\n} \n\nasync function storeCurrentWeather(weatherData) {\n    let data = await weatherData;\n    results.currentWeather = data.list[0].weather[0].main\n}\n\nasync function storeCurrentWeatherIcon(weatherData) {\n    let data = await weatherData;\n    results.currentWeatherIcon = data.list[0].weather[0].icon\n}\n\nasync function storeCurrentMax(weatherData) {\n    let data = await weatherData;\n    results.currentMax = data.list[0].main.temp_max\n}\n\nasync function storeCurrentMin(weatherData) {\n    let data = await weatherData;\n    results.currentMin = data.list[0].main.temp_min\n}\n\nasync function storeCurrentHumidity(weatherData) {\n    let data = await weatherData;\n    results.currentHumidity = data.list[0].main.humidity\n}\n\nasync function storeForecast(weatherData) {\n    results.forecastObjects = []\n    let data = await weatherData\n    let dataList = await data.list\n    for (let i = 0; i < dataList.length; i++) {\n        results.forecastObjects.push({\n            dateTime: dataList[i].dt,\n            temp: dataList[i].main.temp,\n            weather: dataList[i].weather[0].main,\n            icon: dataList[i].weather[0].icon,\n        })\n    }\n}\n\nasync function callAPI(value) {\n    let weatherData = getWeatherData(value);\n    console.log(weatherData)\n    return Promise.all([\n        storeCurrentCity(weatherData),\n        storeCurrentTemp(weatherData),\n        storeCurrentWeather(weatherData),\n        storeCurrentWeatherIcon(weatherData),\n        storeCurrentMax(weatherData),\n        storeCurrentMin(weatherData),\n        storeCurrentHumidity(weatherData),\n        storeForecast(weatherData),\n    ]).then(async () => {\n        return results\n    })\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/apiCalls.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeDomUnit\": () => (/* binding */ changeDomUnit),\n/* harmony export */   \"displayResults\": () => (/* binding */ displayResults)\n/* harmony export */ });\n/* harmony import */ var _iconSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconSelector */ \"./src/iconSelector.js\");\n// Imports icons for Weather\n\n\n\n// responsible for changing units shown in DOM\n\nlet unit = 'C'\n\nfunction changeDomUnit() {\n    if (unit === 'C') {\n        unit = 'F'\n    } else if (unit === 'F') {\n        unit = 'C'\n    }\n}\n\nasync function displayResults(results) {\n\n    let city = document.querySelector('#city')\n    let temp = document.querySelector('#temp')\n    let weather = document.querySelector('#weather')\n    let weatherIcon = document.querySelector('#weatherIcon')\n    let min = document.querySelector('#min')\n    let max = document.querySelector('#max')\n    let humidity = document.querySelector('#humidity')\n\n    city.textContent = results.currentCity;\n    temp.textContent = `${results.currentTemp} º${unit}`;\n    weather.textContent = results.currentWeather;\n    weatherIcon.src = (0,_iconSelector__WEBPACK_IMPORTED_MODULE_0__.returnIcon)(results.currentWeatherIcon);\n    max.textContent = `${results.currentMax} º${unit}`;\n    min.textContent = `${results.currentMin} º${unit}`;\n    humidity.textContent = `${results.currentHumidity} %`;\n        \n    for (let i = 0; i < results.forecastObjects.length; i++) {\n\n        let icon = document.querySelector(`#icon${i}`)\n        let time = document.querySelector(`#dateTime${i}`)\n        let temp = document.querySelector(`#temp${i}`)\n        let weather = document.querySelector(`#weather${i}`)\n        let date = document.querySelector(`#date${i}`)\n\n        let dateTime = new Date(results.forecastObjects[i].dateTime * 1000)\n            \n        icon.src = (0,_iconSelector__WEBPACK_IMPORTED_MODULE_0__.returnIcon)(results.forecastObjects[i].icon)\n        time.textContent = dateTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) //date and time\n        temp.textContent = `${results.forecastObjects[i].temp} º${unit}` //time temp\n        weather.textContent = results.forecastObjects[i].weather //weather\n        date.textContent = dateTime.toLocaleDateString();\n    }\n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/domManipulation.js?");

/***/ }),

/***/ "./src/iconSelector.js":
/*!*****************************!*\
  !*** ./src/iconSelector.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnIcon\": () => (/* binding */ returnIcon)\n/* harmony export */ });\n/* harmony import */ var _weather_icons_01d_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-icons/01d.svg */ \"./src/weather-icons/01d.svg\");\n/* harmony import */ var _weather_icons_01n_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-icons/01n.svg */ \"./src/weather-icons/01n.svg\");\n/* harmony import */ var _weather_icons_02d_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-icons/02d.svg */ \"./src/weather-icons/02d.svg\");\n/* harmony import */ var _weather_icons_02n_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-icons/02n.svg */ \"./src/weather-icons/02n.svg\");\n/* harmony import */ var _weather_icons_03_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-icons/03.svg */ \"./src/weather-icons/03.svg\");\n/* harmony import */ var _weather_icons_04_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-icons/04.svg */ \"./src/weather-icons/04.svg\");\n/* harmony import */ var _weather_icons_09d_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-icons/09d.svg */ \"./src/weather-icons/09d.svg\");\n/* harmony import */ var _weather_icons_09n_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./weather-icons/09n.svg */ \"./src/weather-icons/09n.svg\");\n/* harmony import */ var _weather_icons_10d_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weather-icons/10d.svg */ \"./src/weather-icons/10d.svg\");\n/* harmony import */ var _weather_icons_10n_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather-icons/10n.svg */ \"./src/weather-icons/10n.svg\");\n/* harmony import */ var _weather_icons_11d_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weather-icons/11d.svg */ \"./src/weather-icons/11d.svg\");\n/* harmony import */ var _weather_icons_11n_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weather-icons/11n.svg */ \"./src/weather-icons/11n.svg\");\n/* harmony import */ var _weather_icons_13d_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather-icons/13d.svg */ \"./src/weather-icons/13d.svg\");\n/* harmony import */ var _weather_icons_13n_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./weather-icons/13n.svg */ \"./src/weather-icons/13n.svg\");\n/* harmony import */ var _weather_icons_50d_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./weather-icons/50d.svg */ \"./src/weather-icons/50d.svg\");\n/* harmony import */ var _weather_icons_50n_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./weather-icons/50n.svg */ \"./src/weather-icons/50n.svg\");\n// Various weather icons\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction returnIcon(icon) {\n    let icons = {\n        '01d': _weather_icons_01d_svg__WEBPACK_IMPORTED_MODULE_0__,\n        '01n': _weather_icons_01n_svg__WEBPACK_IMPORTED_MODULE_1__,\n        '02d': _weather_icons_02d_svg__WEBPACK_IMPORTED_MODULE_2__,\n        '02n': _weather_icons_02n_svg__WEBPACK_IMPORTED_MODULE_3__,\n        '03d': _weather_icons_03_svg__WEBPACK_IMPORTED_MODULE_4__,\n        '03n': _weather_icons_03_svg__WEBPACK_IMPORTED_MODULE_4__,\n        '04d': _weather_icons_04_svg__WEBPACK_IMPORTED_MODULE_5__,\n        '04n': _weather_icons_04_svg__WEBPACK_IMPORTED_MODULE_5__,\n        '09d': _weather_icons_09d_svg__WEBPACK_IMPORTED_MODULE_6__,\n        '09n': _weather_icons_09n_svg__WEBPACK_IMPORTED_MODULE_7__,\n        '10d': _weather_icons_10d_svg__WEBPACK_IMPORTED_MODULE_8__,\n        '10n': _weather_icons_10n_svg__WEBPACK_IMPORTED_MODULE_9__,\n        '11d': _weather_icons_11d_svg__WEBPACK_IMPORTED_MODULE_10__,\n        '11n': _weather_icons_11n_svg__WEBPACK_IMPORTED_MODULE_11__,\n        '13d': _weather_icons_13d_svg__WEBPACK_IMPORTED_MODULE_12__,\n        '13n': _weather_icons_13n_svg__WEBPACK_IMPORTED_MODULE_13__,\n        '50d': _weather_icons_50d_svg__WEBPACK_IMPORTED_MODULE_14__,\n        '50n': _weather_icons_50n_svg__WEBPACK_IMPORTED_MODULE_15__,\n        'default': 'error'\n    }\n    let result = icons[icon]\n    return result;\n    \n}\n\n\n\n//# sourceURL=webpack://weather-app/./src/iconSelector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ \"./src/apiCalls.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n// Imports of required functions and stylesheets\n\n\n\n\n\n\n// Initial page load\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\nlet search = document.querySelector('img');\nlet input = document.querySelector('input')\nlet units = document.querySelector('#units')\nlet city = document.querySelector('#city')\n\nasync function returnResults(location) {\n    let data = await (0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.callAPI)(location)\n    ;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_3__.displayResults)(data);\n}\n\nsearch.addEventListener('click', async () => {\n    returnResults(input.value)\n})\n\ninput.addEventListener('keypress', (e) => { // allows enter to submit input\n    if (e.key === 'Enter') {\n        search.click()\n    }\n})\n\nunits.addEventListener('click', async () => { // This code block changes all units used\n    ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.changeUnit)()\n    ;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_3__.changeDomUnit)()\n    returnResults(city.textContent)\n\n    if (units.textContent === 'ºC') {\n        units.textContent = 'ºF'\n    }\n    if (units.textContent === 'ºF') {\n        units.textContent = 'ºC'\n    }\n})\n\nreturnResults('London')\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.svg */ \"./src/search.svg\");\n\n\nfunction loadPage() {\n\n    let body = document.querySelector('body')\n\n    // Creates top div\n\n    let top = document.createElement('div')\n    top.setAttribute('id', 'top')\n\n    let form = document.createElement('div')\n    form.setAttribute('id', 'form')\n\n    let input = document.createElement('input')\n    const search = new Image();\n    search.src = _search_svg__WEBPACK_IMPORTED_MODULE_0__\n\n    form.append(input, search)\n\n    top.append(form)\n\n    // creates main div\n\n    let main = document.createElement('div')\n    main.setAttribute('id', 'main')\n\n    let left = document.createElement('div')\n    left.setAttribute('id', 'left')\n\n    let currentWeather = document.createElement('div')\n    currentWeather.setAttribute('id', 'weather')\n\n    let currentCity = document.createElement('div')\n    currentCity.setAttribute('id', 'city')\n\n    let currentTemp = document.createElement('div')\n    currentTemp.setAttribute('id', 'temp')\n\n    left.append(currentWeather, currentCity, currentTemp)\n\n    let right = document.createElement('div')\n    right.setAttribute('id', 'right')\n    \n    let extraData = document.createElement('div')\n    extraData.setAttribute('id', 'extraData')\n\n    let dataTitles = document.createElement('div')\n    dataTitles.setAttribute('id', 'dataTitles')\n\n    let maxTitle = document.createElement('div')\n    maxTitle.setAttribute('id', 'maxTitle')\n    maxTitle.textContent = 'Max'\n\n    let minTitle = document.createElement('div')\n    minTitle.setAttribute('id', 'minTitle')\n    minTitle.textContent = 'Min'\n\n    let humidityTitle = document.createElement('div')\n    humidityTitle.setAttribute('id', 'humidityTitle')\n    humidityTitle.textContent = 'Humidity'\n\n    dataTitles.append(minTitle, maxTitle, humidityTitle)\n\n    let dataValues = document.createElement('div')\n    dataValues.setAttribute('id', 'dataValues')\n\n    let currentWeatherIcon = new Image()\n    currentWeatherIcon.setAttribute('id', 'weatherIcon')\n\n    let currentMax = document.createElement('div')\n    currentMax.setAttribute('id', 'max')\n\n    let currentMin = document.createElement('div')\n    currentMin.setAttribute('id', 'min')\n\n    let currentHumidity = document.createElement('div')\n    currentHumidity.setAttribute('id', 'humidity')\n\n    dataValues.append(currentMin, currentMax, currentHumidity)\n\n    extraData.append(dataTitles, dataValues)\n\n    right.append(currentWeatherIcon, extraData)\n    main.append(left, right)\n\n    let bottom = document.createElement('div')\n    bottom.setAttribute('id', 'bottom')\n\n    let forecastContainer = document.createElement('div')\n    forecastContainer.setAttribute('id', 'forecastContainer')\n\n    for (let i = 0; i < 15; i++) {\n        let timeContainer = document.createElement('div')\n        timeContainer.setAttribute('class', 'time')\n        let icon = new Image()\n        icon.setAttribute('id', `icon${i}`)\n        let dateTime = document.createElement('div')\n        dateTime.setAttribute('class', 'data')\n        dateTime.setAttribute('id', `dateTime${i}`)\n        let temp = document.createElement('div')\n        temp.setAttribute('class', 'data')\n        temp.setAttribute('id', `temp${i}`)\n        let weather = document.createElement('div')\n        weather.setAttribute('class', 'data')\n        weather.setAttribute('id', `weather${i}`)\n        let date = document.createElement('div')\n        date.setAttribute('class', 'data')\n        date.setAttribute('id', `date${i}`)\n        timeContainer.append(dateTime, icon, weather, temp, date)\n        forecastContainer.append(timeContainer)\n    }\n\n    let masthead = document.createElement('div')\n    masthead.setAttribute('id', 'masthead')\n    masthead.textContent = 'Copyright Oliver Browning 2022'\n\n    let units = document.createElement('button')\n    units.setAttribute('id', 'units')\n    units.textContent = 'ºF'\n\n    bottom.append(forecastContainer, masthead, units)\n\n\n    body.append(top, main, bottom)\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/pageLoad.js?");

/***/ }),

/***/ "./src/background.svg":
/*!****************************!*\
  !*** ./src/background.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e50bc80438581481ea2d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/background.svg?");

/***/ }),

/***/ "./src/fonts/Poppins/Poppins-Light.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Poppins/Poppins-Light.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7641a0f76ca9ef6c252c.ttf\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/Poppins/Poppins-Light.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins/Poppins-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/Poppins/Poppins-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35d26b781dc5fda684cc.ttf\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/Poppins/Poppins-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Poppins/Poppins-Thin.ttf":
/*!********************************************!*\
  !*** ./src/fonts/Poppins/Poppins-Thin.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59ff6a729e30c99b478e.ttf\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/Poppins/Poppins-Thin.ttf?");

/***/ }),

/***/ "./src/search.svg":
/*!************************!*\
  !*** ./src/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec5d69e71c681e0ed426.svg\";\n\n//# sourceURL=webpack://weather-app/./src/search.svg?");

/***/ }),

/***/ "./src/weather-icons/01d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/01d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c23e7855e1cb8ac7c36d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/01d.svg?");

/***/ }),

/***/ "./src/weather-icons/01n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/01n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2923306bed84bccf8845.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/01n.svg?");

/***/ }),

/***/ "./src/weather-icons/02d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/02d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db7b549b099ea04dfc3b.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/02d.svg?");

/***/ }),

/***/ "./src/weather-icons/02n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/02n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa23e8f2ff7827970a15.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/02n.svg?");

/***/ }),

/***/ "./src/weather-icons/03.svg":
/*!**********************************!*\
  !*** ./src/weather-icons/03.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7ed7c0e2663da6c517e.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/03.svg?");

/***/ }),

/***/ "./src/weather-icons/04.svg":
/*!**********************************!*\
  !*** ./src/weather-icons/04.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba3686e4a3d64a9dc5cf.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/04.svg?");

/***/ }),

/***/ "./src/weather-icons/09d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/09d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e181607a65fac1609f72.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/09d.svg?");

/***/ }),

/***/ "./src/weather-icons/09n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/09n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4f256a38aba5fdfb7079.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/09n.svg?");

/***/ }),

/***/ "./src/weather-icons/10d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/10d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"320e0e5ad36b9104b579.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/10d.svg?");

/***/ }),

/***/ "./src/weather-icons/10n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/10n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cc1d3f4f63383ae4d85.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/10n.svg?");

/***/ }),

/***/ "./src/weather-icons/11d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/11d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"debbe249e5112683d6ad.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/11d.svg?");

/***/ }),

/***/ "./src/weather-icons/11n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/11n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d19e84122b6699436854.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/11n.svg?");

/***/ }),

/***/ "./src/weather-icons/13d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/13d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0c0373eef1c6c2f055e.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/13d.svg?");

/***/ }),

/***/ "./src/weather-icons/13n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/13n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9cf34163a2314852af9f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/13n.svg?");

/***/ }),

/***/ "./src/weather-icons/50d.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/50d.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acbeaedc6bfec528dba1.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/50d.svg?");

/***/ }),

/***/ "./src/weather-icons/50n.svg":
/*!***********************************!*\
  !*** ./src/weather-icons/50n.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4658561bc4c6425c9e2d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/weather-icons/50n.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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