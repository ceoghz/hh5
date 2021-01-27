<template>
	<view class="fen">
	   <view class="collection-header">
			<Head title="售后详情" Color="#fff" bgColor="linear-gradient(90deg, #FD8A03 0%, #FD5700 100%)"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
			<view class="home_top">
				<view>{{title}}</view>
				<view>{{title2}}</view>
			</view>		
	   </view>
		<view class="main1">
			<view class="shou-hou" v-if='info.type==3||info.type==4'>
				<view class='shou-head'>买家回寄物流信息</view>
				<view>快递名称：{{send_info.express}}</view>
				<view>快递单号：{{send_info.express_num}}</view>
				<view>联系人：{{send_info.name}}</view>
				<view>联系电话：{{send_info.tel}}</view>
				<view>回寄日期：{{send_info.add_data}}</view>
			</view>
			<view class="shou-hou" v-if='info.type==1||info.type==3||info.type==4||info.type==5'>
				<view class='shou-head'>售后地址</view>
				<view>退货地址：{{store_info.address}}</view>
			    <view>联系人：{{store_info.name}}</view>
			    <view>联系电话：{{store_info.phone}}</view>
			</view>
			<view class="shou-hou">
				<view class='shou-head'>售后信息</view>
				<view>商品名称：{{info.p_name}}</view>
				<view>订单号：{{info.r_sNo}}</view>
				<view>申请时间：{{info.re_time}}</view>
				<view>售后类型：{{type}}</view>
				<view>申请原因：{{info.content}}</view>
				<view>退款金额：￥{{info.p_price}}</view>
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
				title:'',
				title2:'',
				type:'',//退款类型
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
			console.log(this.orderId,'ggg')
			this.init()
			
		},
		methods:{
			//初始化
			init(){
				console.log(this.orderId,this.goodsId,'lll')
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
						this.info=rea.data.data.info
						this.store_info=rea.data.data.store_info
						this.send_info=rea.data.data.send_info
						if(this.info.type==0){
							this.title='申请中'
							this.title2=''
							this.type='申请中'
						}else if(this.info.type==1){
							this.title='退货中'
							this.title2='等待用户寄回'
							this.type='同意并让用户寄回'
						}else if(this.info.type==2||this.info.type==5||this.info.type==8){
							this.title='退货中'
							this.title2='已拒绝'
							if(this.info.type==2){
								this.type='退货退款'
							}else if(this.info.type==5){
								this.type='拒绝并退回商品'
							}else if(this.info.type==8){
								this.type='拒绝退款'
							}
						}else if(this.info.type==3){
							this.title='退款成功'
							this.title2='您的回寄商品需要3~5个工作日完成审核，请耐心等待'
							this.type="用户已快递"
						}else if(this.info.type==4||this.info.type==9){
							this.title='退款成功'
							this.title2='您的售后申请已通过，退款金额于2~3个工作日到账'
							if(this.info.type==4){
								this.type="收到寄回商品，同意并退款"
							}else if(this.info.type==9){
								this.type='同意并退款'
							}
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
			
		}
	}
</script>

<style scoped lang="less">
	 @import url('../../static/css/personal/orderDetail.less');
</style>