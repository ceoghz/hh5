<template>
	<view class="classification">
		<heads title="全部分类" :border="true" :returnFlag="true"  ishead_w="1"></heads>
		<view class="class_main">
			<view class="left">
				<scroll-view class="leftScroll" style="height: 100%;" :scroll-top="scrollTop" scroll-y="true">
					<view  :class="{type1:true}" class="d-flex j-center a-center" :style="{lineHeight: type1LineHeight, fontSize: type1Size, height: type1Height, color: selected(i)}" v-for="(item,i) in dataClass.category" :key="i" @click="changeType1(item,i)">
						<view :class="{current:(index1 === i)}" class="tab d-flex j-center a-center">{{item.pname}}</view>
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view class="rightScroll" style="height: 100%;"  @scroll="scroll" :scroll-top="scrollTop" scroll-y="true">
					<view class="type2" >
						<view class="type3Box">
							<view class="type3" v-for="(item1,i1) in child_class" :key="i1" @click="selectType1(item1)">
								<image class="icon" mode="aspectFill" lazy-load="true" :src="item1.img_url"></image>
								<text style="font-size: 28upx;">{{item1.pname}}</text>
							</view>
						</view>
						<view class="" style="width:100%;">
							<view style="width:100%;font-size:40upx;font-weight: 600;color: #333333;margin-bottom: 15upx;">为你推荐</view>
							<view class=" recommended" @click="jumpGoodsDetail(item.id)" style="" v-for="(item,index) in products" :key="index"> 
								<image  :src="item.image_url" mode=""></image>
								<view class="felx-1 recommended_right">
									<view class="d-flex flex-column j-sb" style="height: 100%;">
										<view class="text">{{item.product_title}}</view>
										<view class="introduce">
											<view class="introduce_l">
												{{item.subtitle}}
											</view>
											<view class="introduce_r" @click="jumpSimilar(item.id)">找相似</view>
										</view>
										<view class="product_price d-flex j-sb a-center">
											<view class="product_price_l">
												<text style="font-size: 24upx;">￥</text>
												<text style="font-size: 36upx;">{{item.price}}</text>
											</view>
											<view class="product_price_r">销量：{{item.volume}}</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 0
			},
		
			selectedColor: {
				type: String,
				default: "#ff852a"
			},
			type1Size: {
				type: String,
				default: "14px"
			},
			type2Size: {
				type: String,
				default: "14px"
			},
			type3Size: {
				type: String,
				default: "10upx"
			},
			type1Height: {
				type: String,
				default: "90rpx"
			},
			type1LineHeight: {
				type: String,
				default: "90rpx"
			}
		},
		data() {
			return {
				scrollTop: 0,
				oldScrollTop:0,
				data1: [], // 用来存储传来的数据
				index1: 0, // 标识当前选中的type1
				data2: [], // 用来存储当前选中的type2数据
				color: "", // 用来存储选中type1的颜色
				load: 0 ,// 用来判断是否是第一次加载数据
				dataClass:{},
				child_class:[],
				nav_height:0,
				products:[],//推荐商品
				
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		mounted() {
			this.requestClass()
		},
		// beforeUpdate() {
		// 	if(this.load == 0){
		// 		// 判断是不是首次加载
		// 		// 如果是将传入的值初始化到本地
		// 		console.log(11)
		// 		console.log(this.index)
		// 		this.index1 = this.index
		// 		this.color = this.selectedColor
		// 	}
		// 	// 如果不是则不执行操作				
		// },
		methods: {
			//跳转到相似
			jumpSimilar(id){
				uni.navigateTo({
					url:`/pages/goods/alikeGoods?id=${id}`
				})
			},
			//跳转到商品详情页面
			jumpGoodsDetail(id){
				uni.navigateTo({
					url:`/pages/goods/goodsDetail?id=${id}`
				})
			},
			scroll (e) {
				//记录scroll  位置
				this.oldScrollTop = e.detail.scrollTop
			},
			changeType1(item,index) {
				 //视图会发生重新渲染
				this.scrollTop = this.oldScrollTop
				this.$nextTick(() =>{
					this.scrollTop = 0
				});
				this.child_class = item.child_class
				this.index1 = index
				
				if (item === undefined ||item === null || item.child === undefined || item.child === null){
					console.log("该内容为空！")
					this.data2 = []
				} else
					this.data2 = item.child				
			},
			selectType1(item) {
				console.log('item',item)
				uni.navigateTo({
					url:`/pages/goods/erGoods?id=${item.cid}&pname=${item.pname}`
				})
			},
			// 更换颜色	
			selected: function(val){
				return (val === this.index1?this.selectedColor+" !important":"")
			},
			requestClass(){
			    this.$http.post(
			    '',
			    {
			     module:'app',
			     action:'index',
			     app:'cate',
			     cid:494,
			    }).then(res=>{
			     console.log(res)
				 this.dataClass = res.data.data
				 this.child_class = res.data.data.category[0].child_class
				 this.products = res.data.data.products.data
				 console.log('child_class',this.child_class)
			    })
		   }
		}
	}
</script>

<style lang="less" scoped>
	.classification{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.class_main {
		flex: 1;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		background-color: #F8F8F8;
		overflow: hidden;
		/* 隐藏滚动条 */
		::-webkit-scrollbar {  
			display: none;  
			width: 0 !important;  
			height: 0 !important;  
			-webkit-appearance: none;  
			background: transparent;  
		}
		.left {
			width: 196upx;
			background-color: #fff;
			.type1 {
				width: 195upx;
				height: 92upx;
				font-size: 14px;
				.tab{
					width: 160upx;
					height: 52upx;
					font-size: 32upx;
					border-radius: 26px;
				}
			}
			.current {
				color: #FFFFFF;
				background: #FA6E39;
			}
		}
		.right {
			width: 520upx;
			margin-right: 20upx;
			.type2 {
				p {
					margin: 46upx 0 26upx 0;
					font-size: 14px;
				}
				.type3Box {
					width: 100%;
					height: auto;
					border-radius: 28upx;
					background-color: #fff;
					display: flex;
					flex-wrap: wrap;
					padding-top: 36upx;
					margin-bottom: 36upx;
					.type3 {
						margin: 0 10upx 10upx 10upx;
						.icon {
							width: 144upx;
							height: 144upx;
							display: block;
							
						}
						text {
							padding: 0upx 0;
							display: block;
							width: 144upx;
							overflow: hidden;
							text-align: center;
							color: #666666;
						}
					}
				}
			}
		}
	}
	.recommended{
		width: 100%;
		display: flex;
		margin-bottom: 32upx;
		border-radius: 20upx;
		background-color: #FFFFFF;
		image{
			border-radius: 20upx 0upx 0upx 20upx;
			width: 200upx;
			height: 200upx;
		}
		.recommended_right{
			box-sizing: border-box;
			padding: 12upx 14upx;
			width: calc(100% - 200upx);
			flex: 1;
			.text{
				color: #333333;
				font-size: 32upx;
				font-weight: 400;
				line-height: 40upx;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient:vertical
				
			}
			.introduce{
				width: 100%;
				position: relative;
				height: 40upx;
				&_l{
					color: #999999;
					font-size: 24upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					width: 60%;
				}
				&_r{
					position: absolute;
					top: 0;
					right: -14upx;
					width: 35%;
					height: 36upx;
					background: #FFECE6;
					color: #FA6E39;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 20upx;
					border-radius: 18upx 0 0 18upx;
				}
			}
			.product_price{
				width: 100%;
				&_l{
					color: #FA6E39;
				}
				&_r{
					color: #BABABA;
					font-size: 20upx;
				}
			}
			
		}
	}
	
</style>
