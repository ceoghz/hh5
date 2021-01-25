<template>
	<view class="shop">
		<view class="shop-header">
			<Head title="店铺主页"></Head>
			<view :style="{width: '100%',height:nav_height + 'px' }"></view>
			<view class="shop-header-main">
				<view class="shop-header-main-top">
					<image class="shop-logo" :src="shopInfo.shop_logo" mode=""></image>
					<view class="shop-name felx-1">
						<view class="shop-name-t d-flex j-sb">
							<view class="">{{shopInfo.shop_name}}</view>  
							<view class="shop-share d-flex j-sb" >  
								<image @click="collection" style="height:55upx;width: 55upx;margin-top: -7upx;" :src="isCollection?'../../static/img/shou_1.png':'../../static/img/shou_0.png'" mode=""></image>
								<image style="height:55upx;width: 55upx;margin-top: -5upx;" src="../../static/img/btn_share.png"  mode=""></image>
							</view>
						</view>
						<view class="shop-name-b">
							<text>{{shopInfo.quantity_on_sale}}在售商品 | </text>
							<text> 已售{{shopInfo.quantity_sold}}万件 </text>
							<text> | {{shopInfo.collection_num}}人收藏</text>
						</view>
					</view>
				</view>
				<view class="shop-header-main-bottom">
						<li v-for="(item,index) in tabArr" :key="index" @click="shopRequest(item.id)">
							<text :style="{color: isTab === item.id ? '#FA6E39':'#333333'}">{{item.name}}</text>
							<p v-if="item.id === isTab"></p>
						</li>
				</view>
			</view>
		</view>
		<view class="shop-content">
			<scroll-view scroll-y='true' style="height: 100%;">
				<Recommended v-if="isTab == 1" :isTab = "isTab" :shopInfo = "shopInfo"></Recommended>
				<AllProduct v-if="isTab == 2" :isTab = "isTab" :shopInfo = "shopInfo"></AllProduct>
				<ProductClass v-if="isTab == 3" :isTab = "isTab"  :shopInfo = "shopInfo"></ProductClass>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	import Recommended from "../../components/shop/recommended.vue"
	import AllProduct from "../../components/shop/allProduct.vue"
	import ProductClass from "../../components/shop/productClass.vue"
	export default{
		data(){
			return{
				isTab:1,
				tabArr:[
					{name:'推荐',id:1},
					{name:'全部商品',id:2},
					{name:'商品分类',id:3},
				],
				nav_height:0,
				isCollection:false,
				type:'',//
				shopInfo:'',//店铺信息
			}
		},
		components:{
			Head,
			Recommended,
			AllProduct,
			ProductClass
		},
		methods:{
			//请求 店铺信息
			shopRequest(type){
				this.isTab = type
				console.log(this.isTab)
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'mch',
					m:'store_homepage',
					shop_id:this.shop_id,//店铺id
					type:type
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						this.shopInfo = res.data.data
					}
				})
			},
			//收藏店铺
			collection(){
				this.isCollection = !this.isCollection
				// this.$http.post("",{
				// 	access_id:uni.getStorageSync("access_id"),
				// 	store_id:1,
				// 	store_type:2,
				// 	module:'app',
				// 	action:'mch',
				// 	m:'collection_shop',
				// 	shop_id:'',//店铺id
				// }).then(res=>{
				// 	console.log(res)
				// })
			}
		},
		onLoad(options) {
			this.shop_id = options.id
			this.shopRequest(1)
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		
	}
</script>

<style lang="less" scoped>
	.shop{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		.shop-header{
			width: 100%;
			background: #FFFFFF;
			&-main{
				width: 100%;
				box-sizing: border-box;
				padding: 0 34upx;
				&-top{
					width: 100%;
					height: 180upx;
					border-top: 2upx solid #F4F4F4;
					display: flex;
					align-items: center;
					.shop-logo{
						border: 2upx solid #BABABA;
						height: 100upx;
						width: 100upx;
						border-radius: 50upx;
					}
					.shop-name{
						flex: 1;
						margin-left: 20upx;
						&-t{
							.shop-share{
								width: 100upx;
							}
						}
						&-b{
							color: #999999;
							line-height: 34px;
							font-size: 24upx;
						}
					}
				}
				&-bottom{
					border-top: 2upx solid #F4F4F4;
					width: 100%;
					height: 108upx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					li{
						list-style: none;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 33%;
						position: relative;
						p{  
							position: absolute;
							bottom: 0;
							left: 50%;
							margin-left: -32upx;
							width: 64upx;
							height: 6upx;
							background: #FA6E39;
							border-radius: 3px;
						}
					}
				}
			}
		}
		.shop-content{
			width: 100%;
			height: 100%;
			flex: 1;
			overflow: hidden;
		}
	}
</style>
