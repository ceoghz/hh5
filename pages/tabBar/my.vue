<template>
	<view class="myd d-flex flex-column ">
		<!-- #ifdef MP-WEIXIN -->
		<heads title="我的" :border="true" :returnFlag="true"  ishead_w="1"></heads>
		<!-- #endif -->
		<view class="myd-main">
			<view class="myd-main-header">
				<view class="myd-main-header-info d-flex j-sb " style="">
					<view class="avtar d-flex a-center">
						<view class="avtar-l ">
							<image @click="jumpMyinfo" style="width: 120upx;height: 120upx;border-radius: 60upx;border: 1px solid #FFFFFF;background:#FFFFFF" :src="userInfo!==''?userInfo.headimgurl:''" mode=""></image>
						</view>
						<view class="avtar-r">
							<!-- #ifdef MP-WEIXIN -->
							<button v-if="userInfo==''" class="shouquan" @click="jumpShouquan"  size="mini" plain=true>授权</button>
							<text v-if="userInfo!==''">{{userInfo.user_name}}</text>
							<!-- #endif -->
							<!-- #ifdef H5 -->
							<button  class="shouquan"   size="mini" plain=true>登录</button>
							<!-- #endif -->
						</view>
					</view>
					<view class="setting">
						<view class="setting-l">
							<image style="height: 100%;width: 100%;" src="../../static/img/btn_install1.png" mode=""></image>
						</view>
						<view class="setting-r position-relative"  @click="jumpMessage">
							<image  style="height: 100%;width: 100%;"  src="../../static/img/btn_install2.png" mode=""></image>
							<uni-badge class="uni-badge-left-margin"  v-if="userInfo!==''&& userInfo.message_no_read_num!=0" style="right: -16upx;" :text="userInfo.message_no_read_num" type="warning" size="small" /> 
						</view>
					</view>
				</view>
			</view>
			<view class="myd-main-content">
				<view class="user-lines d-flex j-sb">
					<view class="" style="border-left: 2upx solid #F4F4F4;">
						<text>优惠卷</text>
						<text>{{userInfo!==''?userInfo.coupon_num:0}}</text>
					</view>
					<view class="" style="border-left: 2upx solid #F4F4F4;">
						<text>公益积分</text>
						<text>{{userInfo!==''?userInfo.score:0}}</text> 
					</view>
				</view>
				<view class="card"  >
					<view class="card-l" >
						<view>扶贫助农</view>
						<view>天天又好物品</view>
						<view>产地优选 乐享低价</view>
						<view> <image style="width: 100%;height: 100%;" src="../../static/img/integral.png" mode=""></image></view>
					</view>
					<view class="card-r">
						<view>扶贫助农</view>
						<view>天天又好物品</view>
						<view>产地优选 乐享低价</view>
						<view>
							<image style="width: 100%;height: 100%;" src="../../static/img/volume.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="order">
					<view class="order-t d-flex j-sb">
						<view class="order-t-l" >
							我的订单
						</view>
						<view class="order-t-r d-flex a-center" @click="jumpMyOrder" data-id=0 data-type=''>
							<text>查看全部订单</text>
							<view class="" style="height: 60upx;width:60upx;margin-left: 10upx;">
								<image style="width: 100%;height: 100%;" src="../../static/img/btn_back.png" mode=""></image>
							</view>
						</view>
					</view>
					<view class="order-b d-flex j-sb">
						<view class="position-relative" @click="jumpMyOrder"  data-id = 1 data-type='payment'>
							<view class="position-relative">
								<image src="../../static/img/icon_payFor@2x.png" mode=""></image>
								<view v-if="userInfo!==''&& userInfo.dfk!=0" class="uni-badge-left-margin aa">{{userInfo.dfk}} </view>
							</view>	
							<text>待付款</text>
							
						</view>
						<view  class="position-relative"  @click="jumpMyOrder"  data-id = 2  data-type='send'>
							<view  class="position-relative">
								<image src="../../static/img/icon_payFor@2x(1).png" mode=""></image>
								<view  v-if="userInfo!==''&& userInfo.dfh!=0" class="uni-badge-left-margin aa">{{userInfo.dfh}} </view>
							</view>
							<text>待发货</text>
							
						</view>
						<view class="position-relative"  @click="jumpMyOrder"  data-id = 3 data-type='receipt'>
							<view   class="position-relative">
								<image src="../../static/img/icon_payFor(2).png" mode=""></image>
								<view   v-if="userInfo!==''&& userInfo.dsh!=0" class="uni-badge-left-margin aa">{{userInfo.dsh}} </view>
							</view>
							<text>待收货</text>
							
						</view>
						<view  class="position-relative"  @click="jumpMyOrder"  data-id = 4 data-type='evaluate'>
							<view  class="position-relative">
								<image src="../../static/img/icon_payFor(3).png" mode=""></image>
								<view    v-if="userInfo!==''&& userInfo.dpj!=0" class="uni-badge-left-margin aa">{{userInfo.dpj}} </view>
							</view>
							<text>评价</text>
						</view>
						<view  class="position-relative"  @click="jumpMyOrder"  data-id = 5 data-type='return'>
							<view  class="position-relative">
								<image src="../../static/img/icon_payFor(4).png" mode=""></image>
								<view  v-if="userInfo!==''&& userInfo.th!=0" class="uni-badge-left-margin aa">{{userInfo.th}} </view>
							</view>
							<text>退款/售后</text>
						</view>
					</view>
				</view>
				<view class="service">
					<view class="service-t">更多服务</view>
					<view class="service-b">
						<view class="d-flex j-sb" style="height: 84upx;width: 100%;" v-for="(item,index) in abb_list" :key='index' @click="jumpClick(item.adr)" >
						    <view class="d-flex a-center" style="height: 100%;">
						    	<image style="width: 60upx;height: 60upx;" :src="item.img_src" mode=""></image>
								<text style="font-size: 32upx;margin-left: 15upx;color: #666666;">{{item.name}}</text>
						    </view>	
							<view class="d-flex a-center" style="height: 100%;">
								<image style="width: 60upx;height: 60upx;" src="../../static/img/btn_back.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni/uni-badge/uni-badge.vue';
	import Circle  from   '@/components/circle.vue'
	import {is_shouquan} from "@/utils/util.js"
	export default{
		data(){
			return{
				abb_list:[
					{img_src:'../../static/img/icon_collection.png',name:'我的收藏',adr:'/pages/my/collection'},
					{img_src:'../../static/img/icon_collection@2x(1).png',name:'收货地址',adr:'/pages/personal/address'},
					{img_src:'../../static/img/icon_collection@2x(2).png',name:'在线客服',adr:'/pages/personal/address'},
					{img_src:'../../static/img/icon_collection@2x(3).png',name:'关于我们',adr:'/pages/personal/address'},
					{img_src:'../../static/img/icon_collection@2x(4).png',name:'分享好友',adr:'/pages/personal/address'},
					{img_src:'../../static/img/icon_collection(5).png',name:'浏览足迹',adr:'/pages/my/footprint'}
				],
				userInfo:'',//用户信息
			}
		},
		components:{
			uniBadge,
			Circle
		},
		onLoad() {
			console.log(11)
			is_shouquan()
		},
		onShow(){
			this.requestUserInfo()
			console.log('aaaa',this.userInfo)
		},
		methods:{
			
			jumpMyinfo(){
				console.log(this.userInfo.birthday)
				let brt = this.userInfo.birthday!=null? this.userInfo.birthday.split(" ")[0]:null
				uni.navigateTo({
					url:`/pages/my/myinfo?headimgurl=${this.userInfo.headimgurl}&user_name=${this.userInfo.user_name}&birthday=${brt}`
				})
			},
			jumpClick(adr){
				uni.navigateTo({
					url:adr,
					success() {
						console.log('跳转成功')
					}
				})
			},
			//跳转到订单页
			jumpMyOrder(e){
				let res = e.currentTarget.dataset
				uni.navigateTo({
					url:"/pages/personal/myOrder?"+"id=" + res.id +"&type="+ res.type,
					success() {
						console.log('跳转成功')
					}
				})
			},
			//跳转到消息页面
			jumpMessage(){
				console.log(11)
				uni.navigateTo({
					url:"/pages/personal/message",
					success() {
						console.log('跳转成功')
					}
				})
			},
			jumpShouquan(){
				console.log('授权页面')
				uni.navigateTo({
					url:"/pages/shouquan/index",
					success() {
						console.log("跳转成功")
					}
				})
			},
			//获取用户信息
			requestUserInfo(){
				this.$http.post(
				'',{
					store_id:1,
					store_type:2,
					module:'app',
					action:'user',
					app:'center',
					access_id:uni.getStorageSync("access_id")
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						console.log('abb',res.data.data)
						this.userInfo = res.data.data
					}
				})
			}
		},
		created(){
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	.myd{
		height: 100%;
	}
	.myd-main{
		flex:1;
		width:100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		&-header{
			width:100%;
			height:270upx;
			background: linear-gradient(to right, #FD8A03 0%,#FD5700 100%);
			box-sizing: border-box;
			padding: 32upx;
			border-radius: 0 0 90upx 90upx;
			&-info{
				height: 155upx;
				width: 100%;
				// background: #FFFFFF;
				.avtar{
					height: 100%;
					&-l{
					}
					&-r{
						margin-left: 25upx;
						font-weight: 500;font-size: 40upx;color:#FFFFFF;
						.shouquan{
							margin-top: 30upx;
							background: transparent;
							height:60upx;
							border: 1upx solid #FFFFFF;
							color: #FFFFFF;
							border-radius: 35upx;
							line-height: 60upx;
							font-size: 25upx;
						}
					}
				}
				.setting{
					// height: 100%;
					display: flex;
					&-l{
					   	height: 60upx;
						width: 60upx;
					}
					&-r{
						height: 60upx;
						width: 60upx;
						margin-left: 30upx;
					}
				}
			}
		}
		&-content{
			box-sizing: border-box;
			padding: 0 32upx;
			flex: 1;
			.user-lines{
				width: 100%;
				height: 204upx;
				box-sizing: border-box;
				padding: 32upx 0;
				background-color: #FFFFFF;
				border-radius: 20upx;
				margin-top: -70upx;
				view{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					width: 50%;
					text:first-child{
						color: #666666;
						font-size: 32upx;
					}
					text:last-child{
						color: #FA6E39;
						font-size: 48upx;
					}
				}
			}
		    .card{
				display:flex;
				justify-content: space-between;
				width: 100%;
				height: 200upx;
				margin-top: 20upx;
				>view{
					height: 200upx;
					width: 336upx;
					border-radius: 20upx;
					box-sizing: border-box;
					padding: 20upx;
					position: relative;
					:nth-of-type(1){
						color: #FFFFFF;
						line-height: 50upx;
						font-size: 36upx;
						font-weight:500;
					}
					:nth-of-type(2){
						width: 160upx;
						height: 40upx;
						border-radius: 20upx;
						border: 2upx solid #FFFFFF;
						color: #FFFFFF;
						font-size: 24upx;
						text-align: center;
						margin: 10upx 0 20upx 0;
					}
					:nth-of-type(3){
						width: 234upx;
						height: 40upx;
						font-size: 28upx;
						font-weight: 400;
						color: #FFFFFF;
						line-height: 40upx;
					}
					:nth-of-type(4){
						position: absolute;
						right: 20upx;
						top: 30upx;
						height: 110upx;
						width: 110upx;
					}
				}
				&-l{
					background: linear-gradient(to right, #8F56F7 0%,#2C7AE3 100%);
				}
				&-r{
					background: linear-gradient(to right, #F3122B 0%,#FD5204 100%);
				}
			}
			.order{
				width: 100%;
				// height: 254upx;
				background: #FFFFFF;
				border-radius: 20upx;
				box-sizing: border-box;
				padding: 20upx 10upx;
				display: flex;
				flex-direction: column;
				margin-top: 30upx;
				&-t{
					// height: 89upx;
					border-bottom: 2upx solid #F4F4F4;
					&-l{
						width:160upx;
						height: 50upx;
						font-size: 36upx;
						font-weight: bold;
						color: #333333;
						line-height: 50upx;
						letter-spacing: 2upx;
					}
					&-r{
						>text{
							width: 196upx;
							height: 44upx;
							font-size: 32upx;
							font-weight: 400;
							color: #666666;
							line-height: 44upx;
						}
					}
				}
				&-b{
					// height: 163upx;
					>view{
					    display: flex;
						flex-direction: column;
						justify-content:space-around;
						align-items: center;
						width: 20%;
						// height: 100%;
						>view{
							height: 65upx;
							width: 65upx;
							>image{
								height: 100%;
								width: 100%;
							}
						}
						>text{
							height: 44upx;
							font-size: 32upx;
							font-weight: 400;
							color: #666666;
							line-height: 44upx;
							overflow: hidden;
							white-space: nowrap;
						}
						
					}
				}
			}
			.service{
				width: 100%;
				height: 600upx;
				background: #FFFFFF;
				border-radius: 20upx;
				box-sizing: border-box;
				padding: 20upx 20upx;
				display: flex;
				flex-direction: column;
				margin-top: 30upx;
				&-t{
					height: 70upx;
					border-bottom: 2upx solid #F4F4F4;
					font-size: 36upx;
					font-weight: bold;
					color: #333333;
					line-height: 50upx;
				}
			}
		}
	}
	.uni-badge-left-margin{
		position: absolute;
		top: 5upx;
		right: -5upx;
	}
	.aa{
		position: absolute;
		top: 5upx;
		right: -5upx;
		height: 16upx;
		width: 16upx;
		border-radius: 8upx;
		border: 2upx solid red;
		font-size: 12upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: red;
		background-color: #FFFFFF;
	}

</style>
