<template>
	<view class="confirmorder">
	<Head title="确认订单" :bgColor="'#FA6E39'" :Color="'#ffffff'"></Head>
	<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="confirmorder-content">
			<view class="base"></view>
			<view class="confirmorder-content-main">
				<view @click="jumpAddress" v-if="addressInfo!==null" class="confirmorder-address d-flex j-sb">
					<view class="confirmorder-address-l d-felx flex-column j-sb">
						<view class="confirmorder-address-l-1">
							<text>收货地址</text>
						</view>
						<view class="confirmorder-address-l-2">
							<text>收货人：</text><text>{{addressInfo.name}}</text>
						</view>
						<view class="confirmorder-address-l-3">
							<text>手机号：</text><text>{{addressInfo.tel}}</text>
						</view>
						<view class="confirmorder-address-l-4 ">
							<text>收货地址：</text><view>{{addressInfo.address_xq}}</view>
						</view>
					</view>
					<view class="confirmorder-address-r d-flex j-sb a-center">
						<image src="../../static/img/btn_back.png" style="height:60upx;width: 60upx;" mode=""></image>
					</view>
				</view>
				<view @click="jumpAddress" v-if="addressInfo ===null" class="confirmorder-address1 d-flex j-sb">
						<view class="confirmorder-address1-l d-felx flex-column j-sb">
							<view class="confirmorder-address1-l-1"><text>收货地址</text></view>
							<view class="confirmorder-address1-l-2"><text style="color: #999999;">请填写收货地址</text></view>
						</view>
						<view class="confirmorder-address1-r d-flex j-sb a-center">
							<image src="../../static/img/btn_back.png" style="height:60upx;width: 60upx;" mode=""></image>
						</view>
				</view>
				<view class="confirmorder-productinfo" v-for="(item,index) in products" :key = "index">
					<view class="confirmorder-productinfo-title">商品信息</view>
					<view class="confirmorder-productinfo-b d-flex"  v-for="(item1,index) in item.list" :key = "index">
						<image :src="item1.img" mode=""></image>
						<view class="confirmorder-productinfo-b-r d-flex flex-column j-sb">
							<view class="r-1">{{item1.product_title}}</view>
							<view class="r-2 d-flex j-sb">
								<view>{{item1.size}}</view>
								<view>X{{item1.num}}</view>
							</view>
							<view class="r-3">
								<text>￥</text>
								<text>{{item1.price}}</text>
							</view>
						</view>
					</view>
				</view>
				<view class="confirmorder-amount">
					<view class="confirmorder-amount-title">金额信息</view>
					<view class="confirmorder-amount-item d-flex j-sb a-center">
						<view class="">商品总价</view>
						<view class="">¥ {{orderInfo.total}}</view>
					</view>
					<view class="confirmorder-amount-item d-flex j-sb a-center">
						<view class="">优惠卷</view>
						<view class="d-flex"  @click="togglePopup()">
							<text v-if="coupon_name===''">当前可用{{coupon_list.length}}张优惠券</text>
							<text v-else>{{coupon_name}}</text>
							<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
						</view>
					</view>
					<view class="confirmorder-amount-item d-flex j-sb a-center">
						<view class="">运费</view>
						<view class="">包邮</view>
					</view>
				</view>
			</view>
		</view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main">
				<view class="">
					<text style="">总计:</text>
					<text style="color: #FA6E39;">￥</text>
					<text style="color: #FA6E39;">{{orderInfo.total}}</text>
				</view>
				<view @click="submitOrder" class="add-btn d-flex j-center a-center">提交订单</view>
			</view>
		</view>
		
		
		<uni-popup ref="showpopup" :type="'bottom'">
			<view class="popup-content ">
				<scroll-view class="scrollView" scroll-y='true' style="height: 100%;" @scrolltolower = 'scrolltolower'>
					<view class="coupons-list" v-for="(item,index) in coupon_list" :key="index">
						<view class="coupons-box">
						   <view class="coupons-box-left d-felx flex-column " >
							   <view class="" style="color:#FFFFFF;line-height:124upx;">
								   <text style="font-size: 88upx;">{{item.money}}</text> 
								   <text style="font-size: 48upx;">元</text>
							   </view>
							   <view class="" style="font-size: 32upx;">满{{item.z_money}}元可用</view>
						   </view>
						   <view class="coupons-box-right  d-felx flex-column ">
								<view class="coupons-box-right-1">{{item.coupon_name}}</view>
								<view class="coupons-box-right-2">有效期至 {{item.end_time}}</view>
								<view class="coupons-box-right-3 d-flex a-center j-center" @click="couponsUse(item)">立即使用</view>
						   </view>
							<view class="abb"></view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import md5  from "@/utils/md5.js"
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	import uniPopup from '@/components/uni/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	export default{
		data(){
			return{
				nav_height:0,
				coupon_id:[0,0,'coupon'],
				productArr:[{pid:2159},{cid:6648},{num:1}],
				orderInfo:[],//订单信息
				addressInfo:[],//地址信息
				products:[],//商品信息
				coupon_list:[],//优惠卷
				coupon_name:'',
				address_id:'',//地址id
				cart_id:'',//
			}
		},
		components:{
			Head,
			uniSection,
			uniPopup,
			uniIcons
		},
		methods:{
			cancel() {
				this.$refs.showpopup.close()
			},
			togglePopup() {
				if(this.coupon_list.length ===0){
					return false
				}
				this.$nextTick(() => {
					this.$refs.showpopup.open()
				})
			},
			//跳转到地址页面
			jumpAddress(){
				uni.navigateTo({
					url:"/pages/personal/address?type=1"
				})
			},
			submitOrder(){
				uni.navigateTo({
					url:`/pages/pay/payorder?coupon_id=${this.coupon_id.join(",")}&product=${JSON.stringify(this.productArr)}`
				})
			},
			couponsUse(item){
				console.log(item)
				this.coupon_id[0] = item.coupon_id
				this.coupon_id[2] = item.discount_type
				this.coupon_name = item.coupon_name
				this.$refs.showpopup.close()
			},
			//确认订单信息
			confirmOrder(){
				console.log('productArr',this.productArr)
			   
				let a =	this.productArr!==''?JSON.stringify(this.productArr):''
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"order",
					app:"Settlement",
					is_app:1,
					cart_id:this.cart_id,
					canshu:true,
					coupon_id:this.coupon_id.join(","),
					product:a,
					address_id:uni.getStorageSync('address_id') || ''
				}).then(res=>{
					console.log(res)
					console.log(res.data.code)
					if(res.data.code === "200"){
						this.orderInfo =  res.data
						this.addressInfo = res.data.address
						this.products = res.data.products  //商品信息
						this.coupon_list = res.data.coupon_list //优惠卷
						console.log('addressInfo',this.addressInfo)
					}
				})
			},
		},
		created() {
			this.nav_height = uni.getStorageSync("nav_height")
		},
		onLoad: function(options) {
			if(options.shopSku){
				const resObj = JSON.parse(decodeURIComponent(options.shopSku));
				let md = md5(resObj.sku_name_arr.join(''))
				let res = resObj.sku.filter((item,index)=>{
					return item.sku_id == md
				})
				this.configure_id = res[0].configure_id,
				this.productArr[0].pid = resObj.goods_id 
				this.productArr[1].cid = this.configure_id
				this.productArr[2].num = resObj.buy_num 
			}else{
				this.productArr = ''
				this.cart_id = options.cart_id
			}
	
		
		},
		onShow() {
			console.log(111)
			 this.confirmOrder()
		}
	}
</script>

<style lang="less" scoped>
	.confirmorder{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.confirmorder-content{
		width: 100%;
		position: relative;
		background: #f4f4f4;
		.base{
			position: absolute;
			z-index: 0;
			width: 100%;
			height: 200upx;
			background: #FA6E39;
			background: linear-gradient(-35deg,transparent 20px,#FA6E39 0) right,
					  linear-gradient(35deg,transparent 20px,#FA6E39 0) left;
			background-size: 50% 100%;
			background-repeat: no-repeat;
		}
		&-main{
			width: 100%;
			box-sizing: border-box;
			padding: 20upx 30upx;
			position: relative;
			z-index: 999;
		}
		.confirmorder-address{
			width: 100%;
			height: 470upx;
			background: #FFFFFF;
			border-radius: 20upx;
			.confirmorder-address-l{
				display: flex;
				flex-direction: column;
				margin: 20upx 0 20upx 20upx;
				&-1{
					font-size: 36upx;
					font-weight: 500;
					color: #333333;
					line-height: 50upx;
				}
				&-2,&-3{
					font-size: 36upx;
					color: #333333;
					line-height: 50upx;
				}
				.confirmorder-address-l-4 {
					display: flex;
					font-size: 36upx;
					color: #333333;
					>view{
						width: 400upx;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						font-size: 36upx;
						color: #333333;
					}
				}
			}
			.confirmorder-address-r{
				height: 100%;
			}
		}
		.confirmorder-address1{
			width: 100%;
			height: 140upx;
			background: #FFFFFF;
			border-radius: 20upx;
			.confirmorder-address1-l{
				display: flex;
				flex-direction: column;
				margin: 20upx 0 20upx 20upx;
			
				
			}
			.confirmorder-address1-r{
				height: 100%;
			}
		}
		

		.confirmorder-productinfo{
			width: 100%;
			// height: 310upx;
			background: #FFFFFF;
			border-radius: 20upx;
			margin-top: 20upx;
			.confirmorder-productinfo-title{
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
				padding: 20upx;
			}
			.confirmorder-productinfo-b{
				height: 200upx;
				width: 100%;
				>image{
					height: 200upx;
					width: 200upx;
					margin: 0 20upx;
				}
				&-r{
					width: calc(100% - 260upx);
					margin-right: 20upx;
					.r-1{
						font-size: 28upx;
						color: #333333;
					}
					.r-2{
						width: 100%;
						font-size: 28upx;
						color: #333333;
						>view:first-child{
							width: 50%;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
					}
					.r-3{
						color: #FA6E39;
						font-size: 32upx;
					}
				}
			}
		}

		.confirmorder-amount{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			margin-top: 20upx;
			.confirmorder-amount-title{
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
				padding: 20upx;
			}
			.confirmorder-amount-item{
				width: 100%;
				margin: 18upx 0;
				>view:first-child{
					margin-left: 20upx;
				}
				>view:last-child{
					margin-right: 20upx;
				}
			}
		}
	}
	.address-footer{
		height: 138upx;
		width:100% ;
		border-top: 2upx solid #979797;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		z-index: 999999;
		&-main{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.add-btn{
				width: 280upx;
				height: 80upx;
				background: linear-gradient(to right, #FD8A03 0%, #FD5700 100%);
				border-radius: 40upx;
				color: #FFFFFF;
				line-height: 44px;
				font-size: 32upx;
			}
		}
	}
	
	.popup-content {
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 30upx;
		height:750upx;
		border-radius: 20upx 20upx 0upx 0upx;
		width: 100%;
		
	
	
	}
	
	//优惠卷
	.coupons-list{
		width: 100%;
		height: 290upx;
		background-color: #FFFFFF;
		border-radius: 20upx;
		box-sizing: border-box;
		padding: 10upx 20upx;
	
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
</style>
