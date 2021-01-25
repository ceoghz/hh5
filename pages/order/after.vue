<template>
	<view class="after">
		<Head title="退款/售后"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="after-content">
			<view class="after-content-top">
				<view class="after-info" style="font-size: 36upx;color: #333333;font-weight: 500;">填写物流信息</view>
				<view class="after-address">
					<text>退款地址：</text>
					<text>河南省周口市复购县复购城201…</text>
				</view>
				<view class="after-name">
					<text>退款联系人：</text>
					<text>耿浩哲</text>
				</view>
				<view class="after-phone">
					<text>退货联系人电话：</text>
					<text>13900100020</text>
				</view>
			</view>
			<view class="after-content-main">
				<view class="">
					<view class="main-title">快递名称</view>
					<view class="d-flex a-center" @click="togglePopup('bottom', 'popup')">
						<view style="color: #999999;">请选择快递名称</view>
						<image src="../../static/img/btn_back.png" style="width: 48upx;height: 48upx;" mode=""></image>
					</view> 
				</view>
				<view class="">
					<view class="main-title">快递单号</view>
					<input class="uni-input" v-model.trim="courier_num" placeholder-style="float:right;color: #999999;"  placeholder="快递单号" />
				</view>
				<view class="">
					<view class="main-title">联系人</view>
					<input class="uni-input" v-model.trim="courier_name" placeholder-style="float:right;color: #999999;"  placeholder="请填写联系人姓名" />
				</view>
				<view class="">
					<view class="main-title">联系电话</view>
					<input class="uni-input" v-model.trim="courier_phone" placeholder-style="float:right;color: #999999;"  placeholder="请填写电话号码" />
				</view>
			</view>
		</view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main" @click="jumpAddAddress">
				<view class="add-btn d-flex j-center a-center">提交</view>
			</view>
		</view>
		
		<uni-popup ref="showpopup" :type="'bottom'">
			<view class="popup-content ">
				<view class="popup-content-top d-felx  a-center j-center position-relative" style="width: 100%">
					<text>快递名称</text>
					<image @click="cancel" style="width: 48upx;height: 48upx;position: absolute;right: 0;" src="../../static/img/cha.png" mode=""></image>
				</view>
				<view class="popup-content-main">
					<scroll-view class="scrollView" style="height: 100%;" scroll-y="true" >
						<view class="scrollView-item d-flex j-sb a-center" v-for="(item,index) in courierArr" :key = "index">
							 <view class="">{{item.name}}</view>
						</view>
					</scroll-view>
				</view>
			
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	import uniPopup from '@/components/uni/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	export default{
		data(){
			return{
				nav_height:0,
				courier_num:'',//快递单号
				courier_name:'',//联系人
				courier_phone:'',//联系电话
				courierArr:[
					{id:1,name:'京东快递'},
					{id:2,name:'顺丰快递'},
					{id:3,name:'京东快递'},
					{id:4,name:'顺丰快递'},
					{id:5,name:'京东快递'},
					{id:6,name:'顺丰快递'},
					{id:7,name:'京东快递'},
					{id:8,name:'顺丰快递'},
					{id:9,name:'顺丰快递'},
					{id:10,name:'顺丰快递'}
				],//快递方式
				pid:'',//商品id
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
				this.$nextTick(() => {
					this.$refs.showpopup.open()
				})
			},
			//获取快递列表 
			courierList(){
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'order',
					app:'see_send',
					pid:this.pid
				}).then(res=>{
					console.log(res)
				})
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scode>
	.after{
		width: 100%;
		height: 100%;
		background: #f4f4f4;
	}
	.after-content{
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 30upx;	
		&-top{
			width: 100%;
			height: 322upx;
			background: #FFFFFF;
			border-radius: 20upx;
			box-sizing: border-box;
			padding: 20upx;
			>view{
				font-size:32upx;
				color: #666666;
			}
			.after-address{
				margin-top: 18upx;
			}
			.after-name{
				margin-top: 15upx;
			}
			.after-phone{
				margin-top: 15upx;
			}
		}
		&-main{
			margin-top: 20upx;
		    width: 100%;
			height: 432upx;
			border-radius: 20upx;
			background: #FFFFFF;
			>view{
				width: 100%;
				height: 108upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.main-title{
					margin-left: 20upx;
				}
				.inp{
					float: right;
				}
			}
		}
	}
	.uni-input{
		text-align: right;
	}
	.address-footer{
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
	
	.popup-content {
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 30upx;
		height:700upx;
		border-radius: 20upx 20upx 0upx 0upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		&-top{
			width: 100%;
			height: 108upx;
			font-size: 36upx;
			font-weight: 400;
			color: #333333;
			line-height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		&-main{
			flex: 1;
			height:calc(100% - 246upx);
			.scrollView{
				hiehgt:100%;
				.scrollView-item{
					height:108upx;
					border-top: 2upx solid #f4f4f4;
				}
			}
		}
	}
</style>
