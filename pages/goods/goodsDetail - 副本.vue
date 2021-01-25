<template>
	<view class="fen">
		<!-- <view class="head-z"> -->
			<view class="title">
				<view class="back" @click="back()"><image src="../../static/img/back.png"></image></view>
				<text>商品详情</text>
			</view>
		<!-- </view> -->
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
					<text class="bPrice">￥ <text>{{goodsP[0]}}.</text>{{goodsP[1]}}</text>
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
					<view class="ping-head">
						<image :src="comments[0].user.headimgurl"></image>{{comments[0].user.user_name}}
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
					<view class="store_1 store_fen">分享店铺</view>
					<view class="store_1 store_go">进店逛逛</view>
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
					<view class="add_shop" @click="addCar()">加入购物车</view>
					<view class="go_shop">立即购买</view>
				</view>
				<view class="bottom_right" v-else>
					<view class="no-ku">库存不足</view>
				</view>
			</view>
			<uni-popup ref="popup" type="bottom" :maskClick="mask">
				<view class="shop-list">
					<view @click="cancelCar()" class='can_car'></view>
					<view class="goodsM">
						<view class="goods-img">
							<image :src="select.img"></image>
						</view>
						<view class="goods-mess">
							<view class="g-price">￥ <text>{{select.price.split('.')[0]}}.</text>{{select.price.split('.')[1]}}</view>
							<view class="g-2">库存 {{select.ku}}</view>
							<view class="g-3">已选：{{select.gui}}</view>
						</view>
					</view>
					<view class="goods-body">
						<view class="goods-type" v-for="(item,index) in guiType" :key="index">
							<h3>{{item}}</h3>
							<view class='types'>
								<view v-for="(it,ind) in guis" :key="ind">
									<view class="type-list" v-if="it[0]===item">
										<button v-if="it[2]=='true'" disabled class="disList" @click="selectGui(it)">{{it[1]}}</button>
										<button v-else-if="it[2]=='isC'" class="isList" @click="selectGui(it)">{{it[1]}}</button>
										<button v-else class="noList" @click="selectGui(it)">{{it[1]}}</button>
									</view>
								</view>
								
							</view>
						</view>
						<view class="list-num">
							<view class="num-title">购买数量</view>
							<view class="num-box">
								<uni-number-box :value="selectNum" :min='1' @change="change" />
							</view>
						</view>
						<view @click="shopSubmit()" class="shop-sub">确定</view>
					</view>
					<view class="toast" v-if="ifToast">
						{{toastTitle}}
					</view>
				</view>
			</uni-popup>
			<view class="toast" v-if="ifSu">
				添加成功，在购物车等亲~
			</view>
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import specificationsnew from '@/components/specificationsnew.vue';
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	export default{
		components: {
           mpHtml,
		   uniPopup,
		   uniPopupMessage,
		   uniPopupDialog,
		   specificationsnew,
		   uniNumberBox
		},
		data(){
			return{
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
			}
		},
		onLoad(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
		    let curParam = routes[routes.length - 1].options; //获取路由参数
			this.goodsId=curParam.id; 
			console.log(this.goodsId,'ggg')
			this.init()
			// this.getlist();
		},
		methods:{
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
					
					//获取规格类型
					var str=this.sku[0].attribute.split(';')
					console.log(str,555)
					str.forEach((item,index)=>{
						if(item!==''){
							this.guiType.push(item.split(':')[0])	
						}	
					})
					// console.log(this.guiType,666)
					//获取个规格类型下的各规格
					var str2=[]
					var att=''
		            this.sku.forEach((item,index)=>{
						item.attribute.split(';').forEach((it,ind)=>{
							att=it.split(':')[1]
							if(it!=='' && str2.indexOf(att)==-1){
								str2.push(att)
								this.guis.push([it.split(':')[0],att])
								// console.log(att,it.split(':')[0],444)
							}
							
						})
						if(item.num!==0){
							this.ifKu=true;
							//默认规格图片,库存
							return this.select={
								gui:item.attribute,
								img:item.img_url,
								ku:item.num,//库存
								num:1,//选择数量
								price:item.price,//价格
								config_id:item.configure_id,//所选规格id
							}
							
						}
					})
					console.log(this.guis,333)
				})
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
				this.$refs.popup.open()
				
			},
			//关闭购物车弹框
			cancelCar(){
				this.$refs.popup.close()
				this.guis.forEach((it3,ind3)=>{
					it3.forEach((it4,ind4)=>{
						if(it4==='true'){
							it3.splice(ind4,1)
						}
					})
				})
				this.selectG.forEach((item,index)=>{
					//把选择的规格对放入一个数组se中
					item.forEach((it,ind)=>{
						if(it==='isC'){
							item.splice(ind,1)
						}
					})
					// se[index]=item.join(':')
					// this.isClick[index]=item.join(':')
				})
				this.selectG=[]
				this.sku.forEach((item,index)=>{
					if(item.num!==0){
						this.ifKu=true;
						//默认规格图片,库存
						return this.select={
							gui:item.attribute,
							img:item.img_url,
							ku:item.num,//库存
							num:1,//选择数量
							price:item.price,//价格
							config_id:item.configure_id,//所选规格id
						}
						
					}
				})
				this.ifClick=[]
				this.selectNum=1
			},
			//选择规格
			selectGui(list){
				//初始化，去掉各类型的禁用标志
				this.guis.forEach((it3,ind3)=>{
					it3.forEach((it4,ind4)=>{
						if(it4==='true'){
							it3.splice(ind4,1)
						}
					})
					
				})
				this.select.gui=''
				this.select.ku=''
				// this.select.img=''
				this.select.config_id=''
				
				console.log(this.select,'www')
				
				this.selectG.forEach((item,index)=>{
					// console.log(item,'fff')
					//点击的规格是已选的规格类型（例如还是选择颜色）
					if(item[0]==list[0]){
						// this.selectG[index]=JSON.parse(JSON.stringify(list))
						// this.gFlag=false
						//清空选择的各规格
						this.selectG=[]
						this.isClick=[]
						this.guis.forEach((it3,ind3)=>{
							it3.forEach((it4,ind4)=>{
								if(it4==='isC'){
									it3.splice(ind4,1)
								}
							})
							
						})
						// console.log(item,'ddd')
					}
				})
				
				// if(this.gFlag){
					//把选择的规格加入到选择数组中
					this.selectG.push(list)
					this.isClick.push(list)
				// }
				console.log(this.selectG,this.isClick,'qqq')
				var se=JSON.parse(JSON.stringify(this.selectG))
				this.isClick=JSON.parse(JSON.stringify(this.selectG))
				this.selectG.forEach((item,index)=>{
					//把选择的规格对放入一个数组se中
					item.forEach((it,ind)=>{
						if(it==='isC'){
							item.splice(ind,1)
						}
					})
					se[index]=item.join(':')
					// this.isClick[index]=item.join(':')
				})
				console.log(se,this.isClick,'sss')
				//在最后加一个空字符串
				se.push('')
				let  result
				let listA=[]
				this.sku.forEach((item,index)=>{
					listA=item.attribute.split(';')
					//判断两个数组元素是否相同（不在乎顺序）
					result = listA.length === se.length && listA.every(a => se.some(b => a === b)) && se.every(_b => listA.some(_a => _a === _b));
					
					// if(item.attribute==se.join(';')+';'){
					if(result){
						console.log(listA,se,result,'ggg')
						//找到相同的规格，赋值
						this.select.gui=se.join(';')
						this.select.ku=item.num
						this.select.img=item.img_url
						this.select.price=item.price
						this.select.config_id=item.configure_id
					}	
				})
				// console.log(this.select.gui,this.guis,'aaa')
				this.$nextTick(function(){
					
				})
				var str=[]
				var str2=[]
				this.sku.forEach((item,index)=>{
					str=item.attribute.split(';')// ["颜色:白色", "尺码:L", ""]
					// console.log(str,'uuu')
					str.forEach((it,ind)=>{
						str2=it.split(':') //['颜色':'白色']
						if(item.num==0&&str2[1]===list[1]){//如果该规格对库存为0，并且包含点击的规格
							str.forEach((it2,ind2)=>{
								if(it2!==it&&it2!==''){//循环该规格对，找出该规格对中的其他的规格
									this.guis.forEach((it3,ind3)=>{
										if(it3[1]===it2.split(':')[1]){//找到该规格，添加一个禁用的标志
											it3.push('true')
											console.log(this.selectG,it3,'rrr')
										}
									})
									
								}
							})
						console.log(this.guis,'iii')
						}
						this.guis.forEach((it3,ind3)=>{
							
							this.selectG.forEach((it4,ind4)=>{
								// console.log(it4,'jjj')
								if(it3[1]===it4[1]&&it3.indexOf('isC')==-1){
									it3.push('isC')
									// console.log(it3,'ttt')
								}
								
							})
							
						})
					})
					
					// console.log(item,'ooo')
				})
			},
			//确定加入购物车
			shopSubmit(){
				var guiT=JSON.parse(JSON.stringify(this.guiType))
				this.selectG.forEach((item,index)=>{
						// console.log(guiT.indexOf(item[0]),'nnn')
						guiT.splice(guiT.indexOf(item[0]),1)
						// console.log(guiT,'bbb')	
				})
				console.log(this.selectNum,this.select.ku,'vvv')
				if(this.select.config_id==[]){
					var guis=guiT.join(',')
					this.ifToast=true
					this.toastTitle='请选择'+guis
					setTimeout( () => {
						this.ifToast=false	
					}, 1000)
				}else if(this.selectNum>this.select.ku){
					this.ifToast=true
					this.toastTitle='商品库存不足，请重试'
					setTimeout( () => {
						this.ifToast=false	
					}, 1000)
				}else{
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
						attribute_id:this.select.config_id,
						num:this.selectNum,
					 }).then((res)=>{
						
						 if(res.data.code==200){
							// this.init()
							//关闭购物车
							this.cancelCar()
							
							this.ifSu=true
							setTimeout( () => {
								this.ifSu=false	
							}, 2000)
						 } else{
							uni.showToast({
								title:res.data.message,
								icon:'none'
							}) 
						 }
						 console.log(res,this.carNum,'xxx')
					 })
				}
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

