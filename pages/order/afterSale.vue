<template>
	<view class="fen">
	   <view class="collection-header">
			<Head title="售后详情"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
				<view>退货中</view>
				<view>您的回寄商品需要3~5个工作日完成审核，请耐心等待</view>
	   </view>
		<view class="main1">
			<view class="shou-hou">
				<view class='shou-head'>买家回寄物流信息</view>
				<view>快递名称：王小明</view>
				<view>快递单号：130554633666</view>
				<view>联系人：王小明</view>
				<view>联系电话：130554633666</view>
				<view>收货地址：浙江省 杭州市 下城区 水印康庭 杭州市 下城区 水印康庭</view>
			</view>
			<view class="shou-hou">
				<view class='shou-head'>售后地址</view>
				<view>退货地址：浙江省 杭州市 下城区 水印康庭 杭州市 下城区 水印康庭</view>
			    <view>联系人：王小明</view>
			    <view>联系电话：130554633666</view>
			</view>
			<view class="shou-hou">
				<view class='shou-head'>售后信息</view>
				<view>商品名称：王小明</view>
				<view>订单号：130554633666</view>
				<view>申请时间：王小明</view>
				<view>售后类型：130554633666</view>
				<view>申请原因：多拍</view>
				<view>退款金额：￥289</view>
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
				orderId:'',//订单id
				goodsId:'',//商品id
				info:{},//商品信息
				store_info:{},//店铺信息
				send_info:{},//寄回物流信息
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
		　	// 补0
			formatBit (val) {
			  val = +val
			  return val > 9 ? val : '0' + val
			},
		　　 // 秒转时分秒，求模很重要，数字的下舍入
			formatSeconds (time) {
			  let min = Math.floor(time % 3600)
			  let val = this.formatBit(Math.floor(time / 3600)) + ':' + this.formatBit(Math.floor(min / 60)) + ':' + this.formatBit(time % 60)
			  return val
			},
			
		}
	}
</script>

<style scoped lang="less">
	 @import url('../../static/css/personal/orderDetail.less');
</style>