<template>
	<view class="fen">
		<view class="header">
			<Head title="领券中心"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
	    <view class="main">
			<!-- 产品 -->
			<view class="goods">
				<rich-text :nodes="nodes"></rich-text>
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
				fenId:'',
				title:'',
				goodsData:[],
				nodes:''
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(){
			this.init()
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"user",
					app:"about_us",
					
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
						this.nodes=res.data.aboutus
					}
					// this.goodsData=res.data.data.data
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			//找相似
			alikeGoods(id){
				uni.navigateTo({
				    url: '/pages/goods/alikeGoods?id='+id
				});
			},
			//跳转商品详情
			goodsDetail(id){
				uni.navigateTo({
				    url: '/pages/goods/goodsDetail?id='+id
				});
			}
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
	.goods{
		background-color: #fff;
		padding:20upx;
		height:100vh;
		border-radius: 20upx;
	}
</style>


