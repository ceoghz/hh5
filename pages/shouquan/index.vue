<template>
	<view class="shouquan">
		<view class="shouquan_main">
			<view class="" style="width: 200upx;height: 200upx;">
				<image style="width: 100%;height: 100%;" src="../../static/img/4@2x.png" mode=""></image>
			</view>	
			<view class="lehuo">乐活精选授权页面</view>	
			<view class="explain">
				<text>此页面是乐活精选授权页面，点击下方按钮同意</text>
				<view>乐活精选使用您的头像和昵称</view>
			 </view>	
			
			<button class="btn"  open-type="getUserInfo" @getuserinfo="bindGetUserInfo" withCredentials="true">微信授权</button>

		</view>
	</view>
</template>

<script>
	import {mapMutations,mapState} from 'vuex'
	export default{
		data(){
			return{
				nikename:'',//用户名
				avatarUrl:'',// 头像
				code:'',
				encryptedData:'', 
				iv:''
			}
		},
		computed:{
			...mapState(['access_id'])
		},
		methods:{
			...mapMutations(['SET_ACCESS_ID']),
			requestAuthorization(){
				let adr_info = uni.getStorageSync("address_info")
				console.log('adr_info',adr_info)
				this.$http.post(
				'',
				{
					module:'app',	
					action:'login',
					app:'wxLogin',
					source:'mini_wechat',
					code:this.code,
					longitude:adr_info.longitude,
					latitude:adr_info.latitude,
					area:adr_info.address,
					user_name:this.nikename,
					headimgurl:this.avatarUrl,
					encrypted_data:this.encryptedData,
					iv:this.iv,
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						uni.showToast({
							title:'授权成功',
							icon:'none'
						})
						uni.setStorageSync("access_id",res.data.access_id)
						this.SET_ACCESS_ID(res.data.access_id)
						console.log(this.access_id)
						console.log(666)
						uni.switchTab({
							url:'/pages/tabBar/my',
							success() {
								console.log(1111)
							}
						})
					}else{
						uni.redirectTo({
							url:'/pages/personal/login'
						})
					}
				})
			},
			//微信授权
			bindGetUserInfo(e){
				console.log('eeee',e.detail.userInfo)
				var that = this
				if (!e.detail.iv) {
					uni.showToast({
						title: "您取消了授权,登录失败",
						icon: "none"
					});
					return false;
				}
			
				uni.getUserInfo({
					provider: 'weixin',
					success: function(infoRes) {
						console.log('infoRes',infoRes)
						that.nikename = infoRes.userInfo.nickName
						that.avatarUrl = infoRes.userInfo.avatarUrl
						that.encryptedData = infoRes.encryptedData
						that.iv = infoRes.iv 
						uni.login({
							success:function(res){
								that.code = res.code
								uni.setStorageSync("code",that.code)
								uni.setStorageSync("encryptedData",that.encryptedData)
								uni.setStorageSync("iv",that.iv)
								uni.setStorageSync("nikename",that.nikename)
								uni.setStorageSync("avatarUrl",that.avatarUrl)
								that.requestAuthorization()
							}
						})
					}
				});
			},
	
		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	.shouquan{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		.shouquan_main{
			margin-top: 100upx;
			width: 70%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.lehuo{
				margin-top: 60upx;
				width: 288upx;
				height: 50upx;
				font-size: 36upx;
				font-weight: 400;
				color: #333333;
				line-height: 50upx;
			}
			.explain{
				margin-top: 60upx;
				width: 100%;
				font-weight: 400;
				color: #666666;
				text{
					width: 100%;
					text-align: center;
					font-size: 24upx;
				}
				view{
					width: 100%;
					text-align: center;
					font-size: 24upx;
				}
				
			}
			.btn{
				margin-top: 60upx;
				width: 400upx;
				height: 100upx;
				border-radius: 10upx;
				border: 2upx solid #FA6E39;
				background: transparent;
				font-size: 32upx;
				color: #FA6E39;
				line-height: 100upx;
			}
		}
		
	}
</style>
