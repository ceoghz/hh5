<template>
	<view class="service">
		<Head title="选择服务"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="service-content">
			<view class="service-product">
				<view class="service-product-top" >退款商品</view>
				<view class="service-product-main" >
					<image :src="productinfo.product_img" mode=""></image>
					<view class="service-product-main-right">
						<view class="service-product-main-right-1">{{productinfo.product_title}}</view>
						<view class="service-product-main-right-2">{{productinfo.attribute_str}}</view>
					</view>
				</view>
			</view>
			<view class="service-type">
				<view class="service-type-top" >选择服务类型</view>
				<view class="service-type-main" >
					<view v-if="status === '1' || status === '2'" class="service-type-main-item" @click="jumpRefund" data-type = "2">
						<image class="item-l" style="height: 74upx;width: 74upx;margin-left: 20upx;" src="../../static/img/icon_tuihuo.png" mode=""></image>
						<view class="item-c">
							<view class="">我要退款（无需退货）</view>
							<view class="">没收到货，或与卖家协商同意不用退货只退款</view>
						</view>
						<image style="height: 60upx;width: 60upx;margin-right: 20upx;"  src="../../static/img/btn_back.png" mode=""></image>
					</view>
					<view v-if="status ==='2'" class="service-type-main-item" style="margin-bottom: 20upx;"  @click="jumpRefund" data-type = "1" >
						<image class="item-l" style="height: 74upx;width: 74upx;margin-left: 20upx;" src="../../static/img/icon_tuihuo.png" mode=""></image>
						<view class="item-c">
							<view class="">我要退货退款</view>
							<view class="">已收到货，需要退换收到的货物</view>
						</view>
						<image style="height: 60upx;width: 60upx;margin-right: 20upx;"  src="../../static/img/btn_back.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
				status:0,//接收订单状态
				id:'', //订单id
				pid:'',//商品id
				productinfo:'',//商品信息
			}
		},
		components:{
			Head
		},
		methods:{
			jumpRefund(e){
				let res = e.currentTarget.dataset
				uni.navigateTo({
					url:`/pages/order/refund?productinfo=${encodeURIComponent( JSON.stringify(this.productinfo))}&type=${res.type}`
				})
			},
		},
		onLoad(options) {
			console.log('options',options)
			this.status = options.status
			this.id = options.id
			this.pid = options.pid
			this.productinfo = JSON.parse(decodeURIComponent(options.productinfo ))
			console.log( this.productinfo)
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scode>
	.service{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
	}
	.service-content{
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 30upx;
		.service-product{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			&-top{
				width: 100%;
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
				margin:20upx 0 0 20upx
			}
			&-main{
				height: 200upx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 20upx;
				margin-left: 20upx;
				margin-bottom: 20upx;
				>image{
					width: 200upx;
					height: 200upx;
					border-radius: 20upx;
				}
				&-right{
					width: calc(100% - 250upx);
					margin-left: 25upx;
					&-1{
						font-size: 28upx;
						font-weight: 400;
						color: #333333;
						line-height: 40upx;
					}
					&-2{
						font-size: 24upx;
						font-weight: 400;
						color: #666666;
						line-height: 34upx;
						margin-top: 24upx;
					}
					>view{
						width: 100%;
					}
				}
			}
		}
		.service-type{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			margin-top: 20upx;
			&-top{
				width: 100%;
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
				margin:20upx 0 0 20upx
			}
			&-main{
				width: 100%;
				overflow: hidden;
				&-item{
					width: 100%;
					// height: 74upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 46upx;
					
					.item-c{
						flex: 1;
						>view:first-child{
							font-size: 32upx;
							font-weight: 500;
							color: #333333;
							line-height: 44upx;
						}
						>view:last-child{
							font-size: 24upx;
							color: #999999;
							line-height: 34upx;
						}
					}
				}
			}
		}
	
	}
</style>
