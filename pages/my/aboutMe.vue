<template>
	<view class="collection">
		<view class="header">
			<Head title="关于我们"></Head>
		</view>
		<view class="main">
			
		</view>
		
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Head
		},
		methods:{
		
			//获取收藏商品列表
			requestCollectionList(){
				uni.showLoading()
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'addFavorites',
					app:'collection',
					type:1
				}).then(res=>{
					console.log(res)
					uni.hideLoading()
					if(res.data.code === 200){
						this.pro_list = this.funArr(res.data.data)
					}
				})
			},
		},
		onLoad() {
			this.requestCollectionList()
		},
	}
</script>

<style lang="less" scode>
	.collection{
		height:100%;
		width:100%;
		background: #f4f4f4;
		display: flex;
		flex-direction: column;
		.header{
			width: 100%;
		}
	}
	
	.main{
		width: 100%;
		height: 100%;
		flex: 1;
		overflow: hidden;
	}
</style>
