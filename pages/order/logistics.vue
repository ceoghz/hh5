<template>
	<view class="fen" v-if="wuDetail!=''">
	   <view class="header">
			<Head title="查看物流"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
	   </view>
		<view class="main">
			<view class="status">
				<view class='status1'>
					<image :src="wuDetail.image_url"></image>
					<text v-if="wuDetail.status=='0'">未签收</text>
					<text v-else-if="wuDetail.status=='1'">已签收</text>
				</view>
			</view>
			<view class="wu">
				<view class="wu-head">{{wuDetail.kd}} {{wuDetail.no}}</view>
				<view class="wu-content">
					<view class="wu-list" v-for="(item,index) in wuDetail.express">
						<view class="wu-time" style="position:relative;">
							{{item.time}}
							<view class="dian"></view>
							<view class="shou"></image></view>
						</view>
						<view class="wu-mess">
							{{item.context}}
						</view>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		components: {
            Head,
		},
		data(){
			return{
				nav_height:0,
				orderId:'',
				wuDetail:'',//物流详情
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options){
			console.log(options)
			this.orderId=options.id;
			console.log(this.orderId,'ggg')
			this.init()
		},
		methods:{
			//初始化
			init(){
				uni.showLoading()
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"order",
					app:"express",
					id:this.orderId,
				 }).then((res)=>{
					console.log(res,'hh')
					uni.hideLoading()
					if(res.data.code==200){
					    this.wuDetail = res.data.data[0]
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
	.status{
		width:650upx;
		height:152upx;
		padding:20upx;
		border-radius: 20upx;
		background:#fff;
		margin-bottom:20upx;
		.status1{
			background:#F4F4F4;
			image{
				width:152upx;
				height:152upx;
				margin-right:20upx;
				vertical-align: middle;
			}
			text{
				font-size:36upx;
				color:#333;
				font-weight:bold;
				line-height:152upx;
			}
		}
		
	}
	.wu{
		background-color: #fff;
	}
	.wu-head{
		width:650upx;
		padding:0 20upx;
		background:#F9F9F9;
		height:88upx;
		line-height:88upx;
		font-size:36upx;
	}
	.wu-content{
		width:646upx;
		padding:0 22upx 20upx;
	}
	.wu-list{
		width:646upx;
		display:flex;
		flex-wrap: wrap;
	}
	.wu-time{
		padding:20upx 0;
		width:105upx;
		padding-right:53upx;
		display:inline-block;
		// vertical-align: middle;
		text-align:right;
		border-right:2upx solid #BABABA;
		position:relative;
		.dian{
				position:absolute;
				right:-12upx;
				top:50upx;
				width:24upx;
				height:24upx;
				background-color: #BABABA;
				border-radius: 50%;
		}
		.shou{
			position:absolute;
			right:-35upx;
			top:50upx;
			width:60upx;
			height:60upx;
			border-radius: 50%;
			background:url('../../static/img/shou.png') no-repeat center;
			background-size: 100%;
		}
		
	}
	
	.wu-mess{
		padding:20upx 0;
		font-size:36upx;
		line-height:50upx;
		color:#333;
		width:438upx;
		padding-left:50upx;
	}
</style>
