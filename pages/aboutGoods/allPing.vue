<template>
	<view class="fen">
		<view class="header">
			<Head title="全部评价"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
	    <view class="main">
			<!-- 评价 -->
			<view class="ping" v-if='comments.length>0'>
				<view class="ping-list" v-for="(item,index) in comments" :key="index">
					<view class="ping-head">
						<image :src="item.headimgurl"></image>{{item.user_name}}
					</view>
					<view class="time">
						{{item.add_time}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.attribute_str}}
					</view>
					<view class="ping-content">
						{{item.content}}
					</view>
					<view class="ping-img">
						<view v-for="(it,ind) in item.images">
							<image :src="it.url"></image>
						</view>
					</view>
					<!-- 追加评论 -->
					<view class="zhui" v-if="item.review!==null">
						<view class="zhui-1">
							<view class="zhui-11">追加评论</view>
							<view class="time">
								{{item.review_time}}
							</view>
						</view>
						<view class="ping-content">
							{{item.review}}
						</view>
						<view class="ping-img">
							<view v-for="(it,ind) in item.review_images">
								<image :src="it.url"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 没有评价 -->
			<view class="ping2" v-else>
				<view class="img">
					<image src="../../static/img/no_ping.png"></image>
				</view>
				<view class="con">商品还没有评价哦</view>
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
				goodsId:'',
				comments:[],//评价
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.goodsId=curParam.id; 
			console.log(this.goodsId,'ggg')
			this.init()
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 { 
					store_id:1,
					store_type:2,
					module:'app',
					action:"product",
					app:"getcomment",
					pid:this.goodsId,
					type:0
					
				 }).then((res)=>{
					console.log(res,'hh')
					this.comments=res.data.data
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
		}
	}
</script>

<style scoped lang="less">
	 @import url('../../static/css/aboutGoods/allPing.less');
</style>


