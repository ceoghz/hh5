<template>
	<view class="fen">
		
		<view class="header">
			<Head :title="erData.pname"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
			
			<view class="example-body">
				<uni-search-bar radius="100" placeholder="请搜索" @input="input" @confirm="search" />
			</view>
			<view class="tab">
				<view class="tabs">
					<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0" show-scrollbar="false">
						<view class="scroll-view-item_H" v-for="(item,index) in tabData" :key="index" @click="activeTab(item.cid)">
							<view>{{item.pname}}</view>
						    <p v-if="item.cid==fenId"></p>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	    <view class="main">
			<!-- 二级分类 -->
			<view class="san">
				<view class="san-list" v-for="(item,index) in erData.child_class" :key="index" @click="erGoods(item.cid,item.pname)">
					<image :src="item.img_url"></image>
					<text>{{item.pname}}</text>
				</view>
			</view>
			<!-- 入驻品牌 -->
			<view class="zhu">
				<h2>入驻品牌</h2>
				<!-- <hr> -->
				<view class="san">
					<view class="san-list" v-for="(item,index) in zhuData" :key="index" @click="brandGoods(item.brand_id,item.brand_name)">
						<image :src="item.brand_image"></image>
						<text>{{item.brand_name}}</text>
					</view>
				</view>
			</view>
			<!-- 推荐产品 -->
			<view class="goods">
				<view class="goods-list" v-for="(item,index) in goodsData" :key="index" @click="goodsDetail(item.id)">
					<image :src="item.image_url"></image>
					<view class="goods-content">
						<text class="gTitle">{{item.product_title}}</text>
						<text class='gText1'>官方授权 品牌直营</text>
			            <view class="gText2">
							<text class="gPrice">￥ <text>{{item.price.split('.')[0]}}.</text>{{item.price.split('.')[1]}}</text>
							<text>销量：{{item.volume}}</text>
						</view>
						<view class="gText3">
							<view></view>
							<view class="gXiang" @click="alikeGoods(item.id)">找相似</view>
						</view>
					</view>
				</view>
				<!-- <view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	export default{
		components: {
			uniSearchBar,
			Head
		},
		data(){
			return{
				fenId:'',
				searchVal:'',//搜索框
				tabData:[],//总数据
				old: {
					scrollTop: 0
				},
				tabClass:'scroll-view-item_H',
				erData:[],//二级类目
				zhuData:[],//入驻品牌
				goodsData:[],
			}
		},
		onLoad(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.fenId=curParam.id; 
			this.init()
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					module:'app',
					action:"index",
					app:"cate",
					cid:this.fenId
					
				 }).then((res)=>{
					console.log(res,'hh')
					this.tabData=res.data.data.category
					this.zhuData=res.data.data.brand
					this.goodsData=res.data.data.products.data
					this.erInit()	
				})
			},
			//二级类目数据
			erInit(){
				this.tabData.forEach((item,index)=>{
					if(item.cid==this.fenId){
						this.erData=item;
						console.log(this.erData,'lll')
					}
					
				})
			},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			//切换一级类目
			activeTab(cid){
				this.fenId=cid;
				this.erInit()
			},
			erGoods(cid,pname){
				uni.navigateTo({
				    url: '/pages/goods/erGoods?id='+cid+'&pname='+pname
				});
			},
			brandGoods(cid,pname){
				uni.navigateTo({
				    url: '/pages/goods/brandGoods?id='+cid+'&pname='+pname
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
	 @import url('../../static/css/goods/allGoods.less');
</style>
