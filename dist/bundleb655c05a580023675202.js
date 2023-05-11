/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-black: #222;\n    --main-white: #fff;\n    --main-color: rgb(255, 183, 49);\n    --main-transition: all 0.3s linear;\n    --light-border: 1px solid rgba(0,0,0,0.1);\n    --header-height: 60px;\n}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: 'Lato';\n    height: 100vh;\n    width: 100vw;\n    color: var(--main-black);\n    user-select: none;\n\n}\n\nmain {\n    display: flex;\n}\n/*HEADER STYLES */\n.header {\n    width: 100vw;\n    height: var(--header-height);\n    border-bottom: var(--light-border);\n    display: flex;\n}\n\n.header-center {\n    width: 100vw;\n    margin: 0 auto;\n    padding: 0.5rem 2rem;\n}\n\n.logo {\n    font-size: 1.2rem;\n    user-select: none;\n}\n\n\n/* LEFT NAV STYLES */\n\n.leftside-nav {\n    height: calc(100vh - 60px);\n    width: 25%;\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n    border-right: var(--light-border);\n    position: relative;\n}\n\n.project-header {\n    display: flex;\n    width: 100%;\n    height: 60px;\n    justify-content: center;\n    align-items: center;\n    gap: 1.5rem;\n    padding: 1rem 0;\n    border-bottom: var(--light-border);\n}\n\n.fa-folder-plus {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.projects {\n    padding: 0rem 0.5rem;\n}\n\n.project {\n    max-width: 250px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    padding: 0.75rem 0.5rem;\n    margin: 1rem auto;\n    cursor: pointer;\n}\n\n.project i {\n    font-size: 1.2rem;\n    color: var(--main-black)\n}\n\n.project-add-form {\n    width: 100%;\n    position: absolute;\n    top: calc(100vh);\n    padding: 1rem 1rem;\n    z-index: 2;\n}\n\n.project-add-form-active {\n    top: 0px;\n    height: 100%;\n    background: white;\n}\n\n.project-add-form-title {\n    font-size: 1.2rem;\n    display: inline-block;\n    margin-bottom: 2rem;\n    \n}\n\n.project-add-form i {\n    padding-left: 1.5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n\n\n.project-add-form label {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n    width: 100%;\n    text-align: center;\n    display: block;\n}\n\n.project-add-form input {\n    padding: 0.25rem 0.5rem;\n    font-size: 1rem;\n    width: 100%;\n}\n\n.submit-add-project {\n    padding: 0.5rem 1rem;\n    background: var(--main-white);\n    border: 2px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    margin-top: 3rem;  \n    cursor: pointer;\n    transition: var(--main-transition);\n}\n\n.submit-add-project:hover {\n    background: var(--main-black);\n    color: var(--main-white);\n}\n\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n}\n\n/* MAIN BODY STYLES */\n\n.main-body {\n    width: 100%;\n    height: calc(100vh - 60px);\n    position: relative;\n}\n\n.main-body-header {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    height: 60px;\n    border-bottom: var(--light-border);\n\n}\n\n.current-project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 1.1rem;\n}\n\n.current-project i {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.current-project-title{\n    width: 150px;\n    cursor: pointer;\n}\n\n.add-todo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    border-left: var(--light-border);\n\n}\n\n.add-todo i {\n    cursor: pointer;\n}\n\n\n.todo-container {\n    padding: 1rem;\n    width: 100%;\n    text-align: center;\n    color: rgb(194, 194, 194);\n    font-size: 2rem;\n}\n\n.todo {\n    border: 1px solid rgba(0,0,0,0.2);\n    max-width: 500px;\n    margin: 0 auto;\n    display: grid;\n    color: var(--main-black);\n    font-size: 1.1rem;\n    grid-template-columns: 30px 1fr 0.1fr;\n}\n\n.todo + .todo {\n    margin-top: 1rem;\n}\n\n.priority-low {\n    width: 15px;\n    border-right: green;\n    background-color: green;\n}\n\n.priority-medium {\n    width: 15px;\n    border-right: yellow;\n    background-color: yellow;\n}\n\n.priority-high {\n    width: 15px;\n    border-right: red;\n    background-color: red;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 1rem;\n}\n\n.info, .edit-btn {\n    padding: 1rem;\n    justify-content: center;\n}\n\n.edit-btn {\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 600px){\n    .main-body-header {\n        padding: 0rem 0.5rem;\n        grid-template-columns: 0fr 2fr 1fr;\n    }\n\n    .current-project i {\n        padding-right: 0.5rem;\n    }\n\n    .current-project-title {\n        font-size: 1.2rem;\n    }\n}\n\n/* ADD TODO FORM */\n.add-todo-form {\n    background-color: var(--main-white);\n    width: 100%;\n    position: absolute;\n    top: calc(100vh);\n    left: 0px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    transition: var(--main-transition);\n    z-index: 2;\n}\n\n.add-todo-form-active {\n    top: 0px;\n    height: 100%;\n}\n\n.add-todo-form-header {\n    width: 100%;\n    padding: 1.1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    \n    border-bottom: var(--light-border);\n}\n\n.todo-add-form-title {\n    font-size: 1.2rem;\n    display: inline-block;\n    padding-left: 4rem;\n    min-width: 170px;\n}\n\n.add-todo-form-header i {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.form-item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-top: 2rem;\n}\n\n.form-item label {\n    font-size: 1.2rem;\n    padding-bottom: 0.75rem;\n}\n\n.form-item input {\n    font-size: 1.2rem;\n    padding: 0.5rem 0.25rem;\n    text-align: center;\n}\n\n.form-item input[type=text] {\n    max-width: 230px;\n}\n\n.form-item select{\n    padding: 0.5rem;\n}\n\n.form-input-invalid {\n    border: 1px solid rgb(255, 65, 65) !important\n}\n\n.submit-add-todo {\n    padding: 1rem 1.5rem;\n    background: var(--main-white);\n    border: 2px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    margin-top: 6rem;  \n    cursor: pointer;\n    transition: var(--main-transition);\n}\n\n.submit-add-todo:hover {\n    background: var(--main-black);\n    color: var(--main-white);\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --main-black: #222;\n    --main-white: #fff;\n    --main-color: rgb(255, 183, 49);\n    --main-transition: all 0.3s linear;\n    --light-border: 1px solid rgba(0,0,0,0.1);\n    --header-height: 60px;\n}\n\nhtml {\n    overflow: hidden;\n}\n\nbody {\n    font-family: 'Lato';\n    height: 100vh;\n    width: 100vw;\n    color: var(--main-black);\n    user-select: none;\n\n}\n\nmain {\n    display: flex;\n}\n/*HEADER STYLES */\n.header {\n    width: 100vw;\n    height: var(--header-height);\n    border-bottom: var(--light-border);\n    display: flex;\n}\n\n.header-center {\n    width: 100vw;\n    margin: 0 auto;\n    padding: 0.5rem 2rem;\n}\n\n.logo {\n    font-size: 1.2rem;\n    user-select: none;\n}\n\n\n/* LEFT NAV STYLES */\n\n.leftside-nav {\n    height: calc(100vh - 60px);\n    width: 25%;\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n    border-right: var(--light-border);\n    position: relative;\n}\n\n.project-header {\n    display: flex;\n    width: 100%;\n    height: 60px;\n    justify-content: center;\n    align-items: center;\n    gap: 1.5rem;\n    padding: 1rem 0;\n    border-bottom: var(--light-border);\n}\n\n.fa-folder-plus {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.projects {\n    padding: 0rem 0.5rem;\n}\n\n.project {\n    max-width: 250px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: 1px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    padding: 0.75rem 0.5rem;\n    margin: 1rem auto;\n    cursor: pointer;\n}\n\n.project i {\n    font-size: 1.2rem;\n    color: var(--main-black)\n}\n\n.project-add-form {\n    width: 100%;\n    position: absolute;\n    top: calc(100vh);\n    padding: 1rem 1rem;\n    z-index: 2;\n}\n\n.project-add-form-active {\n    top: 0px;\n    height: 100%;\n    background: white;\n}\n\n.project-add-form-title {\n    font-size: 1.2rem;\n    display: inline-block;\n    margin-bottom: 2rem;\n    \n}\n\n.project-add-form i {\n    padding-left: 1.5rem;\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n\n\n.project-add-form label {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n    width: 100%;\n    text-align: center;\n    display: block;\n}\n\n.project-add-form input {\n    padding: 0.25rem 0.5rem;\n    font-size: 1rem;\n    width: 100%;\n}\n\n.submit-add-project {\n    padding: 0.5rem 1rem;\n    background: var(--main-white);\n    border: 2px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    margin-top: 3rem;  \n    cursor: pointer;\n    transition: var(--main-transition);\n}\n\n.submit-add-project:hover {\n    background: var(--main-black);\n    color: var(--main-white);\n}\n\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n}\n\n/* MAIN BODY STYLES */\n\n.main-body {\n    width: 100%;\n    height: calc(100vh - 60px);\n    position: relative;\n}\n\n.main-body-header {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    height: 60px;\n    border-bottom: var(--light-border);\n\n}\n\n.current-project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 1.1rem;\n}\n\n.current-project i {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.current-project-title{\n    width: 150px;\n    cursor: pointer;\n}\n\n.add-todo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.2rem;\n    border-left: var(--light-border);\n\n}\n\n.add-todo i {\n    cursor: pointer;\n}\n\n\n.todo-container {\n    padding: 1rem;\n    width: 100%;\n    text-align: center;\n    color: rgb(194, 194, 194);\n    font-size: 2rem;\n}\n\n.todo {\n    border: 1px solid rgba(0,0,0,0.2);\n    max-width: 500px;\n    margin: 0 auto;\n    display: grid;\n    color: var(--main-black);\n    font-size: 1.1rem;\n    grid-template-columns: 30px 1fr 0.1fr;\n}\n\n.todo + .todo {\n    margin-top: 1rem;\n}\n\n.priority-low {\n    width: 15px;\n    border-right: green;\n    background-color: green;\n}\n\n.priority-medium {\n    width: 15px;\n    border-right: yellow;\n    background-color: yellow;\n}\n\n.priority-high {\n    width: 15px;\n    border-right: red;\n    background-color: red;\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 1rem;\n}\n\n.info, .edit-btn {\n    padding: 1rem;\n    justify-content: center;\n}\n\n.edit-btn {\n    font-size: 1.2rem;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 600px){\n    .main-body-header {\n        padding: 0rem 0.5rem;\n        grid-template-columns: 0fr 2fr 1fr;\n    }\n\n    .current-project i {\n        padding-right: 0.5rem;\n    }\n\n    .current-project-title {\n        font-size: 1.2rem;\n    }\n}\n\n/* ADD TODO FORM */\n.add-todo-form {\n    background-color: var(--main-white);\n    width: 100%;\n    position: absolute;\n    top: calc(100vh);\n    left: 0px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    transition: var(--main-transition);\n    z-index: 2;\n}\n\n.add-todo-form-active {\n    top: 0px;\n    height: 100%;\n}\n\n.add-todo-form-header {\n    width: 100%;\n    padding: 1.1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    \n    border-bottom: var(--light-border);\n}\n\n.todo-add-form-title {\n    font-size: 1.2rem;\n    display: inline-block;\n    padding-left: 4rem;\n    min-width: 170px;\n}\n\n.add-todo-form-header i {\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n\n.form-item {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    margin-top: 2rem;\n}\n\n.form-item label {\n    font-size: 1.2rem;\n    padding-bottom: 0.75rem;\n}\n\n.form-item input {\n    font-size: 1.2rem;\n    padding: 0.5rem 0.25rem;\n    text-align: center;\n}\n\n.form-item input[type=text] {\n    max-width: 230px;\n}\n\n.form-item select{\n    padding: 0.5rem;\n}\n\n.form-input-invalid {\n    border: 1px solid rgb(255, 65, 65) !important\n}\n\n.submit-add-todo {\n    padding: 1rem 1.5rem;\n    background: var(--main-white);\n    border: 2px solid rgba(0,0,0,0.2);\n    border-radius: 3px;\n    margin-top: 6rem;  \n    cursor: pointer;\n    transition: var(--main-transition);\n}\n\n.submit-add-todo:hover {\n    background: var(--main-black);\n    color: var(--main-white);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController),
/* harmony export */   "projectsHandler": () => (/* binding */ projectsHandler)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _modules_ProjectsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProjectsHandler */ "./src/modules/ProjectsHandler.js");
/* harmony import */ var _modules_DisplayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DisplayController */ "./src/modules/DisplayController.js");




const projectsHandler = new _modules_ProjectsHandler__WEBPACK_IMPORTED_MODULE_1__.ProjectsHandler();
const displayController = new _modules_DisplayController__WEBPACK_IMPORTED_MODULE_2__.DisplayController();

document.addEventListener('DOMContentLoaded', () => {
    displayController.initializeUI();
    
})




/***/ }),

/***/ "./src/modules/DOMManipulator.js":
/*!***************************************!*\
  !*** ./src/modules/DOMManipulator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMManipulator": () => (/* binding */ DOMManipulator)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


class DOMManipulator {

    static setupListeners(){

        //listeners for project form
        document.addEventListener('click', (e) => {
            const addTodoFormEl = document.querySelector('.add-todo-form');
            
            //create project form event delegation.
            if(e.target.classList.contains('fa-calendar-plus')){
                //open form
                const formTitle = document.querySelector('.todo-add-form-title');
                formTitle.innerText = "Create Todo"
                addTodoFormEl.classList.add('add-todo-form-active');
                
            } else if(e.target.classList.contains('fa-arrow-left')){
                //close form
                const allInputs = [...addTodoFormEl.querySelectorAll('.form-item input')];
                allInputs.forEach(input => {
                    input.value = "";
                })

                addTodoFormEl.classList.remove('add-todo-form-active');

            } else if(e.target.classList.contains('submit-add-todo')){
                const taskAndDate = [...addTodoFormEl.querySelectorAll('.form-item input')];
                const priority = addTodoFormEl.querySelector('.form-item select')
                const allInputs = [...taskAndDate, priority];
                const inputValues = allInputs.map(input => input.value);

                taskAndDate[0].classList.remove('form-input-invalid')
                taskAndDate[1].classList.remove('form-input-invalid');

                if(inputValues[0] !== "" && inputValues[1] !== ""){
                    const inputValuesObject = {
                    task: inputValues[0],
                    dueDate: inputValues[1],
                    priority: inputValues[2],
                    }   

                    allInputs.forEach(input => {
                        input.value = "";
                        if(input.id === 'priority'){
                            input.value = input.children[0].value;
                        }
                    })

                    addTodoFormEl.classList.remove('add-todo-form-active');

                    ___WEBPACK_IMPORTED_MODULE_0__.displayController.getTodo(inputValuesObject);
                } else {
                    if(inputValues[0] === ""){
                        taskAndDate[0].classList.add('form-input-invalid')
                    }
                    if(inputValues[1] === ""){
                        taskAndDate[1].classList.add('form-input-invalid');
                    }
                    
                }
            }
        })
    }

    static createProjectsHTML(projects){
        const projectsDOM = document.querySelector('.projects');
        let projectHTML = "";
        let defaultID = projects[0].id;

        projects.forEach(item => {
            if(item.id === defaultID){
                projectHTML += `
                <div class="project">
                    <h3 class="p-title">${item.title}</h2>
                </div>
                `
            } else {
                projectHTML += `
                <div class="project">
                    <h3 class="p-title">${item.title}</h2>
                    <i class="fa fa-delete-left"></i>
                </div>
            `
            }
        })

        projectsDOM.innerHTML = projectHTML;
    }

    static updateActiveTitle(project){
        const projectTitle = document.querySelector('.current-project-title');
        projectTitle.innerText = project.title;
    }

    static displayTodosHTML(project) {
        const todoContainer = document.querySelector('.todo-container');

        let todoHTML = "";
        if(project.todos.length === 0){
            todoContainer.innerText = "There are currently no Todos in this project"
        } else {
            project.todos.forEach(item => {
                todoHTML += `
                 <div class="todo">
                    <div class="priority-${item.priority}"></div>
                    <div class="info">
                        <h3 class="todo-title">${item.title}</h3>
                        <p class="todo-date">${item.date}</p>
                    </div>
                    <div class="edit-btn">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            `
            })

             todoContainer.innerHTML = todoHTML;
    }
        }

       
}

/***/ }),

/***/ "./src/modules/DisplayController.js":
/*!******************************************!*\
  !*** ./src/modules/DisplayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayController": () => (/* binding */ DisplayController)
/* harmony export */ });
/* harmony import */ var _DOMManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManipulator */ "./src/modules/DOMManipulator.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");





class DisplayController{

    constructor(){
        this.activeProject = undefined;
    }

    initializeUI(){
        const projects = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getProjects() ? _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getProjects() : ___WEBPACK_IMPORTED_MODULE_2__.projectsHandler.getProjects();
        this.activeProject = projects[0];
        
        _DOMManipulator__WEBPACK_IMPORTED_MODULE_0__.DOMManipulator.createProjectsHTML(projects);
        _DOMManipulator__WEBPACK_IMPORTED_MODULE_0__.DOMManipulator.updateActiveTitle(this.activeProject);
        _DOMManipulator__WEBPACK_IMPORTED_MODULE_0__.DOMManipulator.displayTodosHTML(this.activeProject);
        _DOMManipulator__WEBPACK_IMPORTED_MODULE_0__.DOMManipulator.setupListeners();
    }

    getTodo(todoValues){
        this.activeProject.addTodo(todoValues)
    }

}

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/modules/Todo.js");




class Project {
    constructor(title){
        this.title = title;
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        this.todos = [];
    }

    addTodo(todoValues){
        this.todos = [...this.todos, todoValues];
    }
}

/***/ }),

/***/ "./src/modules/ProjectsHandler.js":
/*!****************************************!*\
  !*** ./src/modules/ProjectsHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsHandler": () => (/* binding */ ProjectsHandler)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");


class ProjectsHandler {
    constructor(){
        this.projects = [new _Project__WEBPACK_IMPORTED_MODULE_0__.Project('Default Project')];
    }

    getProjects(){
        return this.projects;
    }

}

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
    static saveProjects(projects) {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static getProjects(){
        const projects = JSON.parse(localStorage.getItem('projects'));
        return projects;
    }
}

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, date, priority){
        this.title = title;
        this.date = date;
        this.priority = priority;
    }
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundleb655c05a580023675202.js.map