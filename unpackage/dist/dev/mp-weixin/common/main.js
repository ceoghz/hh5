(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*******************************!*\
  !*** G:/xiang/h5_2.0/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));


var _laiketuiCommon = _interopRequireDefault(__webpack_require__(/*! ./components/laiketuiCommon.vue */ 13));
var _main = _interopRequireDefault(__webpack_require__(/*! ./utils/req/main.js */ 16));
__webpack_require__(/*! ./utils/request.js */ 18);
var _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 20));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./utils/http/index.js */ 19));





var _util = __webpack_require__(/*! ./utils/util */ 24);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var heads = function heads() {__webpack_require__.e(/*! require.ensure | components/header */ "components/header").then((function () {return resolve(__webpack_require__(/*! ./components/header.vue */ 506));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};_vue.default.prototype.$http = _index2.default;_vue.default.config.productionTip = false;_vue.default.component('heads', heads);_App.default.mpType = 'app';














_vue.default.prototype.$req = _main.default;

var app = new _vue.default(_objectSpread({
  store: _index.default },
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!*******************************!*\
  !*** G:/xiang/h5_2.0/App.vue ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 6);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 10);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 6 */
/*!********************************************************!*\
  !*** G:/xiang/h5_2.0/App.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 7);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/xiang/h5_2.0/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vuex = __webpack_require__(/*! vuex */ 8);
var _qqmapWxJssdk = _interopRequireDefault(__webpack_require__(/*! @/utils/tengxunmap/qqmap-wx-jssdk.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  onLaunch: function onLaunch() {
    console.log('App Launch');
    var that = this;
    //导航信息条高度
    uni.getSystemInfo({
      success: function success(res) {
        var nate = res.statusBarHeight;
        uni.setStorageSync('data_height', nate);
        console.log(nate);
        that.data_height(nate);
      } });

    this.getAddress(); //调用获取地址函数
  },
  onShow: function onShow() {
    console.log('App Show');
  },
  onHide: function onHide() {
    console.log('App Hide');
  },
  methods: _objectSpread({
    //用户授权 获取用户地址
    getAddress: function getAddress() {
      console.log(6655555);
      uni.getLocation({
        type: 'gcj02',
        geocode: true,
        success: function success(res) {
          console.log(55555555);
          console.log(55555555);
          console.log(55555555);
          var latitude = res.latitude;
          var longitude = res.longitude;
          var qqmapsdk = new _qqmapWxJssdk.default({
            key: 'VNSBZ-UMKCU-ZTLVR-2NGQW-IQWZF-T3BM6' });

          qqmapsdk.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude },

            success: function success(res) {
              console.log(res);
              var address_info = {};
              address_info.latitude = res.result.location.lat;
              address_info.longitude = res.result.location.lng;
              address_info.address = res.result.ad_info.name;
              uni.setStorageSync('address_info', address_info);
            },
            fail: function fail(error) {
              console.error(error);
            },
            complete: function complete(res) {
              console.log(res);
            } });

        } });

    } },

  (0, _vuex.mapMutations)({
    data_height: 'SET_DATA_HEIGHT' })),


  mounted: function mounted() {

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/*!****************************************************************!*\
  !*** G:/xiang/h5_2.0/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 11);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/xiang/h5_2.0/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 12 */,
/* 13 */
/*!*****************************************************!*\
  !*** G:/xiang/h5_2.0/components/laiketuiCommon.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laiketuiCommon.vue?vue&type=script&lang=js& */ 14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);
var render, staticRenderFns, recyclableRender, components
var renderjs




/* normalize component */

var component = Object(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "components/laiketuiCommon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!******************************************************************************!*\
  !*** G:/xiang/h5_2.0/components/laiketuiCommon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./laiketuiCommon.vue?vue&type=script&lang=js& */ 15);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_laiketuiCommon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/xiang/h5_2.0/components/laiketuiCommon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

function getLaiketuiNoRegisterLoginInfo(store_type) {
  uni.request({
    data: {
      module: 'app',
      action: 'login',
      app: 'is_register',
      store_type: store_type },

    url: uni.getStorageSync('url'),
    header: {
      'content-type': 'application/x-www-form-urlencoded' },

    method: 'POST',
    success: function success(res) {
      var register = res.data.is_register || 1;
      //乐活精选免密码登陆配置
      uni.setStorageSync('needRegister', register);
    } });

}


/**
   * 是否 DEBUG
   */
var IS_DEBUG = false;

/**
                       * 店铺ID
                       */
var LKT_STORE_ID = 1;

/**
                       * 根路径
                       */
var LKT_ROOT_URL = 'https://mall.lhsc99.cn';
// const LKT_ROOT_URL = 'http://laike.test'
// const LKT_ROOT_URL = 'https://xiaochengxu.houjiemeishi.com'

/**
 * 版本号
 */
var VERSION = '';
// const VERSION = 'V3'

/**
 * 带版本号的路径
 */
var LKT_ROOT_VERSION_URL = LKT_ROOT_URL + '/' + VERSION + '/';

/**
                                                                *    乐活精选路径
                                                                */
var LKT_API_URL = LKT_ROOT_URL + '/' + VERSION + '/index.php?store_id=' + LKT_STORE_ID + '&';

/**
                                                                                               * 乐活精选H5默认路径
                                                                                               */
var LKT_H5_DEFURL = LKT_ROOT_URL + '/' + VERSION + '/h5/#/';

/**
                                                              *
                                                              */
var LKT_ENDURL = LKT_ROOT_URL + '/' + VERSION + '/';

/**
                                                      *  移动端类型  1 微信小程序 2 app、H5  3 支付宝小程序 4 字节跳动小程序 5 百度小程序
                                                      */
var DEFAULT_LKT_STORE_TYPE = 2;

/**
                                 * 店铺类型 1 微信小程序 2 app、H5  3 支付宝小程序 4 字节跳动小程序 5 百度小程序
                                 */
function getStoreType() {
  var store_type = DEFAULT_LKT_STORE_TYPE;













  store_type = 1;

}

/**
   * 跳转到登录界面
   *
   * @param {Object} page
   * @param {Object} forwardUrl
   */
function toLogin(page, forwardUrl) {
  var me = page;
  me.$store.state.access_id = uni.getStorageSync('laiketuiAccessId') ? uni.getStorageSync('laiketuiAccessId') : uni.getStorageSync(
  'access_id');
  var access_id = me.$store.state.access_id;
  if (access_id == undefined) {
    access_id = '';
  }
  var data = {
    module: 'app',
    action: 'login',
    app: 'token',
    access_id: access_id };

  uni.request({
    url: LKT_API_URL,
    data: data,
    success: function success(res) {
      if (res.data.code == 404) {
        uni.showToast({
          title: me.language.laiketuiCommon.noLogin,
          duration: 1000,
          icon: 'none' });

        var url = forwardUrl;
        setTimeout(function () {
          uni.navigateTo({
            url: url });

        }, 1000);
      } else {
        me.changeLoginStatus();
      }
    } });

}

/**
   * 这个只有微信小程序用
   * @param {Object} me
   */
function getWXTmplIds(me) {

  var data = {
    module: 'app',
    action: 'message',
    app: 'getWXTemplates',

    store_type: 1 };


  me.$req.post({
    data: data }).
  then(function (res) {
    var data = res.data;
    var code = res.code;
    if (code == 200) {
      me.tmplIds = data;
    } else {
      console.log('获取微信小程序订阅模板失败');
    }

  }).catch(function (res1) {
    uni.showToast({
      title: me.language.laiketuiCommon.forFailure,
      duration: 1000,
      icon: 'none' });

  });
}

/**
   * 获取用户的Token
   */
function getLKTAccessToken(obj) {
  var me = obj;
  return new Promise(function (resolve, reject) {
    var token = uni.getStorageSync('access_id') ? uni.getStorageSync('access_id') : obj.$store.state.access_id;
    me.$store.state.access_id = token;
    var access_id = me.$store.state.access_id;
    var data = {
      module: 'app',
      action: 'login',
      app: 'token',
      access_id: access_id };

    uni.request({
      url: me.$store.state.url,
      data: data,
      success: function success(res) {
        var code = res.data.code;
        if (code == 200) {
          me.$store.state.access_id = access_id;
          me.access_id = me.$store.state.access_id;
          uni.setStorageSync('laiketuiAccessId', me.access_id);
          uni.setStorageSync('online', true);
        } else {
          me.$store.state.access_id = '';
          me.access_id = '';
          uni.setStorageSync('laiketuiAccessId', '');
          uni.setStorageSync('online', false);
        }
        resolve(me);
      },
      fail: function fail(res) {
        reject(res);
      } });

  });
}

/**
   * 获取界面url请求地址
   */
function getLKTApiUrl() {
  var me = this;
  return new Promise(function (resolve, reject) {

    laikeMPWeixinExtUrl().then(function (request_url) {
      return getApiUrl(request_url);
    }).then(function () {
      resolve('');
    });










    getLaiketuiNoRegisterLoginInfo(1);


  });
}

/**
   * 关闭小程序授权弹出窗
   */
function closeMPAuthWin(me) {

  var userinfo = uni.getStorageSync('userinfo') || [];
  if (userinfo['openid']) {
    //关闭
    me.$refs.lktAuthorizeComp.closeWin();
  }

}

/**
   * 获取路径（url ）
   */
function getApiUrl(request_url) {
  var api_url = LKT_API_URL;
  var h5_url = LKT_H5_DEFURL;
  var endurl = LKT_ENDURL;
  return new Promise(function (resolve, reject) {
    var data = {
      module: 'app',
      action: 'url',
      app: 'geturl',
      get: 'mini_url,H5,endurl' };

    uni.request({
      data: data,
      url: request_url,
      header: {
        'content-type': 'application/x-www-form-urlencoded' },

      method: 'POST',
      success: function success(res) {
        if (res.data.code == 200) {
          api_url = res.data.url.mini_url;
          h5_url = res.data.url.H5;
          endurl = res.data.url.endurl;
        }




        api_url = api_url + '&store_type=1';










        uni.setStorageSync('url', api_url);
        uni.setStorageSync('h5_url', h5_url);
        uni.setStorageSync('endurl', endurl);

        resolve('');
      } });

  });
}

/**
   * 获取微信小程序配置的路径
   */
function laikeMPWeixinExtUrl() {
  var extConfig = uni.getExtConfigSync ? uni.getExtConfigSync() : {};
  var mpextURL = '';
  if (extConfig.url) {
    mpextURL = extConfig.url;
  } else {
    mpextURL = LKT_API_URL;
  }
  mpextURL = mpextURL + 'store_type=1';
  uni.setStorageSync('url', mpextURL);
  //获取是否免密码登录开关
  getLaiketuiNoRegisterLoginInfo(1);
  return Promise.resolve(mpextURL);
}

/**
   * 获取推送消息的客户端ID
   */
function getClientid() {
  var CID = plus.push.getClientInfo();
  return CID.clientid;
}

/**
   * div按钮无重复点击
   * @param {Object} frompage
   * @param {Object} callback
   * @param {Object} opts
   */
function laiketuiNoDoublePress(frompage, callback, opts) {
  var me = frompage;
  var len = me.clicktimes.length;
  var now = new Date().getTime();
  var lastclickBuyBtn = len > 0 ? me.clicktimes[len - 1] : now;
  me.clicktimes.push(now);
  len = me.clicktimes.length;
  //第一次进的时候时间数组长度为一、或者两次点击时间间隔大于等于一秒
  if (len == 1 || now - lastclickBuyBtn >= 1000) {
    if (opts) {
      callback(opts);
    } else {
      callback();
    }
  }
  if (len >= 3) {
    me.clicktimes.shift();
  }
}

/**
   * 延迟2秒赋值，防止重复点击
   */
function lktDelaySetVal(me) {
  setTimeout(function () {
    if (!me.fastTap) {
      me.fastTap = true;
    }
    if (me.isClick) {
      me.isClick = false;
    }
    if (!me.signFinish) {
      me.signFinish = true;
    }
  }, 1500);
}

/**
   *    登录超时处理:自己在调用的页面定义timeout()函数，逻辑自定义。
   *    1：这个超时的处理针对 H5 app 小程序的人工登陆操作
   *    2：不针对小程序授权操作；小程序授权一次成功后后面的操作静默授权
   *    @param {Object} frompage
   */
function laikeCheckTimeout(frompage, forwardUrl) {
  var me = frompage;
  var access_id = uni.getStorageSync('access_id') ? uni.getStorageSync('access_id') : me.$store.state.access_id;
  var data = {
    module: 'app',
    action: 'login',
    app: 'token',
    access_id: access_id };

  return new Promise(function (resolve, reject) {
    uni.request({
      url: me.$store.state.url,
      data: data,
      success: function success(res) {
        var code = res.data.code;
        if (code == 200 && res.data.login_status == 1) {//登录未失效的用户
          me.$store.state.access_id = access_id;
          me.access_id = me.$store.state.access_id;
          uni.setStorageSync('laiketuiAccessId', me.access_id);
          uni.setStorageSync('online', true);
          resolve(me);
        } else if (code == 200 && res.data.login_status == 0) {
          //游客
          resolve({
            visitor: true });

        } else if (code == 404) {
          if (me._back1 && typeof me._back1) {
            if (typeof me._back1 == 'function' || typeof me._back1 == 'FUNCTION') {
              me._back1();
            }
          } else {
            var msg = me.language.laiketuiCommon.noLogin;
            if (uni.getStorageSync('language') == 'en') {
              msg = 'Not login, please login';
            }
            uni.showToast({
              title: msg,
              icon: 'none',
              duration: 1500 });

            setTimeout(function () {
              if (forwardUrl) {
                uni.navigateTo({
                  url: forwardUrl });

              } else {
                uni.navigateTo({
                  url: '/pages/login/login?toHome=true' });

              }

            }, 1000);
          }
        } else {
          //登录超时
          me.$store.state.access_id = '';
          me.access_id = '';
          uni.setStorageSync('laiketuiAccessId', '');
          uni.setStorageSync('online', false);
          uni.removeStorage({
            key: 'history' });

          uni.removeStorage({
            key: 'user_phone' });

          uni.removeStorage({
            key: 'hotStatu' });

          uni.removeStorage({
            key: 'access_id' });

          me.$store.state.cart = [];
          me.$store.state.cart_id = [];
          me.$store.state.nCart = [];
          /**
                                       * @param {Object} res
                                       */
          //每个页面自己去实现timeout函数
          if (me.timeout && typeof me.timeout) {
            if (typeof me.timeout == 'function' || typeof me.timeout == 'FUNCTION') {
              me.timeout();
            }
          } else {
            //若是没有自定义timeout函数则进入下面跳转
            var _msg = me.language.laiketuiCommon.noLogin;
            if (uni.getStorageSync('language') == 'en') {
              _msg = 'Not login, please login';
            }
            uni.showToast({
              title: _msg,
              icon: 'none',
              duration: 1500 });

            setTimeout(function () {

              if (forwardUrl) {
                uni.navigateTo({
                  url: forwardUrl });

              } else {
                uni.navigateTo({
                  url: '/pages/login/login?toHome=true' });

              }

            }, 1000);
          }
        }
      },
      fail: function fail(res) {
        reject(res);
      } });

  });
}

/**
   *
   */
function laikeVisitorToLogin() {
  //游客
  var msg = '未登录，请先登录';
  if (uni.getStorageSync('language') == 'en') {
    msg = 'Not login, please login';
  }
  uni.showToast({
    title: msg,
    icon: 'none',
    duration: 1500 });

  setTimeout(function () {
    uni.navigateTo({
      url: '../../pages/login/login' });

  }, 1000);
}

/**
   * 获取授权码
   */
function getMPAliAuthCode() {
  return new Promise(function (laikeRes) {




















    laikeRes('');


  });
}

/**
   * 先获取url 再做其他
   * @param {Object} cb
   */
function getUrlFirst(cb) {
  var p = getLKTApiUrl();
  if (cb && (typeof cb == 'function' || typeof cb == 'FUNCTION')) {
    p.then(function () {
      cb();
    });
  }
  return p;
}

/**
   * 头条小程序IOS不支持虚拟支付
   */
function ttIOSCantVisualpay() {















  return true;
}

/**
   * 乐活精选免密码登录状态
   */
var LKT_NRL_TYPE = {
  RL: 1, //注册登录
  NRL: 2 //免密码登录
};var _default =

{
  IS_DEBUG: IS_DEBUG,
  LKT_STORE_ID: LKT_STORE_ID,
  LKT_ROOT_VERSION_URL: LKT_ROOT_VERSION_URL,
  LKT_ROOT_URL: LKT_ROOT_URL,
  LKT_API_URL: LKT_API_URL,
  LKT_H5_DEFURL: LKT_H5_DEFURL,
  LKT_ENDURL: LKT_ENDURL,
  LKT_NRL_TYPE: LKT_NRL_TYPE,
  toLogin: toLogin,
  getLKTAccessToken: getLKTAccessToken,
  getClientid: getClientid,
  laiketuiNoDoublePress: laiketuiNoDoublePress,
  laikeCheckTimeout: laikeCheckTimeout,
  laikeVisitorToLogin: laikeVisitorToLogin,
  lktDelaySetVal: lktDelaySetVal,
  getLKTApiUrl: getLKTApiUrl,
  getMPAliAuthCode: getMPAliAuthCode,
  getUrlFirst: getUrlFirst,
  getStoreType: getStoreType,
  ttIOSCantVisualpay: ttIOSCantVisualpay,
  closeMPAuthWin: closeMPAuthWin,
  getWXTmplIds: getWXTmplIds };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map