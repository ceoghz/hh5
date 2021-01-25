<template>
	<view class="fen">
	   <view class="header">
			<Head title="确认收货"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
	   </view>
		<view class="main">
			<view class="success">
				<view class='shou-img'>
					<image src='../../static/img/btn_checkBox_3.png'></image>收货成功！
				</view>
				<view class='shou'>
					<view class="shou1">返回首页</view>
					<view class="shou2">去评价</view>
				</view>
			</view>
			<view class="goods">
				<view class="goods-title">为你推荐</view>
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
	import Head from "@/components/head.vue"
	export default{
		components: {
            Head
		},
		data(){
			return{
				nav_height:0,
				title:'商品订单详情',
                goodsData:[],//推荐商品
                goods:[],//下拉刷新的商品
				loadMoreText: "加载中...",
				showLoadMore: false,
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options){
			console.log(options,'fff')
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curParam = routes[routes.length - 1].options; //获取路由参数
			this.orderId=curParam.id; 
			this.goodsId=curParam.pid; 
			this.orderId=12143;
			this.goodsId=1246; 
			console.log(this.orderId,'ggg')
			this.init()
			
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"order",
					app:"Returndetail",
					id:this.orderId,
					pid:this.goodsId,
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
					
					}else{
						uni.showToast({
							title:res.data.message
						})
					}
				})
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
	.fen{
			height:100%;
			width:100%;
			font-family: '苹方-简 常规体';
			background: #f4f4f4;
			display: flex;
			flex-direction: column;
			.header{
				width: 100%;
			}
		}
	.main{
		background-color: #F4F4F4;
		padding:20upx 30upx;
	}
	.success{
		width:690upx;
		height:366upx;
		background-color: #fff;
		border-radius: 20upx;
		padding-top:60upx;
	}
	.shou-img{
		margin-bottom:150upx;
		text-align:center;
		font-size:40upx;
		line-height:56upx;
		color:#333;
		font-weight:bold;
	}
	.shou-img image{
		width:60upx;
		height:60upx;
		margin-right:20upx;
		vertical-align: middle;
	}
	.shou{
		display:flex;
		width:650upx;
	}
	.shou view{
		width:280upx;
		height:112upx;
		line-height:112upx;
		font-size:44upx;
		text-align:center;
	}
	.shou .shou1{
		color:#666;
		background-color: #F4F4F4;
		margin-left:40upx;
		margin-right:50upx;
	}
    .shou .shou2{
    	color:#FA6E39;
    	background-color: #FFECE6;
    }
	.goods{
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		background-color: #F4F4F4;
	}
	.goods-title{
		width:650upx;
		font-size:40upx;
		line-height:96upx;
		text-align:center;
		font-weight:bold;
		color:#333;
	}
	.goods-list{
		width:336upx;
		height:644upx;
		background-color: #fff;
		margin-top:20upx;
		border-radius: 20upx;
	}
	.goods-list image{
		width:336upx;
		height:336upx;
		border-radius: 20upx 20upx 0 0;
	}
	.goods-content{
		height:288upx;
		padding:0 20upx;
		font-family:'苹方-简 常规体';
		position:relative;
	}
	.gTitle{
		font-size:32upx;
		color:#333;
		line-height:48upx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.gText1{
		position:absolute;
		bottom:144upx;
		left:20upx;
		font-size:26upx;
		color:#999;
		line-height:34upx;
	}
	.gText2{
		position:absolute;
		bottom:80upx;
		left:20upx;
		font-size:22upx;
		color:#BABABA;
		width:296upx;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
		line-height:34upx;
	}
	.gPrice{
		color:#FA6E39;
	}
	.gPrice text{
		font-size:34upx;
		// font-weight:bold;
	}
	.gText3{
		position:absolute;
		bottom:24upx;
		left:20upx;
		color:#FA6E39;
		width:296upx;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.gXiang{
		width:90upx;
		height:36upx;
		font-size:20upx;
		border-radius: 18upx;
		text-align:center;
		line-height:36upx;
		background-color: #FFECE6;
	}
</style>