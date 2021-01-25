<template>
	<view class="payorder">
		<Head title="支付订单"></Head>
		<view :style="{width: '100%',height:nav_height + 'px' }"></view>
		<view class="payorder-content">
			<view class="payorder-content-top">
				<view class="d-flex" style="margin-top: 50upx;">
					<view class="await-pay">等待支付</view>
					<view class="await-price"> <text style="font-size: 32upx;">￥</text>{{payInfo.total}}</view>
				</view>
				<view class="residue-time d-flex">
					<text>剩余时间：</text>
					<uni-countdown  :show-day="false" :hour="1" />
				</view>
			</view>
			<view class="payorder-content-main">
				<view class="pay-title" style="">支付方式</view>
				<view class="pay-why d-flex j-sb a-center">
					<image style="height: 92upx;width: 92upx;" src="../../static/img/pay_WeChat.png" mode=""></image>
					<view class="aa">微信支付</view>
					<label class="radio">
						<radio value="" :checked="pay_way==='app_wechat'?true:false" @click="cutPay('app_wechat')"/><text></text>
					</label>
				</view>
				<!-- #ifdef H5-->
				<view class="pay-why d-flex j-sb a-center" >
					<image style="height: 92upx;width: 92upx;" src="../../static/img/pay_Alipay.png" mode=""></image>
					<view class="aa">支付宝支付</view>
					<label class="radio">
						<radio value="" :checked="pay_way==='app_wechat'?false:true" @click="cutPay('alipay')" /><text></text>
					</label>
				</view>
				<!-- #endif-->
			</view>
		</view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main" @click="goBuy">
				<view class="add-btn d-flex j-center a-center">去支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import uniCountdown from '@/components/uni/uni-countdown/uni-countdown.vue'
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	export default{
		data(){
			return{
				nav_height:0,
				pay_way:'app_wechat',//支付方式  app_wechat-微信支付，alipay-支付宝,
				coupon_id:'',//
				product:"",
				payInfo:'',//支付信息
				cart_id:'',
				h5code:'',//h5支付code
				myUrl:''
			}
		},
		components:{
			Head,
			uniCountdown,
			uniSection
		},
		methods:{
			getCode () {
			    // #ifdef H5 
			    // H5打开微信支付
			    let a = window.location.href
			    console.log(a)
			    if (a.split('?').length > 1) {
			        let str = a.split('?')[1]
			        let arr = str.split('&')
			        for (let i in arr) {
			            if (typeof arr[i] === 'string') {
			                if (arr[i].substring(0, 4) === 'code') {
			                    str = arr[i].substring(5)
			                    this.code = str
			                    console.log('aaaaaaaaaaaa',this.code)
			                }
			            }
			        }
			    }
				
			    // #endif  
			},
			cutPay(type){
				console.log(type)
				this.pay_way = type
			},
		   async pay(paymentData){
				console.log(paymentData)
				//#ifdef MP-WEIXIN
				await this.wxPay(paymentData)
				//#endif
				//#ifdef H5
				await this.h5Pay(paymentData)
				//#endif
			},
			//获取h5支付code
			h5paycode(){
				let locationUrl = window.location.href
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					type: 'jsapi_wechat',
					app: 'get_config',
					module: 'app',
					action: 'order',
					url: locationUrl,
					store_id:1,
					store_type:2
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						console.log(res.data.data)
						let myappid = res.data.data.config.appid
						let myUrl = res.data.data.url
						console.log(myappid,myUrl)
						window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + myappid +
						    '&redirect_uri=' + myUrl +
						    '&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
					}
				 
				})
			},
			//获取支付参数
			async goBuy(){
				console.log(66699999)
				//#ifdef H5
				await this.h5paycode()
				// this.$http.post("",{
				// 		access_id:uni.getStorageSync('access_id'),
				// 		store_id:1,
				// 		store_type:2,
				// 		module:'app',
				// 		action:"pay",
				// 		app:"",
				// 		type:"mini_wechat",
				// 		sNo:this.payInfo.sNo,
				// 		code:this.h5code
				// 	}).then(res=>{
				// 		console.log(res)
				// 		if(res.data.code == 200){
				
				// 		}
				// })
				//#endif
				//#ifdef MP-WEIXIN 
					uni.login({
					    success: (e) => {
						   this.$http.post("",{
						   	access_id:uni.getStorageSync('access_id'),
						   	store_id:1,
						   	store_type:2,
						   	module:'app',
						   	action:"pay",
						   	app:"",
						   	type:"mini_wechat",
						   	sNo:this.payInfo.sNo,
						   	code:e.code
						   }).then(res=>{
								console.log(res)
								if(res.statusCode == 200){
									let paymentData = res.data
									this.pay(paymentData)
								}
						   })
					    }
					})
				//#endif
			},
			//H5支付 
			h5Pay(paymentData){
				console.log(666)
				function onBridgeReady () {
					console.log('2222')
				    WeixinJSBridge.invoke(
				        'getBrandWCPayRequest', {
				            'appId': paymentData.appid, //公众号名称，由商户传入     
				            'timeStamp': paymentData.timeStamp, //时间戳，自1970年以来的秒数     
				            'nonceStr': paymentData.nonceStr, //随机串     
				            'package': paymentData.package,
				            'signType': paymentData.signType, //微信签名方式：     
				            'paySign': paymentData.paySign //微信签名 
				        },
				        function (res) {
				            me.code = ''
				            //支付成功
				            if (res.err_msg === 'get_brand_wcpay_request:ok') {
				                uni.setStorageSync('payRes', me.order_pay_info)
				                window.location.href = uni.getStorageSync('h5_url') + 'pages/pay/payResult'
								
				            }  else if (res.err_msg === 'get_brand_wcpay_request:cancel') {
				                console.log('取消')
				                window.location.href = '/h5/#/pages/order/myOrder'
								
				            } else {
				                //支付失败
				                me._pay_fail()
								
				            }
				        }
				    )
				}
				
				if (typeof WeixinJSBridge !== 'undefined') {
					console.log(1)
				    onBridgeReady(paymentData)
				} else {
				    if (typeof WeixinJSBridge === 'undefined') {
						console.log(2)
				        if (document.addEventListener) {
							console.log(3)
				            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
				        } else if (document.attachEvent) {
							console.log(4)
				            document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
				            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
				        }
				    }
				}
			},
			//微信小程序支付
			wxPay(paymentData){
				console.log(111,paymentData)
				let provider = this.pay_way === 'app_wechat'?'wxpay':'alipay'	
				uni.requestPayment({
				    provider: provider,
				    timeStamp: paymentData.timeStamp,
				    nonceStr: paymentData.nonceStr,
				    package: paymentData.package,
				    signType: 'MD5',
				    paySign: paymentData.paySign,
				    success: (res) => {
						console.log(res)
						uni.showToast({
							url:"/pages/pay/paycomplete"
						})
					},
					fail(e) {
						console.log('e',e)
						uni.showToast({
							url:"/pages/personal/myOrder"
						})
					}
				})
			},
		
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options) {
			console.log('options',options) 
			this.payInfo = JSON.parse(decodeURIComponent(options.payInfo))
			console.log(this.payInfo)
			this.getCode()
		}
	}
</script>

<style lang="less" scoped>
	.payorder{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.payorder-content{
		box-sizing: border-box;
		padding: 20upx 30upx; 
		width: 100%;
		&-top{
			width: 100%;
			height: 240upx;
			background: #FFFFFF;
			border-radius: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.await-pay{
				font-size: 40upx;
				font-weight: 500;
				color: #333333;
				line-height: 56upx;
				
			}
			.await-price{
				color: #FA6E39;
				font-size: 40upx;
				font-weight: 500;
				line-height: 56upx;
			}
			.residue-time{
				font-size: 36upx;
				font-weight: 400;
				color: #333333;
				line-height: 50upx;
				margin-top: 15upx;
			}
		}
		&-main{
			margin-top: 20upx;
			width: 100%;
			height: 334upx;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			.pay-title{
				font-size: 36upx;
				color: #333333;
				font-weight: 500;
				margin: 15upx 20upx 35upx;
			}
			.pay-why{
				margin: 20upx 20upx;
				.aa{
					font-size: 36upx;
					font-weight: 400;
					color: #333333;
					line-height: 50px;
					margin-right: 100upx;
				}
			}
			
		}
	}
	
	.address-footer{
		height: 138upx;
		width:100% ;
		border-top: 2upx solid #979797;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		&-main{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.add-btn{
				width: 690upx;
				height: 80upx;
				background: linear-gradient(to right, #FD8A03 0%, #FD5700 100%);
				border-radius: 40upx;
				color: #FFFFFF;
				line-height: 44px;
				font-size: 32upx;
			}
		}
	}
	
</style>
