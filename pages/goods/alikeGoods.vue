<template>
	<view class="fen">
		<view class="header">
			<Head title="找相似"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
	    <view class="main">
			<!-- 去购买 -->
			<view class="buy-goods">
				<view class="img">
					<image :src="buyGoods.image_url"></image>
				</view>
				<view class="buy-content">
					<text class="bTitle">{{buyGoods.product_title}}</text>
					<text class='bText1'>{{shopName}}</text>
				    <view class="bText2">
						<text class="bPrice">￥ <text>{{buyGoods.price.split('.')[0]}}.</text>{{buyGoods.price.split('.')[1]}}</text>
					    <text class="b-buy" @click="goodsDetail(buyGoods.id)">去购买</text>
					</view>
				</view>
			</view>
			<!-- 产品 -->
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
						</view>
					</view>
				</view>
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
				goodsId:'',
				goodsData:[],//相似商品
				buyGoods:{},//去购买商品信息
				shopName:'',
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.goodsId=curParam.id; 
			console.log(this.goodsId,'ggg')
			this.init()
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"index",
					app:"productSimilar",
					pid:this.goodsId
					
				 }).then((res)=>{
					console.log(res,'hh')
					this.goodsData=res.data.data.similar
					this.buyGoods=res.data.data.product
					this.shopName=res.data.data.product.mch.name;
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
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
	 @import url('../../static/css/goods/alikeGoods.less');
</style>


