<template>
	<view class="product-class">
		<view class="product-class-img" v-if="shopInfo.banner.length>0"> 
			<image :src="shopInfo.banner[0]"  mode=""></image>
		</view>
		<view class="product-class-list" >
			<uni-list>
				<uni-list-item v-for="(item,index) in shopInfo.list" :key="index" :title="item.pname" @click="selectType1(item)"/>
				
			</uni-list>
			
			</view>
		</view>
	</view>
</template>

<script>
	import uniListItem  from "../uni/uni-list-item/uni-list-item"
	import uniList  from "../uni/uni-list/uni-list"
	export default{
		props:['isTab','shopInfo','shop_id'],
		components:{
			uniListItem,
			uniList
		},
		options: { styleIsolation: 'shared' },
		methods:{
			selectType1(item) {
				console.log('item',item)
				console.log('item',this.shop_id)
				uni.navigateTo({
					url:`/pages/shop/shopClass?id=${item.cid}&pname=${item.pname}&shop_id=${this.shop_id}`,
					success() {
						console.log("跳转成功")
					},
					fail() {
						console.log('跳转失败')
					}
				})
			},
		},
		mounted() {
			console.log(123,this.shopInfo)
		}
	}
</script>

<style lang="less" >
	.product-class{
		width: 100%;
		padding-top: 30upx;
		.product-class-img{
			width: 100%;
			height: 292upx;
			box-sizing: border-box;
			padding: 0upx 30upx;
			>image{
				border-radius: 30upx;
				height: 292upx;
				width: 100%;
				background: #DD524D;
			}
		}
		.product-class-list{
			margin-top: 20upx;
		}
	}
	
	/deep/ .uni-list-item .uni-list-item__container .uni-list-item__content .uni-list-item__content-title{
		color: #333333;
		font-size: 32upx;
	}
</style>
