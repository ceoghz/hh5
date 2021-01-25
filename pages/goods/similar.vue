<template>
	<view class="similar">
		<Head title="找相似"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="similar-content">
			<view class="similar-content-top d-flex j-sb">
				<image src="../../static/img/4@2x.png" mode=""></image>
				<view class="similar-content-top-r d-flex flex-column j-sb">
					<view class="product-name">森山直供铁皮枫斗100克官方</view>
					<view class="shop-name">店铺：森山官方旗舰店</view>
					<view class="price">
						<view class="price-num" style="color: #FA6E39;"> <view style="margin-top: 18upx;">￥4320.00</view> </view>
						<view class="go-buy d-flex j-center a-center">去购买</view>
					</view>
				</view>
			</view>
			<view class="similar-content-main">
				<view class="similar-product-list" v-for="(index) in 10" :key= index >
					<image src="../../static/img/4@2x.png" mode=""></image>
					<view class="pro-name">森山铁皮枫斗甄选原料优良品种 100g</view>
					<view class="shop">官方授权 品牌直营</view>
					<view class="pro-price d-flex a-center j-sb">
						<view class="" style="font-size: 24upx;color: #FA6E39;">￥4320.00</view>
						<view class="" style="font-size: 20upx;color: #BABABA;">销量：8888件</view>
					</view>
				</view>
				<view class="" style="width: 20upx;height: 20upx;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0
			}
		},
		components:{
			Head
		},
		methods:{
			
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scode>
	.similar{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.similar-content{
		width: 100%;
		background: #f4f4f4;
		box-sizing: border-box;
		padding: 0 30upx;
		
		&-top{
			width: 100%;
			border-radius: 20upx;
			background-color: #FFFFFF;
			margin-top: 20upx;
			image{
				width: 200upx;
				height: 200upx;
				border-radius: 20upx;
				margin: 20upx;
			}
			&-r{
				width: calc(100% - 200upx);
				margin: 20upx 20upx 20upx 0;
				.product-name{
					width: 100%;
					line-clamp: 2;
					font-size: 28upx;
					font-weight: 400;
					color: #333333;
					line-height: 40upx;
				}
				.shop-name{
					width: 100%;
					font-size: 24upx;
					font-weight: 400;
					color: #999999;
					line-height: 34upx;
				}
				.price{
					width: 100%;
					display: flex;
					justify-content: space-between;
				}
				.go-buy{
					width: 200upx;
					height: 60upx;
					background: linear-gradient(127deg, #FD8A03 0%, #FD5700 100%);
					border-radius: 40upx;
					color: #FFFFFF;
				}
			}
		}
		&-main{
			margin-top: 30upx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
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
