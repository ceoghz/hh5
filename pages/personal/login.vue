<template>
	<view class="login">
		<Head></Head>
		<view class="" style="height: 64px;width: 100%;"></view>
		<view class="login-content">
			<view class="login-content-top clearr">
			   <view class="login-content-top-1 d-flex a-center">
			   	    <view class="" style="width: 110upx;">+86</view>
					<input class="uni-input" name="nickname" v-model.trim="phone" placeholder="请输入手机号" placeholder-style="color:#999999" />
			   </view>
			   <view class="login-content-top-2 d-flex a-center">
					<view style="width: 110upx;">验证码</view>
					<input class="uni-input" name="nickname" v-model.trim="keyCode" placeholder="请输入验证码" placeholder-style="color:#999999" />
					<view class="code_btn" @click="getCode" :style="{background:countFlag?'#BABABA':''}" >
						<text v-if="!countFlag">获取验证码</text>
						<text v-if="countFlag">{{countNum}}S后重新获取</text>
					</view>
			   </view>
			</view>
			<view class="login-content-main">
			     <button class="binding-btn" type="default" @click="requestAuthorization">登录</button>
			</view>
			<view class="login-content-bottom">
				 <label class="radio"><radio @click="isChecked=!isChecked" value="r1" :checked="isChecked" color="#FA6E39" /> </label>
				 <view class="">
				 	<text style="color: #666666;">登录表示您已阅读并同意 </text>
				 	<text style="color: #FA6E39;text-decoration:underline">用户协议、隐私政策和中国移动认证服务条款</text>
				 </view>
				
			</view>
		</view>	
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	export default{
		data(){
			return{
				access_id:'',
				phone:'',//手机号
				isFlag:false,
				// 倒计时周期
				countNum:60,
				// 用于倒计时标记，true-正在倒计时
				countFlag:false,
				// 定时器
				intervalBtn:{},
				//默认按钮的值
				btnMsg:"点击发送验证码",
				//手机号码
				mobile:"",
				keyCode:'',//验证码
				isChecked:false,
			}
		},
		components:{
			Head
		},
		methods:{
			//检测手机号
			checkPhone(){ 
			   let phone = this.phone
			   console.log(this.phone)
			    if(!(/^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(Number(phone)))){ 
			        return false; 
			    } 
				return true
			},
			//倒计时
			countDown(){
				// 设置btn倒计时时显示的信息
				this.btnMsg = null;
				// 更改btn状态
				this.countFlag =! this.countFlag;
				// 设置倒计时
				this.intervalBtn = setInterval(() => {
					if(this.countNum <= 0) {
						// 重置btn提示信息
						this.btnMsg = "点击发送验证码";
						// 清除定时器
						clearInterval(this.intervalBtn)
						// 更改btn状态
						this.countFlag =! this.countFlag;
						// 重置倒计时状态
						this.countNum = 60;
					};
					// 倒计时
					this.countNum -- ;
				}, 1000);
			},
			//获取验证码
			getCode(){
				console.log('abb',this.checkPhone())
				if(this.checkPhone() === false){
					uni.showToast({
						title:'手机号码有误！',
						icon:'none'
					})
					return false
				}else if(this.countFlag){
					return false
				}
				this.$http.post(
				'',{
					module:'app',
					action:'user',
					app:'secret_key',
					phone:this.phone,
					store_id:1,
					store_type:2,
					message_type:0,
					message_type1:1,
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						this.isFlag = true
						this.countDown()
						uni.showToast({
							title:'获取成功',
							icon:'none'
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
				})
			},
			
			//登录接口
			requestAuthorization(){
				let adr_info = uni.getStorageSync("address_info")
				console.log('adr_info',adr_info)
				if(this.checkPhone() === false){
					uni.showToast({
						title:'手机号码有误！',
						icon:'none'
					})
					return false
				}else if(this.keyCode === ''){
					uni.showToast({
						title:'请输入验证码！',
						icon:'none'
					})
					return false
				}else if(!this.isChecked){
					uni.showToast({
						title:'请求阅读协议',
						icon:'none'
					})
					return false
				}
				this.$http.post(
				'',
				{
					module:'app',	
					action:'login',
					app:'wxLogin',
					source:'mini_wechat',
					code:uni.getStorageSync('code'),
					longitude:adr_info.longitude,
					latitude:adr_info.latitude,
					area:adr_info.address,
					user_name:uni.getStorageSync('nikename'),
					headimgurl: uni.getStorageSync('avatarUrl'),
					encrypted_data:uni.getStorageSync('encryptedData'),
					iv:uni.getStorageSync('iv'),
					phone:this.phone,
					keyCode:this.keyCode
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						uni.showToast({
							title:'绑定成功',
							icon:'none'
						})
						uni.setStorageSync("access_id",res.data.access_id)
						uni.switchTab({
							url:'/pages/tabBar/my',
							success() {
								console.log(1111)
							}
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
				})
			},
		},
		onLoad() {
			this.access_id = uni.getStorageSync("access_id")
			
		}
	}
</script>

<style lang="less" scode>
	.login{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		&-content{
			flex: 1;
			height: 100%;
			width: 100%;
			margin-top: 20upx;
			background: #FFFFFF;
			border-radius: 30upx 30upx 0 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&-top{
				width: 100%;
				box-sizing: border-box;
				padding: 0 20upx;
				>view{
					width: 100%;
					height: 132upx;
					border-bottom: 2upx solid #f4f4f4;
				}
			
			}
			&-main{
				.binding-btn{
					width: 630upx;
					height: 100upx;
					background: #FA6E39;
					border-radius: 20upx;
					color: #FFFFFF;
				}
			}
			&-bottom{
				box-sizing: border-box;
				padding: 50upx;
				display: flex;
			
			}
		}
		.code_btn{
			width: 232upx;
			height: 72upx;
			background: #FA6E39;
			border-radius: 20upx;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.clearr:after{
		content:".";
		display:block;
		clear:both;
		height:0;
		overflow:hidden;
		visibility:hidden;
	}
</style>
