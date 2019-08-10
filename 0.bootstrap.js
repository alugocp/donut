(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/donut_web.js":
/*!***************************!*\
  !*** ../pkg/donut_web.js ***!
  \***************************/
/*! exports provided: convert_to_donut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convert_to_donut\", function() { return convert_to_donut; });\n/* harmony import */ var _donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donut_web_bg.wasm */ \"../pkg/donut_web_bg.wasm\");\n\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n* @param {Uint8Array} input\n* @returns {string}\n*/\nfunction convert_to_donut(input) {\n    const retptr = 8;\n    const ret = _donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"convert_to_donut\"](retptr, passArray8ToWasm(input), WASM_VECTOR_LEN);\n    const memi32 = getInt32Memory();\n    const v0 = getStringFromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n    _donut_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n    return v0;\n}\n\n\n\n//# sourceURL=webpack:///../pkg/donut_web.js?");

/***/ }),

/***/ "../pkg/donut_web_bg.wasm":
/*!********************************!*\
  !*** ../pkg/donut_web_bg.wasm ***!
  \********************************/
/*! exports provided: memory, convert_to_donut, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/donut_web_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var donut_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! donut-web */ \"../pkg/donut_web.js\");\n\n\nfunction upload(e){\n  var file=e.target.files;\n  if(file.length==1) file=file[0];\n  else return disable();\n  var reader=new FileReader();\n  console.log(file);\n  reader.onload=function(){\n    var input=new Uint8Array(reader.result);\n    var result=donut_web__WEBPACK_IMPORTED_MODULE_0__[\"convert_to_donut\"](input);\n    document.getElementById(\"donut\").src=\"data:image/png;base64,\"+result;\n  }\n  reader.readAsArrayBuffer(file);\n}\n\ndocument.getElementById(\"files\").addEventListener(\"change\",upload,false);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);