<template>
	<view class="search">
		<view class="search-header">
			<Head title="搜索商品" :bgColor="'#f4f4f4'"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
			<view class="search-header-main">
				<image src="../../static/img/img_news.png" @click="recorderInit" mode=""></image>
				<view class="search-header-main-c d-flex j-sb a-center">
					<image @click="searchProduct" style="width: 48upx;height: 48upx;margin-left: 20upx;" src="../../static/img/icon-搜索备份@2x.png" mode=""></image>
					<input style="flex: 1;" type="text" v-model.trim="search_inp" @input = "inputClick" placeholder="搜索商品" />
					<image v-if="is_can" @click="clearClick" style="width: 48upx;height: 48upx;margin-right: 20upx;" src="../../static/img/cha.png" mode=""></image>
				</view>
				<view class="search-header-main-r" @click="uni.navigateBack({delta:1})">取消</view>
			</view>
		</view>
		<view class="search-content">
			<view v-if="productArr.length == 0" class="abb">
				<view class="search-content-top d-flex j-sb">
					<view class="">历史搜索</view>
					<image @click="togglePopup" style="width: 40upx;height: 40upx;" src="../../static/img/img_delete.png" mode=""></image>
				</view>
				<view class="search-content-main">
					<view class="search-content-main-item" @click="btnClick(item)" v-for=" (item,index) in histrayArr " :key="index"> {{item}}</view>
				</view>
			</view>
			<scroll-view v-else class="avv" scroll-y='true' style="height: 100%;" >
				<view  class="similar-content-main">
					<view class="similar-product-list"  v-for="(item,index) in productArr" :key= index @click="jumpGoodsDetail(item.id)">
						<image :src="item.image_url" mode=""></image>
						<view class="pro-name"> {{item.product_title}}</view>
						<view class="shop">官方授权 品牌直营</view>
						<view class="pro-price d-flex a-center j-sb">
							<view class="" style="font-size: 24upx;color: #FA6E39;">￥{{item.price}}</view>
							<view class="" style="font-size: 20upx;color: #BABABA;">销量：{{item.volume}}件</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<uni-popup ref="showtip" :type="type" :mask-click="false" >
			<view class="uni-tip">
				<!-- <text class="uni-tip-title">提示</text> -->
				<text class="uni-tip-content">是否确认删除历史搜索？</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel()">取消</text>
					<text style="color:#FA6E39" class="uni-tip-button" @click="confirm()">确定</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import CryptoJS from '@/utils/crypto-js/crypto-js.js'
	// import  TransWorker from  "@/utils/yuyin/transcode.worker.js"
	// console.log('TransWorker',TransWorker)
	export default{
		data(){
			return{
				nav_height:'',
				search_inp:'',//搜索内容
				is_can:false,
				histrayArr:[],//历史搜索
				type:'center',
				page:1,
				productArr:[],
				APPID:'5fbf4040',
				API_SECRET:'868b5d7705092ecc855399c5c478398b',
				API_KEY:'3c8e91bf904901f722be7bc08b112c8f',
				webSocket:'',
				audioData:[],//记录音频数据
				status: 'null',
			    language:'zh_cn',
			    accent:'mandarin',
				// 记录听写结果
				resultText:'',
				// wpgs下的听写结果需要中间状态辅助记录
				 resultTextTemp:'',
				
			}
		},
		components:{
			Head
		},
		methods:{
			abb(){
			  console.log('TransWorker',TransWorker)
			},
			getWebSocketUrl() {
			  return new Promise((resolve, reject) => {
			    // 请求地址根据语种不同变化
			    var url = 'wss://iat-api.xfyun.cn/v2/iat'
			    var host = 'iat-api.xfyun.cn'
			    var apiKey = this.API_KEY
			    var apiSecret = this.API_SECRET
			    var date = new Date().toGMTString()
			    var algorithm = 'hmac-sha256'
			    var headers = 'host date request-line'
			    var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/iat HTTP/1.1`
			    var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
			    var signature = CryptoJS.enc.Base64.stringify(signatureSha)
			    var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
			    var authorization = btoa(authorizationOrigin)
			    url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
			    resolve(url)
				
			  })
			},
			 toBase64(buffer) {
			    var binary = ''
			    var bytes = new Uint8Array(buffer)
			    var len = bytes.byteLength
			    for (var i = 0; i < len; i++) {
			      binary += String.fromCharCode(bytes[i])
			    }
			    return window.btoa(binary)
			  },
			connectWebSocket(){
				console.log(66)
				 this.getWebSocketUrl().then(url => {
				      let iatWS
				      if ('WebSocket' in window) {
				        iatWS = new WebSocket(url)
				      } else if ('MozWebSocket' in window) {
				        iatWS = new MozWebSocket(url)
				      } else {
							alert('浏览器不支持WebSocket')
							return 
				      }
					   this.webSocket = iatWS
						iatWS.onopen = e => {
						 console.log(e)
						 console.log(1)
						   // 重新开始录音
							 setTimeout(() => {
							   this.webSocketSend()
							 }, 500)
						}
						iatWS.onmessage = e => {
						  console.log(2)
						}
						iatWS.onerror = e => {
							console.log(3)
						}
						iatWS.onclose = e => {
						  console.log(4)
						}
					  console.log('iatWS',iatWS)
				  })
			},
			// 向webSocket发送数据
		    webSocketSend() {
			    if (this.webSocket.readyState !== 1) {
			      return
			    }
			    let audioData = this.audioData.splice(0, 1280)
				console.log(audioData)
				console.log(this.APPID)
			    var params = {
			      common: {
			        app_id: this.APPID,
			      },
			      business: {
			        language: this.language, //小语种可在控制台--语音听写（流式）--方言/语种处添加试用
			        domain: 'iat',
			        accent: this.accent, //中文方言可在控制台--语音听写（流式）--方言/语种处添加试用
			        vad_eos: 5000,
			        dwa: 'wpgs', //为使该功能生效，需到控制台开通动态修正功能（该功能免费）
			      },
			      data: {
			        status: 0,
			        format: 'audio/L16;rate=16000',
			        encoding: 'raw',
			        audio: this.toBase64(audioData),
			      },
			    }
			    this.webSocket.send(JSON.stringify(params))
			    this.handlerInterval = setInterval(() => {
			      // websocket未连接
			      if (this.webSocket.readyState !== 1) {
			        this.audioData = []
			        clearInterval(this.handlerInterval)
			        return
			      }
			      if (this.audioData.length === 0) {
			        if (this.status === 'end') {
			          this.webSocket.send(
			            JSON.stringify({
			              data: {
			                status: 2,
			                format: 'audio/L16;rate=16000',
			                encoding: 'raw',
			                audio: '',
			              },
			            })
			          )
			          this.audioData = []
			          clearInterval(this.handlerInterval)
			        }
			        return false
			      }
			      audioData = this.audioData.splice(0, 1280)
			      // 中间帧
			      this.webSocket.send(
			        JSON.stringify({
			          data: {
			            status: 1,
			            format: 'audio/L16;rate=16000',
			            encoding: 'raw',
			            audio: this.toBase64(audioData),
			          },
			        })
			      )
			    }, 40)
			  },
			 // 初始化浏览器录音
		 recorderInit() {
			 console.log(11)
			       this.abb()
			        navigator.getUserMedia =
			        navigator.getUserMedia ||
			        navigator.webkitGetUserMedia ||
			        navigator.mozGetUserMedia ||
			        navigator.msGetUserMedia
			      
			      // 创建音频环境
			      try {
					console.log(22)
			        this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
					console.log(this.audioContext)
					console.log(this.audioContext.resume())
			        this.audioContext.resume()
			        if (!this.audioContext) {
			          alert('浏览器不支持webAudioApi相关接口')
			          return
			        }
			      } catch (e) {
			        if (!this.audioContext) {
			          alert('浏览器不支持webAudioApi相关接口')
			          return
			        }
			      }
			      
			      // 获取浏览器录音权限
			      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			        navigator.mediaDevices
			          .getUserMedia({
			            audio: true,
			            video: false,
			          })
			          .then(stream => {
			            getMediaSuccess(stream)
			          })
			          .catch(e => {
			            getMediaFail(e)
			          })
			      } else if (navigator.getUserMedia) {
			        navigator.getUserMedia(
			          {
			            audio: true,
			            video: false,
			          },
			          stream => {
			            getMediaSuccess(stream)
			          },
			          function(e) {
			            getMediaFail(e)
			          }
			        )
			      } else {
			        if (navigator.userAgent.toLowerCase().match(/chrome/) && location.origin.indexOf('https://') < 0) {
			          alert('chrome下获取浏览器录音功能，因为安全性问题，需要在localhost或127.0.0.1或https下才能获取权限')
			        } else {
			          alert('无法获取浏览器录音功能，请升级浏览器或使用chrome')
			        }
			        this.audioContext && this.audioContext.close()
			        return
			      }
			      // 获取浏览器录音权限成功的回调
			      let getMediaSuccess = stream => {
			        console.log('getMediaSuccess')
			        // 创建一个用于通过JavaScript直接处理音频
			        this.scriptProcessor = this.audioContext.createScriptProcessor(0, 1, 1)
			        this.scriptProcessor.onaudioprocess = e => {
			          // 去处理音频数据
			          if (this.status === 'ing') {
			            // transWorker.postMessage(e.inputBuffer.getChannelData(0))
			          }
			        }
			        // 创建一个新的MediaStreamAudioSourceNode 对象，使来自MediaStream的音频可以被播放和操作
			        this.mediaSource = this.audioContext.createMediaStreamSource(stream)
			        // 连接
			        this.mediaSource.connect(this.scriptProcessor)
			        this.scriptProcessor.connect(this.audioContext.destination)
			        this.connectWebSocket()
			      }
			  
			      let getMediaFail = (e) => {
			        alert('请求麦克风失败')
			        console.log(e)
			        this.audioContext && this.audioContext.close()
			        this.audioContext = undefined
			        // 关闭websocket
			        if (this.webSocket && this.webSocket.readyState === 1) {
			          this.webSocket.close()
			        }
			      }
			    },
			inputClick(val){
				if(val.detail.value !== ""){
					this.is_can = true
				}else{
					this.is_can = false
				}
			},
			clearClick(){
				this.search_inp = ""
				this.is_can = false
			},
			togglePopup() {
				this.$nextTick(() => {
					this.$refs.showtip.open()
				})
			},
			btnClick(val){
				this.search_inp = val
				this.page = 1
				this.is_can = true
				this.searchProduct()
			},
			//跳转到商品详情页面
			jumpGoodsDetail(id){
				uni.navigateTo({
					url:`/pages/goods/goodsDetail?id=${id}`
				})
			},
			//取消
			cancel(type) {
				this.$refs.showtip.close()
			},
			//确定
			async confirm(){
				this.cancelHistory()
			    this.$refs.showtip.close()
			},
			//搜索商品
			searchProduct(){
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:'search',
					app:'product_search',
					keyword:this.search_inp,
					page:this.page
				}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.productArr = res.data.data.data
						if(this.productArr.length == 0){
							uni.showToast({
								title:'没有此商品',
								icon:'none'
							})
						}
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
				})
			},
			//获取历史搜索 
			historysearch(){
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:'search',
					app:'search_history'
				}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.histrayArr = res.data.data
					}
				})
				
			},
			//删除历史搜索 
			cancelHistory(){
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:'search',
					app:'del_history'
				}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						this.histrayArr = res.data.data
					}
				})
				
			}
			
		},
		onLoad() {
			this.historysearch()
			this.nav_height = uni.getStorageSync("nav_height")
		}
	}
</script>

<style lang="less" scoped>
	.search{
		height: 100%;
		width: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}
	.search-header{
		
	}
	.search-header-main{
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #f4f4f4;
		height: 108upx;
		width: 100%;
		>image{
			height: 60upx;
			width: 60upx;
		}
		&-c{
			width: 530upx;
			height: 68upx;
			background: #FFFFFF;
			border-radius: 34upx;
		}
		&-r{
			font-size: 30upx;
			font-weight: 500;
			color: #333333;
			line-height: 42upx;
			margin-right: 10upx;
		}
	}
	.search-content{
		width: 100%;
		flex: 1;
		height: 100%;
		overflow: hidden;
		background: #f4f4f4;
		.abb{
			width: 100%;
			height: 100%;
			background: #FFFFFF;
		}
		&-top{
			height: 80upx;
			width: 100%;
			box-sizing: border-box;
			padding: 20upx 30upx;
		}
		&-main{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			.search-content-main-item{
				min-width: 50upx;
				height: 60upx;
				background: #F4F4F4;
				border-radius: 30upx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 20upx;
				margin-left: 15upx;
			}
		}
	}
	.avv{
		
		width: 100%;
		height: 100%
	}
	.similar-content-main{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
		background: #f4f4f4;
		
		.similar-product-list{
			border-radius: 20upx;
			background: #FFFFFF;
			width: 336upx;
			margin-bottom: 20upx;
			image{
				height: 336upx;
				width: 336upx;
				border-radius: 20upx 20upx 0 0;
			}
			>view{
				margin: 20upx;
			}
			.pro-name{
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				line-height: 44upx;
				width: 80%;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.shop{
				font-size: 24upx;
				font-weight: 400;
				color: #999999;
				line-height: 34upx;
			}
		}
	}
	
	/* 提示窗口 */
		.uni-tip {
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			padding: 15px;
			width: 300px;
			background-color: #fff;
			border-radius: 10px;
		}
	
		.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
			text-align: center;
		}
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 20px;
		}
		
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 14px;
			color: #3b4144;
		}
		/deep/.scroll-view-item_H ::-webkit-scrollbar { /* 隐藏滚动条，但依旧具备可以滚动的功能 */ display: none; width: 0; height: 0; color: transparent; background: transparent; }
		 /deep/::-webkit-scrollbar { display: none; width: 0; height: 0; color: transparent; background: transparent; }
</style>
