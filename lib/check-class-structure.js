"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkClassStructure=void 0;var _lodash=require("lodash"),_lodash2=_interopRequireDefault(_lodash),checkClassStructure=exports.checkClassStructure=function(e){for(var t in e){var s=e[t];if(_lodash2["default"].isObject(s))for(var r in s){var a=s[r];_lodash2["default"].isObject(a)||console.warn("Make sure the value of the element `"+t+"` is an object of css. You passed it `"+s+"`")}else console.warn("Make sure the value of `"+t+"` is an object of html elements. You passed it `"+s+"`")}};exports["default"]=checkClassStructure;