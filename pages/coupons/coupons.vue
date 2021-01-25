<template>
	<view class="coupons">
		<view class="coupons-header">
			<Head title="优惠卷"></Head>
			<view class="" style="height: 64px; width: 100%;"></view>
			<view class="coupons-header-main d-flex j-sb">
				<view class="" v-for="(item,index) in tabArr" :key="index" @click="isTab = item.id">
					<text :style="{color:isTab === item.id ?'#FA6E39':''}">{{item.name}}</text>
					<p v-if="isTab === item.id"></p>
				</view>
			</view>
		</view>
		<view class="coupons-content">
			<scroll-view scroll-y='true' style="height: 100%;" @scrolltolower = 'scrolltolower'> 
				<view class="coupons-list" v-for="(index) in 10" :key="index">
					<view class="coupons-box">
					   <view class="coupons-box-left d-felx flex-column " :style="{background:isTab===3?'#BABABA':''}">
					   	   <view class="" style="color:#FFFFFF;line-height:124upx;">
					   	   	   <text style="font-size: 88upx;">65</text> 
							   <text style="font-size: 48upx;">元</text>
					   	   </view>
						   <view class="" style="font-size: 32upx;" >满100元可用</view>
					   </view>
					   <view class="coupons-box-right  d-felx flex-column " :style="{background:isTab===3?'#F4F4F4':''}">
							<view class="coupons-box-right-1">新人优惠券</view>
							<view class="coupons-box-right-2">有效期至 2020.08.31 23:59</view>
							<view class="coupons-box-right-3 d-flex a-center j-center" :style="{background:isTab===3?'#BABABA':''}">立即使用</view>
					   </view>
						<view class="abb"></view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="" style="width: 100%;height:138upx;"></view>
		<view class="add-address-footer" >
			<view class="add-address-footer-main">
				<view class="add-btn d-flex j-center a-center" >去领优惠卷</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	export default{
		data(){
			return{
				tabArr:[
					{id:0,name:"未使用"},
					{id:3,name:"已过期"}
				],
				isTab:0
			}
		},
		components:{
			Head
		},
		methods:{
			couponsRequest({page=1,type=0}){
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
						store_id:1,
						store_type:2,
						module:'app',
						action:'coupon',
						app:'user',
						page:page,
						type:type
				}).then(res=>{
					console.log(res)
				})
			},
			//滚动到 底部 
			scrolltolower(){
				console.log(1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.coupons{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		&-header{
			width: 100%;
			&-main{
				width: 100%;
				height: 108upx;
				background: #FFFFFF;
				>view{
					width: 50%;
					height: 1005;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					>p{
						width: 96upx;
						height: 6upx;
						background: #FA6E39;
						border-radius: 3upx;
						position: absolute;
						left: 50%;
						bottom: 0;
						margin-left: -48upx;
					}
				}
			}
		}
	    &-content{
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding: 0upx 30upx 20upx;
			background: #F4F4F4;
			flex: 1;
			overflow: hidden;
			.coupons-list{
				width: 100%;
				height: 290upx;
				background-color: #FFFFFF;
				border-radius: 20upx;
				box-sizing: border-box;
				padding: 20upx;
				margin-top: 20upx;
			}
			.coupons-box{
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
		.add-address-footer{
			height: 138upx;
			width:100% ;
			border-top: 2upx solid #979797;
			position: fixed;
			bottom: 0;
			background: #FFFFFF;
			&-main{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.add-btn{
					width: 690upx;
					height: 80upx;
					background: linear-gradient(to right, #FD8A03 0%, #FD5700 100%);
					border-radius: 40upx;
					color: #FFFFFF;
					line-height: 44px;
					font-size: 32upx;
				}
			}
		}
	}
	
	/deep/.uni-scroll-view ::-webkit-scrollbar {
		 /* 隐藏滚动条，但依旧具备可以滚动的功能 */
		 display: none;
		 width: 0;
		 height: 0;
		 color: transparent;
		 background: transparent;
		}
		/deep/::-webkit-scrollbar {
		 display: none;
		 width: 0;
		 height: 0;
		 color: transparent;
		 background: transparent;
		}
		
		
	
</style>
