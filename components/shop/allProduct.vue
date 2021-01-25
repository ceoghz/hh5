<template>
	<view class="all-product" >
		<view class="similar-content-main">
			<view class="similar-product-list"  v-for="(item,index) in shopInfo.list" :key= index @click="jumpGoodsDetail(item.id)">
				<image :src="item.imgurl" mode=""></image>
				<view class="pro-name"> {{item.product_title}}</view>
				<view class="shop">官方授权 品牌直营</view>
				<view class="pro-price d-flex a-center j-sb">
					<view class="" style="font-size: 24upx;color: #FA6E39;">￥{{item.price}}</view>
					<view class="" style="font-size: 20upx;color: #BABABA;">销量：{{item.volume}}件</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:['isTab','shopInfo'],
		data(){
			return{
				
			}
		},
		methods:{
			//跳转到商品详情页面
			jumpGoodsDetail(id){
				uni.navigateTo({
					url:`/pages/goods/goodsDetail?id=${id}`
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.all-product{
		padding-top: 30upx;
		.similar-content-main{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			box-sizing: border-box;
			padding: 0 30upx;
			.similar-product-list{
				border-radius: 20upx;
				background: #FFFFFF;
				width: 336upx;
				margin-bottom: 20upx;
				image{
					height: 336upx;
					width: 336upx;
					border-radius: 20upx 20upx 0 0;
				}
				>view{
					margin: 20upx;
				}
				.pro-name{
					font-size: 32upx;
					font-weight: 400;
					color: #333333;
					line-height: 44upx;
					width: 80%;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.shop{
					font-size: 24upx;
					font-weight: 400;
					color: #999999;
					line-height: 34upx;
				}
			}
		}
	}
</style>
