// #ifdef H5
// var jweixin = require('jweixin-module')
import laiketuiComm from '@/components/laiketuiCommon.vue'
// #endif
import store from "@/store/index.js"
import Vue from 'vue'
function formatTime(time) {
    if (typeof time !== 'number' || time < 0) {
        return time
    }

    var hour = parseInt(time / 3600)
    time = time % 3600
    var minute = parseInt(time / 60)
    time = time % 60
    var second = time

    return ([hour, minute, second]).map(function(n) {
                n = n.toString()
                return n[1] ? n : '0' + n
            }).join(':')
}

function formatLocation(longitude, latitude) {
    if (typeof longitude === 'string' && typeof latitude === 'string') {
        longitude = parseFloat(longitude)
        latitude = parseFloat(latitude)
    }

    longitude = longitude.toFixed(2)
    latitude = latitude.toFixed(2)

    return {
        longitude: longitude.toString().split('.'),
        latitude: latitude.toString().split('.')
    }
}

var dateUtils = {
    UNITS: {
        '年': 31557600000,
        '月': 2629800000,
        '天': 86400000,
        '小时': 3600000,
        '分钟': 60000,
        '秒': 1000
    },
    humanize: function(milliseconds) {
        var humanize = ''
        for (var key in this.UNITS) {
            if (milliseconds >= this.UNITS[key]) {
                humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前'
                break
            }
        }
        return humanize || '刚刚'
    },
    format: function(dateStr) {
        var date = this.parse(dateStr)
        var diff = Date.now() - date.getTime()
        if (diff < this.UNITS['天']) {
            return this.humanize(diff)
        }
        var _format = function(number) {
            return (number < 10 ? ('0' + number) : number)
        }
        return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
            _format(date.getHours()) + ':' + _format(date.getMinutes())
    },
    //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
    parse: function(str) {
        var a = str.split(/[^0-9]/)
        return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5])
    }
}

/**
 * H5 复制
 * */
const copyText = (domname, text) => {
    // 数字没有 .length 不能执行selectText 需要转化成字符串
    const textString = text.toString()
    let input = ''

    if (domname) {
        input = document.querySelector(domname)
    }

    if (!input) {
        input = document.createElement('input')
        input.id = 'copy-input'
        input.readOnly = 'readOnly' // 防止ios聚焦触发键盘事件
        input.style.position = 'fixed'
        input.style.left = '-1000px'
        input.style.top = '-1000px'
        input.style.zIndex = '-1000'
        input.style.border = '1px #fff solid'
        input.style.opacity = '0'
        document.body.appendChild(input)
    } else {
        input.readOnly = 'readOnly'
    }

    input.value = textString
    // ios必须先选中文字且不支持 input.select();
    selectText(input, 0, textString.length)

    if (document.execCommand('copy')) {
        document.execCommand('copy')
		let msg = '复制成功'
		if(uni.getStorageSync('language') == 'en'){
		    msg = 'Copy success'
		}
        uni.showToast({
            title: msg,
            duration: 1500,
            icon: 'none'
        })
    }

    // 阻止键盘弹出
    input.blur()

    function selectText(textbox, startIndex, stopIndex) {
        if (textbox.createTextRange) { //ie
            const range = textbox.createTextRange()
            range.collapse(true)
            range.moveStart('character', startIndex) // 起始光标
            range.moveEnd('character', stopIndex - startIndex) // 结束光标
            range.select() // 不兼容苹果
        } else { //firefox/chrome
            textbox.setSelectionRange(startIndex, stopIndex)
            textbox.focus()
        }
    }
}

function share(me) {
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady(me), false)
    }
}

function onBridgeReady(me) {
    console.log('aaaaa')
    var shareHref = ''
    if (me.shareHref == '') {
        shareHref = window.location.href
    } else {
        shareHref = me.shareHref
    }
    var wdesc = '我分享了一个店铺，快来看一看吧！'
    var wtit = '乐活精选'
    var wappid = ''
    var wimg = me.LaiKeTuiCommon.LKT_ROOT_VERSION_URL + 'images/icon1/kfef2x.png'
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
            'appid': wappid,
            'img_url': wimg,
            'img_width': '200',
            'img_height': '200',
            'link': shareHref,
            'desc': wdesc,
            'title': wtit,
        })
    })
    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
        WeixinJSBridge.invoke('shareTimeline', {
            'img_url': wimg,
            'img_width': '200',
            'img_height': '200',
            'link': shareHref,
            'desc': wdesc,
            'title': wtit
        })
    })
    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
        WeixinJSBridge.invoke('shareWeibo', {
            'content': '',
            'url': shareHref,
        })
    })
}

const jssdk_share = function(me, option) {
    var me = this

    var now_url = window.location.href
    var can_share = false

    var data = {
        module: 'app',
        action: 'jssdk',
        m: 'getData',
        url: now_url
    }

    uni.request({
        data,
        url: uni.getStorageSync('url'),
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: (res) => {
            var jsApiList = ['updateAppMessageShareData', 'updateTimelineShareData']

            jweixin.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.appId, // 必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                signature: res.data.signature, // 必填，签名
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
            })
        },
    })

    jweixin.ready(() => {
        // config信息验证后会执行ready方法
        // 所有接口调用都必须在config接口获得结果之后
        // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。
        // 对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

        jweixin.updateAppMessageShareData({
            title: '乐活商城，乐享生活', // 分享标题
            desc: '乐活精选，你的电商之选！', // 分享描述
            link: now_url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: laiketuiComm.LKT_ROOT_VERSION_URL + 'images/share_img.png', // 分享图标
            success: function() {}
        })
    })

}

/**
 * @description 时差
 * @param { time }
 * */
const getTimeDiff = (time) => {
    
    // 兼容app
    time = new Date(time.replace(/-/g, '/'))
    
    // 当前时间戳
    let currentTime = new Date()

    let reslut = time.getTime() - currentTime.getTime()

    //计算出相差天数
    let days = Math.floor(reslut / (24 * 3600 * 1000))

    //计算出小时数
    let leave1 = reslut % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))

    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))

    //计算相差秒数
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.floor(leave3 / 1000)

    if (hours.toString().length == 1) {
        hours = '0' + hours
    }

    if (minutes.toString().length == 1) {
        minutes = '0' + minutes
    }

    if (seconds.toString().length == 1) {
        seconds = '0' + seconds
    }

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

/**
 * 状态栏高度
 * @returns {number}
 */
const getStatusBarHeight = () => {
    let statusBarHeight = 0
    uni.getSystemInfo({
        success: async res => {
            statusBarHeight = res.statusBarHeight
        }
    })
    return statusBarHeight
}

/**
 * 延迟执行
 * @param delay
 * @returns {Promise<unknown>}
 */
async function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier)
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid(len = 32, firstU = true, radix = null) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [];
    radix = radix || chars.length;

    if (len) {
        // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
        for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
        let r;
        // rfc4122标准要求返回的uuid中,某些位为固定的字符
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        for (let i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
    if (firstU) {
        uuid.shift();
        return 'u' + uuid.join('');
    } else {
        return uuid.join('');
    }
}


// 加法
function calculate_add(arg1, arg2) {
  var r1, r2, m
  try {
    r1 = arg1.toString().split(".")[1].length
  }
  catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  }
  catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))

  return ((arg1 * m + arg2 * m) / m).toFixed(2)
}

// 减法
function calculate_reduce(arg1, arg2) {
  var r1, r2, m, n
  try {
    r1 = arg1.toString().split(".")[1].length
  }
  catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  }
  catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  //last modify by deeka
  //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

// 乘法
function calculate_mul(arg1, arg2) {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString()
  try {
    m += s1.split(".")[1].length
  }
  catch (e) {
  }
  try {
    m += s2.split(".")[1].length
  }
  catch (e) {
  }
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(2)
}

// 判断是否授权
function is_shouquan(){
	// #ifdef MP-WEIXIN
		  if (uni.canIUse('getSetting')) {
			  console.log(1)
			uni.getSetting({
			  success: res => {    
				  console.log(2)
				  console.log(res.authSetting['scope.userInfo'])
				if (!res.authSetting['scope.userInfo']) {
					console.log(3)
					  uni.navigateTo({
						url:'/pages/shouquan/index'
					  })  
				  return false
				} else {
					console.log(4)
					if(!uni.getStorageSync("access_id")){
						uni.navigateTo({
							url:"/pages/personal/login"
						})
					}
				  return true
				}
			  }
			})
		  } else {
			uni.showToast({
				title:'检测到当前微信版本过低，请更新微信！'
			})
			return false
		  }
    //#endif
	//#ifdef H5 
	console.log('mm',uni.getStorageSync('access_id'))
	console.log('mm',!uni.getStorageSync('access_id'))
	console.log(Vue)
		if(!uni.getStorageSync('access_id')){
			console.log(88)
			uni.navigateTo({
				url:"/pages/login/loginH5",
				success() {
					console.log("跳转成功")
				},
				fail() {
					console.log("跳转失败")
				}
			})
			return false
		}else{
			console.log(99)
			return true
		}
	//#endif
}


module.exports = {
    formatTime,
    formatLocation,
    dateUtils,
    copyText,
    share,
    jssdk_share,
    getTimeDiff,
    getStatusBarHeight,
    later,
    guid,
	calculate_add,
	calculate_reduce,
	calculate_mul,
	is_shouquan
}
