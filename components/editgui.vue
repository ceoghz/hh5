<template>
	<view class="fen">
		<heads title="购物车" :border="true" :returnFlag="true"  ishead_w="1"></heads>
	    <view class="main">
			<vk-data-goods-sku-popup
				v-model="skuKey" 
				border-radius="20" 
				:custom-action="findGoodsInfo"
				:mode="skuMode"
				@open="openSkuPopup"
				@close="closeSkuPopup"
				@add-cart="confirm"
				@buy-now="buyNow"
			></vk-data-goods-sku-popup>
			<view class="toast" v-if="ifToast">
				{{toastTitle}}
			</view>
			<view class="toast" v-if="ifSu">
				添加成功，在购物车等亲~
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import mpHtml from '@/components/mp-html/mp-html'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import specificationsnew from '@/components/specificationsnew.vue';
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	var that;											// 当前页面对象
	var app = getApp();						// 可获取全局配置
	const guiData={
		"_id":"",
		"name": "",
		"goods_thumb":'',
		'sku_list':[],
		'spec_list':[],
	}
	export default{
		props:['goodsId'],
		components: {
			Head,
           mpHtml,
		   uniPopup,
		   uniPopupMessage,
		   uniPopupDialog,
		   specificationsnew,
		   uniNumberBox,
		   type:'cart',
		   productArr:[],
		},
		data(){
			return{
				nav_height:0,
				mask:false,
				// goodsId:'',
				goodsData:{},//商品数据	
				//轮播图属性
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				comments:[],//评价
				mch:{},//店铺信息
				ifShou:false,//是否收藏
				ifGou:false,//购物车里是否有该店铺商品
				goodsP:[0,0],//价格
				select:{
					gui:'',
					img:'',
					ku:0,//库存
					price:'',//价格
					config_id:'',//所选规格id
				},
				selectNum:1,
				sku:[],
				guiType:[],//规格类目
				guis:[],//规格
				selectG:[],//选中的规格
				gFlag:true,
				isClick:[],//点击的规格
				carNum:0,//购物车商品数量
				toastTitle:'',//消息提示框
				ifToast:false,
				ifSu:false,//成功提示
				ifKu:false,//是否有库存
				collection_id:'',//收藏id
				skuKey:false,
				skuMode:1,
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(){
			that = this;
		},
		mounted(){
			console.log(this.goodsId,'uuu')
			this.init()
		},
		methods:{
			jumpShop(id){
				
			},
			jumpOrder(selectShop){
				let select=selectShop
				this.$emit('changeGui',{select})
			},
			cartClick(){
				this.skuKey = true
				this.type = 'cart'
			},
			//
			buyClick(){
				this.skuKey = true
				this.type = 'buy'
			},
			confirm(selectShop){
				if(this.type == 'cart'){
					this.addCart(selectShop)
				}else{
					console.log("buy")
					console.log(selectShop)
					this.jumpOrder(selectShop)
					// this.confirmOrder(selectShop)
				}
			},
			//初始化
			init(){
				// this.skuKey=true
				console.log(this.goodsId,'iii')
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"product",
					app:"details",
					pid:this.goodsId
					
				 }).then((res)=>{
					console.log(res,'哈哈哈hh')
					this.goodsData=res.data.data
					this.goodsP=[this.goodsData.price.split('.')[0],this.goodsData.price.split('.')[1]]
					this.comments=res.data.data.comments
					this.mch=res.data.data.mch
					this.carNum=Number(res.data.data.cart_num)
					console.log(this.comments,'ccc')
					//收藏id
					this.collection_id=res.data.data.collection_id
					if(this.collection_id===0){
						this.ifShou=false
					}else{
						this.ifShou=true
					}
					//购物车中本商品数量
					if(res.data.data.cart_num==='0'){
						this.ifGou=false
					}else{
						this.ifGou=true
					}
					this.sku=res.data.data.sku
					console.log(this.sku,888)
					guiData._id=this.goodsId
					guiData.name=this.goodsData.product_title
					guiData.goods_thumb=this.goodsData.image_url
					//获取规格类型
					var str=this.sku[0].attribute.split(';')
					guiData.spec_list=[]
					console.log(guiData.spec_list,555)
					str.forEach((item,index)=>{
						if(item!==''){
							guiData.spec_list.push({'name':item.split(':')[0],'list':[]})
						}	
					})
					// console.log(guiData,666)
					//获取个规格类型下的各规格
					 var str3=[]
					var att=''
		            this.sku.forEach((item,index)=>{
						var att1=''
						var str2=[]
						var obj2=''
						item.attribute.split(';').forEach((it,ind)=>{
							att=it.split(':')[1]
							guiData.spec_list.forEach((it1,ind1)=>{
								if(it.split(':')[0]===it1.name&&str3.indexOf(att)==-1){
									str3.push(att)
									it1.list.push({'name':att})
								}	
							})
						})
						if(item.num!==0){
							this.ifKu=true;
							item.attribute.split(';').forEach((it,ind)=>{
								att1=it.split(':')[1]
								if(att1!==undefined){
									str2.push(att1)
								}
							})
							obj2=str2.join(',')
							// console.log(str2,obj2,index)
							guiData.sku_list.push({
								"_id":item.configure_id,
								"goods_id":this.goodsId,
								"goods_name":this.goodsData.product_title,
								"image":item.img_url,
								"price":(item.price)*100,
								"sku_name":obj2,
								"sku_name_arr":str2,
								"stock":item.num
							})
						}
					})
					console.log(guiData,'bbbpp')
					this.$nextTick(function(){
						this.skuKey=true;
					})
				})
			},
			// sku组件 开始-----------------------------------------------------------
				openSkuPopup(){
					console.log("监听 - 打开sku组件");
				},
				closeSkuPopup(){
					console.log("监听 - 关闭sku组件");
					this.$emit('closeVK')
				},
				// 加入购物车前的判断
				addCartFn(obj){
					
				},
			
				// 确认加入购物车按钮
				addCart(selectShop){
					console.log(selectShop,"监听 - 加入购物车");
					this.$http.post(
					 '',
					 {
						store_id:1,
						store_type:2,
						module:'app',
						action:"product",
						app:"add_cart",
						type:'addcart',
						access_id:uni.getStorageSync('access_id'),
						pro_id:this.goodsId,
						attribute_id:selectShop._id,
						num:selectShop.buy_num,
					 }).then((res)=>{
						
						 if(res.data.code==200){
							 this.skuKey=false
							this.ifSu=true
							setTimeout( () => {
								this.ifSu=false	
							}, 2000)
							this.carNum=Number(this.carNum)+1
						 } else{
							uni.showToast({
								title:res.data.message,
								icon:'none'
							}) 
						 }
						 console.log(res,this.carNum,'xxx')
					 })
				},
				// 立即购买
				buyNow(selectShop){
					
				},
				/**
				 * 获取商品信息
				 * 这里可以看到每次打开SKU都会去重新请求商品信息,为的是每次打开SKU组件可以实时看到剩余库存
				 */
				findGoodsInfo(){
					console.log(guiData,'xxxx')
					return guiData
				
				},
				toast(msg){
					uni.showToast({
						title: msg,
						icon:"none"
					});
				},
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
			
			//加入购物车
			addCar(){
			
				this.shuKey=true
			},
			kf(){
				uni.navigateTo({
				    url: '/pages/aboutGoods/service?pid=' + this.goodsId
				});
			},
			//商品数量
			change(value) {
				this.selectNum = value
			}
		
		}
	}
</script>

<style scoped lang="less">
	@import url('@/static/css/goods/goodsDetail.less');
	.fen{
		background:rgba(255,255,255);
	}
</style>

