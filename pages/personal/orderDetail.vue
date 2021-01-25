<template>
	<view class="fen">
	   <view class="collection-header">
			<Head title="订单详情"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
			<view class="home_top" v-if="orderStatus!=='订单关闭'">
				<view class="head1">{{orderStatus}}</view>
				<view v-if="orderStatus=='待付款'">剩余支付时间：{{yu_time}}</view>
				<view v-else-if="orderStatus=='交易关闭'">已退款</view>
				<view v-else-if="(orderStatus=='待发货'||orderStatus=='待收货')&&((orderDetail[0].order_details)[0].return_order_status==2)">退款失败</view>
			</view>
	   </view>
	   <view class="main">
			<view class="wu" v-if="orderStatus=='待收货'||orderStatus=='待评价'||orderStatus=='交易成功'">
				<view class="wu-head">物流信息</view>
				
				<view v-if="orderData.express==null">
					<view class='wu-shi'>暂无物流信息~</view>
				</view>
				<view v-else>
					<view class="wu-body">
						<view class="wu1">{{orderData.express.context}}</view>
						<view class="wu2"><image src="../../static/img/btn_more_2.png"></image></view>
					</view>
					<view class='wu-shi'>{{orderData.express.time}}</view>
				</view>
			</view>
			<view class="address" v-if="orderStatus=='待付款'||orderStatus=='待发货'||orderStatus=='待收货'||orderStatus=='待评价'||orderStatus=='交易成功'||orderStatus=='退款中'||orderStatus=='交易关闭'||orderStatus=='交易'">
				<h3>收货地址</h3>
				<view>收货人：{{orderData.name}}</view>
				<view>手机号码：{{orderData.mobile}}</view>
				<view>收货地址：{{orderData.sheng}} {{orderData.shi}} {{orderData.xian}} {{orderData.address}}</view>
			</view>
			<view class="order-list" v-for="(item,index) in orderDetail" :key="index">
				<view class="list-head">{{item.mch_name}}<image src="../../static/img/btn_more_2.png"></image></view>
				<view class="list-body" v-for="(it,ind) in item.order_details" :key="ind" @click="goodsClick(it.p_id)">
					<view class="list-img">
						<image :src="it.product_img"></image>
					</view>
					<view class="list-con">
						<view class="con1">{{it.product_title}}</view>
						<view class="con2">
							<view class="con2_1">{{it.attribute_str}}</view>
							<view class="con2_2">x{{it.num}}</view>
						</view>
						<view class="con3">
							<view class="bPrice">￥ <text>{{it.z_price.split('.')[0]}}.</text>{{it.z_price.split('.')[1]}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="order-price">
				<view class="price-title">金额信息</view>
				<view class="p-list">
					<view>商品总价</view><view>￥{{orderData.spz_price}}</view>
				</view>
				<view class="p-list">
					<view>优惠券</view><view>-￥{{orderData.preferential_amount}}</view>
				</view>
				<!-- <view class="p-list">
					<view>账户余额</view><view>-￥65.00</view>
				</view> -->
				<view class='p-list'>
					<view class='pP1'></view>
					<view class="pPrice">总计：￥ <text>{{orderData.z_price.split('.')[0]}}.</text>{{orderData.z_price.split('.')[1]}}</view>
				</view>
				<view class='p-list' v-if="orderStatus=='退款中'">
					<view class='pP1'></view>
					<view class="pShe">退款审核中</view>
				</view>
			</view>
			<view class="order-message">
				<view class='message-head'>订单信息</view>
				<view>订单编号：{{orderData.sNo}}</view>
				<view>下单时间：{{orderData.add_time}}</view>
			</view>
		</view>
		<view class="footer">
			<view class="footer-btn">
				<view>联系客服</view>
				<view v-if="orderStatus=='待发货'&&(orderDetail[0].order_details)[0].return_order_status!==2">退款</view>
				<view v-if="(orderDetail[0].order_details)[0].return_order_status==2">再次退款</view>
				<view class="btn-fu" v-if="orderStatus=='待评价'" @click="goPing()">去评价</view>
				<view @click="cancelOrder()" v-if="orderStatus=='待付款'">取消订单</view>
				<view @click="cancelTui()" v-if="orderStatus=='退款中'">撤销退款</view>
				<view class="btn-fu" v-if="orderStatus=='待收货'" @click="shouHuo()">确认收货</view>
				<view class="btn-fu" v-if="orderStatus=='待付款'">付款</view>
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
					app:"details",
					order_details_id:this.orderId
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
						this.orderData=res.data.data
						this.orderDetail=res.data.data.mch
						let status=(this.orderDetail[0].order_details)[0].order_details_status
						console.log(this.orderDetail,status,9999)
						if(status==0){
							this.orderStatus='待付款'
							let time=this.orderData.surplus
							let t = setInterval(() => {
							        time--
							        this.yu_time= this.formatSeconds(time)
							        if (time == 0) {
							          clearInterval(t)
									  uni.navigateTo({
									      url: '/pages/personal/myOrder'
									  });
							        }
							      }, 1000)
						}else if(status==1){
							this.orderStatus='待发货'
						}else if(status==2){
							this.orderStatus='待收货'
						}else if(status==3){
							this.orderStatus='待评价'
						}else if(status==5){
							this.orderStatus='交易成功'
						}else if(status==7){
							this.orderStatus='订单关闭'
						}else if((this.orderDetail[0].order_details)[0].return_order_status==0){
							this.orderStatus='退款中'
						}else if((this.orderDetail[0].order_details)[0].return_order_status==1){
							this.orderStatus='交易关闭'
						}else if((this.orderDetail[0].order_details)[0].return_order_status==2&&status==1){
							this.orderStatus='待发货'
						}else if((this.orderDetail[0].order_details)[0].return_order_status==2&&status==2){
							this.orderStatus='待收货'
						}
									
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
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			goodsClick(id){
				uni.navigateTo({
				    url: '/pages/goods/goodsDetail?id='+id
				});
			},
			//取消订单
			cancelOrder(){
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"order",
					app:"removeOrder",
					order_id:this.orderData.id
				 }).then((res)=>{
					 if(res.data.code==200){
						 //关闭订单
						 this.init()
					 }
				})
			},
			//确认收货
			shouHuo(){
				let that=this
				uni.showModal({
				    title: '',
				    content: '确认商品已收到！！',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							that.$http.post(
							 '',
							 {
								access_id:uni.getStorageSync('access_id'),
								store_id:'1',
								store_type:'2',
								module:'app',
								action:"order",
								app:"recOrder",
								id:that.orderId
							 }).then((res)=>{
								 console.log(res,'fff')
								 if(res.data.code==200){
									 //确认收货
									 that.init()
								 }
							})
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},
			//去评价
			goPing(){
				
			},
			//撤销退款
			cancelTui(){
				
			},
			
		}
	}
</script>

<style scoped lang="less">
	 @import url('../../static/css/personal/orderDetail.less');
</style>



