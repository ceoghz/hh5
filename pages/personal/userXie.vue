<template>
	<view class="fen">
		<view class="header">
			<Head title="用户协议"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
	    <view class="main">
			<!-- 产品 -->
			<view class="goods">
				<mp-html :content="nodes" />
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import mpHtml from '@/components/mp-html/mp-html'
	export default{
		components: {
			Head,
			mpHtml
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
					access_id:'',
					store_id:1,
					store_type:2,
					module:'app',
					action:"login",
					app:"register_agreement",
					
				 }).then((res)=>{
					if(res.data.code==200){
						this.nodes=res.data.content
					}
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
		background-color: #f4f4f4;
		padding:20upx 30upx;
	}
	.goods{
		background-color: #fff;
		padding:20upx;
		border-radius: 20upx;
	}
</style>


