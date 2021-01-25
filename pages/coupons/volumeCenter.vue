<template>
	<view class="volume">
		<Head title = "领卷中心"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="volume-content">
			<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower = 'scrolltolower'> 
				<view class="volume-list" v-for="(index) in 10" :key="index">
					<view class="volume-box">
					   <view class="volume-box-left d-felx flex-column " :style="{background:isTab===3?'#BABABA':''}">
					   	   <view class="" style="color:#FFFFFF;line-height:124upx;">
					   	   	   <text style="font-size: 88upx;">65</text> 
							   <text style="font-size: 48upx;">元</text>
					   	   </view>
						   <view class="" style="font-size: 32upx;" >满100元可用</view>
					   </view>
					   <view class="volume-box-right  d-felx flex-column " :style="{background:isTab===3?'#F4F4F4':''}">
							<view class="volume-box-right-1">新人优惠券</view>
							<view class="volume-box-right-2">有效期至 2020.08.31 23:59</view>
							<view class="volume-box-right-3 d-flex a-center j-center" :style="{background:isTab===3?'#BABABA':''}">立即使用</view>
					   </view>
						<view class="abb"></view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
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

<style lang="less" scoped>
	.volume{
		height: 100%;
		width: 100%;
	}
	.volume-content{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 0upx 30upx 20upx;
		background: #F4F4F4;
		flex: 1;
		overflow: hidden;
		.volume-list{
			width: 100%;
			height: 290upx;
			background-color: #FFFFFF;
			border-radius: 20upx;
			box-sizing: border-box;
			padding: 20upx;
			margin-top: 20upx;
		}
		.volume-box{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			position: relative;
			.abb{
				position: absolute;
				top: 0;
				left: 300upx;
				height: 100%;
				width: 20upx;
				border-left: 20upx dotted #FFFFFF;
			}
			&-left{
				height: 100%;
				width: 310upx;
				background: linear-gradient(90deg, #FD8A03 0%, #FD5700 100%);
				border-radius: 20upx;
				color:#FFFFFF;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			&-right{
				height: 100%;
				width: 340upx;
				background: #FBF7F2;
				border-radius: 20upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				&-1{
					font-size: 24upx;
					color: #333333;
					line-height: 34px;
				}
				&-2{
					font-size: 24upx;
					color: #999999;
					line-height: 34px;
				}
				&-3{
					height: 60upx;
					width: 300upx;
					border-radius: 30upx;
					// background: linear-gradient(90deg,#F3122B 0%,#FB4A0620 50%,#FD5204 100%);
					background: linear-gradient(90deg, #F3122B 0%, #FD5204 100%);
					color: #fff;
					
				}
			}
		}
	}
</style>
