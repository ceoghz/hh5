<template>
	<view class="lines .clear_fix">
		<Head title="余额明细"></Head>
		<view :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="lines-content .clear_fix">
			<view class="lines-content-box">
				<view class="lines-content-box-head">
					<view class="">时间</view>
					<view class="">金额</view>
				</view>
				<view class="lines-content-box-list" v-for="index in 20" :key = 'index'>
					<view style="margin-left: 20upx;">2020-07-30 18:08:36</view>
					<view style="margin-right: 60upx;">+36.02</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0
			}
		},
		components:{
			Head
		},
		methods:{
			
		},
		onLoad() {
			this.nav_height= uni.getStorageSync("nav_height")
		}
	}
</script>

<style lang="less" scode>
	.lines{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.lines-content{
		width: 100%;
		box-sizing: border-box;
		padding:20upx 30upx;
		overflow: hidden;
		background-color:#f4f4f4 ;
		&-box{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			>view{
				width: 100%;
				height: 90upx;
				display: flex;
				justify-content: space-between;
			}
			&-head{
				>view{
					width: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 36upx;
					font-weight: 500;
					color: #333333;
					line-height: 50px;
				}
			}
			&-list{
			   >view{
				   font-size: 36upx;
				   font-weight: 400;
				   color: #333333;
				   line-height: 50px;
			   }	
			}
		}
	}
	.clear_fix:after{
	    content:"";
	    clear:both;
	    display:block;
	    height:0;
	    overflow:hidden;
	    visibility:hidden;
	}
</style>
