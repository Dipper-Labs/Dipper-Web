webpackJsonp([1],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("003e4554", content, true, {});

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(59);
exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, ".page-group[data-v-0875372a]{box-sizing:border-box;position:absolute;left:0;top:0;width:100%;height:100%;overflow:hidden;background:#004f67;font-family:Arial,Microsoft Yahei}.text-center[data-v-0875372a]{text-align:center}.lose-main[data-v-0875372a]{background:url(" + escape(__webpack_require__(151)) + ") 0 0 no-repeat;background-size:100%;min-height:540px}.lose-box[data-v-0875372a]{width:440px;height:450px;position:absolute;left:50%;top:50%;margin:-225px 0 0 -220px;text-align:center}.lose-box img[data-v-0875372a]{margin-bottom:50px;width:80%}.lose-box p[data-v-0875372a]{margin:0;color:#fff;line-height:30px;text-align:center;font-size:18px}.lose-box a[data-v-0875372a]{width:218px;height:50px;display:block;margin:50px auto 0;border:1px solid #fff;border-radius:3px;text-align:center;line-height:50px;color:#fff;text-decoration:none;transition:all .4s ease-out}.lose-box a[data-v-0875372a]:hover{background:#fff;color:#004f67;border-color:transparent}", ""]);

// exports


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/bg.907fb8c.png";

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      remark: ""
    };
  },
  mounted: function mounted() {},

  methods: {},
  computed: {}
});

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-group"
  }, [_c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "content-block error-box"
  }, [_c('div', {
    staticClass: "lose-main"
  }, [_c('div', {
    staticClass: "lose-box"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(154)
    }
  }), _vm._v(" "), _c('p', [_vm._v("抱歉，没有找到您请求的页面")]), _vm._v(" "), _c('p', {
    staticClass: "lose-en"
  }, [_vm._v("Sorry, didn't find the page you requet.")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("返回首页")])])])])])])
}]}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/404.fc843d9.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(149)
}
var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(153),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0875372a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ })

});