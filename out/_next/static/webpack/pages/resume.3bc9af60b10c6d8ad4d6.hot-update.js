webpackHotUpdate_N_E("pages/resume",{

/***/ "./src/components/base/Image/loadImage.tsx":
/*!*************************************************!*\
  !*** ./src/components/base/Image/loadImage.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/vitbokisch/Dev/bokisch.com/src/components/base/Image/loadImage.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// @ts-nocheck\n\n\nvar getSource = function getSource(src) {\n  if (!src) return undefined;\n  return __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(src, \"\"));\n};\n\nvar component = function component(WrappedComponent) {\n  var _s = $RefreshSig$();\n\n  var Enhanced = function Enhanced(_ref) {\n    _s();\n\n    var src = _ref.src,\n        placeholder = _ref.placeholder,\n        props = Object(_Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"src\", \"placeholder\"]);\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n        sizes = _useState[0],\n        setSizes = _useState[1];\n\n    if (!src) return null;\n    var source = getSource(src);\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n      var originalImage = new Image();\n      originalImage.src = source;\n\n      originalImage.onload = function () {\n        setSizes({\n          width: originalImage.width,\n          height: originalImage.height\n        });\n        setLoaded(true);\n      };\n    }, [src]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(WrappedComponent, _objectSpread(_objectSpread({\n      src: isLoaded ? finalSource : previewSource,\n      style: isLoaded ? {} : {\n        filter: 'blur(10px)',\n        opacity: 0.5\n      }\n    }, sizes), props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this);\n  };\n\n  _s(Enhanced, \"bpen1+tM8nBy+OGIvmZWOaPdGhM=\");\n\n  return Enhanced;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmFzZS9JbWFnZS9sb2FkSW1hZ2UudHN4PzQzZDYiXSwibmFtZXMiOlsiZ2V0U291cmNlIiwic3JjIiwidW5kZWZpbmVkIiwicmVxdWlyZSIsImNvbXBvbmVudCIsIldyYXBwZWRDb21wb25lbnQiLCJFbmhhbmNlZCIsInBsYWNlaG9sZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNpemVzIiwic2V0U2l6ZXMiLCJzb3VyY2UiLCJ1c2VFZmZlY3QiLCJvcmlnaW5hbEltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsInNldExvYWRlZCIsImlzTG9hZGVkIiwiZmluYWxTb3VyY2UiLCJwcmV2aWV3U291cmNlIiwiZmlsdGVyIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQVM7QUFDekIsTUFBSSxDQUFDQSxHQUFMLEVBQVUsT0FBT0MsU0FBUDtBQUVWLFNBQU9DLHFFQUFRLFlBQW1CRixHQUFwQixNQUFkO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxnQkFBRCxFQUFzQjtBQUFBOztBQUN0QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFvQztBQUFBOztBQUFBLFFBQWpDTCxHQUFpQyxRQUFqQ0EsR0FBaUM7QUFBQSxRQUE1Qk0sV0FBNEIsUUFBNUJBLFdBQTRCO0FBQUEsUUFBWkMsS0FBWTs7QUFBQSxvQkFDekJDLHNEQUFRLENBQUMsRUFBRCxDQURpQjtBQUFBLFFBQzVDQyxLQUQ0QztBQUFBLFFBQ3JDQyxRQURxQzs7QUFHbkQsUUFBSSxDQUFDVixHQUFMLEVBQVUsT0FBTyxJQUFQO0FBRVYsUUFBTVcsTUFBTSxHQUFHWixTQUFTLENBQUNDLEdBQUQsQ0FBeEI7QUFFQVksMkRBQVMsQ0FBQyxZQUFNO0FBQ2QsVUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUosRUFBdEI7QUFDQUQsbUJBQWEsQ0FBQ2IsR0FBZCxHQUFvQlcsTUFBcEI7O0FBQ0FFLG1CQUFhLENBQUNFLE1BQWQsR0FBdUIsWUFBTTtBQUMzQkwsZ0JBQVEsQ0FBQztBQUFFTSxlQUFLLEVBQUVILGFBQWEsQ0FBQ0csS0FBdkI7QUFBOEJDLGdCQUFNLEVBQUVKLGFBQWEsQ0FBQ0k7QUFBcEQsU0FBRCxDQUFSO0FBQ0FDLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsT0FIRDtBQUlELEtBUFEsRUFPTixDQUFDbEIsR0FBRCxDQVBNLENBQVQ7QUFTQSx3QkFDRSxxRUFBQyxnQkFBRDtBQUNFLFNBQUcsRUFBRW1CLFFBQVEsR0FBR0MsV0FBSCxHQUFpQkMsYUFEaEM7QUFFRSxXQUFLLEVBQUVGLFFBQVEsR0FBRyxFQUFILEdBQVE7QUFBRUcsY0FBTSxFQUFFLFlBQVY7QUFBd0JDLGVBQU8sRUFBRTtBQUFqQztBQUZ6QixPQUdNZCxLQUhOLEdBSU1GLEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBUUQsR0F4QkQ7O0FBRHNDLEtBQ2hDRixRQURnQzs7QUEyQnRDLFNBQU9BLFFBQVA7QUFDRCxDQTVCRDs7QUE4QmVGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYmFzZS9JbWFnZS9sb2FkSW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHsgc3JjPzogc3RyaW5nOyBhbHQ/OiBzdHJpbmcgfVxuXG5jb25zdCBnZXRTb3VyY2UgPSAoc3JjKSA9PiB7XG4gIGlmICghc3JjKSByZXR1cm4gdW5kZWZpbmVkXG5cbiAgcmV0dXJuIHJlcXVpcmUoYH4vYXNzZXRzL2ltYWdlcy8ke3NyY30/d2VicGApXG59XG5cbmNvbnN0IGNvbXBvbmVudCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IEVuaGFuY2VkID0gKHsgc3JjLCBwbGFjZWhvbGRlciwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIGNvbnN0IFtzaXplcywgc2V0U2l6ZXNdID0gdXNlU3RhdGUoe30pXG5cbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGxcblxuICAgIGNvbnN0IHNvdXJjZSA9IGdldFNvdXJjZShzcmMpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICBvcmlnaW5hbEltYWdlLnNyYyA9IHNvdXJjZVxuICAgICAgb3JpZ2luYWxJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNpemVzKHsgd2lkdGg6IG9yaWdpbmFsSW1hZ2Uud2lkdGgsIGhlaWdodDogb3JpZ2luYWxJbWFnZS5oZWlnaHQgfSlcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpXG4gICAgICB9XG4gICAgfSwgW3NyY10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZWRDb21wb25lbnRcbiAgICAgICAgc3JjPXtpc0xvYWRlZCA/IGZpbmFsU291cmNlIDogcHJldmlld1NvdXJjZX1cbiAgICAgICAgc3R5bGU9e2lzTG9hZGVkID8ge30gOiB7IGZpbHRlcjogJ2JsdXIoMTBweCknLCBvcGFjaXR5OiAwLjUgfX1cbiAgICAgICAgey4uLnNpemVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBFbmhhbmNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/base/Image/loadImage.tsx\n");

/***/ })

})