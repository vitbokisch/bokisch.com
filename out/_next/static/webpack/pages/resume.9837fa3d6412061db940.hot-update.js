webpackHotUpdate_N_E("pages/resume",{

/***/ "./src/components/base/Image/loadImage.tsx":
/*!*************************************************!*\
  !*** ./src/components/base/Image/loadImage.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/vitbokisch/Dev/bokisch.com/src/components/base/Image/loadImage.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// @ts-nocheck\n\n\nvar getSource = function getSource(src, placeholder) {\n  if (!src) return undefined;\n  if (placeholder) return __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$?f3b4\")(\"./\".concat(src, \"\"));\n  return __webpack_require__(\"./src/assets/images sync recursive ^\\\\.\\\\/.*$?24e0\")(\"./\".concat(src, \"\"));\n};\n\nvar component = function component(WrappedComponent) {\n  var _s = $RefreshSig$();\n\n  var Enhanced = function Enhanced(_ref) {\n    _s();\n\n    var src = _ref.src,\n        _ref$placeholder = _ref.placeholder,\n        placeholder = _ref$placeholder === void 0 ? true : _ref$placeholder,\n        _ref$alt = _ref.alt,\n        alt = _ref$alt === void 0 ? '' : _ref$alt,\n        props = Object(_Users_vitbokisch_Dev_bokisch_com_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"src\", \"placeholder\", \"alt\"]);\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n        isLoaded = _useState[0],\n        setLoaded = _useState[1];\n\n    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({}),\n        sizes = _useState2[0],\n        setSizes = _useState2[1];\n\n    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n        source = _useState3[0],\n        setSource = _useState3[1];\n\n    var previewSource = placeholder ? source.trace : undefined;\n    var finalSource = placeholder ? source.src : source;\n    console.log(alt);\n    if (!source) return null;\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n      setLoaded(false);\n      setSource(getSource(src, placeholder));\n    }, [src, placeholder]);\n    Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n      var originalImage = new Image();\n      originalImage.src = finalSource;\n\n      originalImage.onload = function () {\n        setSizes({\n          width: originalImage.width,\n          height: originalImage.height\n        });\n        setLoaded(true);\n      };\n    }, [previewSource, finalSource]);\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(WrappedComponent, _objectSpread(_objectSpread({\n      src: isLoaded ? finalSource : previewSource,\n      style: isLoaded ? {} : {\n        filter: 'blur(10px)',\n        opacity: 0.5\n      },\n      alt: alt\n    }, sizes), props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this);\n  };\n\n  _s(Enhanced, \"hMJsJSmY171ox9FUeLvZv1opXUI=\");\n\n  return Enhanced;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYmFzZS9JbWFnZS9sb2FkSW1hZ2UudHN4PzQzZDYiXSwibmFtZXMiOlsiZ2V0U291cmNlIiwic3JjIiwicGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJyZXF1aXJlIiwiY29tcG9uZW50IiwiV3JhcHBlZENvbXBvbmVudCIsIkVuaGFuY2VkIiwiYWx0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzTG9hZGVkIiwic2V0TG9hZGVkIiwic2l6ZXMiLCJzZXRTaXplcyIsInNvdXJjZSIsInNldFNvdXJjZSIsInByZXZpZXdTb3VyY2UiLCJ0cmFjZSIsImZpbmFsU291cmNlIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm9yaWdpbmFsSW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsdGVyIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQU1DLFdBQU4sRUFBc0I7QUFDdEMsTUFBSSxDQUFDRCxHQUFMLEVBQVUsT0FBT0UsU0FBUDtBQUVWLE1BQUlELFdBQUosRUFBaUIsT0FBT0UsMEVBQVEsWUFBbUJILEdBQXBCLE1BQWQ7QUFFakIsU0FBT0csMEVBQVEsWUFBbUJILEdBQXBCLE1BQWQ7QUFDRCxDQU5EOztBQVFBLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLGdCQUFELEVBQXNCO0FBQUE7O0FBQ3RDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXFEO0FBQUE7O0FBQUEsUUFBbEROLEdBQWtELFFBQWxEQSxHQUFrRDtBQUFBLGdDQUE3Q0MsV0FBNkM7QUFBQSxRQUE3Q0EsV0FBNkMsaUNBQS9CLElBQStCO0FBQUEsd0JBQXpCTSxHQUF5QjtBQUFBLFFBQXpCQSxHQUF5Qix5QkFBbkIsRUFBbUI7QUFBQSxRQUFaQyxLQUFZOztBQUFBLG9CQUN0Q0Msc0RBQVEsQ0FBQyxLQUFELENBRDhCO0FBQUEsUUFDN0RDLFFBRDZEO0FBQUEsUUFDbkRDLFNBRG1EOztBQUFBLHFCQUUxQ0Ysc0RBQVEsQ0FBQyxFQUFELENBRmtDO0FBQUEsUUFFN0RHLEtBRjZEO0FBQUEsUUFFdERDLFFBRnNEOztBQUFBLHFCQUd4Q0osc0RBQVEsRUFIZ0M7QUFBQSxRQUc3REssTUFINkQ7QUFBQSxRQUdyREMsU0FIcUQ7O0FBS3BFLFFBQU1DLGFBQWEsR0FBR2YsV0FBVyxHQUFHYSxNQUFNLENBQUNHLEtBQVYsR0FBa0JmLFNBQW5EO0FBQ0EsUUFBTWdCLFdBQVcsR0FBR2pCLFdBQVcsR0FBR2EsTUFBTSxDQUFDZCxHQUFWLEdBQWdCYyxNQUEvQztBQUVBSyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsR0FBWjtBQUVBLFFBQUksQ0FBQ08sTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUViTywyREFBUyxDQUFDLFlBQU07QUFDZFYsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBSSxlQUFTLENBQUNoQixTQUFTLENBQUNDLEdBQUQsRUFBTUMsV0FBTixDQUFWLENBQVQ7QUFDRCxLQUhRLEVBR04sQ0FBQ0QsR0FBRCxFQUFNQyxXQUFOLENBSE0sQ0FBVDtBQUtBb0IsMkRBQVMsQ0FBQyxZQUFNO0FBQ2QsVUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUosRUFBdEI7QUFDQUQsbUJBQWEsQ0FBQ3RCLEdBQWQsR0FBb0JrQixXQUFwQjs7QUFDQUksbUJBQWEsQ0FBQ0UsTUFBZCxHQUF1QixZQUFNO0FBQzNCWCxnQkFBUSxDQUFDO0FBQUVZLGVBQUssRUFBRUgsYUFBYSxDQUFDRyxLQUF2QjtBQUE4QkMsZ0JBQU0sRUFBRUosYUFBYSxDQUFDSTtBQUFwRCxTQUFELENBQVI7QUFDQWYsaUJBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxPQUhEO0FBSUQsS0FQUSxFQU9OLENBQUNLLGFBQUQsRUFBZ0JFLFdBQWhCLENBUE0sQ0FBVDtBQVNBLHdCQUNFLHFFQUFDLGdCQUFEO0FBQ0UsU0FBRyxFQUFFUixRQUFRLEdBQUdRLFdBQUgsR0FBaUJGLGFBRGhDO0FBRUUsV0FBSyxFQUFFTixRQUFRLEdBQUcsRUFBSCxHQUFRO0FBQUVpQixjQUFNLEVBQUUsWUFBVjtBQUF3QkMsZUFBTyxFQUFFO0FBQWpDLE9BRnpCO0FBR0UsU0FBRyxFQUFFckI7QUFIUCxPQUlNSyxLQUpOLEdBS01KLEtBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0FuQ0Q7O0FBRHNDLEtBQ2hDRixRQURnQzs7QUFzQ3RDLFNBQU9BLFFBQVA7QUFDRCxDQXZDRDs7QUF5Q2VGLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYmFzZS9JbWFnZS9sb2FkSW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHsgc3JjPzogc3RyaW5nOyBhbHQ/OiBzdHJpbmcgfVxuXG5jb25zdCBnZXRTb3VyY2UgPSAoc3JjLCBwbGFjZWhvbGRlcikgPT4ge1xuICBpZiAoIXNyYykgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGlmIChwbGFjZWhvbGRlcikgcmV0dXJuIHJlcXVpcmUoYH4vYXNzZXRzL2ltYWdlcy8ke3NyY30/d2VicCZ0cmFjZWApXG5cbiAgcmV0dXJuIHJlcXVpcmUoYH4vYXNzZXRzL2ltYWdlcy8ke3NyY30/d2VicGApXG59XG5cbmNvbnN0IGNvbXBvbmVudCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IEVuaGFuY2VkID0gKHsgc3JjLCBwbGFjZWhvbGRlciA9IHRydWUsIGFsdCA9ICcnLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc3QgW2lzTG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3NpemVzLCBzZXRTaXplc10gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoKVxuXG4gICAgY29uc3QgcHJldmlld1NvdXJjZSA9IHBsYWNlaG9sZGVyID8gc291cmNlLnRyYWNlIDogdW5kZWZpbmVkXG4gICAgY29uc3QgZmluYWxTb3VyY2UgPSBwbGFjZWhvbGRlciA/IHNvdXJjZS5zcmMgOiBzb3VyY2VcblxuICAgIGNvbnNvbGUubG9nKGFsdClcblxuICAgIGlmICghc291cmNlKSByZXR1cm4gbnVsbFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldExvYWRlZChmYWxzZSlcbiAgICAgIHNldFNvdXJjZShnZXRTb3VyY2Uoc3JjLCBwbGFjZWhvbGRlcikpXG4gICAgfSwgW3NyYywgcGxhY2Vob2xkZXJdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgb3JpZ2luYWxJbWFnZS5zcmMgPSBmaW5hbFNvdXJjZVxuICAgICAgb3JpZ2luYWxJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHNldFNpemVzKHsgd2lkdGg6IG9yaWdpbmFsSW1hZ2Uud2lkdGgsIGhlaWdodDogb3JpZ2luYWxJbWFnZS5oZWlnaHQgfSlcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpXG4gICAgICB9XG4gICAgfSwgW3ByZXZpZXdTb3VyY2UsIGZpbmFsU291cmNlXSlcblxuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlZENvbXBvbmVudFxuICAgICAgICBzcmM9e2lzTG9hZGVkID8gZmluYWxTb3VyY2UgOiBwcmV2aWV3U291cmNlfVxuICAgICAgICBzdHlsZT17aXNMb2FkZWQgPyB7fSA6IHsgZmlsdGVyOiAnYmx1cigxMHB4KScsIG9wYWNpdHk6IDAuNSB9fVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgey4uLnNpemVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiBFbmhhbmNlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/base/Image/loadImage.tsx\n");

/***/ })

})