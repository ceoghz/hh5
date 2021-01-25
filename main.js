import Vue from 'vue'

import App from './App'
import heads from './components/header.vue'

import laiketuiComm from './components/laiketuiCommon.vue'
import req from './utils/req/main.js'
import './utils/request.js'
import store from "./store/index.js"
import http from './utils/http/index.js'

Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.component('heads', heads)
App.mpType = 'app'
import {
    getStatusBarHeight,
    guid
} from './utils/util'

// #ifdef H5
//微信授权
// var jweixin = require('jweixin-module')
// Vue.prototype.$jweixin = jweixin
import {
    jssdk_share
} from '@/utils/util.js'


// #endif
Vue.prototype.$req = req

const app = new Vue({
	store,
    ...App
})
app.$mount()
