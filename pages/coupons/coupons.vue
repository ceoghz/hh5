<template>
	<view class="coupons">
		<view class="coupons-header">
			<Head title="优惠卷"></Head>
			<view class="" style="height: 64px; width: 100%;"></view>
			<view class="coupons-header-main d-flex j-sb">
				<view class="" v-for="(item,index) in tabArr" :key="index" @click="tabClick(item.id)">
					<text :style="{color:isTab === item.id ?'#FA6E39':''}">{{item.name}}</text>
					<p v-if="isTab === item.id"></p>
				</view>
			</view>
		</view>
		<view class="coupons-content" v-if="type==0">
			<view v-if="coupons_list.length>0">
				<view class="coupons-list" v-for="(item,index) in coupons_list" :key="index">
					<view class="coupons-box">
					   <view class="coupons-box-left d-felx flex-column ">
					   	   <view class="" style="color:#FFFFFF;line-height:124upx;" v-if="item.discount>0">
					   	   	   <text style="font-size: 88upx;">{{item.discount}}</text> 
					   	   </view>
					   	   <view class="" style="color:#FFFFFF;line-height:124upx;" v-else>
					   	   	   <text style="font-size: 68upx;">{{item.money}}</text> 
					   	   							   <text style="font-size: 48upx;">元</text>
					   	   </view>
						   <view class="" style="font-size: 32upx;" >满{{item.z_money}}元可用</view>
					   </view>
					   <view class="coupons-box-right  d-felx flex-column " >
							<view class="coupons-box-right-1">{{item.name}}</view>
							<view class="coupons-box-right-2">有效期至{{item.expiry_time}}</view>
							<view class="coupons-box-right-3 d-flex a-center j-center" @click="goHome()">立即使用</view>
					   </view>
						<view class="abb"></view>
					</view>
				</view>
				<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
			</view>	
			<view v-else class="d-flex j-center" style="width: 100%;">
				<image style="width: 560upx;height: 560upx;margin: 0 auto;" src="../../static/img/no_ming.png" mode=""></image>
			</view>
			
		</view>
		<view class="coupons-content" v-else>
			<view v-if="coupons_list.length>0">
				<view class="coupons-list" v-for="(item,index) in coupons_list" :key="index">
					<view class="coupons-box">
					   <view class="coupons-box-left d-felx flex-column " style="background:#BABABA">
					   	   <view class="" style="color:#FFFFFF;line-height:124upx;" v-if="item.discount>0">
					   	   	   <text style="font-size: 88upx;">{{item.discount}}</text> 
					   	   </view>
					   	   <view class="" style="color:#FFFFFF;line-height:124upx;" v-else>
					   	   	   <text style="font-size: 68upx;">{{item.money}}</text> 
					   	   							   <text style="font-size: 48upx;">元</text>
					   	   </view>
						   <view class="" style="font-size: 32upx;" >满{{item.z_money}}元可用</view>
					   </view>
					   <view class="coupons-box-right  d-felx flex-column "  style="background:#F4F4F4">
							<view class="coupons-box-right-1">{{item.name}}</view>
							<view class="coupons-box-right-2">有效期至{{item.expiry_time}}</view>
							<view class="coupons-box-right-3 d-flex a-center j-center" style="background:#BABABA" @click="goHome()">立即使用</view>
					   </view>
						<view class="abb"></view>
					</view>
				</view>
				<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
			</view>	
			<view v-else class="d-flex j-center" style="width: 100%;">
				<image style="width: 560upx;height: 560upx;margin: 0 auto;" src="../../static/img/no_ji.png" mode=""></image>
			</view>
			
		</view>
		<view class="" style="width: 100%;height:138upx;"></view>
		<view class="add-address-footer" >
			<view class="add-address-footer-main">
				<view class="add-btn d-flex j-center a-center" @click="goCenter()">去领更多卷</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	export default{
		data(){
			return{
				tabArr:[
					{id:0,name:"未使用"},
					{id:3,name:"已过期"}
				],
				isTab:0,
				type:0,
				page:1,
				coupons_list:[],
				coupons:[],//下拉刷新的优惠券
				loadMoreText: "加载中...",
				showLoadMore: false,
			}
		},
		//监听页面卸载
		onUnload() {
			this.coupons_list = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		//拉到底部
		onReachBottom() {
			
			this.page=this.page+1;
			this.couponsRequest()
			if(this.coupons==[]||this.coupons.length<10){
				this.loadMoreText = "没有更多数据了!"
				this.showLoadMore = true;
				// console.log(this.showLoadMore,'到底部了')
				return;
			}	
		},
		components:{
			Head
		},
		methods:{
			tabClick(id){
				this.isTab = id
				this.type = id
				this.page = 1
				this.coupons_list=[]
				this.coupons=[]
				this.couponsRequest()
			},
			couponsRequest(){
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
						store_id:1,
						store_type:2,
						module:'app',
						action:'coupon',
						app:'user',
						page:this.page,
						type:this.type
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						if(this.type==0){
							this.coupons=[]
							res.data.data.data.forEach((item,index)=>{
								if(item.type==0){
									this.coupons_list.push(item)
									this.coupons.push(item)
								}
							})
						}else if(this.type==3){
							this.coupons=[]
							res.data.data.data.forEach((item,index)=>{
								if(item.type==3){
									this.coupons_list.push(item)
									this.coupons.push(item)
								}
							})
						} 
						
						console.log(this.coupons_list,this.coupons,'uuu')
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
					
				})
			},
			//滚动到 底部 
			scrolltolower(){
				console.log(1)
				
			},
			//去领券中心
			goCenter(){
				uni.navigateTo({
				    url: '/pages/coupons/volumeCenter'
				});
			},
			goHome(){
				uni.switchTab({
					url: '/pages/tabBar/home'
				})
			}
		},
		onLoad() {
			this.couponsRequest({})
		}
	}
</script>

<style lang="less" scoped>
	.coupons{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		&-header{
			width: 100%;
			&-main{
				width: 100%;
				height: 108upx;
				background: #FFFFFF;
				>view{
					width: 50%;
					height: 1005;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					>p{
						width: 96upx;
						height: 6upx;
						background: #FA6E39;
						border-radius: 3upx;
						position: absolute;
						left: 50%;
						bottom: 0;
						margin-left: -48upx;
					}
				}
			}
		}
	    &-content{
			width: 100%;
			// height: 100%;
			box-sizing: border-box;
			padding: 0upx 30upx 20upx;
			background: #F4F4F4;
			flex: 1;
			margin-bottom:138upx;
			// overflow-y: scroll;
			.coupons-list{
				width: 100%;
				height: 290upx;
				background-color: #FFFFFF;
				border-radius: 20upx;
				box-sizing: border-box;
				padding: 20upx;
				margin-top: 20upx;
			}
			.coupons-box{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				position: relative;
				.abb{
					position: absolute;
					top: 0;
					left: 300upx;
					height: 100%;
					width: 20upx;
					border-left: 20upx dotted #FFFFFF;
				}
				&-left{
					height: 100%;
					width: 310upx;
					background: linear-gradient(90deg, #FD8A03 0%, #FD5700 100%);
					border-radius: 20upx;
					color:#FFFFFF;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				&-right{
					height: 100%;
					width: 340upx;
					background: #FBF7F2;
					border-radius: 20upx;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
					&-1{
						font-size: 24upx;
						color: #333333;
						line-height: 34px;
					}
					&-2{
						font-size: 24upx;
						color: #999999;
						line-height: 34px;
					}
					&-3{
						height: 60upx;
						width: 300upx;
						border-radius: 30upx;
						// background: linear-gradient(90deg,#F3122B 0%,#FB4A0620 50%,#FD5204 100%);
						background: linear-gradient(90deg, #F3122B 0%, #FD5204 100%);
						color: #fff;
						
					}
				}
			}
		}
		.add-address-footer{
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
	}
	
	/deep/.uni-scroll-view ::-webkit-scrollbar {
		 /* 隐藏滚动条，但依旧具备可以滚动的功能 */
		 display: none;
		 width: 0;
		 height: 0;
		 color: transparent;
		 background: transparent;
		}
		/deep/::-webkit-scrollbar {
		 display: none;
		 width: 0;
		 height: 0;
		 color: transparent;
		 background: transparent;
		}
		
	.uni-loadmore{
		width:100vw;
		height:80rpx;
		line-height:80rpx;
		text-align:center;
		padding-bottom:30rpx;
	}	
	
</style>
