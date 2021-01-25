<template>
	<view class="home">
		<view class="home_top1">
			<view class="home_top">
				<view class="" style="position: fixed;top: 0rpx;left: 0rpx;z-index:99;">
					<!-- #ifdef MP-WEIXIN -->
					<heads title="乐活精选" :border="true" :returnFlag="true"  ishead_w="1"></heads>
					<!-- #endif -->
					<view class="home_top_item">
						<view class="home_top_item_left" >
							<view class="iconfont icon-sousuo"></view>
							<span style="margin-left:10rpx;">搜索你想要的商品</span>
						</view>
						<view class="home_top_item_right" >
							<view style="height: 60rpx;width: 60rpx; text-align: center;">
								<view class="iconfont icon-icon--" style="color: #FFFFFF;font-size: 70rpx;position:relative;top:-30rpx;"></view>
							</view>
							<view style="height: 60rpx;width: 60rpx;margin-left:30rpx;" >
								<view class="iconfont icon-xiaoxi" style="font-size: 60rpx;font-weight: bold;color: #FFFFFF;position:relative;top:-21rpx;"></view>
							</view>
						</view>
					</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<view style="height:225upx;"></view>
				<!-- #endif -->
			    <!-- #ifdef H5 -->
				<view style="height:105upx;"></view>
				<!-- #endif -->
				<!-- 轮播图 -->
				<view class='lun'>
					<view class="uni-margin-wrap">
						<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="(item,index) in bannerData" :key="index">
								<view class="swiper-item">
									<image :src="item.image_url"></image>
								</view>
							</swiper-item>
							
						</swiper>
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="home_main">
			<!-- #ifdef MP-WEIXIN -->
			<view style="height:108upx;"></view>
			<!-- #endif -->
			<!-- 分类 -->
			<view class="fen">
				<view class="fen-list" v-for="(item,index) in fenData" :key="index" @click="erFen(item.cid)">
					<view class="fen-img"><image :src="item.img_url"></image></view>
					<text>{{item.pname}}</text>
				</view>
			</view>
			<!-- 活动 -->
			<view class="active">
				<view class="active-list" v-for="(item,index) in activeData" :key="index">
					<image :src="item.img" v-if="item.img!==''"></image>
				</view>
			</view>
			<!-- 首页商品 -->
			<view class="goods">
				<view class="goods-list" v-for="(item,index) in goodsData" :key="index" @click="goodsDetail(item.id)">
					<image :src="item.image_url"></image>
					<view class="goods-content">
						<text class="gTitle">{{item.product_title}}</text>
						<text class='gText1'>官方授权 品牌直营</text>
                        <view class="gText2">
							<text class="gPrice">￥ <text>{{item.price.split('.')[0]}}.</text>{{item.price.split('.')[1]}}</text>
							<text>销量：{{item.volume}}</text>
						</view>
						<view class="gText3">
							<view></view>
							<view class="gXiang" @click.stop="alikeGoods(item.id)">找相似</view>
						</view>
					</view>
				</view>
				<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				fenData:[],//分类
				page:1,//分页
				activeData:[],//活动模块
				goodsData:[],//首页商品
				goods:[],//下拉刷新的商品
				loadMoreText: "加载中...",
				showLoadMore: false,
				// background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				bannerData:[],//轮播图
				
				
			}
		},
		//监听页面卸载
		onUnload() {
			this.goodsData = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		//拉到底部
		onReachBottom() {
			this.page=this.page+1;
			this.init()
			// console.log("onReachBottom",this.goodsData,this.goods,this.page);
			if(this.goods==[]||this.goods.length<10){
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			this.showLoadMore = true;
		},
		computed: {
		    halfWidth: function() {
		        var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height;
		        var heigh = parseInt(gru);
		        // #ifdef MP
		        heigh = 0;
		        // #endif
		        var he = heigh * 2;
		        return uni.upx2px(he) + 'px';
		    },
		},
		mounted() {
			this.init()
		},
		methods:{
			//首页初始化数据
			init(){
				this.$http.post(
				 '',
				 {
					store_id:1,
					store_type:2,
					module:'app',
					action:"index",
					app:"indexV2",
					page:this.page,
					
				 }).then((res)=>{
					 this.fenData=res.data.data.category;
					 this.activeData=res.data.data.module;
					 res.data.data.product.data.forEach((item,index)=>{
						  this.goodsData.push(item)
					 })
					 this.goods=res.data.data.product.data;
					 this.bannerData=res.data.data.banner;
					 // console.log('annmnn',res)
					 // console.log(this.goodsData,'good')
					uni.stopPullDownRefresh();
				})
			},
			// 二级分类跳转
			erFen(cid){
				console.log(cid,'cid')
				uni.navigateTo({
				    url: '/pages/goods/allGoods?id='+cid
				});
			},
			//找相似
			alikeGoods(id){
				// console.log('xxxx')
				uni.navigateTo({
				    url: '/pages/goods/alikeGoods?id='+id
				});
			},
			//跳转商品详情
			goodsDetail(id){
				uni.navigateTo({
				    url: '/pages/goods/goodsDetail?id='+id
				});
			}
		}
		
	}
</script>

<style scoped lang="less">
	  @import url('../../static/css/tabBar/home.less');
</style>	

