<template>
	<view class="msg-history">
		<Head title="协商历史"></Head>
		<view :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="msg-history-content">
			<view class="list-item" v-for="index in 10" :key='index'>
				<view class="list-item-top">
					<view class="list-item-top-1"><image src="../../static/img/4@2x.png" style="height: 100%;width: 100%;" mode=""></image></view>
					<view class="list-item-top-2">
						<view class="msg-name">系统消息</view>
						<view class="msg-time">2020-11-25 18:35:02</view>
					</view>
				</view>
				<!-- <view class="list-item-bottom">
					卖家已收到物品，已将¥4320.00元退还给买家，请买家查看支付宝账户
				</view> -->
				<view class="list-item-bottom1">
					<view><text>买家已退货</text></view>
					<view> <text>物流公司:</text> <text>中通快递</text></view>
					<view> <text>退货单号:</text> <text>6666666666666666888888888</text></view>
					<view> <text>退货说明:</text> <text>自己不喜欢/不想要</text></view>
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
				nav_height:0
			}
		},
		components:{
			Head
		},
		onLoad() {
			this.nav_height = uni.getStorageSync("nav_height")
		}
	}
</script>

<style lang="less" scoped>
	.msg-history{
		height: 100%;
		width: 100%;
		background:#F4F4F4
	}
	.msg-history-content{
		width: 100%;
		background:#F4F4F4;
		.list-item{
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			margin-bottom: 20upx;
			.list-item-top{
				width: 100%;
				display: flex;
				margin: 20upx 0 0 30upx;
				.list-item-top-1{
					width:100upx;
					height: 100upx;
					border-radius: 50upx;
					border: 2upx solid #BABABA;
					image{
						border-radius: 50upx;
					}										
				}
				.list-item-top-2{
					flex: 1;
					display: flex;
					flex-direction: column;
					margin-left: 25upx;
					.msg-name{
						color: #333333;
						line-height: 50upx;
						font-size: 36upx;
					}
					.msg-time{
						font-size: 24upx;
						color: #999999;
						line-height: 34upx;
					}
				}
			}
			.list-item-bottom{
				font-size: 24upx;
				color: #333333;
				line-height: 34upx;
			}
			.list-item-bottom1{
				margin: 20upx 0 20upx 30upx;
				>view{
					line-height: 34upx;
				}
				text{
					font-size: 24upx;
					color: #333333;
					padding: 0;
					margin: 0;
				}
			}
		}
	}
	
</style>
