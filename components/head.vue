<template>
	<view class="heade" :style="{height:BoxHeight}"> 
		<view class="heade-top" :style="{height: halfWidth,background:bgColor}"></view>
		<view class="heade-bottom" :style="{height:bot_height,background:bgColor}">
			<view v-if="isBack" class="head-back" @click="backClick">
				<image src="../static/img/back.png" style="height:100%;width: 100%" mode=""></image>
			</view>
			<view class="head-title" :style="{color:Color}">
				{{title}}
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:'页面标题'
			},
			isBack:{
				type:Boolean,
				default:true
			},
			bgColor:{
				type:String,
				default:'#ffffff'
			},
			Color:{
				type:String,
				default:'#000000'
			}
		},
		data(){
			return{
				bot_height:0
			}
		},
		methods:{
			backClick(){
				uni.navigateBack({delta:1})
			}
		},
		computed:{
			BoxHeight () {
			    var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height
			    // #ifdef MP-TOUTIAO
			    // const info = uni.getSystemInfoSync()
			    // if(info.platform != 'ios'){
			    // 	gru=0
			    // }
			    // #endif
			    let height = 0
			    // #ifndef MP-ALIPAY
			    var heigh = parseInt(gru) + uni.upx2px(88)
			    height = heigh && heigh > 0 ? heigh : uni.upx2px(88)
			    // #endif
			
			    // #ifdef MP
			    heigh += 44
			    // #endif
				this.bot_height =( height - gru)+'px'
				uni.setStorageSync('nav_height',height)
				console.log('height',height)
				console.log('height',this.bot_height)
			    return height + 'px'
			},
			halfWidth: function() {
			    var gru = uni.getStorageSync('data_height') ? uni.getStorageSync('data_height') : this.$store.state.data_height;
				console.log("gruu",gru)
			    return gru + 'px'
			},
		}
	}
</script>

<style lang="less" scoped>
	.heade{
		// background: #FFFFFF;
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9999;
		.heade-top{
			width: 100%;
			// background: #FFFFFF;
		}
		.heade-bottom{
			width: 100%;
			position: relative;
			.head-back{
				height: 60upx;
				width: 60upx;
				position: absolute;
				top: 15upx;
				top: 50%;
				margin-top: -30upx;
				
			}
			.head-title{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 40upx;
			}
		}
	}
</style>
