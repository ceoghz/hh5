<template>
	<view class="volume">
		<Head title = "领卷中心"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="volume-content">
			<view v-if="coupons_list.length>0">
				<view class="volume-list" v-for="(item,index) in coupons_list" :key="index">
					<view class="volume-box">
					   <view class="volume-box-left d-felx flex-column ">
						   <view class="" style="color:#FFFFFF;line-height:124upx;" v-if="item.discount>0">
							   <text style="font-size: 88upx;">{{item.discount}}</text> 
						   </view>
						   <view class="" style="color:#FFFFFF;line-height:124upx;" v-else>
							   <text style="font-size: 68upx;">{{item.money}}</text> 
							   <text style="font-size: 48upx;">元</text>
						   </view>
						   <view class="" style="font-size: 32upx;" >满{{item.z_money}}元可用</view>
					   </view>
					   <view class="volume-box-right  d-felx flex-column ">
							<view class="volume-box-right-1">{{item.name}}</view>
							<view class="volume-box-right-2">有效期至 {{item.end_time}}</view>
							<view class="volume-box-right-3 d-flex a-center j-center" @click="getCoupons(item.id)">立即使用</view>
					   </view>
						<view class="abb"></view>
					</view>
				</view>
				<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
			</view>
			<view v-else class="j-center" style="width: 100%;padding-top:100upx;">
				<view style="width: 560upx;height: 560upx;margin:0 auto 60upx;">
					<image style="width: 560upx;height: 560upx;" src="../../static/img/no_ji.png" mode=""></image>
				</view>
				<view style="width:100%;text-align:center;font-size:36upx;color:#666;">当前没有优惠券可领哟~</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
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
			this.init()
			// console.log("onReachBottom",this.goodsData,this.goods,this.page);
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
			init(){
				this.$http.post("",{
						access_id:uni.getStorageSync("access_id"),
						store_id:1,
						store_type:2,
						module:'app',
						action:'coupon',
						app:'center',
						page:this.page,
						type:1
				}).then(res=>{
					
					if(res.data.code === 200){
						res.data.data.data.forEach((item,index)=>{
						  this.coupons_list.push(item)
						})
						this.coupons = res.data.data.data
						console.log(this.coupons_list,'llll')
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
					
				})
			},
			//领取优惠券
			getCoupons(id){
				this.$http.post("",{
						access_id:uni.getStorageSync("access_id"),
						store_id:1,
						store_type:2,
						module:'app',
						action:'coupon',
						app:'receive',
						id:id
				}).then(res=>{
					console.log(res,'ooo')
					if(res.data.code === 200){
						uni.showToast({
							title:res.data.money,
							icon:'none'
						})
						setTimeout(function(){
							uni.switchTab({
								url: '/pages/tabBar/home'
							})
						},1000)
						// this.coupons_list = res.data.data.data
						
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
					
				})
			}
		},
		mounted(){
			this.init()
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
		
	}
</script>

<style lang="less" scoped>
	.volume{
		height: 100%;
		width: 100%;
	}
	.volume-content{
		width: 100%;
		min-height:100vh;
		box-sizing: border-box;
		padding: 0upx 30upx 20upx;
		background: #F4F4F4;
		flex: 1;
		// overflow: hidden;
		.volume-list{
			width: 100%;
			height: 290upx;
			background-color: #FFFFFF;
			border-radius: 20upx;
			box-sizing: border-box;
			padding: 20upx;
			margin-top: 20upx;
		}
		.volume-box{
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
</style>
