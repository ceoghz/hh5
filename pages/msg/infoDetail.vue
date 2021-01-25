<template>
	<view class="infodetail">
		<Head title="系统消息"></Head>
		<view :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="infodetail-content">
			<view class="infodetail-content-head">
				<view class="">{{info_detail.title}}</view>
				<view class="">{{info_detail.time}}</view>
			</view>
			<view class="infodetail-content-main">
				<text>{{info_detail.content}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
				id:'',
				type:'',
				info_detail:''
			}
		},
		methods:{
			requestInfoDetail(){
				uni.showLoading()
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'message',
					app:'details',
					id:this.id,
					type:this.type
				}).then(res=>{
					uni.hideLoading()
					if(res.data.code === 200){
						this.info_detail = res.data.data
					}
				})
			}
		},
		components:{
			Head
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.type = options.type
			this.nav_height = uni.getStorageSync('nav_height')
			this.requestInfoDetail()
		}
		
	}
</script>

<style lang="less" scode>
	.infodetail{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.infodetail-content{
		width: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
		background-color: #FFFFFF;
		&-head{
			width: 100%;
			border-top: 2upx solid #f4f4f4;
			background-color: #FFFFFF;
			>view:first-child{
				font-size: 36upx;
				color: #333333;
				line-height: 50upx;
				margin-top: 18upx;
				width: 80%;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			>view:last-child{
				font-size: 28upx;
				color: #999999;
				line-height: 40upx;
				margin: 10upx 0;
			}
		}
		&-main{
			border-top: 2upx solid #f4f4f4;
			min-height: 225upx;
			overflow: hidden;
			padding-top: 12upx;
			>text{
				
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				line-height: 44upx;
			}
		}
	}
</style>
