<template>
	<view class="paycomplate">
		<Head title="支付完成"></Head>
		<view :style="{width: '100%',height:nav_height + 'px' }"></view>
		<view class="paycomplate-content">
			<view class="paycomplate-content-top d-flex flex-column a-center">
				<view class="paycomplate-content-top-1 d-flex a-center">
					<image style="height: 60upx;width: 60upx;margin-right: 25upx;" src="../../static/img/btn_checkBox_3.png" mode=""></image>
					<view style="font-size: 40upx;color: #333333;">支付成功!</view>
				</view>
				<view class="paycomplate-content-top-2">
					{{time}}s后自动跳转我的订单
				</view>
				<view class="paycomplate-content-top-3 d-flex j-center a-center">
					返回首页
				</view>
			</view>
			<view class="tuijian">为你推荐</view>
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
				</view>
		</view>
	</view>
</template>

<script>
	import Head  from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
				time:5,
			}
		},
		components:{
			Head
		},
		methods:{
			timeClick(){
			  let time = setInterval(()=>{
					this.time--
					if(this.time === 0){
						uni.navigateTo({
							url:"/pages/personal/myOrder"
						})
						clearInterval(time)
					}
				},1000)
			}
		},
		onShow() {
			// this.timeClick()
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
	}
</script>

<style lang="less" scode>
	.paycomplate{
		height: 100%;
		width: 100%;
		background-color:#f4f4f4 ;
	}
	.tuijian{
		font-size: 40upx;
		font-weight: 600;
		color: #333333;
		line-height: 56upx;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 30upx;
		margin-bottom: 20upx;
	}
	.paycomplate-content{
		width: 100%;
		background: #f4f4f4;
		box-sizing: border-box;
		padding: 20upx 30upx;
		background-color:#f4f4f4 ;
		&-top{
			width: 690upx;
			height: 442upx;
			background: #FFFFFF;
			border-radius: 20upx;
			&-1{
				margin-top: 60upx;
			}
			&-2{
				margin-top: 20upx;
				font-size: 36upx;
				font-weight: 400;
				color: #333333;
				line-height: 50upx;
			}
			&-3{
				margin-top: 100upx;
				font-size: 40upx;
				color: #666666;
				width: 514upx;
				height: 112upx;
				background: #F4F4F4;
			}
		}
	}
	.similar-content-main{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		// padding: 0 30upx;
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
