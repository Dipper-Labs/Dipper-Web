webpackJsonp([0],Array(56).concat([
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(76)
  __webpack_require__(79)
}
var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(126),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ddfd4014",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(68)('wks');
var uid = __webpack_require__(69);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 59 */
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


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(68)('keys');
var uid = __webpack_require__(69);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(94);
var defined = __webpack_require__(61);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(60);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(5);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(64) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 69 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(58)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(61);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = (typeof document === 'undefined') ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: '',
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {},
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      },
    };
  },
  location: { hash: '' },
} : document; // eslint-disable-line

var win = (typeof window === 'undefined') ? {
  document: doc,
  navigator: {
    userAgent: '',
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      },
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
} : window; // eslint-disable-line




/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = scrollTo;
/* harmony export (immutable) */ __webpack_exports__["c"] = offsetTop;
/* unused harmony export getQueryString */
/* unused harmony export device */
/* unused harmony export userAgentInfo */
/* unused harmony export formatDate */
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* unused harmony export hasClass */
/* harmony export (immutable) */ __webpack_exports__["d"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = isH5;

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

function scrollTo(scroller, to, duration, cb) {
  var start = scroller.scrollTop;
  var change = to - start;
  var increment = 20;
  var currentTime = 0;
  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    scroller.scrollTop = Math.round(val);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    } else if (cb && typeof cb === 'function') {
      cb();
    }
  };
  animateScroll();
}

function offsetTop(el) {
  if (!el.getClientRects().length) {
    return 0;
  }
  var bcr = el.getBoundingClientRect();
  var win = el.ownerDocument.defaultView;
  return bcr.top + win.pageYOffset;
};

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

function device() {
  var device = {};

  var ua = navigator.userAgent;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

  device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;

  if (android) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }

  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  device.pixelRatio = window.devicePixelRatio || 1;

  device.isWeixin = /MicroMessenger/i.test(ua);
  return device;
};

function userAgentInfo(key) {
  var uaArr = navigator.userAgent.split(" ");
  var patt = new RegExp(key + "/");
  var info = '';
  uaArr.map(function (item) {
    if (patt.test(item)) {
      info = item.split('/')[1];
    }
  });
  return info;
}

function formatDate(time, format) {
  Date.prototype.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,

      'd+': this.getDate(),

      'h+': this.getHours(),

      'm+': this.getMinutes(),

      's+': this.getSeconds(),

      'q+': Math.floor((this.getMonth() + 3) / 3),

      'S': this.getMilliseconds()
    };
    if (/(y+)/.test(format) || /(Y+)/.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
      }
    }
    return format;
  };
  return new Date(time).format(format);
};

function addClass(elements, cName) {
  if (!hasClass(elements, cName)) {
    elements.className += " " + cName;
  };
};

function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};

function removeClass(elements, cName) {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
  };
};

function isH5() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsUcBrowser = sUserAgent.match(/ucbrowser/i) == "ucbrowser";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsUcBrowser) {
    return true;
  } else {
    return false;
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/logo.0b05a1f.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("6c6f041e", content, true, {});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(59);
exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "body[data-v-ddfd4014]{font:14px Lucida Grande,Helvetica,Arial,sans-serif;color:#fff}.container[data-v-ddfd4014]{position:relative;padding:2.5rem 0 4rem}.body-bg[data-v-ddfd4014]{background:linear-gradient(90deg,#e7ecfd,#fff,#e7ecfd)}.body-bg-2[data-v-ddfd4014]{background:linear-gradient(90deg,#eef1fd,#fff,#eef1fd)}.commom-cont[data-v-ddfd4014]{position:relative;max-width:1100px;margin:0 auto;z-index:999}.content-title[data-v-ddfd4014]{text-align:center;color:#27d4a2;font-size:30px;margin-bottom:80px}.section-t[data-v-ddfd4014]{color:#333;font-size:2rem;line-height:2.4rem}.section-t-2[data-v-ddfd4014]{color:#333;font-size:1.6rem;line-height:2.4rem;margin:4rem 0 1rem}.section-t-3[data-v-ddfd4014]{line-height:30px}.banner-wrap[data-v-ddfd4014]{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100vh}.banner-wrap .content[data-v-ddfd4014]{width:70%;text-align:left;color:#fff}.banner-wrap .slogen-1[data-v-ddfd4014]{font-size:60px;margin:2.8rem 0}.banner-wrap .slogen-1 .p-1[data-v-ddfd4014]{margin-bottom:40px;color:#27d4a2;font-weight:600}.banner-wrap .slogen-1 .p-2[data-v-ddfd4014]{font-size:1.4rem}.banner-wrap .slogen-2[data-v-ddfd4014]{font-size:60px;margin:2.8rem 0}.banner-wrap .slogen-2 .p-1[data-v-ddfd4014]{margin-bottom:40px;color:#27d4a2;font-weight:600}.banner-wrap .slogen-2 .p-2[data-v-ddfd4014]{font-size:1.4rem}.swiper-slide-1[data-v-ddfd4014]{background:linear-gradient(90deg,#363552,#1f2326);background-size:100% 100%}.swiper-slide-1 .slide-cont[data-v-ddfd4014]{position:absolute;bottom:0;right:0;width:60%}.swiper-slide-2[data-v-ddfd4014]{background:linear-gradient(90deg,#363552,#1f2326);background-size:100% 100%}.swiper-slide-2 .slide-cont[data-v-ddfd4014]{position:absolute;top:0;bottom:0;right:0;width:80%;height:100%}.about-wrap[data-v-ddfd4014]{padding:6rem 0;background:linear-gradient(90deg,#e7ecfd,#fff,#e7ecfd)}.about-wrap .content[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.about-wrap .img-wrap[data-v-ddfd4014]{width:50%;text-align:center}.about-wrap img[data-v-ddfd4014]{max-width:80%}.about-wrap .des-wrap[data-v-ddfd4014]{width:40%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;font-size:16px}.about-wrap .des-wrap .des-1[data-v-ddfd4014]{color:#27d4a2;font-weight:600}.about-wrap .des-wrap .des-2[data-v-ddfd4014]{color:#323232}.about-wrap .des-wrap .des-3[data-v-ddfd4014]{color:#6d6d6d}.about-wrap .des-wrap .des-3 p[data-v-ddfd4014]{line-height:2}.zoology-wrap[data-v-ddfd4014]{background:linear-gradient(90deg,#eef1fd,#fff,#eef1fd)}.zoology-wrap .item-wrap[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.zoology-wrap .item .img-wrap[data-v-ddfd4014]{margin-bottom:30px}.zoology-wrap .item .img-wrap img[data-v-ddfd4014]{width:80%}.zoology-wrap .item p[data-v-ddfd4014]{text-align:center;color:#323232;width:80%}.zoology-wrap .des[data-v-ddfd4014]{margin-top:60px;text-align:center}.zoology-wrap .des p[data-v-ddfd4014]{line-height:2;color:#6d6d6d}.advantages-wrap[data-v-ddfd4014]{background:linear-gradient(90deg,#e7ecfd,#fff,#e7ecfd)}.advantages-wrap .content[data-v-ddfd4014]{position:relative;margin:0 auto}.advantages-wrap img[data-v-ddfd4014]{max-width:80%}.advantages-wrap .item-wrap[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.advantages-wrap .des-wrap[data-v-ddfd4014]{width:40%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;font-size:16px}.advantages-wrap .des-wrap h3[data-v-ddfd4014]{color:#323232;padding-left:5px;border-left:3px solid #27d4a2}.advantages-wrap .des-wrap p[data-v-ddfd4014]{color:#6d6d6d;line-height:1.8}.advantages-wrap .img-wrap[data-v-ddfd4014]{width:50%;text-align:center}.model-wrap[data-v-ddfd4014]{background:linear-gradient(90deg,#eef1fd,#fff,#eef1fd)}.model-wrap .item-wrap[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;text-align:center}.model-wrap .item-wrap .item[data-v-ddfd4014]{padding:0 30px;border-right:1px solid #e7ecfd;-ms-flex:1;flex:1}.model-wrap .item-wrap .item[data-v-ddfd4014]:last-child{border-right:none}.model-wrap .item-wrap .des[data-v-ddfd4014]{margin-top:40px}.model-wrap .item-wrap .des p[data-v-ddfd4014]{line-height:1.6;color:#6d6d6d}.model-wrap img[data-v-ddfd4014]{width:120px}.roadmap-wrap[data-v-ddfd4014]{background:#403c69}.roadmap-wrap .content[data-v-ddfd4014]{position:relative;width:80%;margin:0 auto}.roadmap-wrap .des-1[data-v-ddfd4014]{margin-bottom:30px}.roadmap-wrap .roadmap-bg[data-v-ddfd4014]{position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:60%;height:90%;background:url(" + escape(__webpack_require__(78)) + ") no-repeat;background-size:100% 100%;z-index:10}.roadmap-wrap .time-line-wrap[data-v-ddfd4014]{position:relative;z-index:100}.team-wrap[data-v-ddfd4014]{position:relative;overflow:hidden;padding:5rem 0;background:linear-gradient(90deg,#e7ecfd,#fff,#e7ecfd)}.team-wrap .content[data-v-ddfd4014]{text-align:center}.team-wrap .bg-1[data-v-ddfd4014]{position:absolute;top:0;left:0;width:38%}.team-wrap .bg-2[data-v-ddfd4014]{position:absolute;right:0;bottom:0;width:30%}.team-wrap .section-t[data-v-ddfd4014]{margin-bottom:3rem;color:#fff}.team-wrap .intr-cont[data-v-ddfd4014]{padding:1rem;border-radius:10px;background-image:linear-gradient(180deg,#fff,#e7ecfd);border:1px solid #bfbfd1}.team-wrap .intr-cont img[data-v-ddfd4014]{width:8rem;height:8rem;border-radius:50%}.team-wrap .intr-cont p[data-v-ddfd4014]{color:#666;line-height:1.4rem}.team-wrap .intr-cont .intr-title[data-v-ddfd4014]{display:inline-block;width:auto;text-align:center;padding:0 .5rem .2rem;margin-bottom:.5rem;border-bottom:2px solid #27d4a2}.team-wrap .des-1[data-v-ddfd4014]{width:22rem;height:13rem;margin:0 auto;margin-bottom:1rem}.team-wrap .des-1 img[data-v-ddfd4014]{margin-bottom:1rem}.team-wrap .des-2[data-v-ddfd4014]{display:-ms-flexbox;display:flex}.team-wrap .des-2 .item[data-v-ddfd4014]{width:15rem;-ms-flex:1;flex:1;margin:0 2rem 2rem}.team-wrap .des-2 .item-1[data-v-ddfd4014]{margin-left:0}.team-wrap .des-2 img[data-v-ddfd4014]{margin-bottom:.5rem}.footer .content[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:2rem 0}.footer .text-wrap[data-v-ddfd4014]{color:#666;line-height:1.4rem}.copyright[data-v-ddfd4014]{width:100%;height:2rem;line-height:2rem;text-align:center;font-size:.8rem;font-weight:400;color:hsla(0,0%,100%,.3);background:#333}@media (max-width:768px){.section-t[data-v-ddfd4014]{font-size:1.4rem;line-height:2rem}.container[data-v-ddfd4014]{padding:4em 1rem}.content-title[data-v-ddfd4014]{text-align:center;color:#27d4a2;font-size:24px;margin-top:0;margin-bottom:40px}.banner-wrap .content[data-v-ddfd4014]{padding-top:0;width:100%;text-align:left}.banner-wrap .slogen-1[data-v-ddfd4014]{font-size:30px;margin:0 2rem}.banner-wrap .slogen-1 .p-1[data-v-ddfd4014]{margin-bottom:24px;color:#27d4a2;font-weight:600}.banner-wrap .slogen-1 .p-2[data-v-ddfd4014]{font-size:1rem}.banner-wrap .slogen-2[data-v-ddfd4014]{font-size:30px;margin:0 2rem}.banner-wrap .slogen-2 .p-1[data-v-ddfd4014]{margin-bottom:24px;color:#27d4a2;font-weight:600}.banner-wrap .slogen-2 .p-2[data-v-ddfd4014]{font-size:1rem}.swiper-slide-1[data-v-ddfd4014]{background:linear-gradient(145deg,#363552,#1f2326);background-size:100% 100%}.swiper-slide-1 .slide-cont[data-v-ddfd4014]{position:absolute;bottom:0;right:0;width:80%}.swiper-slide-2[data-v-ddfd4014]{background:linear-gradient(145deg,#363552,#1f2326);background-size:100% 100%}.swiper-slide-2 .slide-cont[data-v-ddfd4014]{position:absolute;top:0;bottom:0;right:0;width:100%;height:100%}.about-wrap[data-v-ddfd4014]{padding:4rem 1rem}.about-wrap .content[data-v-ddfd4014]{max-width:1167px;margin:0 auto;display:block;text-align:center}.about-wrap .img-wrap[data-v-ddfd4014]{width:100%;text-align:center;margin-right:5rem}.about-wrap img[data-v-ddfd4014]{max-width:80%;margin-top:1.5rem}.about-wrap .des-wrap[data-v-ddfd4014]{width:100%}.about-wrap .des-wrap .des-2[data-v-ddfd4014]{margin:1.5rem 0}.about-wrap .des-wrap .des-3[data-v-ddfd4014]{font-size:14px}.advantages-wrap[data-v-ddfd4014]{padding:4em 1rem 2rem}.advantages-wrap .item-wrap[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;text-align:center;margin-bottom:35px}.advantages-wrap .item-wrap-center[data-v-ddfd4014]{-ms-flex-wrap:wrap;flex-wrap:wrap}.advantages-wrap .img-wrap[data-v-ddfd4014]{margin:0 auto;width:80%}.advantages-wrap .des-wrap[data-v-ddfd4014]{width:100%;font-size:12px}.advantages-wrap .des-wrap h3[data-v-ddfd4014]{border-left:none}.zoology-wrap .content[data-v-ddfd4014]{display:block;text-align:center}.zoology-wrap .bg[data-v-ddfd4014]{width:100%}.zoology-wrap .item[data-v-ddfd4014]{font-size:13px}.zoology-wrap .item .img-wrap[data-v-ddfd4014]{width:100%;margin-bottom:10px}.zoology-wrap .item img[data-v-ddfd4014]{max-width:90%}.zoology-wrap .item p[data-v-ddfd4014]{width:100%;font-size:12px}.zoology-wrap .des[data-v-ddfd4014]{font-size:12px;margin-top:30px}.model-wrap[data-v-ddfd4014]{padding:4em 1rem 2rem}.model-wrap .content[data-v-ddfd4014]{text-align:center}.model-wrap .des-2[data-v-ddfd4014]{width:100%;line-height:1.5rem;margin:2rem 0;font-size:14px}.model-wrap .des-3[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:1.2rem;font-size:14px}.model-wrap .des-3 .title[data-v-ddfd4014]{font-size:16px;margin-bottom:.5rem}.model-wrap .des-3 .item[data-v-ddfd4014]{-ms-flex:none;flex:none;width:50%;margin-bottom:2rem}.model-wrap .item-wrap[data-v-ddfd4014]{display:block}.model-wrap .item-wrap .item[data-v-ddfd4014]{padding:0;border-right:none;-ms-flex:1;flex:1;margin-bottom:40px}.model-wrap .item-wrap .des[data-v-ddfd4014]{margin-top:10px}.model-wrap .item-wrap .des h3[data-v-ddfd4014]{font-size:14px}.model-wrap .item-wrap .des p[data-v-ddfd4014]{line-height:1.6;color:#6d6d6d;font-size:12px}.model-wrap img[data-v-ddfd4014]{width:80px}.roadmap-wrap[data-v-ddfd4014]{background:#403c69;padding:4em 0}.roadmap-wrap .content[data-v-ddfd4014]{position:relative;width:100%;margin:0 auto}.roadmap-wrap .des-1[data-v-ddfd4014]{margin-bottom:30px}.roadmap-wrap .roadmap-bg[data-v-ddfd4014]{display:none}.roadmap-wrap .time-line-wrap[data-v-ddfd4014]{position:relative;z-index:100}.team-wrap[data-v-ddfd4014]{position:relative;overflow:hidden}.team-wrap .content[data-v-ddfd4014]{text-align:center}.team-wrap .bg-1[data-v-ddfd4014]{position:absolute;top:0;left:0;width:60%}.team-wrap .bg-2[data-v-ddfd4014]{position:absolute;right:0;bottom:0;width:60%}.team-wrap .intr-cont[data-v-ddfd4014]{font-size:12px;padding:1.5rem;line-height:1.5rem}.team-wrap .intr-cont img[data-v-ddfd4014]{width:7rem;height:7rem;border-radius:50%}.team-wrap .des-1[data-v-ddfd4014]{height:11.8rem;margin:0 auto;margin-bottom:1.5rem}.team-wrap .des-1 img[data-v-ddfd4014]{margin-bottom:.5rem}.team-wrap .des-2[data-v-ddfd4014]{display:block}.team-wrap .des-2 .item[data-v-ddfd4014]{-ms-flex:1;flex:1;margin:0 auto;margin-bottom:1.5rem}.team-wrap .des-2 .item-1[data-v-ddfd4014]{margin-left:auto}.team-wrap .des-2 img[data-v-ddfd4014]{margin-bottom:.5rem}.footer[data-v-ddfd4014]{padding:1rem}.footer .content[data-v-ddfd4014]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:1rem 0;font-size:14px}.footer .text-wrap[data-v-ddfd4014]{line-height:1.4rem}.footer a[data-v-ddfd4014]{text-decoration:none}}", ""]);

// exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/roadmap_bg.cabde81.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("259b012e", content, true, {});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, ".swiper-pagination-bullet{background:#27d4a2!important}", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_swiper__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_swiper_dist_css_swiper_min_css__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_swiper_dist_css_swiper_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_swiper_dist_css_swiper_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_components_navBar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_components_navBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_components_navBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_components_FooterBar__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_components_FooterBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_components_FooterBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_components_TimeLine_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_components_TimeLine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_components_TimeLine_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(74);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  components: {
    NavBar: __WEBPACK_IMPORTED_MODULE_3__pages_components_navBar___default.a,
    TimeLine: __WEBPACK_IMPORTED_MODULE_5__pages_components_TimeLine_vue___default.a,
    FooterBar: __WEBPACK_IMPORTED_MODULE_4__pages_components_FooterBar___default.a
  },
  data: function data() {
    return {
      scrollTop: 0,
      downloadUrl: "",
      wxmask: false,
      isH5: Object(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* isH5 */])(),
      roadMap: this.setRoadMap(5)
    };
  },
  mounted: function mounted() {
    var that = this;
    document.title = this.$t("title");

    setTimeout(function () {
      that.initSwiper();
    }, 1000);

    that.$nextTick(function () {
      var nodeArray = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(document.querySelectorAll(".animate-fadeInUp")));
      ScrollReveal().reveal(nodeArray, {
        beforeReveal: that.addAnimationUp
      });
    });
    that.$nextTick(function () {
      var nodeArray = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(document.querySelectorAll(".animate-fadeInUp")));
      ScrollReveal().reveal(nodeArray, {
        beforeReveal: that.addAnimationDown
      });
    });

    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  },
  created: function created() {},

  methods: {
    setRoadMap: function setRoadMap(n, currentIndex) {
      var tempArr = [];
      for (var i = 1; i <= n; i++) {
        tempArr.push({
          name: "map" + i,
          active: i == currentIndex
        });
      }
      return tempArr;
    },
    handleScroll: function handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    scrollspy: function scrollspy() {
      console.log(1);
    },
    addAnimationUp: function addAnimationUp(el) {
      el.classList.remove("fadeInUp");
      el.classList.add("fadeInUp");
    },
    addAnimationDown: function addAnimationDown(el) {
      el.classList.remove("fadeInUp");
      el.classList.add("fadeInUp");
    },
    initSwiper: function initSwiper() {
      var mySwiper = new __WEBPACK_IMPORTED_MODULE_1_swiper__["a" /* default */](".swiper-container", {
        loop: true,
        autoplay: true,
        speed: 3000,

        pagination: {
          el: ".swiper-pagination"
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

        scrollbar: {
          el: ".swiper-scrollbar"
        }
      });
    },
    jumpTo: function jumpTo(routerName) {
      this.$router.push(routerName);
    },
    msg: function msg() {
      this.$layer.msg("为了更好的体验，敬请期待～");
    },
    removeStorage: function removeStorage() {
      location.removeItem("phone");
    }
  }
});

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(83);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(99);
module.exports = __webpack_require__(5).Array.from;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(86)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(87)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(60);
var defined = __webpack_require__(61);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(64);
var $export = __webpack_require__(14);
var redefine = __webpack_require__(88);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(62);
var $iterCreate = __webpack_require__(89);
var setToStringTag = __webpack_require__(71);
var getPrototypeOf = __webpack_require__(98);
var ITERATOR = __webpack_require__(58)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(90);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(71);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(58)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(91);
var enumBugKeys = __webpack_require__(70);
var IE_PROTO = __webpack_require__(63)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(97).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(92);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(93);
var enumBugKeys = __webpack_require__(70);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(65);
var arrayIndexOf = __webpack_require__(95)(false);
var IE_PROTO = __webpack_require__(63)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(66);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(65);
var toLength = __webpack_require__(67);
var toAbsoluteIndex = __webpack_require__(96);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(60);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(72);
var IE_PROTO = __webpack_require__(63)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(16);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(72);
var call = __webpack_require__(100);
var isArrayIter = __webpack_require__(101);
var toLength = __webpack_require__(67);
var createProperty = __webpack_require__(102);
var getIterFn = __webpack_require__(103);

$export($export.S + $export.F * !__webpack_require__(105)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(62);
var ITERATOR = __webpack_require__(58)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(15);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(104);
var ITERATOR = __webpack_require__(58)('iterator');
var Iterators = __webpack_require__(62);
module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(66);
var TAG = __webpack_require__(58)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(58)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ssr_window__ = __webpack_require__(73);
/**
 * Swiper 4.5.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 13, 2019
 */




const Methods = {
  addClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["c" /* addClass */],
  removeClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["E" /* removeClass */],
  hasClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["m" /* hasClass */],
  toggleClass: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["H" /* toggleClass */],
  attr: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["e" /* attr */],
  removeAttr: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["D" /* removeAttr */],
  data: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["i" /* data */],
  transform: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["I" /* transform */],
  transition: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["J" /* transition */],
  on: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["u" /* on */],
  off: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["s" /* off */],
  trigger: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["L" /* trigger */],
  transitionEnd: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["K" /* transitionEnd */],
  outerWidth: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["w" /* outerWidth */],
  outerHeight: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["v" /* outerHeight */],
  offset: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["t" /* offset */],
  css: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["h" /* css */],
  each: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["j" /* each */],
  html: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["n" /* html */],
  text: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["G" /* text */],
  is: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["p" /* is */],
  index: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["o" /* index */],
  eq: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["k" /* eq */],
  append: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["d" /* append */],
  prepend: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["z" /* prepend */],
  next: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["q" /* next */],
  nextAll: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["r" /* nextAll */],
  prev: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["A" /* prev */],
  prevAll: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["B" /* prevAll */],
  parent: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["x" /* parent */],
  parents: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["y" /* parents */],
  closest: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["g" /* closest */],
  find: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["l" /* find */],
  children: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["f" /* children */],
  remove: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["C" /* remove */],
  add: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["b" /* add */],
  styles: __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["F" /* styles */],
};

Object.keys(Methods).forEach((methodName) => {
  __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */].fn[methodName] = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */].fn[methodName] || Methods[methodName];
});

const Utils = {
  deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  },
  now() {
    return Date.now();
  },
  getTranslate(el, axis = 'x') {
    let matrix;
    let curTransform;
    let transformMatrix;

    const curStyle = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].getComputedStyle(el, null);

    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map((a) => a.replace(',', '.')).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  parseUrlQuery(url) {
    const query = {};
    let urlToParse = url || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.href;
    let i;
    let params;
    let param;
    let length;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter((paramsPart) => paramsPart !== '');
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend(...args) {
    const to = Object(args[0]);
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
};

const Support = (function Support() {
  const testDiv = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div');
  return {
    touch: (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr.touch === true) || (function checkTouch() {
      return !!((__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.maxTouchPoints > 0) || ('ontouchstart' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]) || (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].DocumentTouch && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */] instanceof __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].DocumentTouch));
    }()),

    pointerEvents: !!(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.pointerEnabled || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].PointerEvent || ('maxTouchPoints' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.maxTouchPoints > 0)),
    prefixedPointerEvents: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.msPointerEnabled,

    transition: (function checkTransition() {
      const style = testDiv.style;
      return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
    }()),
    transforms3d: (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
      const style = testDiv.style;
      return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
    }()),

    flexbox: (function checkFlexbox() {
      const style = testDiv.style;
      const styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
      for (let i = 0; i < styles.length; i += 1) {
        if (styles[i] in style) return true;
      }
      return false;
    }()),

    observer: (function checkObserver() {
      return ('MutationObserver' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */] || 'WebkitMutationObserver' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]);
    }()),

    passiveListener: (function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          },
        });
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }()),

    gestures: (function checkGestures() {
      return 'ongesturestart' in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */];
    }()),
  };
}());

const Browser = (function Browser() {
  function isSafari() {
    const ua = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.toLowerCase();
    return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
  }
  return {
    isIE: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/Trident/g) || !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/MSIE/g),
    isEdge: !!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent),
  };
}());

class SwiperClass {
  constructor(params = {}) {
    const self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach((eventName) => {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach((event) => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  }

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      handler.apply(self, args);
      self.off(events, onceHandler);
      if (onceHandler.f7proxy) {
        delete onceHandler.f7proxy;
      }
    }
    onceHandler.f7proxy = handler;
    return self.on(events, onceHandler, priority);
  }

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach((event) => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  }

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach((event) => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach((eventHandler) => {
          handlers.push(eventHandler);
        });
        handlers.forEach((eventHandler) => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

  useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  }

  useModules(modulesParams = {}) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      const moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach((modulePropName) => {
          const moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach((moduleEventName) => {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }

  static set components(components) {
    const Class = this;
    if (!Class.use) return;
    Class.use(components);
  }

  static installModule(module, ...params) {
    const Class = this;
    if (!Class.prototype.modules) Class.prototype.modules = {};
    const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`);
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach((key) => {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach((key) => {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  }

  static use(module, ...params) {
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach((m) => Class.installModule(m));
      return Class;
    }
    return Class.installModule(module, ...params);
  }
}

function updateSize () {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

  Utils.extend(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height,
  });
}

function updateSlides () {
  const swiper = this;
  const params = swiper.params;

  const {
    $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];

  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.snapGrid.length;

  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
  }

  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) slides.css({ marginLeft: '', marginTop: '' });
  else slides.css({ marginRight: '', marginBottom: '' });

  let slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  let slideSize;
  const slidesPerColumn = params.slidesPerColumn;
  const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (
        (params.slidesPerColumnFill === 'column')
        || (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1)
      ) {
        if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - (column * slidesPerColumn);
          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
            row += 1;
            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          const groupIndex = Math.floor(i / params.slidesPerGroup);
          row = Math.floor(i / params.slidesPerView) - groupIndex * params.slidesPerColumn;
          column = i - row * params.slidesPerView - groupIndex * params.slidesPerView;
        }
        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
        slide
          .css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - (row * slidesPerRow);
      }
      slide
        .css(
          `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
          (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
        )
        .attr('data-swiper-column', column)
        .attr('data-swiper-row', row);
    }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      const slideStyles = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].getComputedStyle(slide[0], null);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;
      if (currentTransform) {
        slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal()
          ? slide.outerWidth(true)
          : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          const width = parseFloat(slideStyles.getPropertyValue('width'));
          const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
          const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
          const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
          const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
            slideSize = width + marginLeft + marginRight;
          } else {
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
          }
        } else {
          const height = parseFloat(slideStyles.getPropertyValue('height'));
          const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
          const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
          const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
          const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
          const boxSizing = slideStyles.getPropertyValue('box-sizing');
          if (boxSizing && boxSizing === 'border-box' && !Browser.isIE) {
            slideSize = height + marginTop + marginBottom;
          } else {
            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
          }
        }
      }
      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = `${slideSize}px`;
        } else {
          slides[i].style.height = `${slideSize}px`;
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);


    if (params.centeredSlides) {
      slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;

    prevSlideSize = slideSize;

    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  let newSlidesGrid;

  if (
    rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
  }
  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({ marginLeft: `${spaceBetween}px` });
      else slides.css({ marginRight: `${spaceBetween}px` });
    } else slides.css({ marginBottom: `${spaceBetween}px` });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid,
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight (speed) {
  const swiper = this;
  const activeSlides = [];
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      const index = swiper.activeIndex + i;
      if (index > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(index)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset () {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const { slides, rtlTranslate: rtl } = swiper;

  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    const slideProgress = (
      (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
    ) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility) {
      const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
                || (slideAfter > 1 && slideAfter <= swiper.size)
                || (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.visibleSlides);
}

function updateProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let { progress, isBeginning, isEnd } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / (translatesDiff);
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress,
    isBeginning,
    isEnd,
  });

  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses () {
  const swiper = this;

  const {
    slides, params, $wrapperEl, activeIndex, realIndex,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;

  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);

  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex (newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex,
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

  Utils.extend(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex,
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  if (swiper.initialized || swiper.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

function updateClickedSlide (e) {
  const swiper = this;
  const params = swiper.params;
  const slide = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide,
};

function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;

  const {
    params, rtlTranslate: rtl, translate, $wrapperEl,
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;

  return currentTranslate || 0;
}

function setTranslate (translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl, params, $wrapperEl, progress,
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    else $wrapperEl.transform(`translate(${x}px, ${y}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate () {
  return (-this.snapGrid[0]);
}

function maxTranslate () {
  return (-this.snapGrid[this.snapGrid.length - 1]);
}

var translate = {
  getTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
};

function setTransition (duration, byController) {
  const swiper = this;

  swiper.$wrapperEl.transition(duration);

  swiper.emit('setTransition', duration, byController);
}

function transitionStart (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, params, previousIndex } = swiper;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, previousIndex } = swiper;
  swiper.animating = false;
  swiper.setTransition(0);

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd,
};

function slideTo (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;

  const {
    params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl,
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  let snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';
  else if (slideIndex < activeIndex) direction = 'prev';
  else direction = 'reset';


  // Update Index
  if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const { params, animating } = swiper;
  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params, animating, snapGrid, slidesGrid, rtlTranslate,
  } = swiper;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
  const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val));

  const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  const prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  let prevIndex;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let index = swiper.activeIndex;
  const snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
      index = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;

  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (
        (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
        || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
      ) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
          .eq(0)
          .index();

        Utils.nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl
        .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
        .eq(0)
        .index();

      Utils.nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide,
};

function loopCreate () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;
  // Remove duplicated slides
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();

  let slides = $wrapperEl.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;

  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((index, el) => {
    const slide = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(el);
    if (index < swiper.loopedSlides) appendSlides.push(el);
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index);
  });
  for (let i = 0; i < appendSlides.length; i += 1) {
    $wrapperEl.append(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $wrapperEl.prepend(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix () {
  const swiper = this;
  const {
    params, activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl,
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;

  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();


  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy () {
  const swiper = this;
  const { $wrapperEl, params, slides } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy,
};

function setGrabCursor (moving) {
  const swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) return;
  const el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor () {
  const swiper = this;
  if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor,
};

function appendSlide (slides) {
  const swiper = this;
  const { $wrapperEl, params } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide (slides) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide (index, slides) {
  const swiper = this;
  const { $wrapperEl, params, activeIndex } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide (slidesIndexes) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides () {
  const swiper = this;

  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide,
  prependSlide,
  addSlide,
  removeSlide,
  removeAllSlides,
};

const Device = (function Device() {
  const ua = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent;

  const device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].cordova || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].phonegap,
    phonegap: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].cordova || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].phonegap,
  };

  const windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


  // Windows
  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  }
  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Desktop
  device.desktop = !(device.os || device.android || device.webView);

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  // Minimal UI
  if (device.os && device.os === 'ios') {
    const osVersionArr = device.osVersion.split('.');
    const metaViewport = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView
      && (ipod || iphone)
      && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
      && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  }

  // Pixel Ratio
  device.pixelRatio = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].devicePixelRatio || 1;

  // Export object
  return device;
}());

function onTouchStart (event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const { params, touches } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;
  if (params.noSwiping && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (
    edgeSwipeDetection
    && ((startX <= edgeSwipeThreshold)
    || (startX >= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].screen.width - edgeSwipeThreshold))
  ) {
    return;
  }

  Utils.extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined,
  });

  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if (Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is(data.formElements)) preventDefault = false;
    if (
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement
      && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement).is(data.formElements)
      && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement !== e.target
    ) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}

function onTouchMove (event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const { params, touches, rtlTranslate: rtl } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data.isTouchEvent && e.type === 'mousemove') return;
  const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
      });
      data.touchStartTime = Utils.now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (
        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
        || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
      ) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (
      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
      || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
    ) {
      return;
    }
  }
  if (data.isTouchEvent && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement) {
    if (e.target === __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;

  touches.currentX = pageX;
  touches.currentY = pageY;

  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if ((diffX * diffX) + (diffY * diffY) >= 25) {
        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  e.preventDefault();
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;

  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;

  diff *= params.touchRatio;
  if (rtl) diff = -diff;

  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;

  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }


  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return;

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime,
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now(),
    });
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd (event) {
  const swiper = this;
  const data = swiper.touchEventsData;

  const {
    params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid,
  } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = Utils.now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
      if (data.clickTimeout) clearTimeout(data.clickTimeout);
      data.clickTimeout = Utils.nextTick(() => {
        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }, 300);
    }
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
      if (data.clickTimeout) clearTimeout(data.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data.lastClickTime = Utils.now();
  Utils.nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;

  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();

        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;

      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeModeMomentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;

      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;

      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');

          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + params.slidesPerGroup);
      else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }
    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize () {
  const swiper = this;

  const { params, el } = swiper;

  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    const newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick (e) {
  const swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  const swiper = this;
  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  const target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  const capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mousemove', swiper.onTouchMove, capture);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
}

function detachEvents() {
  const swiper = this;

  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  const target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  const capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mousemove', swiper.onTouchMove, capture);
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
}

var events = {
  attachEvents,
  detachEvents,
};

function setBreakpoint () {
  const swiper = this;
  const {
    activeIndex, initialized, loopedSlides = 0, params,
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;

  // Set breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach((param) => {
        const paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    Utils.extend(swiper.params, breakpointParams);

    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });

    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoint (breakpoints) {
  const swiper = this;
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  let breakpoint = false;
  const points = [];
  Object.keys(breakpoints).forEach((point) => {
    points.push(point);
  });
  points.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    if (swiper.params.breakpointsInverse) {
      if (point <= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth) {
        breakpoint = point;
      }
    } else if (point >= __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = { setBreakpoint, getBreakpoint };

function addClasses () {
  const swiper = this;
  const {
    classNames, params, rtl, $el,
  } = swiper;
  const suffixes = [];

  suffixes.push('initialized');
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }
  // WP8 Touch Events Fix
  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push(`wp8-${params.direction}`);
  }

  suffixes.forEach((suffix) => {
    classNames.push(params.containerModifierClass + suffix);
  });

  $el.addClass(classNames.join(' '));
}

function removeClasses () {
  const swiper = this;
  const { $el, classNames } = swiper;

  $el.removeClass(classNames.join(' '));
}

var classes = { addClasses, removeClasses };

function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
  let image;
  function onReady() {
    if (callback) callback();
  }
  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages () {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(
      imageEl,
      imageEl.currentSrc || imageEl.getAttribute('src'),
      imageEl.srcset || imageEl.getAttribute('srcset'),
      imageEl.sizes || imageEl.getAttribute('sizes'),
      true,
      onReady
    );
  }
}

var images = {
  loadImage,
  preloadImages,
};

function checkOverflow() {
  const swiper = this;
  const wasLocked = swiper.isLocked;

  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;

  // events
  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = { checkOverflow };

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,

  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,

  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,

  // Autoheight
  autoHeight: false,

  // Set wrapper width
  setWrapperSize: false,

  // Virtual Translate
  virtualTranslate: false,

  // Effects
  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,

  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0, // in px
  slidesOffsetAfter: 0, // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,

  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,

  // Round length
  roundLengths: false,

  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,

  // Unique Navigation Elements
  uniqueNavElements: true,

  // Resistance
  resistance: true,
  resistanceRatio: 0.85,

  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  // Cursor
  grabCursor: false,

  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,

  // Images
  preloadImages: true,
  updateOnImagesReady: true,

  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,

  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null, // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,

  // Passive Listeners
  passiveListeners: true,

  // NS
  containerModifierClass: 'swiper-container-', // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',

  // Callbacks
  runCallbacksOnInit: true,
};

/* eslint no-param-reassign: "off" */

const prototypes = {
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  manipulation,
  events,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images,
};

const extendedDefaults = {};

class Swiper extends SwiperClass {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};

    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;

    super(params);

    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    const swiper = this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach((moduleName) => {
      const module = swiper.modules[moduleName];
      if (module.params) {
        const moduleParamName = Object.keys(module.params)[0];
        const moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = { enabled: true };
        }
        if (
          typeof params[moduleParamName] === 'object'
          && !('enabled' in params[moduleParamName])
        ) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
      }
    });

    // Extend defaults with modules params
    const swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Save Dom lib
    swiper.$ = __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */];

    // Find el
    const $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      const swipers = [];
      $el.each((index, containerEl) => {
        const newParams = Utils.extend({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    const $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);

    // Extend Swiper
    Utils.extend(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],

      // Classes
      classNames: [],

      // Slides
      slides: Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

      // Indexes
      activeIndex: 0,
      realIndex: 0,

      //
      isBeginning: true,
      isEnd: false,

      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,

      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,

      // Touch Events
      touchEvents: (function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend'];
        let desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2],
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }()),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined,
      },

      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0,

    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return swiper;
  }

  slidesPerViewDynamic() {
    const swiper = this;
    const {
      params, slides, slidesGrid, size: swiperSize, activeIndex,
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const { snapGrid, params } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
      return swiper;
    }

    swiper.$el
      .removeClass(`${swiper.params.containerModifierClass}${currentDirection} wp8-${currentDirection}`)
      .addClass(`${swiper.params.containerModifierClass}${newDirection}`);

    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}wp8-${newDirection}`);
    }

    swiper.params.direction = newDirection;

    swiper.slides.each((slideIndex, slideEl) => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });

    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();

    return swiper;
  }

  init() {
    const swiper = this;
    if (swiper.initialized) return;

    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }

    // Slide To Initial Slide
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    }

    // Attach events
    swiper.attachEvents();

    // Init Flag
    swiper.initialized = true;

    // Emit
    swiper.emit('init');
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params, $el, $wrapperEl, slides,
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides
          .removeClass([
            params.slideVisibleClass,
            params.slideActiveClass,
            params.slideNextClass,
            params.slidePrevClass,
          ].join(' '))
          .removeAttr('style')
          .removeAttr('data-swiper-slide-index')
          .removeAttr('data-swiper-column')
          .removeAttr('data-swiper-row');
      }
    }

    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      swiper.$el.data('swiper', null);
      Utils.deleteProps(swiper);
    }
    swiper.destroyed = true;

    return null;
  }

  static extendDefaults(newDefaults) {
    Utils.extend(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static get Class() {
    return SwiperClass;
  }

  static get $() {
    return __WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */];
  }
}

var Device$1 = {
  name: 'device',
  proto: {
    device: Device,
  },
  static: {
    device: Device,
  },
};

var Support$1 = {
  name: 'support',
  proto: {
    support: Support,
  },
  static: {
    support: Support,
  },
};

var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser,
  },
  static: {
    browser: Browser,
  },
};

var Resize = {
  name: 'resize',
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      // Emit resize
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy() {
      const swiper = this;
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('resize', swiper.resize.resizeHandler);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
  },
};

const Observer = {
  func: __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].MutationObserver || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].WebkitMutationObserver,
  attach(target, options = {}) {
    const swiper = this;

    const ObserverFunc = Observer.func;
    const observer = new ObserverFunc((mutations) => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].requestAnimationFrame) {
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].requestAnimationFrame(observerUpdate);
      } else {
        __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].setTimeout(observerUpdate, 0);
      }
    });

    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
    });

    swiper.observer.observers.push(observer);
  },
  init() {
    const swiper = this;
    if (!Support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
  },
  destroy() {
    const swiper = this;
    swiper.observer.observers.forEach((observer) => {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  },
};

var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false,
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: [],
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.observer.init();
    },
    destroy() {
      const swiper = this;
      swiper.observer.destroy();
    },
  },
};

const Virtual = {
  update(force) {
    const swiper = this;
    const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
    const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      renderSlide,
      offset: previousOffset,
    } = swiper.virtual;
    swiper.updateActiveIndex();
    const activeIndex = swiper.activeIndex || 0;

    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';
    else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }
    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

    Utils.extend(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()),
      });
      onRendered();
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }
    appendIndexes.forEach((index) => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach((index) => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  },
  renderSlide(slide, index) {
    const swiper = this;
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    const $slideEl = params.renderSlide
      ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.renderSlide.call(swiper, slide, index))
      : Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide(slides) {
    const swiper = this;
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    swiper.virtual.update(true);
  },
  prependSlide(slides) {
    const swiper = this;
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide(slidesIndexes) {
    const swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides() {
    const swiper = this;
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  },
};

var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        removeSlide: Virtual.removeSlide.bind(swiper),
        removeAllSlides: Virtual.removeAllSlides.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {},
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      const overwriteParams = {
        watchSlidesProgress: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    },
  },
};

const Keyboard = {
  handle(event) {
    const swiper = this;
    const { rtlTranslate: rtl } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    // Directions locks
    if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
      return false;
    }
    if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName && (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName.toLowerCase() === 'input' || __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const windowWidth = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerWidth;
      const windowHeight = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
      ];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (
          point[0] >= 0 && point[0] <= windowWidth
          && point[1] >= 0 && point[1] <= windowHeight
        ) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) swiper.slideNext();
      if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) swiper.slidePrev();
    } else {
      if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (kc === 34 || kc === 40) swiper.slideNext();
      if (kc === 33 || kc === 38) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable() {
    const swiper = this;
    if (swiper.keyboard.enabled) return;
    Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable() {
    const swiper = this;
    if (!swiper.keyboard.enabled) return;
    Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  },
};

var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    },
  },
};

function isEventSupported() {
  const eventName = 'onwheel';
  let isSupported = eventName in __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */];

  if (!isSupported) {
    const element = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported
    && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation
    && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature('', '') !== true
  ) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
const Mousewheel = {
  lastScrollTime: Utils.now(),
  event: (function getEvent() {
    if (__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }()),
  normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;

    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) { // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else { // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = (pX < 1) ? -1 : 1;
    }
    if (pY && !sY) {
      sY = (pY < 1) ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY,
    };
  },
  handleMouseEnter() {
    const swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave() {
    const swiper = this;
    swiper.mouseEntered = false;
  },
  handle(event) {
    let e = event;
    const swiper = this;
    const params = swiper.params.mousewheel;

    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;

    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;

    const data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;

    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }
      swiper.mousewheel.lastScrollTime = (new __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].Date()).getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }
      let position = swiper.getTranslate() + (delta * params.sensitivity);
      const wasBeginning = swiper.isBeginning;
      const wasEnd = swiper.isEnd;

      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(() => {
          swiper.slideToClosest();
        }, 300);
      }
      // Emit event
      swiper.emit('scroll', e);

      // Stop autoplay
      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
      // Return page scroll on edge positions
      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  },
  enable() {
    const swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.params.mousewheel.eventsTarged);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable() {
    const swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.params.mousewheel.eventsTarged);
    }
    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  },
};

var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now(),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy() {
      const swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    },
  },
};

const Navigation = {
  update() {
    // Update Navigation Buttons
    const swiper = this;
    const params = swiper.params.navigation;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick(e) {
    const swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init() {
    const swiper = this;
    const params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;

    let $nextEl;
    let $prevEl;
    if (params.nextEl) {
      $nextEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.nextEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.nextEl === 'string'
        && $nextEl.length > 1
        && swiper.$el.find(params.nextEl).length === 1
      ) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.prevEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.prevEl === 'string'
        && $prevEl.length > 1
        && swiper.$el.find(params.prevEl).length === 1
      ) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Utils.extend(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0],
    });
  },
  destroy() {
    const swiper = this;
    const { $nextEl, $prevEl } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  },
};

var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,

      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    fromEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    destroy() {
      const swiper = this;
      swiper.navigation.destroy();
    },
    click(e) {
      const swiper = this;
      const { $nextEl, $prevEl } = swiper.navigation;
      if (
        swiper.params.navigation.hideOnClick
        && !Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is($prevEl)
        && !Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).is($nextEl)
      ) {
        let isHidden;
        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          swiper.emit('navigationShow', swiper);
        } else {
          swiper.emit('navigationHide', swiper);
        }
        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    },
  },
};

const Pagination = {
  update() {
    // Render || Update Pagination bullets/items
    const swiper = this;
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    // Current/Total
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
        current -= (slidesLength - (swiper.loopedSlides * 2));
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
          if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
      if ($el.length > 1) {
        bullets.each((index, bullet) => {
          const $bullet = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              $bullet
                .prev()
                .addClass(`${params.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${params.bulletActiveClass}-prev-prev`);
            }
            if (bulletIndex === lastIndex) {
              $bullet
                .next()
                .addClass(`${params.bulletActiveClass}-next`)
                .next()
                .addClass(`${params.bulletActiveClass}-next-next`);
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          $firstDisplayedBullet
            .prev()
            .addClass(`${params.bulletActiveClass}-prev`)
            .prev()
            .addClass(`${params.bulletActiveClass}-prev-prev`);
          $lastDisplayedBullet
            .next()
            .addClass(`${params.bulletActiveClass}-next`)
            .next()
            .addClass(`${params.bulletActiveClass}-next-next`);
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }
    if (params.type === 'fraction') {
      $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
      $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render() {
    // Render Container
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

    const $el = swiper.pagination.$el;
    let paginationHTML = '';
    if (params.type === 'bullets') {
      const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>`
        + ' / '
        + `<span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el) return;

    let $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.el);
    if ($el.length === 0) return;

    if (
      swiper.params.uniqueNavElements
      && typeof params.el === 'string'
      && $el.length > 1
      && swiper.$el.find(params.el).length === 1
    ) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', `.${params.bulletClass}`, function onClick(e) {
        e.preventDefault();
        let index = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Utils.extend(swiper.pagination, {
      $el,
      el: $el[0],
    });
  },
  destroy() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const $el = swiper.pagination.$el;

    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', `.${params.bulletClass}`);
    }
  },
};

var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-', // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable', // NEW
      lockClass: 'swiper-pagination-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy() {
      const swiper = this;
      swiper.pagination.destroy();
    },
    click(e) {
      const swiper = this;
      if (
        swiper.params.pagination.el
        && swiper.params.pagination.hideOnClick
        && swiper.pagination.$el.length > 0
        && !Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).hasClass(swiper.params.pagination.bulletClass)
      ) {
        const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          swiper.emit('paginationShow', swiper);
        } else {
          swiper.emit('paginationHide', swiper);
        }
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    },
  },
};

const Scrollbar = {
  setTranslate() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const { scrollbar, rtlTranslate: rtl, progress } = swiper;
    const {
      dragSize, trackSize, $dragEl, $el,
    } = scrollbar;
    const params = swiper.params.scrollbar;

    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      } else {
        $dragEl.transform(`translateX(${newPos}px)`);
      }
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      if (Support.transforms3d) {
        $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      } else {
        $dragEl.transform(`translateY(${newPos}px)`);
      }
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition(duration) {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

    const { scrollbar } = swiper;
    const { $dragEl, $el } = scrollbar;

    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

    const divider = swiper.size / swiper.virtualSize;
    const moveDivider = divider * (trackSize / swiper.size);
    let dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize,
      divider,
      moveDivider,
      dragSize,
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition(e) {
    const swiper = this;
    if (swiper.isHorizontal()) {
      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
    }
    return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
  },
  setDragPosition(e) {
    const swiper = this;
    const { scrollbar, rtlTranslate: rtl } = swiper;
    const {
      $el,
      dragSize,
      trackSize,
      dragStartPos,
    } = scrollbar;

    let positionRatio;
    positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
      - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart(e) {
    const swiper = this;
    const params = swiper.params.scrollbar;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
      ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();

    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);

    clearTimeout(swiper.scrollbar.dragTimeout);

    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove(e) {
    const swiper = this;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd(e) {
    const swiper = this;

    const params = swiper.params.scrollbar;
    const { scrollbar } = swiper;
    const { $el } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEventsTouch, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEventsTouch, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const { scrollbar, $el: $swiperEl } = swiper;
    const params = swiper.params.scrollbar;

    let $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0],
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy() {
    const swiper = this;
    swiper.scrollbar.disableDraggable();
  },
};

var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate() {
      const swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy() {
      const swiper = this;
      swiper.scrollbar.destroy();
    },
  },
};

const Parallax = {
  setTransform(el, progress) {
    const swiper = this;
    const { rtl } = swiper;

    const $el = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(el);
    const rtlFactor = rtl ? -1 : 1;

    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if ((x).indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if ((y).indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  },
  setTranslate() {
    const swiper = this;
    const {
      $el, slides, progress, snapGrid,
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
      .each((index, el) => {
        swiper.parallax.setTransform(el, progress);
      });
    slides.each((slideIndex, slideEl) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
        .each((index, el) => {
          swiper.parallax.setTransform(el, slideProgress);
        });
    });
  },
  setTransition(duration = this.params.speed) {
    const swiper = this;
    const { $el } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
      .each((index, parallaxEl) => {
        const $parallaxEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(parallaxEl);
        let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
  },
};

var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    },
  },
};

const Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return distance;
  },
  // Events
  onGestureStart(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (Support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5);
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5);
    }
    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  onGestureEnd(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;

    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;

    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (
        swiper.isHorizontal()
        && (
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
          || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        )
      ) {
        image.isTouched = false;
        return;
      } if (
        !swiper.isHorizontal()
        && (
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
          || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        )
      ) {
        image.isTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();

    image.isMoved = true;
    image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
    image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8);
    }
    if (image.currentX > image.maxX) {
      image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8);
    }
    if (image.currentY > image.maxY) {
      image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8);
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();

    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTouchEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTransitionEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');

      zoom.scale = 1;
      zoom.currentScale = 1;

      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle(e) {
    const swiper = this;
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in(e) {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture, image } = zoom;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);

    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = (offsetX + (slideWidth / 2)) - touchX;
      diffY = (offsetY + (slideHeight / 2)) - touchY;

      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;

      translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
      translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;

      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  out() {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture } = zoom;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove);
  },
  disable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;

    swiper.zoom.enabled = false;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove);
  },
};

var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed',
    },
  },
  create() {
    const swiper = this;
    const zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3,
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {},
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined,
      },
    };

    ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom,
    });

    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }
        scale = value;
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy() {
      const swiper = this;
      swiper.zoom.disable();
    },
    touchStart(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
  },
};

const Lazy = {
  loadInSlide(index, loadInDuplicate = true) {
    const swiper = this;
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    const $slideEl = isVirtual
      ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
      : swiper.slides.eq(index);

    let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) return;

    $images.each((imageIndex, imageEl) => {
      const $imageEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(imageEl);
      $imageEl.addClass(params.loadingClass);

      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');

      swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();
        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });

      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load() {
    const swiper = this;
    const {
      $wrapperEl, params: swiperParams, slides, activeIndex,
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;

    let slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).attr('data-swiper-slide-index');
      }
      return Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
        const index = isVirtual ? Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).attr('data-swiper-slide-index') : Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
        // Prev Slides
        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
};

var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,

      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll() {
      const swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
  },
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

const Controller = {
  LinearSpline: function LinearSpline(x, y) {
    const binarySearch = (function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }());
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction(c) {
    const swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop
        ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
        : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate(setTranslate, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition(duration, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          Utils.nextTick(() => {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  },
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide', // or 'container'
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper),
      },
    });
  },
  on: {
    update() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate(translate, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    },
  },
};

const a11y = {
  makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey(e) {
    const swiper = this;
    const params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    const $targetEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
      $targetEl[0].click();
    }
  },
  notify(message) {
    const swiper = this;
    const notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation() {
    const swiper = this;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination() {
    const swiper = this;
    const params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
        const $bulletEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init() {
    const swiper = this;

    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    const params = swiper.params.a11y;
    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
      },
    });
    Object.keys(a11y).forEach((methodName) => {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    },
  },
};

const History = {
  init() {
    const swiper = this;
    if (!swiper.params.history) return;
    if (!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history || !__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    const history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy() {
    const swiper = this;
    if (!swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState() {
    const swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues() {
    const pathArray = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.pathname.slice(1).split('/').filter((part) => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return { key, value };
  },
  setHistory(key, index) {
    const swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    const slide = swiper.slides.eq(index);
    let value = History.slugify(slide.attr('data-history'));
    if (!__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }
    const currentState = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState({ value }, null, value);
    } else {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.pushState({ value }, null, value);
    }
  },
  slugify(text) {
    return text.toString()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  scrollToSlide(speed, value, runCallbacks) {
    const swiper = this;
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  },
};

var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
  },
};

const HashNavigation = {
  onHashCange() {
    const swiper = this;
    const newHash = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash() {
    const swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history && __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState) {
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */].history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''));
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash = hash || '';
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
    swiper.hashNavigation.initialized = true;
    const hash = __WEBPACK_IMPORTED_MODULE_1_ssr_window__["a" /* document */].location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(__WEBPACK_IMPORTED_MODULE_1_ssr_window__["b" /* window */]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
  },
};

/* eslint no-underscore-dangle: "off" */

const Autoplay = {
  run() {
    const swiper = this;
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Utils.nextTick(() => {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start() {
    const swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop() {
    const swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause(speed) {
    const swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
};

var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;
          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart(speed, internal) {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove() {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    },
  },
};

const Fade = {
  setTranslate() {
    const swiper = this;
    const { slides } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade
        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl
        .css({
          opacity: slideOpacity,
        })
        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, $wrapperEl } = swiper;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      slides.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    },
  },
};

const Cube = {
  setTranslate() {
    const swiper = this;
    const {
      $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({ height: `${swiperWidth}px` });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + (round * 4 * swiperSize);
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = (3 * swiperSize) + (swiperSize * 4 * round);
      }
      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = (slideIndex * 90) + (progress * 90);
        if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`,
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
        const multiplier = 1.5 - (
          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
          + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
        );
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }
    const zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
    $wrapperEl
      .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  },
  setTransition(duration) {
    const swiper = this;
    const { $el, slides } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  },
};

var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    },
  },
};

const Flip = {
  setTranslate() {
    const swiper = this;
    const { slides, rtlTranslate: rtl } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl
        .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, activeIndex, $wrapperEl } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    },
  },
};

const Coverflow = {
  setTranslate() {
    const swiper = this;
    const {
      width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);

      let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
      let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;

      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
      }
    }

    // Set correct perspective for IE10
    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      const ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = `${center}px 50%`;
    }
  },
  setTransition(duration) {
    const swiper = this;
    swiper.slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
  },
};

var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    },
  },
};

const Thumbs = {
  init() {
    const swiper = this;
    const { thumbs: thumbsParams } = swiper.params;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick() {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0_dom7_dist_dom7_modular__["a" /* $ */])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
      else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
      else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
      else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update(initial) {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
      ? thumbsSwiper.slidesPerViewDynamic()
      : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        // Find actual thumbs index to slide to
        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
        else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
        else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  },
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      const { thumbs } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition(duration) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    },
  },
};

// Swiper Class

const components = [
  Device$1,
  Support$1,
  Browser$1,
  Resize,
  Observer$1,
  Virtual$1,
  Keyboard$1,
  Mousewheel$1,
  Navigation$1,
  Pagination$1,
  Scrollbar$1,
  Parallax$1,
  Zoom$1,
  Lazy$1,
  Controller$1,
  A11y,
  History$1,
  HashNavigation$1,
  Autoplay$1,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Thumbs$1
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

/* harmony default export */ __webpack_exports__["a"] = (Swiper);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return removeAttr; });
/* unused harmony export prop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return data; });
/* unused harmony export removeData */
/* unused harmony export dataset */
/* unused harmony export val */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return off; });
/* unused harmony export once */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return transitionEnd; });
/* unused harmony export animationEnd */
/* unused harmony export width */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return outerWidth; });
/* unused harmony export height */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return offset; });
/* unused harmony export hide */
/* unused harmony export show */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return css; });
/* unused harmony export toArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return each; });
/* unused harmony export forEach */
/* unused harmony export filter */
/* unused harmony export map */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return is; });
/* unused harmony export indexOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return append; });
/* unused harmony export appendTo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return prepend; });
/* unused harmony export prependTo */
/* unused harmony export insertBefore */
/* unused harmony export insertAfter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return prevAll; });
/* unused harmony export siblings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return remove; });
/* unused harmony export detach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return add; });
/* unused harmony export empty */
/* unused harmony export scrollTo */
/* unused harmony export scrollTop */
/* unused harmony export scrollLeft */
/* unused harmony export animate */
/* unused harmony export stop */
/* unused harmony export click */
/* unused harmony export blur */
/* unused harmony export focus */
/* unused harmony export focusin */
/* unused harmony export focusout */
/* unused harmony export keyup */
/* unused harmony export keydown */
/* unused harmony export keypress */
/* unused harmony export submit */
/* unused harmony export change */
/* unused harmony export mousedown */
/* unused harmony export mousemove */
/* unused harmony export mouseup */
/* unused harmony export mouseenter */
/* unused harmony export mouseleave */
/* unused harmony export mouseout */
/* unused harmony export mouseover */
/* unused harmony export touchstart */
/* unused harmony export touchend */
/* unused harmony export touchmove */
/* unused harmony export resize */
/* unused harmony export scroll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ssr_window__ = __webpack_require__(73);
/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */


class Dom7 {
  constructor(arr) {
    const self = this;
    // Create array-like object
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  }
}

function $(selector, context) {
  const arr = [];
  let i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
      // String
    if (typeof selector === 'string') {
      let els;
      let tempParent;
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [__WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] || selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
}

function requestAnimationFrame(callback) {
  if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].requestAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].requestAnimationFrame(callback);
  else if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitRequestAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitRequestAnimationFrame(callback);
  return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].cancelAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].cancelAnimationFrame(id);
  else if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitCancelAnimationFrame) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].webkitCancelAnimationFrame(id);
  return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  let el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
        return el.dom7ElementDataStorage[key];
      }

      const dataKey = el.getAttribute(`data-${key}`);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      const attr = el.attributes[i];
      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;
    else if (dataset[key] === 'true') dataset[key] = true;
    else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  const dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        const values = [];
        for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (let i = 0; i < dom.length; i += 1) {
    const el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
  }
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);
    else {
      const parents = $(target).parents(); // eslint-disable-line
      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(' ');
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent,
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent,
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  const events = eventType.split(' ');
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }
  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);
    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }
  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
  const events = args[0].split(' ');
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let evt;
      try {
        evt = new __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        evt = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  const events = ['webkitTransitionEnd', 'transitionend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  const events = ['webkitAnimationEnd', 'animationend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) {
    return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) {
    return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] ? __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].scrollY : el.scrollTop;
    const scrollLeft = el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */] ? __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].scrollX : el.scrollLeft;
    return {
      top: (box.top + scrollTop) - clientTop,
      left: (box.left + scrollLeft) - clientLeft,
    };
  }

  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (__WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  let i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (let prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  const arr = [];
  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  const matchedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  const modifiedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */]) return el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */];
  else if (selector === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */]) return el === __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;
  let returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append(...args) {
  let newChild;

  for (let k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["a" /* document */].createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  let closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  const children = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].childNodes;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...args) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < args.length; i += 1) {
    const toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo(...args) {
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2));
      let done;
      if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop));
      if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft));
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing', // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - (Math.cos(progress * Math.PI) / 2);
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];

      // Define & Cache Initials & Units
      a.elements.each((index, el) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el,
        };
        Object.keys(props).forEach((prop) => {
          initialFullValue = __WEBPACK_IMPORTED_MODULE_0_ssr_window__["b" /* window */].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue,
          };
        });
      });

      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
        }

        elements.forEach((element) => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach((prop) => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const { initialValue, finalValue, unit } = el[prop];
            el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue));
            const currentValue = el[prop].currentValue;

            if (
              (finalValue > initialValue && currentValue >= finalValue) ||
              (finalValue < initialValue && currentValue <= finalValue)) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    },
  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = ('resize scroll').split(' ');
function eventShortcut(name, ...args) {
  if (typeof args[0] === 'undefined') {
    for (let i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();
        else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on(name, ...args);
}

function click(...args) {
  return eventShortcut.bind(this)('click', ...args);
}
function blur(...args) {
  return eventShortcut.bind(this)('blur', ...args);
}
function focus(...args) {
  return eventShortcut.bind(this)('focus', ...args);
}
function focusin(...args) {
  return eventShortcut.bind(this)('focusin', ...args);
}
function focusout(...args) {
  return eventShortcut.bind(this)('focusout', ...args);
}
function keyup(...args) {
  return eventShortcut.bind(this)('keyup', ...args);
}
function keydown(...args) {
  return eventShortcut.bind(this)('keydown', ...args);
}
function keypress(...args) {
  return eventShortcut.bind(this)('keypress', ...args);
}
function submit(...args) {
  return eventShortcut.bind(this)('submit', ...args);
}
function change(...args) {
  return eventShortcut.bind(this)('change', ...args);
}
function mousedown(...args) {
  return eventShortcut.bind(this)('mousedown', ...args);
}
function mousemove(...args) {
  return eventShortcut.bind(this)('mousemove', ...args);
}
function mouseup(...args) {
  return eventShortcut.bind(this)('mouseup', ...args);
}
function mouseenter(...args) {
  return eventShortcut.bind(this)('mouseenter', ...args);
}
function mouseleave(...args) {
  return eventShortcut.bind(this)('mouseleave', ...args);
}
function mouseout(...args) {
  return eventShortcut.bind(this)('mouseout', ...args);
}
function mouseover(...args) {
  return eventShortcut.bind(this)('mouseover', ...args);
}
function touchstart(...args) {
  return eventShortcut.bind(this)('touchstart', ...args);
}
function touchend(...args) {
  return eventShortcut.bind(this)('touchend', ...args);
}
function touchmove(...args) {
  return eventShortcut.bind(this)('touchmove', ...args);
}
function resize(...args) {
  return eventShortcut.bind(this)('resize', ...args);
}
function scroll(...args) {
  return eventShortcut.bind(this)('scroll', ...args);
}




/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("7cc92122", content, true, {});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, ".swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:-o-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;-o-transition:.3s opacity;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:top .2s,-webkit-transform .2s;transition:top .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s top;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:left .2s,-webkit-transform .2s;transition:left .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s left;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:right .2s,-webkit-transform .2s;transition:right .2s,-webkit-transform .2s;-o-transition:.2s transform,.2s right;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}", ""]);

// exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(111)
}
var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(114),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-99ca2e36",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("28dab936", content, true, {});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, ".nav-wrap[data-v-99ca2e36]{position:relative;z-index:999999}.logo-wrap[data-v-99ca2e36]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff;font-size:1.3rem;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif}.logo-wrap img[data-v-99ca2e36]{width:4rem;margin-right:.6rem}.navbar-placeholder[data-v-99ca2e36]{height:130px}.common-navbar-container[data-v-99ca2e36]{width:100%;position:fixed;top:0;z-index:999;transition:all 1s}.common-navbar-container.active[data-v-99ca2e36]{background-color:#403c69}.common-navbar-container .common-navbar[data-v-99ca2e36]{display:-ms-flexbox;display:flex;max-width:94%;margin:0 auto;height:70px;-ms-flex-align:center;align-items:center;-webkit-font-smoothing:antialiased}.common-navbar-container .nav-links[data-v-99ca2e36]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:flex-end;-ms-flex:1;flex:1;color:#fff}.common-navbar-container .nav-links a[data-v-99ca2e36]{display:inline-block;padding:16px;font-size:15px;font-weight:400;color:#fff;text-decoration:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.common-navbar-container .nav-links a.active[data-v-99ca2e36],.common-navbar-container .nav-links a[data-v-99ca2e36]:hover{color:#27d4a2}.switch-lang[data-v-99ca2e36]{cursor:pointer;font-size:14px}.navbar-h5-container[data-v-99ca2e36]{z-index:999;display:none;position:fixed;top:0;width:100%}.navbar-h5-container .navbar-h5[data-v-99ca2e36]{display:-ms-flexbox;display:flex;z-index:9999;-ms-flex-pack:justify;justify-content:space-between;padding:0 16px;height:60px;-ms-flex-align:center;align-items:center}.navbar-h5-container .navbar-h5-menu-btn[data-v-99ca2e36]{padding:0}.navbar-h5-container .navbar-h5-menu[data-v-99ca2e36]{text-align:right;box-sizing:border-box;position:absolute;z-index:99999;top:60px;width:100%;height:40rem;padding:16px;opacity:0;pointer-events:none;-ms-transform:translateY(0) scale(.95);transform:translateY(0) scale(.95);-ms-transform-origin:50% 0;transform-origin:50% 0;visibility:hidden;transition:opacity .25s,transform .25s,visibility .25s;background:rgba(0,0,0,.6)}.navbar-h5-container .navbar-h5-menu .navbar-mobile-menu-item[data-v-99ca2e36]{border-bottom:1px solid #f2f4f5;margin-bottom:1em}.navbar-h5-container .navbar-h5-menu .navbar-link[data-v-99ca2e36]{display:block;height:2em;line-height:2em;margin-bottom:1em;font-size:16px;font-weight:300;color:#fff;text-decoration:none;cursor:pointer}@media (max-width:768px){.common-navbar-container[data-v-99ca2e36]{display:none}.logo-wrap[data-v-99ca2e36]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;color:#fff;font-size:1.1rem;text-decoration:none}.logo-wrap img[data-v-99ca2e36]{width:2rem;margin-right:.6rem}.navbar-h5-container[data-v-99ca2e36]{display:block;transition:all .3s}.navbar-h5-container.showNavBg[data-v-99ca2e36]{background-color:rgba(0,0,0,.1)}.navbar-h5-container.active[data-v-99ca2e36]{background:rgba(0,0,0,.6)}.navbar-h5-container.active .navbar-h5-menu[data-v-99ca2e36]{opacity:1;pointer-events:auto;-ms-transform:translateY(0) scale(1);transform:translateY(0) scale(1);visibility:visible}}#space.scrolled[data-v-99ca2e36]{position:relative;height:2px;width:100%;overflow:auto;transition:background-size .2s;background:radial-gradient(50% 0,farthest-side,rgba(0,0,0,.05),transparent);background:radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.05),transparent);background-repeat:no-repeat;background-size:100% 2px}\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */.hamburger[data-v-99ca2e36]{display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible;outline:none}.hamburger[data-v-99ca2e36]:hover{opacity:.7}.hamburger-box[data-v-99ca2e36]{width:26px;height:26px;display:inline-block;position:relative}.hamburger-inner[data-v-99ca2e36]{display:block;top:50%;margin-top:-2px}.hamburger-inner[data-v-99ca2e36],.hamburger-inner[data-v-99ca2e36]:after,.hamburger-inner[data-v-99ca2e36]:before{width:26px;height:1px;background-color:#fff;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner[data-v-99ca2e36]:after,.hamburger-inner[data-v-99ca2e36]:before{content:\"\";display:block}.hamburger-inner[data-v-99ca2e36]:before{top:-10px}.hamburger-inner[data-v-99ca2e36]:after{bottom:-10px}.hamburger--collapse .hamburger-inner[data-v-99ca2e36]{top:auto;bottom:0;transition-duration:.13s;transition-delay:.13s;transition-timing-function:cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse .hamburger-inner[data-v-99ca2e36]:after{top:-20px;transition:top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .1s linear}.hamburger--collapse .hamburger-inner[data-v-99ca2e36]:before{transition:top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse.is-active .hamburger-inner[data-v-99ca2e36]{transform:translate3d(0,-10px,0) rotate(-45deg);transition-delay:.22s;transition-timing-function:cubic-bezier(.215,.61,.355,1)}.hamburger--collapse.is-active .hamburger-inner[data-v-99ca2e36]:after{top:0;opacity:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s}.hamburger--collapse.is-active .hamburger-inner[data-v-99ca2e36]:before{top:0;-ms-transform:rotate(-90deg);transform:rotate(-90deg);transition:top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s}", ""]);

// exports


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(74);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  watch: {
    scrollTop: function scrollTop(val) {
      if (val > 60) {
        this.showNavBg = true;
      } else {
        this.showNavBg = false;
      }
    }
  },
  mounted: function mounted() {
    window.scrollTo(0, 0);
  },
  data: function data() {
    return {
      expandedMenu: false,
      showNavBg: false
    };
  },

  methods: {
    scrollIntoView: function scrollIntoView(e) {
      this.changeLinkStatus(document.querySelectorAll(".nav-links a"), e.target);
      e.preventDefault();
      e.stopPropagation();
      var href = e.target.getAttribute("href");
      var el = href ? document.querySelector(href) : null;
      if (el) {
        var scroller = document.scrollingElement || document.documentElement || document.body;

        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* scrollTo */])(scroller, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* offsetTop */])(el) - 60, 300, function () {
          el.tabIndex = -1;
        });
      }
      if (this.expandedMenu) {
        this.expandedMenu = false;
      }
    },
    changeLinkStatus: function changeLinkStatus(links, currentLink) {
      links.forEach(function (item) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* removeClass */])(item, "active");
      });
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* addClass */])(currentLink, "active");
    },
    handleExpandedMenu: function handleExpandedMenu() {
      this.expandedMenu = !this.expandedMenu;
    },
    switchLang: function switchLang() {
      var locale = localStorage.getItem("locale");
      document.title = this.$t("title");
      if (!locale || locale == "zh-CN") {
        localStorage.setItem("locale", "en-US");
      } else {
        localStorage.setItem("locale", "zh-CN");
      }
      this.$i18n.locale = localStorage.getItem("locale");
    }
  }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-wrap"
  }, [_c('div', {
    staticClass: "common-navbar-container",
    class: {
      'active': _vm.showNavBg
    }
  }, [_c('div', {
    staticClass: "common-navbar"
  }, [_vm._m(0), _vm._v(" "), _c('nav', {
    staticClass: "nav-links",
    attrs: {
      "id": "nav-links"
    }
  }, [_c('div', [_c('a', {
    staticClass: "animated fadeInDown active",
    attrs: {
      "href": "#home"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.home")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "#zoology"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.zoology")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "#advantages"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.advantages")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "#model"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.model")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "#team"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.team")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "http://explorer.dippernetwork.com",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("links.explorer")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "https://docsend.com/view/fkddj37",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("links.paper")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown",
    attrs: {
      "href": "https://docs.dippernetwork.com",
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$t("links.documents")))]), _vm._v(" "), _c('a', {
    staticClass: "animated fadeInDown switch-lang",
    on: {
      "click": _vm.switchLang
    }
  }, [_vm._v(_vm._s(_vm.$t("lang")))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "navbar-h5-container showNavBg",
    class: {
      'active': _vm.expandedMenu
    }
  }, [_c('div', {
    staticClass: "navbar-h5"
  }, [_c('a', {
    staticClass: "logo-wrap",
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(75),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("title")))])]), _vm._v(" "), _c('button', {
    staticClass: "hamburger navbar-h5-menu-btn hamburger--collapse",
    class: {
      'is-active': _vm.expandedMenu
    },
    attrs: {
      "id": "navbar-h5-menu-btn",
      "type": "button"
    },
    on: {
      "click": _vm.handleExpandedMenu
    }
  }, [_vm._m(1)])]), _vm._v(" "), _c('nav', {
    staticClass: "navbar-h5-menu"
  }, [_c('div', {
    staticClass: "navbar-h5-menu-item"
  }, [_c('a', {
    staticClass: "navbar-link",
    attrs: {
      "href": "#home"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.home")))]), _vm._v(" "), _c('a', {
    staticClass: "navbar-link",
    attrs: {
      "href": "#zoology"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.zoology")))]), _vm._v(" "), _c('a', {
    staticClass: "navbar-link",
    attrs: {
      "href": "#model"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.model")))]), _vm._v(" "), _c('a', {
    staticClass: "navbar-link",
    attrs: {
      "href": "#team"
    },
    on: {
      "click": _vm.scrollIntoView
    }
  }, [_vm._v(_vm._s(_vm.$t("links.team")))]), _vm._v(" "), _c('span', {
    staticClass: "navbar-link switch-lang",
    on: {
      "click": _vm.switchLang
    }
  }, [_vm._v(_vm._s(_vm.$t("lang")))])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "logo-wrap",
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(75),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("DIPPER")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "hamburger-box"
  }, [_c('span', {
    staticClass: "hamburger-inner"
  })])
}]}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(116)
}
var Component = __webpack_require__(10)(
  /* script */
  null,
  /* template */
  __webpack_require__(118),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7a5ef11a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("88ded006", content, true, {});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, ".body-bg[data-v-7a5ef11a],.footer-container[data-v-7a5ef11a]{background:linear-gradient(90deg,#e7ecfd,#fff,#e7ecfd)}.footer-container[data-v-7a5ef11a]{position:relative;border-top:1px solid #ddd}.footer-container h3[data-v-7a5ef11a]{text-align:center;margin-bottom:60px}.footer-container .content[data-v-7a5ef11a]{padding:50px 0;margin:auto;line-height:28px;text-align:center;color:#6e7fbb;position:relative;z-index:100}.footer-container .content img[data-v-7a5ef11a]{width:45px;margin:0 10px}.footer-container .content img[data-v-7a5ef11a]:hover{opacity:.8}.footer-container .content .des[data-v-7a5ef11a]{margin-top:40px;color:#666}.wave-container[data-v-7a5ef11a]{position:absolute;bottom:0;width:100%;height:50%;z-index:10}.parallax>use[data-v-7a5ef11a]{animation:wave-move-data-v-7a5ef11a 20s linear infinite}.parallax>use[data-v-7a5ef11a]:first-child{animation-delay:-2s}.parallax>use[data-v-7a5ef11a]:nth-child(2){animation-delay:-2s;animation-duration:10s}.parallax>use[data-v-7a5ef11a]:nth-child(3){animation-delay:-4s;animation-duration:10s}@keyframes wave-move-data-v-7a5ef11a{0%{transform:translate(-90px)}to{transform:translate(85px)}}", ""]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer-container"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('footer.contact')))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('svg', {
    staticClass: "wave-container",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "viewBox": "0 24 150 28",
      "preserveAspectRatio": "none"
    }
  }, [_c('defs', [_c('path', {
    attrs: {
      "id": "gentle-wave",
      "d": "M-160 44c30 0\n    58-18 88-18s\n    58 18 88 18\n    58-18 88-18\n    58 18 88 18\n    v44h-352z"
    }
  })]), _vm._v(" "), _c('g', {
    staticClass: "parallax"
  }, [_c('use', {
    attrs: {
      "xlink:href": "#gentle-wave",
      "x": "50",
      "y": "0",
      "fill": "rgba(231,236,253,.5)"
    }
  }), _vm._v(" "), _c('use', {
    attrs: {
      "xlink:href": "#gentle-wave",
      "x": "50",
      "y": "3",
      "fill": "rgba(231,236,253,.5)"
    }
  }), _vm._v(" "), _c('use', {
    attrs: {
      "xlink:href": "#gentle-wave",
      "x": "50",
      "y": "6",
      "fill": "rgba(231,236,253,.5)"
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "links-wrap"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(119),
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "mailto:dippernetworkhq@gmail.com"
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(120),
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "des"
  }, [_c('p', [_vm._v("Copyright © 2018-2019 The Dipper Network")])])
}]}

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(122)
}
var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1f09c494",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("3ff4a1be", content, true, {});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, ".timeline[data-v-1f09c494]{position:relative;padding:1px 0;padding-top:20px;list-style:none;font-weight:300}.timeline p[data-v-1f09c494]{line-height:1.55}.timeline .event-content[data-v-1f09c494]{border:1px solid #42e3fe;padding:10px 0;border-radius:6px;text-align:center;margin:0 10%;background:#38345b}.timeline-text-algin[data-v-1f09c494]{text-align:right}.timeline .timeline-item[data-v-1f09c494]{padding-left:0;padding-right:30px}.timeline .timeline-item.timeline-item-right[data-v-1f09c494],.timeline .timeline-item[data-v-1f09c494]:nth-of-type(2n):not(.timeline-item-left){padding-left:30px;padding-right:0}.timeline .timeline-item .timeline-event[data-v-1f09c494]{width:100%}.timeline[data-v-1f09c494]:after,.timeline[data-v-1f09c494]:before{content:\" \";display:block}.timeline[data-v-1f09c494]:after{clear:both}.timeline[data-v-1f09c494]:before{content:\"\";position:absolute;top:0;left:0;bottom:0;width:50%;height:100%!important;margin-left:1px;border-right-width:1px;border-right-style:solid;border-right-color:#42bc7f}.timeline.timeline-single-column.timeline[data-v-1f09c494]{width:100%;max-width:768px}.timeline.timeline-single-column.timeline .timeline-item.timeline-item-right[data-v-1f09c494],.timeline.timeline-single-column.timeline .timeline-item[data-v-1f09c494],.timeline.timeline-single-column.timeline .timeline-item[data-v-1f09c494]:nth-of-type(2n):not(.timeline-item-left){padding-left:72px;padding-right:0}.timeline.timeline-single-column.timeline .timeline-item .timeline-event[data-v-1f09c494]{width:100%}.timeline.timeline-single-column.timeline[data-v-1f09c494]:before{left:42px;width:0;margin-left:-1px}.timeline.timeline-single-column.timeline .timeline-item[data-v-1f09c494]{width:100%;margin-bottom:20px}.timeline.timeline-single-column.timeline .timeline-item.timeline-item-left+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline-single-column.timeline .timeline-item.timeline-item-left+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline-single-column.timeline .timeline-item.timeline-item-right+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline-single-column.timeline .timeline-item.timeline-item-right+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline-single-column.timeline .timeline-item[data-v-1f09c494]:nth-of-type(2n){margin-top:0}.timeline.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]{float:right!important}.timeline.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after,.timeline.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{left:-15px!important;border-right-width:15px!important}.timeline.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after{left:-14px!important;border-right-width:14px!important}.timeline.timeline-single-column.timeline .timeline-item>.timeline-point[data-v-1f09c494]{-ms-transform:translateX(-50%);transform:translateX(-50%);left:42px!important;margin-left:0}.timeline.timeline-single-column.timeline .timeline-label[data-v-1f09c494]{-ms-transform:translateX(-50%);transform:translateX(-50%);margin:0 0 20px 42px}.timeline.timeline-single-column.timeline .timeline-label+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline-single-column.timeline .timeline-label+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){margin-top:0}.timeline.timeline-line-solid[data-v-1f09c494]:before{border-right-style:solid}.timeline.timeline-line-hidden[data-v-1f09c494]:before{border-right-style:none}.timeline .timeline-item[data-v-1f09c494]{position:relative;float:left;clear:left;width:50%;margin-bottom:30px}.timeline .timeline-item[data-v-1f09c494]:after,.timeline .timeline-item[data-v-1f09c494]:before{content:\"\";display:table}.timeline .timeline-item[data-v-1f09c494]:after{clear:both}.timeline .timeline-item[data-v-1f09c494]:last-child{margin-bottom:0!important}.timeline .timeline-item.timeline-item-right>.timeline-event[data-v-1f09c494],.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]{float:right!important}.timeline .timeline-item.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline .timeline-item.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{left:-15px!important;border-right-width:15px!important}.timeline .timeline-item.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after{left:-14px!important;border-right-width:14px!important}.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{top:10px;right:-15px;border-top:15px solid transparent;border-left-width:15px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:15px solid transparent}.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after{top:11px;right:-14px;border-top:14px solid transparent;border-left-width:14px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:14px solid transparent}.timeline .timeline-item>.timeline-point[data-v-1f09c494]{top:55%}.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]{float:right!important}.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after,.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{left:-15px!important;border-right-width:15px!important}.timeline-single-column.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after{left:-14px!important;border-right-width:14px!important}.timeline .timeline-item.timeline-item-left[data-v-1f09c494],.timeline .timeline-item.timeline-item-right[data-v-1f09c494]{clear:both!important}.timeline .timeline-item.timeline-item-left+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline .timeline-item.timeline-item-right+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){margin-top:0}.timeline .timeline-item.timeline-item-left+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline .timeline-item.timeline-item-right+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){margin-top:40px}.timeline .timeline-item.timeline-item-left+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline .timeline-item.timeline-item-right+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){clear:both}.timeline .timeline-item.timeline-item-right[data-v-1f09c494],.timeline .timeline-item[data-v-1f09c494]:nth-of-type(2n):not(.timeline-item-left){float:right;clear:right}.timeline .timeline-item.timeline-item-right>.timeline-point[data-v-1f09c494],.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-point[data-v-1f09c494]{left:-2px}.timeline .timeline-item.timeline-item-right>.timeline-point.timeline-point-blank[data-v-1f09c494],.timeline .timeline-item:nth-of-type(2n):not(.timeline-item-left)>.timeline-point.timeline-point-blank[data-v-1f09c494]{left:-12px}.timeline .timeline-item.timeline-item-arrow-sm.timeline-item-right>.timeline-event[data-v-1f09c494],.timeline .timeline-item.timeline-item-arrow-sm:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]{float:right!important}.timeline .timeline-item.timeline-item-arrow-sm.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-sm.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item.timeline-item-arrow-sm:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-sm:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline .timeline-item.timeline-item-arrow-sm.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item.timeline-item-arrow-sm:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{left:-10px!important;border-right-width:10px!important}.timeline .timeline-item.timeline-item-arrow-sm.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-sm:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after{left:-9px!important;border-right-width:9px!important}.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]:before{top:4px;right:-10px;border-top:10px solid transparent;border-left-width:10px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:10px solid transparent}.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]:after{top:5px;right:-9px;border-top:9px solid transparent;border-left-width:9px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:9px solid transparent}.timeline .timeline-item.timeline-item-arrow-sm>.timeline-point[data-v-1f09c494]{top:14px}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]{float:right!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]:after,.timeline-single-column.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]:before{left:-10px!important;border-right-width:10px!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-sm>.timeline-event[data-v-1f09c494]:after{left:-9px!important;border-right-width:9px!important}.timeline .timeline-item.timeline-item-arrow-md.timeline-item-right>.timeline-event[data-v-1f09c494],.timeline .timeline-item.timeline-item-arrow-md:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]{float:right!important}.timeline .timeline-item.timeline-item-arrow-md.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-md.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item.timeline-item-arrow-md:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-md:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline .timeline-item.timeline-item-arrow-md.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item.timeline-item-arrow-md:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{left:-15px!important;border-right-width:15px!important}.timeline .timeline-item.timeline-item-arrow-md.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-md:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after{left:-14px!important;border-right-width:14px!important}.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]:before{top:10px;right:-15px;border-top:15px solid transparent;border-left-width:15px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:15px solid transparent}.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]:after{top:11px;right:-14px;border-top:14px solid transparent;border-left-width:14px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:14px solid transparent}.timeline .timeline-item.timeline-item-arrow-md>.timeline-point[data-v-1f09c494]{top:25px}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]{float:right!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]:after,.timeline-single-column.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]:before{left:-15px!important;border-right-width:15px!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-md>.timeline-event[data-v-1f09c494]:after{left:-14px!important;border-right-width:14px!important}.timeline .timeline-item.timeline-item-arrow-lg.timeline-item-right>.timeline-event[data-v-1f09c494],.timeline .timeline-item.timeline-item-arrow-lg:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]{float:right!important}.timeline .timeline-item.timeline-item-arrow-lg.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-lg.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item.timeline-item-arrow-lg:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-lg:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline .timeline-item.timeline-item-arrow-lg.timeline-item-right>.timeline-event[data-v-1f09c494]:before,.timeline .timeline-item.timeline-item-arrow-lg:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:before{left:-18px!important;border-right-width:18px!important}.timeline .timeline-item.timeline-item-arrow-lg.timeline-item-right>.timeline-event[data-v-1f09c494]:after,.timeline .timeline-item.timeline-item-arrow-lg:nth-of-type(2n):not(.timeline-item-left)>.timeline-event[data-v-1f09c494]:after{left:-17px!important;border-right-width:17px!important}.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]:before{top:10px;right:-18px;border-top:18px solid transparent;border-left-width:18px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:18px solid transparent}.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]:after{top:11px;right:-17px;border-top:17px solid transparent;border-left-width:17px;border-left-style:solid;border-right-width:0;border-right-style:solid;border-bottom:17px solid transparent}.timeline .timeline-item.timeline-item-arrow-lg>.timeline-point[data-v-1f09c494]{top:28px}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]{float:right!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]:after,.timeline-single-column.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]:before{left:-18px!important;border-right-width:18px!important}.timeline-single-column.timeline .timeline-item.timeline-item-arrow-lg>.timeline-event[data-v-1f09c494]:after{left:-17px!important;border-right-width:17px!important}.timeline .timeline-item>.timeline-event[data-v-1f09c494]{position:relative;float:left;border-radius:3px;color:#000c}.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{border-left-color:#888;border-right-color:#888}.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after{border-left-color:#fff;border-right-color:#fff}.timeline .timeline-item>.timeline-event .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event p[data-v-1f09c494]{color:#fff}.timeline .timeline-item>.timeline-event.timeline-event-default[data-v-1f09c494]{background:#fff;border:1px solid #888;color:#fff}.timeline .timeline-item>.timeline-event.timeline-event-default[data-v-1f09c494]:before{border-left-color:#888;border-right-color:#888}.timeline .timeline-item>.timeline-event.timeline-event-default[data-v-1f09c494]:after{border-left-color:#fff;border-right-color:#fff}.timeline .timeline-item>.timeline-event.timeline-event-default .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-default p[data-v-1f09c494]{color:inherit}.timeline .timeline-item>.timeline-event.timeline-event-primary[data-v-1f09c494]{background:#f5f5f5;border:1px solid #888;color:#555}.timeline .timeline-item>.timeline-event.timeline-event-primary[data-v-1f09c494]:before{border-left-color:#888;border-right-color:#888}.timeline .timeline-item>.timeline-event.timeline-event-primary[data-v-1f09c494]:after{border-left-color:#f5f5f5;border-right-color:#f5f5f5}.timeline .timeline-item>.timeline-event.timeline-event-primary .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-primary p[data-v-1f09c494]{color:inherit}.timeline .timeline-item>.timeline-event.timeline-event-success[data-v-1f09c494]{background:#f3f8ed;border:1px solid #72b92e;color:#3f8100}.timeline .timeline-item>.timeline-event.timeline-event-success[data-v-1f09c494]:before{border-left-color:#72b92e;border-right-color:#72b92e}.timeline .timeline-item>.timeline-event.timeline-event-success[data-v-1f09c494]:after{border-left-color:#f3f8ed;border-right-color:#f3f8ed}.timeline .timeline-item>.timeline-event.timeline-event-success .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-success p[data-v-1f09c494]{color:inherit}.timeline .timeline-item>.timeline-event.timeline-event-info[data-v-1f09c494]{background:#f0f8fd;border:1px solid #3e93cf;color:#0062a7}.timeline .timeline-item>.timeline-event.timeline-event-info[data-v-1f09c494]:before{border-left-color:#3e93cf;border-right-color:#3e93cf}.timeline .timeline-item>.timeline-event.timeline-event-info[data-v-1f09c494]:after{border-left-color:#f0f8fd;border-right-color:#f0f8fd}.timeline .timeline-item>.timeline-event.timeline-event-info .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-info p[data-v-1f09c494]{color:inherit}.timeline .timeline-item>.timeline-event.timeline-event-warning[data-v-1f09c494]{background:#fff9e9;border:1px solid #d0aa42;color:#ac7e00}.timeline .timeline-item>.timeline-event.timeline-event-warning[data-v-1f09c494]:before{border-left-color:#d0aa42;border-right-color:#d0aa42}.timeline .timeline-item>.timeline-event.timeline-event-warning[data-v-1f09c494]:after{border-left-color:#fff9e9;border-right-color:#fff9e9}.timeline .timeline-item>.timeline-event.timeline-event-warning .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-warning p[data-v-1f09c494]{color:inherit}.timeline .timeline-item>.timeline-event.timeline-event-danger[data-v-1f09c494]{background:#ffc4bc;border:1px solid #d25a4b;color:#b71500}.timeline .timeline-item>.timeline-event.timeline-event-danger[data-v-1f09c494]:before{border-left-color:#d25a4b;border-right-color:#d25a4b}.timeline .timeline-item>.timeline-event.timeline-event-danger[data-v-1f09c494]:after{border-left-color:#ffc4bc;border-right-color:#ffc4bc}.timeline .timeline-item>.timeline-event.timeline-event-danger .timeline-inherit-color[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger h1[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger h2[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger h3[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger h4[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger h5[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger h6[data-v-1f09c494],.timeline .timeline-item>.timeline-event.timeline-event-danger p[data-v-1f09c494]{color:inherit}.timeline .timeline-item>.timeline-event .timeline-body[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-footer[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-heading[data-v-1f09c494]{padding:4px 15px}.timeline .timeline-item>.timeline-event .timeline-body p[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-body ul[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-footer p[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-footer ul[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-heading p[data-v-1f09c494],.timeline .timeline-item>.timeline-event .timeline-heading ul[data-v-1f09c494]{margin-bottom:0}.timeline .timeline-item>.timeline-event .timeline-heading h4[data-v-1f09c494]{font-weight:400;font-size:20px;margin:0 0 10px;color:#42e4ff}.timeline .timeline-item>.timeline-event .timeline-footer a[data-v-1f09c494]{cursor:pointer;text-decoration:none}.timeline .timeline-item>.timeline-event .blankslate[data-v-1f09c494],.timeline .timeline-item>.timeline-event .panel[data-v-1f09c494],.timeline .timeline-item>.timeline-event .table[data-v-1f09c494]{margin:0;border:none;border-radius:inherit;overflow:hidden}.timeline .timeline-item>.timeline-event .table th[data-v-1f09c494]{border-top:0}.timeline .timeline-item>.timeline-point[data-v-1f09c494]{color:#888;border:2px solid #42bc7f;background:#403c69;right:0;width:20px;height:20px;margin-top:-18px;margin-left:22px;margin-right:16px;position:absolute;z-index:100;text-align:center;border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.timeline .timeline-item>.timeline-point i[data-v-1f09c494]{display:inline-block;width:100%;height:100%;height:10px;width:10px;background:#fff;border-radius:100%}.timeline .timeline-item>.timeline-point i.active[data-v-1f09c494]{background:#42e4ff;animation:heart-data-v-1f09c494 2s linear infinite}.timeline .timeline-item>.timeline-point.timeline-point-blank[data-v-1f09c494]{right:-12px;width:12px;height:12px;margin-top:-6px;margin-left:6px;margin-right:6px;color:#888;background:#888}.timeline .timeline-item>.timeline-point.timeline-point-default[data-v-1f09c494],.timeline .timeline-item>.timeline-point.timeline-point-primary[data-v-1f09c494]{color:#888;background:#fff}.timeline .timeline-item>.timeline-point.timeline-point-success[data-v-1f09c494]{color:#72b92e;background:#fff}.timeline .timeline-item>.timeline-point.timeline-point-info[data-v-1f09c494]{color:#3e93cf;background:#fff}.timeline .timeline-item>.timeline-point.timeline-point-warning[data-v-1f09c494]{color:#d0aa42;background:#fff}.timeline .timeline-item>.timeline-point.timeline-point-danger[data-v-1f09c494]{color:#d25a4b;background:#fff}.timeline .timeline-label[data-v-1f09c494]{position:relative;float:left;clear:left;width:50%;margin-bottom:20px;top:1px;width:100%;margin-left:auto;margin-right:auto;padding:0;text-align:center}.timeline .timeline-label[data-v-1f09c494]:after,.timeline .timeline-label[data-v-1f09c494]:before{content:\"\";display:table}.timeline .timeline-label[data-v-1f09c494]:after{clear:both}.timeline .timeline-label[data-v-1f09c494]:last-child{margin-bottom:0!important}.timeline .timeline-label+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){margin-top:0}.timeline .timeline-label+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){margin-top:40px}.timeline .timeline-label .label-default[data-v-1f09c494],.timeline .timeline-label .label-primary[data-v-1f09c494]{background-color:#888}.timeline .timeline-label .label-info[data-v-1f09c494]{background-color:#3e93cf}.timeline .timeline-label .label-warning[data-v-1f09c494]{background-color:#d0aa42}.timeline .timeline-label .label-danger[data-v-1f09c494]{background-color:#d25a4b}@media (max-width:768px){.timeline-text-algin[data-v-1f09c494]{text-align:left}.timeline-body[data-v-1f09c494],.timeline-heading[data-v-1f09c494]{padding:5px!important}.timeline-heading h4[data-v-1f09c494]{font-size:14px!important}.timeline-body[data-v-1f09c494]{font-size:12px!important}.timeline[data-v-1f09c494]{width:100%;max-width:100%;overflow:hidden;padding-top:0}.timeline.timeline .timeline-item.timeline-item-right[data-v-1f09c494],.timeline.timeline .timeline-item[data-v-1f09c494],.timeline.timeline .timeline-item[data-v-1f09c494]:nth-of-type(2n):not(.timeline-item-left){padding-left:0;padding-right:0}.timeline.timeline .timeline-item .timeline-event[data-v-1f09c494]{width:90%}.timeline.timeline[data-v-1f09c494]:before{left:42px;width:0;margin-left:-1px}.timeline.timeline .timeline-item[data-v-1f09c494]{width:100%;margin-bottom:20px}.timeline.timeline .timeline-item.timeline-item-left+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline .timeline-item.timeline-item-left+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline .timeline-item.timeline-item-right+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline .timeline-item.timeline-item-right+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline .timeline-item[data-v-1f09c494]:nth-of-type(2n){margin-top:0}.timeline.timeline .timeline-item>.timeline-event[data-v-1f09c494]{float:right!important}.timeline.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after,.timeline.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{right:auto!important;border-left-width:0!important}.timeline.timeline .timeline-item>.timeline-event[data-v-1f09c494]:before{left:-15px!important;border-right-width:15px!important}.timeline.timeline .timeline-item>.timeline-event[data-v-1f09c494]:after{left:-14px!important;border-right-width:14px!important}.timeline.timeline .timeline-item>.timeline-point[data-v-1f09c494]{-ms-transform:translateX(-50%);transform:translateX(-50%);left:42px!important;margin-left:0}.timeline.timeline .timeline-label[data-v-1f09c494]{-ms-transform:translateX(-50%);transform:translateX(-50%);margin:0 0 20px 42px}.timeline.timeline .timeline-label+.timeline-item:not(.timeline-item-left):not(.timeline-item-right)+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right),.timeline.timeline .timeline-label+.timeline-item[data-v-1f09c494]:not(.timeline-item-left):not(.timeline-item-right){margin-top:0}}@keyframes heart-data-v-1f09c494{0%{opacity:1}50%{opacity:.5}to{opacity:1}}", ""]);

// exports


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    roadMap: {
      type: Array,
      required: true
    }
  }
});

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-12 content-margin-top"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "timeline timeline-line-dotted"
  }, _vm._l((_vm.roadMap), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "timeline-item",
      class: {
        'timeline-text-algin': index % 2 == 0
      }
    }, [_c('div', {
      staticClass: "timeline-point"
    }, [_c('i', {
      class: {
        'active': item.active
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "timeline-event"
    }, [_c('div', {
      staticClass: "event-content animate-fadeInUp animated"
    }, [_c('div', {
      staticClass: "timeline-heading animate-fadeInUp animated"
    }, [_c('h4', {
      class: {
        'blue': item.active
      }
    }, [_vm._v(_vm._s(_vm.$t(('roadMap.' + item.name)).year))])]), _vm._v(" "), _c('div', {
      staticClass: "timeline-body animate-fadeInUp animated"
    }, [_c('p', [_vm._v(_vm._s(_vm.$t(('roadMap.' + item.name)).event))])])])])])
  }), 0)])])
},staticRenderFns: []}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-page",
    attrs: {
      "id": "home"
    }
  }, [_c('NavBar', {
    attrs: {
      "scrollTop": _vm.scrollTop
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-container"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, [_c('div', {
    staticClass: "swiper-slide swiper-slide-1"
  }, [_c('div', {
    staticClass: "banner-wrap"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "slogen animated fadeInDown"
  }, [_c('div', {
    staticClass: "slogen-1"
  }, [_c('p', {
    staticClass: "p-1"
  }, [_vm._v("DIPPER NETWORK")]), _vm._v(" "), _c('p', {
    staticClass: "p-2"
  }, [_vm._v(_vm._s(_vm.$t('banner.sologen1.p2')))])])])])]), _vm._v(" "), (!_vm.isH5) ? _c('img', {
    staticClass: "slide-cont",
    attrs: {
      "src": __webpack_require__(127),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isH5) ? _c('img', {
    staticClass: "slide-cont",
    attrs: {
      "src": __webpack_require__(128),
      "alt": ""
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "swiper-slide swiper-slide-2"
  }, [_c('div', {
    staticClass: "banner-wrap"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "slogen animated fadeInDown"
  }, [_c('div', {
    staticClass: "slogen-2"
  }, [_c('p', {
    staticClass: "p-1"
  }, [_vm._v("DIPPER BANK")]), _vm._v(" "), _c('p', {
    staticClass: "p-2"
  }, [_vm._v(_vm._s(_vm.$t('banner.sologen2.p2')))])])])])]), _vm._v(" "), (!_vm.isH5) ? _c('img', {
    staticClass: "slide-cont",
    attrs: {
      "src": __webpack_require__(129),
      "alt": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isH5) ? _c('img', {
    staticClass: "slide-cont",
    attrs: {
      "src": __webpack_require__(130),
      "alt": ""
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination"
  })]), _vm._v(" "), _c('div', {
    staticClass: "about-wrap container",
    attrs: {
      "id": "about"
    }
  }, [_c('div', {
    staticClass: "content commom-cont"
  }, [_c('div', {
    staticClass: "des-wrap"
  }, [_c('div', {
    staticClass: "des-1 section-t animate-fadeInUp animated"
  }, [_vm._v(_vm._s(_vm.$t('about.title1')))]), _vm._v(" "), _c('div', {
    staticClass: "des-2 section-t-2 animate-fadeInUp animated"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('about.title2')))])]), _vm._v(" "), _c('div', {
    staticClass: "des-3 section-t-3 animate-fadeInUp animated"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('about.p1')))])])]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('div', {
    staticClass: "zoology-wrap container",
    attrs: {
      "id": "zoology"
    }
  }, [_c('div', {
    staticClass: "content commom-cont"
  }, [_c('h2', {
    staticClass: "content-title"
  }, [_vm._v(_vm._s(_vm.$t('zoology.title1')))]), _vm._v(" "), _c('div', {
    staticClass: "item-wrap"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._m(1), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('zoology.item1')))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(2), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('zoology.item2')))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(3), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('zoology.item3')))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(4), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('zoology.item4')))])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_vm._m(5), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('zoology.item5')))])])]), _vm._v(" "), _c('div', {
    staticClass: "des"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('zoology.p1')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('zoology.p2')))])])])]), _vm._v(" "), _c('div', {
    staticClass: "advantages-wrap container",
    attrs: {
      "id": "advantages"
    }
  }, [_c('div', {
    staticClass: "content commom-cont"
  }, [_c('h2', {
    staticClass: "content-title"
  }, [_vm._v(_vm._s(_vm.$t('advantages.title1')))]), _vm._v(" "), _c('div', {
    staticClass: "item-wrap"
  }, [_c('div', {
    staticClass: "des-wrap animate-fadeInUp animated"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('advantages.item1.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('advantages.item1.p')))])]), _vm._v(" "), _vm._m(6)]), _vm._v(" "), _c('div', {
    staticClass: "item-wrap item-wrap-center"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "des-wrap animate-fadeInUp animated"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('advantages.item2.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('advantages.item2.p')))])])]), _vm._v(" "), _c('div', {
    staticClass: "item-wrap"
  }, [_c('div', {
    staticClass: "des-wrap animate-fadeInUp animated"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('advantages.item3.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('advantages.item3.p')))])]), _vm._v(" "), _vm._m(8)])])]), _vm._v(" "), _c('div', {
    staticClass: "model-wrap container",
    attrs: {
      "id": "model"
    }
  }, [_c('div', {
    staticClass: "content commom-cont"
  }, [_c('h2', {
    staticClass: "content-title"
  }, [_vm._v(_vm._s(_vm.$t('model.title1')))]), _vm._v(" "), _c('div', {
    staticClass: "item-wrap"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(131),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "des"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('model.item1.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('model.item1.p')))])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(132),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "des"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('model.item2.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('model.item2.p')))])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(133),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "des"
  }, [_c('h3', [_vm._v(_vm._s(_vm.$t('model.item3.title')))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('model.item3.p')))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "roadmap-wrap container",
    attrs: {
      "id": "roadmap"
    }
  }, [_c('div', {
    staticClass: "content commom-cont"
  }, [_c('div', {
    staticClass: "des-1 section-t animate-fadeInUp animated"
  }, [_c('h2', {
    staticClass: "content-title"
  }, [_vm._v(_vm._s(_vm.$t('roadMap.title')))])]), _vm._v(" "), _c('div', {
    staticClass: "time-line-wrap"
  }, [_c('time-line', {
    attrs: {
      "roadMap": _vm.roadMap
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "roadmap-bg"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "team-wrap container",
    attrs: {
      "id": "team"
    }
  }, [_c('div', {
    staticClass: "content commom-cont"
  }, [_c('div', {
    staticClass: "section-t animate-fadeInUp animated"
  }, [_c('h2', {
    staticClass: "content-title"
  }, [_vm._v(_vm._s(_vm.$t('team.title')))])]), _vm._v(" "), _c('div', {
    staticClass: "des-2"
  }, [_c('div', {
    staticClass: "intr-cont item item-1 animate-fadeInUp animated"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(134),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "intr"
  }, [_c('p', {
    staticClass: "intr-title"
  }, [_vm._v(_vm._s(_vm.$t("team.intr1.p1")))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("team.intr1.p2")))])])]), _vm._v(" "), _c('div', {
    staticClass: "intr-cont item animate-fadeInUp animated"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(135),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "intr"
  }, [_c('p', {
    staticClass: "intr-title"
  }, [_vm._v(_vm._s(_vm.$t("team.intr2.p1")))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("team.intr2.p2")))])])]), _vm._v(" "), _c('div', {
    staticClass: "intr-cont item animate-fadeInUp animated"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(136),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "intr"
  }, [_c('p', {
    staticClass: "intr-title"
  }, [_vm._v(_vm._s(_vm.$t("team.intr3.p1")))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("team.intr3.p2")))])])]), _vm._v(" "), _c('div', {
    staticClass: "intr-cont item animate-fadeInUp animated"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(137),
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "intr"
  }, [_c('p', {
    staticClass: "intr-title"
  }, [_vm._v(_vm._s(_vm.$t("team.intr4.p1")))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t("team.intr4.p2")))])])])])]), _vm._v(" "), _c('img', {
    staticClass: "bg-1",
    attrs: {
      "src": __webpack_require__(138),
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "bg-2",
    attrs: {
      "src": __webpack_require__(139),
      "alt": ""
    }
  })]), _vm._v(" "), _c('footer-bar')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(140),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(141),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(142),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(143),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(144),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(145),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap section-t animate-fadeInUp animated"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(146),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap section-t animate-fadeInUp animated"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(147),
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img-wrap section-t animate-fadeInUp animated"
  }, [_c('img', {
    staticClass: "animate-fadeInUp animated",
    attrs: {
      "src": __webpack_require__(148),
      "alt": ""
    }
  })])
}]}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/b_bg_1.a64a09a.png";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/b_bg_1_h5.1648ba5.png";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/b_bg_2.2efd65d.png";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/b_bg_2_h5.d7c9a4b.png";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/1.daa06e6.png";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/2.ddc71b6.png";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/3.b967367.png";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/h_1.ca6147d.png";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/h_4.1e1e33c.png";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/h_2.7ff22ee.png";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/h_3.4b0a7b4.png";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/team_1.c7afe15.png";

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/about.ffbb4ea.png";

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAACwCAMAAAB3q39SAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUxpcfL1//f5//z8/93l/uLp/+3x/+fq9c3N6ejt/9jh/nNswGNdpmtls1tWmM7R77u844uIxqSj1ogm+ZMAAAAJdFJOUwD///////+6YNq8rkEAABPmSURBVHjarFsLmxsnDDQY9gK7ax7//8eWNxII1pcUX5zr17SZTEajkVi/XuR5f3H4m8ev3WEP5wgnvaGjjuP1u/MMNaLNr/w2Q80vlr6bgcavCLW8zZB/BfqZ2YyZr9AmsOmnApbGzAioBeyhwk9K/Q94OUbNN7pIqBnJMKsM7yhW6fy7HqogmiaWeuhIOSL5aF8EWlXQJo6PbzC/vzxIyKuiWxVeFXGlmRJFofgJMv/KHgrKd1Lym8CJKeY04KPV3UhyBFs4fpLG+/tTCo9zCjTUBcegjy4Ksu6AKuD5J8CNZFIQrPrEzoKziI+ZYtUwZ5ofIH/LbW8eJGgGvLizjNAydlCCqCLupbeHzL9ECzheO9pkF6OvVY7HiqtGPKiChPy1Q1TUC9A7VQANkxwDdifIP3/Vl9/FILoe3pRNNAPmc5OrTlHhstnVCliEWSr583ci5hn0mzaJIopVn6tGTPiwAk4xW4UkWP7OIbYiZoBnOkgAetmg4aaIyvGoikCy//mdJkCj2yUJ1oWxLjo6ANEmUfGGd/vzi7QGFLGqt/rVNMznsNbjMKNKrrY7hDmjVVKq0/z5CxWv0xqDHZrvJEw1jmNpEg21lM58h5g3lwDGRhkazwF+3epqYFt2DhKzrC95Vil/7cR8E+KLUSw4PmqSmClW2CIGUyuSKK+qi6eay10jxbUdWr4uuB7hRxvuVUe3Ogk5lqf7+UoUteiqgt/LIXRpFCgSMyoPR5IP3DokUnFCnEn+NlAsnI1hW9vNHKSnLU0CSTgflZX8Vd1tp43tRIcJJgelKuK55hps2UjeI+6K4BD0ezGArsdQtlhLKFh1Q7OTQBCV5fO0fzaIOex2u00KoHhKxIjc1VynKEHUssMcx9r7YgBd9g3WIzE51x1g1GeLxtxt+JhtotDbOY6yeI7D/L3dTNS5g+51RxfF7BPbtgFLryA/kyy+GvIXDMMB6aEz0zaxyT8QaX0LiP0SMR9i5kbFrNsaIzRBtrq2+Tkoi5BQE8DeIuKf11PfWMR3aswnFmslTVCLCTg2H2TZdbCqIXY/rydrA6Ftu6/i5Ny8qzpyN9E10TFDjkOAW9oa37laixK7DL+P8B3vMetXdS00vAnxaV4PAWjtxAzBpsEyOsI3gmkjVmPRQcT69aCJxbKKwSU8KeIWig/S1IZeR5lELTykCgIxH1oHpeE5/qyMmOzPCotiKjnQmxHFK445GOw2Fx07+TZbWzgxVARlE1L1klNPiL/xYdYGJdIlRhEzunnsAjyJl0TM4ZUB3+R3vtgFgu0PtalSaG4mVIxcYsCbEYvX835t2Z358lamrVxXZkyahMQkqwn1hJhjj6BpZrsEfyC8jG516mGZQshhxzHvk/42D/PFrcGm0aHN2gqsApJQELcIrxFxj5frm0W0++GrBVuNPnTNgeXlMYThX3M8xMv378e6A1yILilexgkkXvWdKpoVb2cOOCQh6Acb+gYjVpiLvIZ7HcYrKFVwdBX6NDkvdym7+2a1aHVTp6M1gTnmWBMUaIZtbTPp0yNo+SJmOknNHEriqltw/ObvLcWbDTyliW9XxJKcQwdZzDrueFc7eHSTRAX4Zd2pvlyjNyl4Ap1UHHUc3hvi4Xr8/TAyc8YeV/CM3AeqdSjuWUJhvAIIg+J4JeLKcU8/nK02E/QMeqjNyCHVONJhirNXDBy/t8+kgCvch0RMtg2whl/MdRCwGigWM8d8ny/ZeK/ISbAZcPzthRDaGKN1+EZEmWKLOEY5wGZHFV3xCqiKnSIYdRtK7IiPgNRY790Jzh3HX2+NicAXZgwT5tA9ROUYIebA2PbPpVSH4PPqMoJ1AGd5la94zoBbyFVWU0TNYS+Of10Dx9sgwfm6cShhPKL1hqAL9HycNVoO2zU0c0wibhqWQBV83zdYH+qo7RqEe89wy2nfBK6NmBWhpCQ5boIAHMNx4813D0y0q8UOW0F271ETSRIIeGVay05x369RgmiKgKpA9+ObcDkxLBG9ACsWMnFOa1okVpJsdgKKGFUevEZaPkxDAUb8nhnnieHWHwTsIA6lsKMpIkuIiWP5em/COxumOggZ89vAAmrXHF+lCtWw/KHhJhU3juUL3H1tV64YsrbncEiDWOO9wstZocA+m6S42gTgeL/6obvyYdwI9SQEvNREhJvevOl9o4OGptYl0VXRV9rLDD+IQnoKbwV8Dq1j5PfqJF+XM8tAXDnOmCXgeH+/SKzXhD8JSXSCMcOUJq7Ccng/LaGJueZw5fGHDfGQf7QbkGI5bDyt8nsVgsNXePMCC1kM8YdSBXVjV22iC2ICfBPIa9egGL4aaAT58otGt0L85XVzZVq4QQ7PPSP9OlxxDfCdWKbjz6rynoZ87BWHGyquvjsH1VtRO++tDVnThPcURJuOK8FJGJbiVw5wHxAz5GwN8+FnA475N4AKDo20cKYeIWC0DDHfusptFnGBbEiOC2D5Hcd0WjNT0wjdVue5yAyWdlpBjEfa+FZzjeTL6VnCxFkiZp1jnNaUQ4WW8LYxzjTA6c0ZRT9aJcw54A3HTqMohTn+jurFH54Fg8eOFFvVJ1BzQ1U4DTaXYejTom1+lHEj4OvWaOBofRlrec9xN4mGWp0DxabDtd5BlzhNxWv64Jdoj6AzyxPJonWPxaE57nlterrKDMHdVrjOFQNrmG2l15+9OxepBEh2wPspShZgOSF+owr66hYbRUi45WlAPzcMJ7ImhIOduRpZkImbSDag9oQQJNEEYvRQ+Tg6K+RpTRPuHCa5cExh2OEmdzcjs4jgT5YFnDiwre04ZtiLIcsSNuf7dCIB9sQk54uvWRQoMstnUqu5R1l4kCdovGsdl23gFIs1QBuff6kUz6dQLKh/lxELX/6yMsWBZCdguPy+8vAzuavCs0f4Xxdjq8vH7qZ9j0L+tuVX6XiEqYL+pNJr8qVg6wkxmz8xw0bEiRlnDvKANjE/HYhP+2dfST617MlnplovK2/zCR9TR/zQ6ayxujrxeExl2JIno63/2Vlq7+NA9iGFoUfE7UN11G6t6rgmy/hdMbc5vNe6q86GaywhU83ePvXlBIrxckCrKVXgsXnGLNF8fzevGONw4Vjf9xTem+/2rlch+13JkRxvPmdQVsQxB4HsPvjxCFh5Cm9K7yr7cTGJ9NPnY9HQISe4euR4EYgRaosWreE3z5A9wFyyQ8wTRREQ73WWcaOKohAc38yGY01zjO8MOPH8gRhmo6LkQ4UYFKNFeLMtB7u7BvcShsOfJq4n0prNd4Yz4CTjrST06BUb/bbr0CgAOOOfleUAWoTRyPTVcCCxAI4/hT9KXNTX2B408akqLpr4GCAHKaiyC6+OmO1E0e8VVex6aNPjTbubQSZsHByNynzffNjexdGqhmP/EOKp8PRceWz5MFi6OdC2h4g+epqxeQSCw8jXBuU2eNa9tvG13romrjAm6mWra6+CePsUWP+0DDvMeYh53RPvN9BQFLN9U/A43Yd/W3pGITn/8MLeWhA2LDT4VkOO8aNVxEcjAmYT/MwCSfQrA5+G/DTge9e2a21SzojzRdQNu0bBHDVxXnpLcTojx3xTdPHL3C43jNWOqi8A2z4ivTkf/yTO3cXRkK2FcxthQ66gsYLiQ5XX7+k4faEfjo5zkvJzfkdry4tqHDAIt5oreD+3FcJNtacx7kRzRHy84KC//LxMuhWVodDkIf1mi42R3hPaT2e3wM2AfZTyyoUDVqwKuJnYfpJVBWL9QUG+Ro6bs2F2sRwy8DMADv4curQgSc6oO+LjtfsMIDAKlkNPnDyUpbfuwwKQUgQIEoViZ4Qwd2whW1/LLBfEaC/Byecvy3W+vitkR2zdr3unXySJq0nCayGNy3ZBh4lUckUWiOPdh/TrJyNS4k3znfYrjq9rWFz2aRkbxJUkHPAkwKMoNOjO2N0Kx3xtEuARmpTHgvvG6c44QhAPFH9w2V1REcKcVRwUyRVrprlyvP8MVX/IVds8VuTVirBnW/Vckw+PJYflm9tGSEa56KKKc5eeSdawhWTESxuenlEyLm0D0zIqxTU7c0zXHMR8NbxxrPYZcOjSsIMgTWS0YkBMqLg/B1Zhm1Mctu6Gc8RMrjHaMEaNkJaCuyK/stRc/Gcj3KXHNAHpHTnmy8cD4ScBY5dWteQCzWmsN/6EHnFPNdfbcoV8BgGkQcRXx7DCfG49ZSANZUxxPD+7hh+9NGGGO4Rv8UfXDXYCfa0VAdCGjJGDvdD2/jTAoEvrKoqS11rZjYg59SBYfU47gxaBWdUhd8wRtCuoJ7DN28KUFy9GykbInh8A2CdnnlsHhNsRr6tueFw0dekKObuE74OSjktvAnZWdnq8qe67Qu7seK8A2PQurXsE0ljGYqmK5cN2KnVpVYPFVZ9HgQ/RGJumVHh8nPD6ck5o0/RbcpDGXVq3nDnI+EnH8xPEul4XWFBt13gJJjdHG+PvDzgtVjjdbQ1CFbOOOfuvuCtbkhuEgTNVwAx4dn38/8fGHAYJHeBJVULe9mGro5V1oW44UQF2n9GmbmmNya9MqK7YsMcLPSuNBSvabf9AuHEQdCW9DTfOfbaTbVw5atwefJ5gL2kmcSytj8uumhbx4N8f+EG8NN2RcWtqzoA/K6gskQ+bCa9AYJ/EyGUUaGKLSRLzku5113Zy7/f5/JKzpBp+/flFhdBl4968AmKHMh0jPVKydA5r674oxTAIcsz5ZLyhlBVLAGEiAzU9XNHGVU+JkyeK4SJv+CSnDceuZI0KlWCOG0LJwC1L42a0GHmY8xxUMaNEwLQlet0eHWsZpuzLD1e5o5YOYT49JwNsWW/raniM1szamGefmL1EtZrxVgj6lzbMPdyrrNz264dHV7AF3ot7xE6nYxc9AZeHlnkr6cJs1625R9cYfZAznOHEXng/CHAg5Q/xYsErngLexvAJey3Q9qMOsHKyQ7CBK8fYdwaRUKY+p/+3/8fR1/DYxH10ez5Qv/GUudhNsirsLUAsJ4ya60yJZfGUdZucpmOkbleLG8T72WggRr1dkBCDzCHTOcq81RwwCJ9/6mBhcjYlZaR4HEL7cYELM8nPZsjsx3S5WbOxzJbxiJLkV3wTHtOGsaMTa9IuTe8rjmlBPw2xI3TsJyc+AqgGaXcG1ZO5RhMroOTlfVjeutlPy8/8pwdtDMihnMoWo51DMJcyuGxfnb9/bTtYp+eTtHeGdGb2M2ljTXsEsBYxaAswg7QRgYMlNyFLV7wBl8VyhoaIGb77k2MKEwpV7PDARPjD5GPhNPtCC49MTGwsKds1jSJH96ouzL9kIiGf2AKQ6Vp1XsU5Ohsz9aV3TTvHsyzAuGeVnQPNhDXzxh6qu1mkXmxmbKxoBzb+raM0wLgqWC39q7tG5IMEPPkxAKziwr2NWeG1JiapCMWV/ewQSEvUV8QIbfe9wYQ39OPaOjtd3Y6j6GMmhwkp7P6gSHa1U4FBC5NzCxMmTNn4yRbDUEnJMYJKkGjpQTIuwTgl6RC06/GW7ybcuCEW6fkosrGUL54sjJaGxKUUPIEf+TBA7Pjc3Puwu81lRctr7E5K33eMkt6F+MnIzmJFSQ5uE63yPYmqbouKq3Zdy2H4clizsUQWdoKUB5FKkWxsjbg3ivx3XFMgxCKzmSctWsgXtsSLDWIaWHZnIsCbpHpdN5mlBTE+pDviJP64zFNj+RxMJG7Rwcza2AnbdrJ8Tqd36BmwjURlhSUlfH0b5owMbCyoKfEfHZaZ8FYjqWlfXjAwRMz7sXO8sp2kOwIBe40rbNUwDLpQM2lhYGP2o2NtbAFmhhlKCT5WuM5HyXnOwMDGov63Y+SJiK4dkW3ovNfKF+RhslnSvjwvq+fgVGetRr5VwkRglmlu21gqiBkbIxkPL5KxJ8IatHL42sbeQTXtXlDbomBBygmD+c3XErGl14oGtaB3rMx6RTexEiS2rMBm1TJHmJnC37dx7fe9V4VyeSLrwB8CKia6O+dZxO4hTX4cVcbwkD4ux+KJb+52XFvBZhOjOst3zaIWHyzUUNVjxYWJG7VEZ+PdPviS2GltaN8o4VAx8Io2S7nvyVm98oETh6z8rfLHB4EtwJ1cOA40N02cFJBZSSVWaBTi9fxXpzFmugn8NNoVIo5ywqjhcIp0jlCtGZw72LSMHALtV90NbkkXG7/g47TAxkvo6FTLriqm9+OzZl5ycMuIwaiK0dy3TP2j8IU5vgxZ/LkbJoAbX0b2iuCPgtTST84yPTPukubRrhhwcuOE2EuPn1hG/tL3egJgNiGnOmze+xbOiK/HWJwDrw7RgrgB9nzygIMUq86rbjR1KwO4PrmBp8ROk3HlamEo48Hvi4bZCfHAxKY+X6E1oqL6JSNRxDsy3Wi8A3dlTHwesamzSFbJc5lO5oW2Qcp9oIyFgYkjYqcXmJrKll5QtOTxPe5Mv9zQWzddYLNUApPgNsy0ykprz/da0P7bywTx7tUmvYLnByk1RohhDeS6dpc0gXwd+IQAGddqTGYeNR1o5vqNlSHglbwy9ZA7JC9NA1UPxnXP9x/ewjixgFmxMZn+dL4RULr7OghXvALgC7L19JOTh2s8WxiN1wBeE+758AAwxGzpywbSMMUqdJnqD19FikpyfylvK76pTK4X9ZTkeWDXdJhvvKLqXpiX+nzlewcijVTIzODGYziqYhcw7+BdNv8evRH63ndvx8eMGM7GGPNXWTnVEgMDV8isLMK/P0d4veeejn3vx/8HvW9+Fm8GfRz/zdSJrOxuwS2g3+8Dny3+E88KN4/pCehe/fqom4JEm5zY1+stwf0DjLQinAvIURwAAAAASUVORK5CYII="

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/1.6c1e52b.png";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/2.3226f0d.png";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.0.0/static/img/3.ddd8425.png";

/***/ })
]));