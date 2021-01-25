<template>
	<view class="circle-container">
		<view class="circle" :style="{background:bgColor?bgColor:'#ffffff',borderColor:brColor?brColor:'#FA6E39',}">
			{{title}}
		</view>
	</view>
</template>

<script>
	
	export default{
		props:["title","bgColor",'brColor'],
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scode>
	.circle{
		min-height: 20upx;
		min-width:20upx;
		font-size: 12upx;
		display: flex;
		justify-content: center;
		align-items: center;
		color:#FA6E39 ;
		border-radius: 10upx;
		border-style:solid;
		border-width:2upx;
	}
</style>
