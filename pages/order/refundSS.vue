<template>
	<view class="fen">
	   <view class="header">
			<Head title="申请售后"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
	   </view>
		<view class="main">
			<view class="success">
				<view class='shou-img'>
					<image src='../../static/img/btn_succ.png'></image>
				</view>
				<view class="shou-s">退款申请提交成功</view>
				<view>请耐心等待工作人员审核</view>
				
			</view>
			<view class="message">
				<view class='shou-head'>退款信息</view>
				<view class="shou-name">商品名称：浙江省 杭州市 下城区 水印康庭 杭州市 下城区 水印康庭</view>
			    <view>订单号：1135554569445</view>
			    <view>申请时间：2012-01-18</view>
				<view>退款类型：退货退款</view>
				<view>退货金额：￥289</view>
				<view>退货类型：多拍</view>
				<view>上传凭证：</view>
				<view class="ping-img">
					<view><image src="../../static/img/4@2x.png"></image></view>
					<view><image src="../../static/img/4@2x.png"></image></view>
					<view><image src="../../static/img/4@2x.png"></image></view>
					<view><image src="../../static/img/4@2x.png"></image></view>
					<view><image src="../../static/img/4@2x.png"></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		components: {
            Head
		},
		data(){
			return{
				nav_height:0,
				title:'商品订单详情',
				head1:'',
				head2:'',
				orderId:'',
				orderData:{},//订单数据
				orderDetail:[],//订单详情
				orderStatus:'',//订单状态
				yu_time:'',//剩余时间
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options){
			console.log(options,'fff')
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curParam = routes[routes.length - 1].options; //获取路由参数
			this.orderId=curParam.id; 
			this.goodsId=curParam.pid; 
			this.orderId=12143;
			this.goodsId=1246; 
			console.log(this.orderId,'ggg')
			this.init()
			
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"order",
					app:"Returndetail",
					id:this.orderId,
					pid:this.goodsId,
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
					
					}else{
						uni.showToast({
							title:res.data.message
						})
					}
				})
			},
		　
			
		}
	}
</script>

<style scoped lang="less">
	.fen{
			height:100%;
			width:100%;
			font-family: '苹方-简 常规体';
			background: #f4f4f4;
			display: flex;
			flex-direction: column;
			.header{
				width: 100%;
			}
		}
	.main{
		background-color: #F4F4F4;
		padding:20upx 30upx;
	}
	.success{
		width:690upx;
		height:366upx;
		background-color: #fff;
		border-radius: 20upx;
		padding-top:60upx;
	}
	.shou-img{
		width:120upx;
		height:120upx;
		margin:0 auto 40upx;
	}
	.shou-img image{
		width:120upx;
		height:120upx;
	}
	.success view{
		font-size:36upx;
		line-height:50upx;
		color:#999;
		text-align:center;
	}
	.success .shou-s{
		font-size:40upx;
		line-height:56upx;
		font-weight:bold;
		color:#333;
		margin-bottom:40upx;
	}
	.message{
		background-color: #fff;
		border-radius: 20upx;
		padding:20upx;
		width:650upx;
		margin:20upx 0 40upx;
	}
	.message view{
		font-size:32upx;
		line-height:44upx;
		color:#666;
		margin-bottom:30upx;
	}
	.message .shou-head{
		font-weight:bold;
		color:#333;
		margin-bottom:40upx;
	}
	.message .shou-name{
		width:650upx;
		white-space: nowrap; 
		overflow: hidden;  
		text-overflow: ellipsis;
	}
	.ping-img{
		width:650upx;
		display:flex;
		flex-wrap: wrap;
		justify-content:flex-start;
		view{
			width:150upx;
			height:150upx;
			margin-right:22upx;
			margin-bottom:22upx;
			image{
				width:150upx;
				height:150upx;
			}
		}
	}
 
</style>