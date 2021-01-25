<template name="sku">
	<view class="sku">
		<view class="guige-wrapper">
			<view class="item-wrapper" @tap="showSKU">
				电商sku
			</view>
		</view>
		<!-- sku弹出层 -->
		<view class="popup" catchtouchmove="true" :class="specClass" @touchmove.stop.prevent="moveHandle">
			<view class="mask" @tap="hideSKU"></view>
			<view class="layer attr-content">
				<view class="specification-wrapper">
					<scroll-view class="specification-wrapper-content" scroll-y="true">
						<view class="specification-header">
							<view class="specification-left">
								<image @tap="onPreviewImage" :data-src="shopItem.img" class="product-img" :src="shopItem.img"></image>
							</view>
							<view class="specification-right">
								<view class="price-content">
									<text class="sign">¥</text>
									<text class="price">{{ shopItem.price || 0 }}</text>
								</view>
								<view class="inventory">库存:{{ shopItem.inventory || 0 }}</view>
								<view class="choose">
									已选:
									<block v-for="(item, index) in specifications">
										<text v-if="item.activeIndex>=0">{{item.activeName}}</text>
									</block>
								</view>
							</view>
						</view>
						<view class="specification-content">
							<view class="specification-item" v-for="(item, index1) in specifications" :key="index1">
								<view class="item-title">{{ item.name }}</view>
								<view class="item-wrapper">
									<view class="item-content" @tap="skuClick(item_value[item.key], index1, item_value, index2,item.key)" v-for="(item_value, index2) in item.item"
									 :key="index2" :class="[item.activeIndex == index2 ? 'actived' : '']">
										{{ item_value[item.key]}}
									</view>
								</view>
							</view>
							<view class="specification-item specification-item_display">
								<view class="item-title">数量</view>
								<view class="item-wrapper">
									<stepper size="small" :min="goodMinNum" :max="goodMaxNum" @change="changeNum"></stepper>
								</view>
							</view>
						</view>
					</scroll-view>
					<view class="close" @tap="hideSKU">
						<image class="close-item" src="./close.png"></image>
					</view>
				</view>
				<view class="btn-wrapper"><button class="sure" @click="skuOK">确定</button></view>
			</view>
		</view>
	
	</view>
</template>
<script>
	import stepper from '@/components/sku/stepper.vue';
	import sku from '@/components/sku/sku.json';
	export default {
		components: {
			stepper
		},
		name: "sku",
		data() {
			return {
				goodNum: 1, //默认数量
				goodMinNum: 1, //最小选中数量
				goodMaxNum: 3, //最大选中数量
				
				goodImgList:[],//sku商品图片集合
				
				goodData: {}, //商品所有数据
				shopItem: {}, //已选择商品、默认商品
				specClass: 'none', //显示隐藏
				specifications: [], //sku规格列表
				norm: [], //多规格数据
				norm_info: [], //多规格参数
				type: 0 //0加入购物车 1立即购买
			};
		},
		//组件生命周期，数据格式初始化
		created: function(e) {
			var that = this,specifications = [],norm = sku.norm,norm_info = sku.norm_info,goodData = sku,goods = sku;
			that.norm = norm;
			that.norm_info = norm_info;
			that.goodData = goodData;
			that.$set(that.shopItem, 'code', goodData.code);
			that.$set(that.shopItem, 'create_time', goodData.create_time);
			that.$set(that.shopItem, 'id', goodData.id);
			that.$set(that.shopItem, 'img', goodData.img_url);
			that.$set(that.shopItem, 'inventory', goodData.inventory);
			that.$set(that.shopItem, 'price', goodData.price);
			that.$set(that.shopItem, 'sell_num', goodData.sell_num);
			norm_info.forEach(function(items, indexs) {
				items.name = items.title;
				items.item = [];
				items.activeIndex = -1;
				items.activeName = null;
				items.shopItem = null;
				specifications.push(items)
				norm.forEach(function(item, index) {
					var key = specifications[indexs].key;
					var item_item = specifications[indexs].item;
					// console.log("item: " + JSON.stringify(item));
					item_item.push(item);
					return
				})
				specifications[indexs].item = uniques(items.item, items.key);
				return;
			})
			/*去重数组[{},{}]*/
			function uniques(arr, key) {
				var map = {},dest = [];
				arr.forEach(function(item, index) {
					if (!map[item[key]]) {
						dest.push({
							code: item.code,
							create_time: item.create_time,
							goods_id: item.goods_id,
							id: item.id,
							img: item.img,
							inventory: item.inventory,
							name_first: item.name_first,
							name_second: item.name_second,
							name_third: item.name_third,
							price: item.price,
							sell_num: item.sell_num
						});
						map[item[key]] = item;
					}
				})
				return dest;
			}
			that.specifications = specifications;
		},
		methods: {
			onPreviewImage(e){
				var dataset=e.currentTarget.dataset;
				// 预览图片  goodImgList
				// uni.previewImage({
				// 	urls: dataset,
				// 	longPressActions: {
				// 		itemList: ['发送给朋友', '保存图片', '收藏'],
				// 		success: function(data) {
				// 			console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
				// 		},
				// 		fail: function(err) {
				// 			console.log(err.errMsg);
				// 		}
				// 	}
				// });
			},
			//规格弹窗开关
			moveHandle() {}, //禁止父元素滑动
			showSKU() {
				this.specClass = 'show';
			},
			hideSKU() {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			},
			changeNum(val) {
				console.log(val, "选中数量");
				this.goodNum = parseInt(val);
			},
			skuClick(value, index1, event, index2, key) {
				var tmp = [],good = {};
				var that = this,norm = that.norm,norm_info = that.norm_info,specifications = that.specifications;
				if (that.specifications[index1].activeIndex == index2) { //取消
					that.$set(that.specifications[index1], 'activeIndex', -1);
					that.$set(that.specifications[index1], 'activeName', null);
					specifications.forEach(function(items, indexs) {
						if (items.activeIndex >= 0) {
							tmp.push(items)
						}
					})
				} else { //添加
					that.$set(that.specifications[index1], 'activeIndex', index2);
					that.$set(that.specifications[index1], 'activeName', value);
					specifications.forEach(function(items, indexs) {
						if (items.activeIndex >= 0) {
							tmp.push(items)
						}
					})
				}
				/*根据单规格、多规格长度进行数据操作--条件越多商品越精准*/
				norm.forEach(function(item, index) {
					if (tmp.length == 0) {//规格数量0，即单规格
						var goodData = that.goodData
						good = {
							code: goodData.code,
							create_time: goodData.create_time,
							id: goodData.id,
							img: goodData.img_url,
							inventory: goodData.inventory,
							price: goodData.price,
							sell_num: goodData.sell_num
						};
					} else if (tmp.length == 1) {//规格数量1
						if (item[tmp[0].key] == tmp[0].activeName) {
							good = item;
						}
					} else if (tmp.length == 2) {//规格数量2
						if (item[tmp[0].key] == tmp[0].activeName && item[tmp[1].key] == tmp[1].activeName) {
							good = item;
						}
					} else if (tmp.length == 3) {//规格数量3
						if (item[tmp[0].key] == tmp[0].activeName && item[tmp[1].key] == tmp[1].activeName && item[tmp[2].key] == tmp[2].activeName) {
							good = item;
						}
					}
				})
				this.shopItem = good;
				this.$forceUpdate();//vue内置函数 防止数据不渲染
			},
			/**确认商品进行回调
			 * @param {Object} event
			 */
			skuOK(event) {
				var that = this,specifications = that.specifications;
				for (var i = 0; i < specifications.length; i++) {
					if (specifications[i].activeIndex < 0) {
						uni.showToast({
							title: "请选择" + specifications[i].title,
							duration: 1000,
							icon: "none"
						});
						return;
					}
				}
				this.$emit("tapOK", that.$data)
				that.hideSKU();
			},
			success: function(e) {},
			error: function(e) {},
			setDataTap: function(e) {},
			getDataTap: function(e) {},
			initDataTap: function(e) {}
		}
	}
</script>
<style lang="less">
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		overflow: hidden;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.layer {
			display: flex;
			width: 100%;
			// height: 1014rpx;
			flex-direction: column;
			// min-height: 40vh;
			// max-height: 1014rpx;
			position: fixed;
			z-index: 99;
			bottom: 0;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.specification-wrapper {
				width: 100%;
				padding: 30rpx 25rpx;
				box-sizing: border-box;

				.specification-wrapper-content {
					width: 100%;
					max-height: 900rpx;
					min-height: 600rpx;

					&::-webkit-scrollbar {
						/*隐藏滚轮*/
						display: none;
					}

					.specification-header {
						width: 100%;
						display: flex;
						flex-direction: row;
						position: relative;
						margin-bottom: 40rpx;

						.specification-left {
							width: 180rpx;
							height: 180rpx;
							flex: 0 0 180rpx;

							.product-img {
								width: 180rpx;
								height: 180rpx;
								background-color: #999999;
							}
						}

						.specification-right {
							flex: 1;
							padding: 0 35rpx 0 28rpx;
							box-sizing: border-box;
							display: flex;
							flex-direction: column;
							justify-content: flex-end;
							font-weight: 500;

							.price-content {
								color: #fe3a3a;
								margin-bottom: 20rpx;

								.sign {
									font-size: 28rpx;
								}

								.price {
									font-size: 48rpx;
								}
							}

							.inventory {
								font-size: 24rpx;
								color: #999999;
								margin-bottom: 14rpx;
							}

							.choose {
								font-size: 28rpx;
								color: #333333;
							}
						}
					}

					.specification-content {
						font-weight: 500;

						.specification-item_display {
							display: flex;
							align-items: center;
							justify-content: space-between;
						}

						.specification-item {
							margin-bottom: 40rpx;

							&:last-child {
								margin-bottom: 0;
							}

							.item-title {
								margin-bottom: 20rpx;
								font-size: 28rpx;
								color: #999999;
							}

							.item-wrapper {
								display: flex;
								flex-direction: row;
								flex-flow: wrap;

								.item-content {
									display: inline-block;
									padding: 15rpx 35rpx;
									border-radius: 10rpx;
									background-color: #ffffff;
									color: #333333;
									font-size: 28rpx;
									margin-right: 20rpx;
									margin-bottom: 10rpx;
									border: 2rpx solid #f4f4f4;
									box-sizing: border-box;

									&.actived {
										border-color: #fe3a3a;
										color: #fe3a3a;
									}

									&.noactived {
										background-color: #f4f4f4;
										border-color: #f4f4f4;
									}
								}
							}
						}
					}
				}

				.close {
					position: absolute;
					top: 30rpx;
					right: 25rpx;
					width: 50rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;

					.close-item {
						width: 50rpx;
						height: 50rpx;
					}
				}
			}

			.btn-wrapper {
				display: flex;
				width: 100%;
				height: 120rpx;
				flex: 0 0 120rpx;
				align-items: center;
				justify-content: space-between;
				padding: 0 26rpx;
				box-sizing: border-box;

				.layer-btn {
					width: 335rpx;
					height: 76rpx;
					border-radius: 38rpx;
					color: #fff;
					line-height: 76rpx;
					text-align: center;
					font-weight: 500;
					font-size: 28rpx;

					&.add-cart {
						background: #ffbe46;
					}

					&.buy {
						background: #fe3a3a;
					}
				}

				.sure {
					width: 698rpx;
					height: 76rpx;
					border-radius: 38rpx;
					color: #fff;
					line-height: 76rpx;
					text-align: center;
					font-weight: 500;
					font-size: 28rpx;
					background: #fe3a3a;
				}
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
	}
</style>





<!-- 1、引用组件
import 组件名称 from "../../components/组件名.vue";
2、注册组件
export default{
components:{
组件名称
},
}
3、在试图模板中使用组件
<组件名称 组件属性="对应的值"></组件名称> -->



<!-- beforeCreate 实例已经开始初始化之后调用 【数据初始化未完成，页面没有开始渲染】
created 实例创建完成之后调用 【组件创建完成，不代表组件已挂载到页面】
beforeMount 在挂载开始之前被调用。
mounted 挂载到实例上去之后调用。 注意：此处并不能确定子组件被全部挂载，　　　　　　　　　　 如果需要子组件完全挂载之后在执行操作可以使用$nextTickVue官方文档
beforeUpdate 数据更新时调用，发生在虚拟 DOM 打补丁之前。 仅H5平台支持
updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。 仅H5平台支持
beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
destroyed Vue实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，　　　　　　　　　　所有的子实例也会被销毁。 -->



<!-- onLoad 监听页面加载，其参数为上个页面传递的数据，参数类型为object（用于页面传参）
onShow 监听页面显示
onReady 监听页面初次渲染完成
onHide 监听页面隐藏
onUnload 监听页面卸载
onPullDownRefresh 监听用户下拉动作
onReachBottom 页面上拉触底事件的处理函数
onShareAppMessage 用户点击右上角分享 微信小程序
onPageScroll 监听页面滚动
onTabItemTap 当前是 tab 页时，点击 tab 时触发。 -->

