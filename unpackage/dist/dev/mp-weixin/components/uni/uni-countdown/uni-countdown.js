(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni/uni-countdown/uni-countdown"],{

/***/ 579:
/*!**********************************************************************!*\
  !*** G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-countdown.vue?vue&type=template&id=17b0084f&scoped=true& */ 580);
/* harmony import */ var _uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-countdown.vue?vue&type=script&lang=js& */ 582);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-countdown.vue?vue&type=style&index=0&id=17b0084f&scoped=true&lang=css& */ 584);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "17b0084f",
  null,
  false,
  _uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni/uni-countdown/uni-countdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 580:
/*!*****************************************************************************************************************!*\
  !*** G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue?vue&type=template&id=17b0084f&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-countdown.vue?vue&type=template&id=17b0084f&scoped=true& */ 581);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_template_id_17b0084f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 581:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue?vue&type=template&id=17b0084f&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 582:
/*!***********************************************************************************************!*\
  !*** G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-countdown.vue?vue&type=script&lang=js& */ 583);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 583:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//

/**
 * Countdown 倒计时
 * @description 倒计时组件
 * @tutorial https://ext.dcloud.net.cn/plugin?id=25
 * @property {String} backgroundColor 背景色
 * @property {String} color 文字颜色
 * @property {Number} day 天数
 * @property {Number} hour 小时
 * @property {Number} minute 分钟
 * @property {Number} second 秒
 * @property {Boolean} showDay = [true|false] 是否显示天数
 * @property {Boolean} showColon = [true|false] 是否以冒号为分隔符
 * @property {String} splitorColor 分割符号颜色
 * @event {Function} timeup 倒计时时间到触发事件
 * @example <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
 */var _default =

{
  name: 'UniCountdown',
  props: {
    showDay: {
      type: Boolean,
      default: true },

    showColon: {
      type: Boolean,
      default: true },

    backgroundColor: {
      type: String,
      default: '#FFFFFF' },

    borderColor: {
      type: String,
      default: '#000000' },

    color: {
      type: String,
      default: '#000000' },

    splitorColor: {
      type: String,
      default: '#000000' },

    day: {
      type: Number,
      default: 0 },

    hour: {
      type: Number,
      default: 0 },

    minute: {
      type: Number,
      default: 0 },

    second: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      timer: null,
      syncFlag: false,
      d: '00',
      h: '00',
      i: '00',
      s: '00',
      leftTime: 0,
      seconds: 0 };

  },
  watch: {
    day: function day(val) {
      this.changeFlag();
    },
    hour: function hour(val) {
      this.changeFlag();
    },
    minute: function minute(val) {
      this.changeFlag();
    },
    second: function second(val) {
      this.changeFlag();
    } },

  created: function created(e) {
    this.startData();
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    toSeconds: function toSeconds(day, hours, minutes, seconds) {
      return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
    },
    timeUp: function timeUp() {
      clearInterval(this.timer);
      this.$emit('timeup');
    },
    countDown: function countDown() {
      var seconds = this.seconds;var
      day = 0,hour = 0,minute = 0,second = 0;
      if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24));
        hour = Math.floor(seconds / (60 * 60)) - day * 24;
        minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
        second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
      } else {
        this.timeUp();
      }
      if (day < 10) {
        day = '0' + day;
      }
      if (hour < 10) {
        hour = '0' + hour;
      }
      if (minute < 10) {
        minute = '0' + minute;
      }
      if (second < 10) {
        second = '0' + second;
      }
      this.d = day;
      this.h = hour;
      this.i = minute;
      this.s = second;
    },
    startData: function startData() {var _this = this;
      this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second);
      if (this.seconds <= 0) {
        return;
      }
      this.countDown();
      this.timer = setInterval(function () {
        _this.seconds--;
        if (_this.seconds < 0) {
          _this.timeUp();
          return;
        }
        _this.countDown();
      }, 1000);
    },
    changeFlag: function changeFlag() {
      if (!this.syncFlag) {
        this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second);
        this.startData();
        this.syncFlag = true;
      }
    } } };exports.default = _default;

/***/ }),

/***/ 584:
/*!*******************************************************************************************************************************!*\
  !*** G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue?vue&type=style&index=0&id=17b0084f&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../360Downloads/Software/HBuilderX_2.8.8.20200820/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-countdown.vue?vue&type=style&index=0&id=17b0084f&scoped=true&lang=css& */ 585);
/* harmony import */ var _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_360Downloads_Software_HBuilderX_2_8_8_20200820_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_countdown_vue_vue_type_style_index_0_id_17b0084f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 585:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/xiang/h5_2.0/components/uni/uni-countdown/uni-countdown.vue?vue&type=style&index=0&id=17b0084f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/uni/uni-countdown/uni-countdown.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni/uni-countdown/uni-countdown-create-component',
    {
        'components/uni/uni-countdown/uni-countdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(579))
        })
    },
    [['components/uni/uni-countdown/uni-countdown-create-component']]
]);
