(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/vk-data-input-number-box/vk-data-input-number-box"],{719:
/*!**************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue ***!
  \**************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./vk-data-input-number-box.vue?vue&type=template&id=cee45cb8&scoped=true& */720),r=n(/*! ./vk-data-input-number-box.vue?vue&type=script&lang=js& */722);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n(/*! ./vk-data-input-number-box.vue?vue&type=style&index=0&id=cee45cb8&lang=scss&scoped=true& */724);var s,a=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),l=Object(a["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"cee45cb8",null,!1,i["components"],s);l.options.__file="components/vk-data-input-number-box/vk-data-input-number-box.vue",e["default"]=l.exports},720:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue?vue&type=template&id=cee45cb8&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vk-data-input-number-box.vue?vue&type=template&id=cee45cb8&scoped=true& */721);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},721:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue?vue&type=template&id=cee45cb8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=(t._self._c,Number(t.size)),i=Number(t.size);t.$mp.data=Object.assign({},{$root:{m0:n,m1:i}})},u=!1,s=[];r._withStripped=!0},722:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vk-data-input-number-box.vue?vue&type=script&lang=js& */723),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},723:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"vk-data-input-number-box",props:{value:{type:Number,default:1},bgColor:{type:String,default:"#F2F3F5"},min:{type:Number,default:0},max:{type:Number,default:99999},step:{type:Number,default:1},stepFirst:{type:Number,default:0},stepStrictly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:[Number,String],default:26},color:{type:String,default:"#323233"},inputWidth:{type:[Number,String],default:80},inputHeight:{type:[Number,String],default:50},index:{type:[Number,String],default:""},disabledInput:{type:Boolean,default:!1},cursorSpacing:{type:[Number,String],default:100},longPress:{type:Boolean,default:!0},pressTime:{type:[Number,String],default:250},positiveInteger:{type:Boolean,default:!0}},watch:{value:function(t,e){this.changeFromInner||(this.inputVal=t,this.$nextTick((function(){this.changeFromInner=!1})))},inputVal:function(t,e){var n=this;if(""!=t){var i=0,r=this.isNumber(t);i=r&&t>=this.min&&t<=this.max?t:e,this.positiveInteger&&(t<0||-1!==String(t).indexOf("."))&&(i=e,this.$nextTick((function(){n.inputVal=e}))),this.handleChange(i,"change")}},min:function(t){void 0!==t&&""!=t&&this.value<t&&this.$emit("input",t)},max:function(t){void 0!==t&&""!=t&&this.value>t&&this.$emit("input",t)}},data:function(){return{inputVal:1,timer:null,changeFromInner:!1,innerChangeTimer:null}},created:function(){this.inputVal=Number(this.value)},computed:{getCursorSpacing:function(){return Number(t.upx2px(this.cursorSpacing))}},methods:{btnTouchStart:function(t){var e=this;this[t](),this.longPress&&(clearInterval(this.timer),this.timer=null,this.timer=setInterval((function(){e[t]()}),this.pressTime))},clearTimer:function(){var t=this;this.$nextTick((function(){clearInterval(t.timer),t.timer=null}))},minus:function(){this.computeVal("minus")},plus:function(){this.computeVal("plus")},calcPlus:function(t,e){var n,i,r;try{i=t.toString().split(".")[1].length}catch(s){i=0}try{r=e.toString().split(".")[1].length}catch(s){r=0}n=Math.pow(10,Math.max(i,r));var u=i>=r?i:r;return((t*n+e*n)/n).toFixed(u)},calcMinus:function(t,e){var n,i,r;try{i=t.toString().split(".")[1].length}catch(s){i=0}try{r=e.toString().split(".")[1].length}catch(s){r=0}n=Math.pow(10,Math.max(i,r));var u=i>=r?i:r;return((t*n-e*n)/n).toFixed(u)},computeVal:function(e){if(t.hideKeyboard(),!this.disabled){var n=0;if("minus"===e?n=this.stepFirst>0&&this.inputVal==this.stepFirst?this.min:this.calcMinus(this.inputVal,this.step):"plus"===e&&(n=this.stepFirst>0&&this.inputVal<this.stepFirst?this.stepFirst:this.calcPlus(this.inputVal,this.step)),this.stepStrictly){var i=n%this.step;i>0&&(n-=i)}n>this.max?n=this.max:n<this.min&&(n=this.min),this.inputVal=n,this.handleChange(n,e)}},onBlur:function(t){var e=this,n=0,i=t.detail.value;if(/(^\d+$)/.test(i)&&0!=i[0]||(n=this.min),n=+i,this.stepFirst>0&&this.inputVal<this.stepFirst&&this.inputVal>0&&(n=this.stepFirst),this.stepStrictly){var r=n%this.step;r>0&&(n-=r)}n>this.max?n=this.max:n<this.min&&(n=this.min),this.$nextTick((function(){e.inputVal=n})),this.handleChange(n,"blur")},handleChange:function(t,e){var n=this;this.disabled||(this.innerChangeTimer&&(clearTimeout(this.innerChangeTimer),this.innerChangeTimer=null),this.changeFromInner=!0,this.innerChangeTimer=setTimeout((function(){n.changeFromInner=!1}),150),this.$emit("input",Number(t)),this.$emit(e,{value:Number(t),index:this.index}))},isNumber:function(t){return/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)}}};e.default=n}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},724:
/*!************************************************************************************************************************************************************!*\
  !*** C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue?vue&type=style&index=0&id=cee45cb8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vk-data-input-number-box.vue?vue&type=style&index=0&id=cee45cb8&lang=scss&scoped=true& */725),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},725:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/love/Desktop/h52/components/vk-data-input-number-box/vk-data-input-number-box.vue?vue&type=style&index=0&id=cee45cb8&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/vk-data-input-number-box/vk-data-input-number-box.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/vk-data-input-number-box/vk-data-input-number-box-create-component',
    {
        'components/vk-data-input-number-box/vk-data-input-number-box-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(719))
        })
    },
    [['components/vk-data-input-number-box/vk-data-input-number-box-create-component']]
]);
