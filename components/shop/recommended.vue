<template>
	<view class="">
		<view class="coupons"   >
			<!-- <view class="coupons-item" v-for="(index) in 10" :key = index>
				<view class="coupons-item-l d-flex flex-column a-center j-sb">
					<view class="coupons-item-l-1">
						<text>999</text> <text style="font-size: 36upx;">元</text>
					</view>
					<view class="coupons-item-l-2">满9999元使用</view>
					<view class="coupons-item-l-3">立即领取</view>
				</view>
				<view class="coupons-item-r">优惠卷</view>
				<view class="bor">
				</view>
			</view> -->
		</view>
		<view class="similar-content-main">
			<view class="similar-product-list" v-for="(item,index) in shopInfo.list" :key= index @click="jumpGoodsDetail(item.id)" >
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
	.coupons{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding:30upx 20upx 20upx;
		>view{
			width: 336upx;
			height: 220upx;
			border-radius: 30upx;
		}
		.coupons-item{
			display: flex;
			position: relative;
			margin-bottom: 30upx;
			&-l{
				flex: 1;
				// width: calc(100% - 86upx);
				border-radius:30upx 0upx 0upx 30upx;
				background: linear-gradient(90deg, #FD8A03 0%, #FD5700 100%);
				.coupons-item-l-1{
					font-size: 72upx;
					color: #FFFFFF;
					line-height: 80upx;
					letter-spacing: 2upx;
					margin-top: 10upx;
				}
				.coupons-item-l-2{
					font-size: 28upx;
					color: #FFFFFF;
					line-height: 40upx;
				}
				.coupons-item-l-3{
					width: 200upx;
					height: 48upx;
					background: linear-gradient(90deg, #F3122B 0%, #F41B24 100%, #FD5204 100%);
					border-radius: 24upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 28upx;
					color: #FFFFFF;
					margin-bottom: 20upx;
				}
			}
			&-r{
				width: 86upx;
				height: 100%;
				background-color: #FD4601;
				border-radius:0 30upx 30upx 0;
				box-shadow: 0px 0px 6px 0px rgba(151,7,7,0.4);
				display: flex;
				align-items: center;
				justify-content: center;
				 writing-mode:vertical-rl;  //垂直方向，从右向左
				 letter-spacing: 10upx;
				 color: #FFFFFF;
				font-size: 44upx;
			}
			.bor{
				position: absolute;
				left: 8upx;
				top: 8upx;
				width: 316upx;
				height: 200upx;
				border-radius: 20upx;
				opacity: 0.8;
				border: 2upx dashed #FFFFFF;
			}
		}
		
	}
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
</style>
