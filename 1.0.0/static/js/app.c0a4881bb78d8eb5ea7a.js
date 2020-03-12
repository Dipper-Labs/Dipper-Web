webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_HELLO_NAME; });
/* unused harmony export SET_HELLO_NAME1 */
var SET_HELLO_NAME = 'SET_HELLO_NAME';
var SET_HELLO_NAME1 = 'SET_HELLO_NAME1';

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_scrollreveal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_layer__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_layer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_layer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__locales__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_animate_css__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_animate_css__);












__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
window.ScrollReveal = __WEBPACK_IMPORTED_MODULE_4_scrollreveal__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$layer = __WEBPACK_IMPORTED_MODULE_5_vue_layer___default()(__WEBPACK_IMPORTED_MODULE_0_vue__["default"]);

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  i18n: __WEBPACK_IMPORTED_MODULE_6__locales__["a" /* default */],
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App___default.a
  }
});

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(23)
}
var Component = __webpack_require__(10)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(26),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": "router-fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(28);


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var index = function index(r) {
  return __webpack_require__.e/* require.ensure */(0).then((function () {
    return r(__webpack_require__(56));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var Error404 = function Error404(r) {
  return __webpack_require__.e/* require.ensure */(1).then((function () {
    return r(__webpack_require__(57));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    name: '/',
    path: '/',
    component: index
  }, {
    name: 'index',
    path: '/index',
    component: index
  }, {
    name: 'Error404',
    path: '/Error404',
    component: Error404
  }, {
    path: '/*',
    redirect: '/Error404'
  }]
}));

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__getters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_hello__ = __webpack_require__(36);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var debug = "development" !== 'prod';

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
  modules: {
    hello: __WEBPACK_IMPORTED_MODULE_4__modules_hello__["a" /* default */]
  },
  strict: debug
}));

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHelloName", function() { return setHelloName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHelloName1", function() { return setHelloName1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(8);


var setHelloName = function setHelloName(_ref, name) {
  var commit = _ref.commit;

  commit(__WEBPACK_IMPORTED_MODULE_0__types__["a" /* SET_HELLO_NAME */], name);
};

var setHelloName1 = function setHelloName1(_ref2, name) {
  var commit = _ref2.commit;

  commit(__WEBPACK_IMPORTED_MODULE_0__types__["a" /* SET_HELLO_NAME */], name);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutations__ = __webpack_require__(38);





/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_1__mutations__["a" /* default */]
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'XXX'
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_types__ = __webpack_require__(8);



var mutations = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_1__store_types__["a" /* SET_HELLO_NAME */], function (state, name) {
  state.name = name;
});

/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__en__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__zh__ = __webpack_require__(52);






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

var messages = {
  'en-US': __WEBPACK_IMPORTED_MODULE_2__en__["a" /* default */],
  'zh-CN': __WEBPACK_IMPORTED_MODULE_3__zh__["a" /* default */]
};

var locale = localStorage.getItem("locale") || 'zh-CN';
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
  locale: locale,
  fallbackLocale: 'en-US',
  messages: messages
}));

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var locale = {
  lang: 'EN',
  title: 'Dipper Network',
  links: {
    home: 'Home',
    zoology: 'Ecology',
    model: 'Model',
    advantages: 'Advantages',
    team: 'Team',
    paper: 'White Paper'
  },
  banner: {
    sologen1: {
      p1: 'DIPPER NETWORK',
      p2: 'Decentralized Global Inclusive Financial Network'
    },
    sologen2: {
      p1: 'DIPPER BANK',
      p2: 'Make Finance At Your Fingertips'
    }
  },
  about: {
    title1: 'What is Dipper Network?',
    title2: 'Project introduction',
    p1: "A decentralized global inclusive financial network, focusing on building a cross-chain ecological financial layer, centering on Dipper Bank, enriching the upstream and downstream ecology, and comprehensively improving the efficiency of asset transfer on the chain."
  },
  zoology: {
    title1: 'Product Ecology',
    item1: 'Predicting the market',
    item2: 'Derivative transaction',
    item3: 'Borrowing',
    item4: 'DEX Decentralized Exchange',
    item5: 'Stable Currency',
    p1: 'We will use decentralized lending as an entry point to build a high-performance public chain based on the COSMOS SDK. ',
    p2: 'Based on this, we will issue stable coins, establish a DEX decentralized exchange, and design derivatives trading and forecasting markets.'
  },
  advantages: {
    title1: 'Product Advantage',
    item1: {
      title: 'Mining Mode',
      p: 'Borrowing is mine mining. Users will get the platform TOKEN as a reward as long as they have borrowing behavior on the platform. There are two types of rewards: long-term rewards and irregular rewards. Users with large loan funds and long period of time will receive more rewards.'
    },
    item2: {
      title: 'Community Governance',
      p: 'After obtaining the platform TOKEN through lending, the user gradually formed a governance committee and participated in voting to modify the market interest rate model, activate global clearing, and contract renewal. Thereby making the platform more open and transparent.'
    },
    item3: {
      title: 'Cross-chain Dinance',
      p: 'DIPPER NETWORK will only implement asset cross-chaining through the blockchain protocol itself, without the need for third-party involvement. The follow-up will open up COSMOS and POLKADOT and more blockchain networks, so that all kinds of blockchain assets can be efficiently circulated and fully exert their financial value. '
    }
  },
  model: {
    title1: 'Ecological Model',
    item1: {
      title: 'Previous',
      p: 'Lending is mining, users will get DIP as a reward as long as they have borrowing behavior on the platform. And the platform will take out a certain amount of profit and repurchase the DIP, distribute it to the borrowing users, and realize the internal circulation of the platform.'
    },
    item2: {
      title: 'Interim',
      p: 'DIP will be used as a deduction for the interest on the loan to promote the consumption and circulation of TOKEN. After the user has reached a certain scale, the platform will set up a governance committee, and users with TOKEN can participate in voting to modify the market interest rate model, activate global clearing, and contract renewal. '
    },
    item3: {
      title: 'Late',
      p: 'Research and develop the exclusive public chain of DIPPER based on COSMOS SDK, open cross-chain assets, issue stable currency, design derivatives trading and forecast market. Since then, DIP will also play a greater role as a transaction fee, which in turn will result in greater liquidity and value.'
    }
  },
  "roadMap": {
    "title": "Time Route",
    "map1": {
      "year": "Q1 2020",
      "event": "Dipper Network Test Network Supports Smart Contracts, Developer Recruitment Program"
    },
    "map2": {
      "year": "2020 Q2",
      "event": "Dipper Bank launches large-scale commercial promotion and operation activities, brand building"
    },
    "map3": {
      "year": "2020 Q4",
      "event": "Dipper Network main network release node staking, ecological construction"
    },
    "map4": {
      "year": "Q2 2021",
      "event": "DeFi Eco-Component, IBC Agreement, Fusion Boca Developer Incentive Program, Building a Business Alliance"
    },
    "map5": {
      "year": "Q2 2022",
      "event": "Across the entire network of inclusive financial networks to unite traditional companies, Internet companies and government agencies to promote asset-winding."
    }
  },
  team: {
    title: 'Team',
    intr1: {
      p1: 'Captain CEO',
      p2: 'Chief Researcher, Domestic Head Block Chain Company.'
    },
    intr2: {
      p1: 'Albert Counselor',
      p2: 'Chief Architect of Domestic Head Block Chain Company. Graphene Community Developer. '
    },
    intr3: {
      p1: 'Sundy COO',
      p2: 'Well-known star of Weibo in Blockchain. Former Netease Senior Product Manager'
    }
  },
  footer: {
    contact: 'Contact Us'
  }
};

/* harmony default export */ __webpack_exports__["a"] = (locale);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var locale = {
  lang: 'ZH',
  title: 'DIPPER',
  links: {
    home: '首页',
    zoology: '产品生态',
    model: '产品模式',
    advantages: '产品优势',
    team: '团队',
    paper: '白皮书'
  },
  banner: {
    sologen1: {
      p1: 'DIPPER NETWORK',
      p2: '去中心化的全球普惠金融网络'
    },
    sologen2: {
      p1: 'DIPPER NETWORK',
      p2: '让金融触手可及'
    }
  },
  about: {
    title1: '什么是Dipper Network ？',
    title2: '项目介绍',
    p1: "一个去中心化的全球普惠金融网络，专注于构建跨链生态的金融层，以Dipper Bank为中心，丰富上下游生态，全面提高链上资产流转效率。"
  },
  zoology: {
    title1: '产品生态',
    item1: '预测市场',
    item2: '衍生品交易',
    item3: '借贷',
    item4: '去中心化交易所',
    item5: '稳定币',
    p1: '我们将以去中心化借贷为切入点，打造基于COSMOS SDK的高性能公有链。',
    p2: ' 并以此为基础发行稳定币，建立DEX去中心化交易所，设计衍生品交易和预测市场。'
  },
  advantages: {
    title1: '产品优势',
    item1: {
      title: '挖矿模式',
      p: ' 借贷即挖矿，用户在平台只要有借贷行为，都将获得平台TOKEN作为奖励。 奖励方式分两种：长效奖励机制和不定期奖励活动。其中借贷资金大、周期长的用户，将获得更多的奖励。'
    },
    item2: {
      title: '社区治理',
      p: '用户通过借贷获得平台TOKEN之后， 逐渐形成治理委员会，并参与投票表决修改市场利率模型、激活全局清算、合约更新等操作。从而让平台更加公开透明。'
    },
    item3: {
      title: '跨链金融',
      p: '  DIPPER NETWORK将仅通过区块链协议本身实现资产跨链，而不需要第三方机构介入。后续将打通COSMOS和POLKADOT以及更多的区块链网络，让各类区块链资产能高效流通起来，充分的发挥其金融价值。'
    }
  },
  model: {
    title1: '生态模式',
    item1: {
      title: '前期',
      p: '借贷即挖矿，用户在平台只要有借贷行为，都将 获得DIP作为奖励。并且平台将拿出利润的一定 比列回购DIP，分发给借贷用户，实现平台内部 流通。'
    },
    item2: {
      title: '中期',
      p: 'DIP将作为借贷利息的抵扣凭证，促进TOKEN的消耗 和流通。并在用户持有达到一定的规模以后， 平台 将成立治理委员会，持TOKEN的用户都可参与投票 表决修改市场的利率模型、激活全局清算、 合约更 新等操作。'
    },
    item3: {
      title: '后期',
      p: '研发基于COSMOS SDK的DIPPER专属公有链，打 通跨链资产，并发行稳定币，设计衍生品交易和预 测市场。自此DIP也将发挥更大的作用，充当交易 手续费，进而产生更大的流通性和价值。'
    }
  },
  "roadMap": {
    "title": "时间路线",
    "map1": {
      "year": "2020年Q1",
      "event": "Dipper Network测试网 支持智能合约、开发者招募计划"
    },
    "map2": {
      "year": "2020年Q2",
      "event": "Dipper Bank发布大规模 商业推广和运营活动，品牌建设"
    },
    "map3": {
      "year": "2020年Q4",
      "event": "Dipper Network主网发布节点staking，生态建设"
    },
    "map4": {
      "year": "2021年Q2",
      "event": "DeFi生态组件、IBC协议，融合波卡开发者激励计划，搭建商业联盟"
    },
    "map5": {
      "year": "2022年Q2",
      "event": "跨越全网络普惠金融网络联合传统企业、互联网企业和政府部门推动资产上链。"
    }
  },
  team: {
    title: '团队介绍',
    intr1: {
      p1: 'Captain CEO',
      p2: '区块链布道者，前公信宝首席研究员，前秘猿科技区块链工程师'
    },
    intr2: {
      p1: 'Albert Counselor',
      p2: '区块链专家，前公信宝首席架构师，石墨烯全球区块链技术顾问'
    },
    intr3: {
      p1: 'Sundy COO',
      p2: '知名币圈微博大V，前网易资深运营经理'
    }
  },
  footer: {
    contact: '联系我们'
  }
};

/* harmony default export */ __webpack_exports__["a"] = (locale);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[18]);