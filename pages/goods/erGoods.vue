<template>
	<view class="fen">
		<view class="header">
			<Head :title="title"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
	    <view class="main">
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
							<view class="gXiang" @click="alikeGoods(item.id)">找相似</view>
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
				fenId:'',
				title:'',
				goodsData:[],
			}
		},
		onLoad(options){
		    console.log(options)
			this.fenId= options.id; 
			this.title=options.pname;
			console.log(this.fenId,this.title,'ggg')

			
			this.init()
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					store_id:1,
					store_type:2,
					module:'app',
					action:"index",
					app:"productByCate",
					cid:this.fenId
					
				 }).then((res)=>{
					console.log(res,'hh')
					this.goodsData=res.data.data.data
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			//找相似
			alikeGoods(id){
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
	 @import url('../../static/css/goods/erGoods.less');
</style>

