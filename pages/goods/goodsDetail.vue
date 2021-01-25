<template>
	<view class="fen">
		<view class="header">
			<Head title="商品详情"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
		<!-- 轮播图 -->
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in goodsData.product_img" :key="index">
					<view class="swiper-item">
						<image :src="item.img_url"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	    <view class="main">
			<view class="goods">
				<view class="bText1">
					<view class="bPrice">￥ <text>{{goodsP[0]}}.</text>{{goodsP[1]}}</view>
					<!-- #ifndef MP-WEIXIN -->
					<view class="fenX" @click="copyH(goodsData.id)">
						<image src="../../static/img/btn_share.png"></image>
					</view>
					<!-- #endif-->
				</view>
				<view class="bTitle">{{goodsData.product_title}}</view>
				<view class='bText2'>
					<view>销量：{{goodsData.volume}}</view>
					<view>运费：{{goodsData.freight}}</view>
				</view>
			</view>
			<!-- 评价 -->
			<view class="ping">
				<view class="head">
					<view class="head-1">商品评价 （{{comments.length}}）</view>
					<view class="head-2" @click="allPing()">
						查看全部
						<image src="../../static/img/back_2.png"></image>
					</view>
				</view>
				<view class="ping-list" v-if='comments.length>0'>
					<view class="ping-head" v-if="comments[0].user!==null">
						<image :src="comments[0].user.headimgurl"></image>{{comments[0].user.user_name}}
					</view>
					<view class="ping-head" v-else>
						<text class="ni"></text>匿名
					</view>
					<view class="ping-content">
						{{comments[0].content}}
					</view>
					<!--  -->
					<view class="ping-img">
						<view v-for="(item,index) in comments[0].comments_img" :key="index">
							<image :src="item.comments_img"></image>
						</view>
					</view>
				</view>
				<view v-else class="ping-list2">暂无评价</view>
			</view>
			<!-- 店铺 -->
			<view class="store">
				<view class="store_head">
					<view class="store_logo">
						<image :src="mch.logo_url"></image>{{mch.name}}
					</view>
					<!-- #ifndef MP-WEIXIN -->
					<view class="store_1 store_fen" @click="copyShop(goodsData.mch_id)">
						分享店铺
					</view>
					<!-- #endif-->
					<!-- #ifndef H5 -->
					<view class="store_1 store_fen" @click="shopFen(goodsData.mch_id)">
						分享店铺
					</view>
					<!-- #endif-->
					<view class="store_1 store_go" @click="jumpShop(goodsData.mch_id)">进店逛逛</view>
				</view>
				<view class="store_number">
					<view style="border-right:2px solid #F4F4F4">
						{{mch.on_sale}}<br><text>在售商品</text>
					</view>
					<view style="border-right:2px solid #F4F4F4">
						{{mch.sold}}<br><text>已售</text>
					</view>
					<view>
						{{mch.collection_num}}<br><text>关注人数</text>
					</view>
				</view>
			</view>
			<!-- 商品详情 -->
			<view class="xiang">
				<view class="video" v-for="(item,index) in goodsData.product_video" :key="index">
					<video :src="item.url"></video>
				</view>
				<mp-html :content="goodsData.content" />
			</view>
			<!-- 底部 -->
			<view class="bottom">
				<view class='bottom_left'>
					<view class="left_list">
						<view class="list_img">
							<image v-if="!ifShou" src="../../static/img/shou_0.png" @click="shou()"></image>
							<image v-else src="../../static/img/shou_1.png" @click="cancelShou()"></image>
						</view>
						收藏
					</view>
					<view class="left_list">
						<view class="list_img">
							<image src="../../static/img/kf.png" @click="kf()"></image>
						</view>
						客服
					</view>
					<view class="left_list">
						<view class="list_img img3"  @click="shopCar()">
							<image v-if="carNum==0" src="../../static/img/cart.png"></image>
							<image v-else src="../../static/img/shop_car.png"></image>
							<view class="img3_num" v-if="carNum!==0">{{carNum}}</view>
						</view>
						购物车
					</view>
				</view>
				<view class="bottom_right" v-if="ifKu">
					<view class="add_shop" @click="cartClick">加入购物车</view>
					<view class="go_shop" @click="buyClick" >立即购买</view>
				</view>
				<view class="bottom_right" v-else>
					<view class="no-ku">库存不足</view>
				</view>
			</view>
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
				goodsId:'',
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
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.goodsId=curParam.id; 
			console.log(this.goodsId,'ggg')
			
			this.init()
			
			// this.getlist();
		},
		methods:{
			//小程序商品分享
			onShareAppMessage: function(e) {
				// console.log(e,'iiooo')
				let title =this.goodsData.product_title
				return {
					title: title,
					path: 'pages/goods/goodsDetail?id='+this.goodsId
				}
			},
			shopFen(id){
				//小程序店铺分享
				// onShareAppMessage('shop')
			},
			
			//h5复制连接
			copyH(id){
			    let result
			    // #ifndef H5
			    uni.setClipboardData({
			      data: 'http://localhost:8080/#/pages/goods/goodsDetail?id='+id,
			      success() {
			        result = true
			      },
			      fail() {        
			        result = false        
			      }
			    });
			    // #endif
			    
			    // #ifdef H5 
			      let textarea = document.createElement("textarea")
			      textarea.value = 'http://localhost:8080/#/pages/goods/goodsDetail?id='+id
			      textarea.readOnly = "readOnly"
			      document.body.appendChild(textarea)
			      textarea.select() // 选中文本内容
			      // textarea.setSelectionRange(0, val.length) 
			      result = document.execCommand("copy")
				  if(result){
					  uni.showToast({
							icon: 'none',
							title: '复制成功'
						})
				  }else{
					  uni.showToast({
							icon: 'none',
							title: '复制失败'
						})
				  }
			      textarea.remove()    
			    // #endif
			      return result
			  },
            copyShop(id){
                let result
                // #ifndef H5
                uni.setClipboardData({
                  data: 'http://localhost:8080/#/pages/shop/shop?id='+id,
                  success() {
                    result = true
                  },
                  fail() {        
                    result = false        
                  }
                });
                // #endif
                
                // #ifdef H5 
                  let textarea = document.createElement("textarea")
                  textarea.value = 'http://localhost:8080/#/pages/shop/shop?id='+id
                  textarea.readOnly = "readOnly"
                  document.body.appendChild(textarea)
                  textarea.select() // 选中文本内容
                  // textarea.setSelectionRange(0, val.length) 
                  result = document.execCommand("copy")
            	  if(result){
            		  uni.showToast({
            				icon: 'none',
            				title: '复制成功'
            			})
            	  }else{
            		  uni.showToast({
            				icon: 'none',
            				title: '复制失败'
            			})
            	  }
                  textarea.remove()    
                // #endif
                  return result
              },
			jumpShop(id){
				console.log(id)
				uni.navigateTo({
					url:`/pages/shop/shop?id=${id}`
				})
			},
			jumpOrder(selectShop){
			   selectShop.sku =  this.goodsData.sku
				uni.navigateTo({
					url:`/pages/order/confirmorder?shopSku=${encodeURIComponent(JSON.stringify(selectShop))}`,
					success() {
						console.log("跳转成功")
					}
				})
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
					console.log(res,'hh')
					if(res.data.code==200){
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
					}else{
						uni.showToast({
						    title: '标题',
						    duration: 1000
						});
					}
					
					
				})
			},
			// sku组件 开始-----------------------------------------------------------
				openSkuPopup(){
					console.log("监听 - 打开sku组件");
				},
				closeSkuPopup(){
					// console.log("监听 - 关闭sku组件");
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
			//查看全部评价
			allPing(){
				uni.navigateTo({
				    url: '/pages/aboutGoods/allPing?id='+this.goodsId
				});
			},
			//点击收藏按钮
			shou(){
				console.log(this.goodsId,'zzz')
				
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"addFavorites",
					app:"index",
					pro_id:this.goodsId
					
				 }).then((res)=>{
					 if(res.data.code==200){
						this.collection_id=res.data.collection_id 
						this.ifShou=true;
					 } 
					console.log(res,this.goodsData,this.collection_id,'bbb') 
				 })
			},
			//取消收藏
			cancelShou(){
				
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"addFavorites",
					app:"removeFavorites",
					collection:this.collection_id
					
				 }).then((res)=>{
					 if(res.data.code==200){
						 this.collection_id=0
						 this.ifShou=false;
						 
					 }
					console.log(res,this.collection_id,'vvv') 
				 })
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
	@import url('../../static/css/goods/goodsDetail.less');
</style>

