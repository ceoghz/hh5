<template>
	<view class="refund">
		<Head title = "申请售后"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="refund-content">
			<view class="refund-product">
				<view class="refund-product-top" >退款商品</view>
				<view class="refund-product-main">
					<image :src="productinfo.product_img" mode=""></image>
					<view class="refund-product-main-right">
						<view class="refund-product-main-right-1">{{productinfo.product_title}}</view>
						<view class="refund-product-main-right-2">{{productinfo.attribute_str}}</view>
					</view>
				</view>
			</view>
			<view class="refund-type">
				<view class="refund-type-top d-flex" >选择服务类型</view>
				<view class="refund-type-main" >
					<view class="refund-type-main-1 d-flex j-sb a-center">
						<view class=""><text class="txt-name">退款类型</text><text class="txt-color">*</text></view>
						<view class="d-flex a-center" style="margin-right: 10upx;" @click="togglePopup('bottom', 'popup')">
							<text style="color: #999999;font-size: 32upx;">{{reason}}</text>
							<image src="../../static/img/btn_back.png" style="height: 48upx;width: 48upx;" mode=""></image>
						</view>
					</view>
					<view class="refund-type-main-2 d-flex j-sb a-center" style="margin-right: 20upx;">
						<view class=""><text class="txt-name">退款原因</text><text class="txt-color">*</text></view>
						<input class="uni-input" v-model.trim="why" placeholder-style="float:right"  placeholder="请输入" />
					</view>
					<view class="refund-type-main-3 d-flex j-sb">
						<view class=""><text class="txt-name">退款金额</text><text class="txt-color">*</text></view>
						<view style="font-size: 32upx;font-weight: 600;color: #FA6E39;margin-right: 20upx;">¥{{productinfo.after_discount}}</view>
					</view>
					<view class="refund-type-main-4" style="margin-top: 0upx;">
						不可修改，最多¥{{productinfo.after_discount}}，含发货邮费¥{{productinfo.fright}}，其中包含部 分红包
					</view>
				</view>
			</view>
			<view class="refund-describe">
				<view class="refund-describe-top" >补充凭证</view>
				<view class="refund-describe-main">
					<textarea class="textarea" placeholder-style="color:#999999" maxlength = 200 placeholder="补充描述，有助于商家更好的处理售后问题"/>
					 <view class="num">	<text>0/200</text> </view>
					 <view class="img">
						 <scroll-view style="width: 100%;height: 200upx;" class="scroll-view_H" scroll-x="true">
							<view class="img-box" >
								<image class="scroll-view_H-img" @click="chooseImg" src="../../static/img/btn_picture@2x.png" mode=""></image>
							</view>
							<view class="img-box" v-for="(item,index) in imgArr"  :key="index">
									<image class="scroll-view_H-img"  :src="item"  mode=""></image>
									<view class="del-img"  @click="delImg(item)">X</view>
							</view>
						 </scroll-view>
					 </view>
				</view>	
			</view>
			
		</view>
		<view class="" v-if="is_editor" style="width: 100%; height: 108upx;"></view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main" @click="submitRequest">
				<view class="add-btn d-flex j-center a-center">提交</view>
			</view>
		</view>
		<uni-popup ref="showpopup" :type="'bottom'">
			<view class="popup-content ">
				<view class="popup-content-top d-felx  a-center j-center" style="width: 100%">退款类型</view>
				<view class="popup-content-main">
					 <scroll-view class="scrollView" style="height: 100%;" scroll-y="true" >
							<view class="scrollView-item d-flex j-sb a-center" v-for="(item,index) in typeArr" :key = "index">
								<view class="">{{item.name}}</view>
								<radio v-if="can" :value="item.value" @click="selectClick(item.id)" :checked="item.isChecked" color="#FD8A03"/>
							</view>
					</scroll-view>
				</view>
				<view class="popup-content-bottom d-flex a-center j-center">
					<view class="btnn" @click="cancel" >关闭</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	import uniPopup from '@/components/uni/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	export default {
		data(){
			return{
				can:true,
				nav_height:0,
				imgArr:[],
				why:'',//退款原因
				typeArr:[
					{id:0,name:'多拍/拍错/不想要',isChecked:false},
					{id:1,name:'快递一直未送到',isChecked:false},
					{id:2,name:'未按约定时间发货',isChecked:false},
					{id:3,name:'快递无跟踪记录',isChecked:false},
					{id:4,name:'空包裹/少货',isChecked:false},
					{id:5,name:'其他',isChecked:false},
				],
				reason:'请选择',//退款类型
				productinfo:'',
				type:'',//退款类型
			}
		},
		components:{
			Head,
			uniSection,
			uniPopup,
			uniIcons
		},
		methods:{
			cancel() {
				this.$refs.showpopup.close()
			},
			togglePopup() {
				this.$nextTick(() => {
					this.$refs.showpopup.open()
				})
			},
			// 选择退款类型
			selectClick(id){
				this.typeArr.forEach((item,index)=>{
					if(item.id === id){
						this.$set(item,'isChecked',!item.isChecked)
						this.reason = item.isChecked?item.name:'请选择'
						console.log(this.reason)
					}else{
						this.$set(item,'isChecked',false)
					}
					this.can = false
					this.can = true
				})
			},
			//删除图片 
			delImg(src){
				 this.imgArr.splice(this.imgArr.findIndex(item => item === src), 1)
			},
			//提交售后请求
			submitRequest(){
				if(this.reason === '请选择'){
					uni.showToast({
						title:'请选择退款类型',
						icon:'none'
					})
					return false
				}else if(this.why === ''){
					uni.showToast({
						title:"请输入退款原因",
						icon:'none'
					})
					return false
				}
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:'order',
					app:'refund',
					order_details_id:'',///订单详情id
					type:this.type,//退款类型
					reason:this.reason,
					explain:this.why,
					images:this.imgArr
				}).then(res=>{
					console.log(res)
				})
			},
			//上传图片请求
			chooseImg(){
				let that = this
				uni.chooseImage({
				  	count: 1,
				    success: (res)=> {
						const tempFilePaths = res.tempFilePaths[0];
						uni.uploadFile({
							url:`https://test-mall.lhsc99.cn/index.php`, // 后端api接口 ?access_id=${uni.getStorageSync("access_id")}&store_id=1&store_type=2&module=app&action=user&app=uploadImg&type=head&file=${tempFilePaths}
							filePath: tempFilePaths, // uni.chooseImage函数调用后获取的本地文件路劲
							name:'file', //后端通过'file'获取上传的文件对象
							formData:{
								access_id:uni.getStorageSync("access_id"),//
								store_id:1,
								store_type:2,
								module:'app',
								action:'user',
								app:'uploadImg',
								type:'refund',
								file:tempFilePaths
							},
							header:{"Content-Type": "multipart/form-data"},
							success:(res) => {
								let result = JSON.parse(res.data)
								console.log(result)
								if (result.code == 200){
									this.imgArr.unshift(result.data)
									uni.showToast({
										title:result.message,
										icon:'none'
									})
								}else{
									uni.showToast({
										title:result.message,
										icon:'none'
									})
								}
							}
						});
				    }
				});
			}
		},
		onLoad(options) {
			console.log(options)
			this.productinfo = JSON.parse(decodeURIComponent(options.productinfo))
			this.type = options.type
			console.log(this.productinfo.z_price,'ppp')
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scode>
	.refund{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
	}
	.refund-content{
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 30upx;
		overflow: hidden;
		background: #F4F4F4;
		.refund-product{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			&-top{
				width: 100%;
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
				margin:20upx 0 0 20upx
			}
			&-main{
				height: 200upx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 20upx;
				margin-left: 20upx;
				margin-bottom: 20upx;
				>image{
					width: 200upx;
					height: 200upx;
					border-radius: 20upx;
				}
				&-right{
					width: calc(100% - 200upx);
					margin-left: 25upx;
					&-1{
						font-size: 28upx;
						font-weight: 400;
						color: #333333;
						line-height: 40upx;
						width: 100%;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					&-2{
						font-size: 24upx;
						font-weight: 400;
						color: #666666;
						line-height: 34upx;
						margin-top: 24upx;
					}
					>view{
						width: 100%;
					}
				}
			} 
	   }
	 
		.refund-type{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			margin-top: 20upx;
			&-top{
				width: 100%;
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
				margin:20upx 0 0 20upx
			}
			&-main{
				width: 100%;
				overflow: hidden;
				.txt-name{
					font-size:32upx;
					color: #333333;
					line-height: 44upx;
					margin-left: 20upx;
				}
				.txt-color{
					color: #FF1715;
				}
				>view{
					margin-top: 64upx;
				}
				.refund-type-main-4{
					font-size: 24upx;
					color: #999999;
					line-height: 34upx;
					padding: 0 20upx 20upx;
				}
			}
		}
	
		.refund-describe{
			width: 100%;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			margin-top: 20upx;
			box-sizing: border-box;
			padding: 20upx;
			&-top{
				width: 100%;
				font-size: 36upx;
				font-weight: 500;
				color: #333333;
				line-height: 50upx;
			}
			&-main{
				background: #FBFBFB;
				border-radius: 20upx;
				min-height: 298upx;
				box-sizing: border-box;
				padding: 20upx;
				>view{
					width: 100%;
				}
				.img{
				  width: 100%;
				}
				.num{
					width: 100%;
					display: flex;
					flex-direction: row-reverse;
					color: #BABABA;
					font-size: 24upx;
				}
				.textarea{
					height: 130upx;
				}
			}
		}
	
	}
	
	.address-footer{
		height: 138upx;
		width:100% ;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		z-index: 10;
		&-main{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.add-btn{
				width: 690upx;
				height: 80upx;
				background: linear-gradient(to right, #FD8A03 0%, #FD5700 100%);
				border-radius: 40upx;
				color: #FFFFFF;
				line-height: 44px;
				font-size: 32upx;
			}
		}
	}
	
	//上传图
	.scroll-view_H{
		width: 100%;
		white-space: nowrap;
		
		.img-box{
			height: 152upx;
			width: 152upx;
			display: inline-block;
			margin-right: 20upx;
			position: relative;
			padding-top: 20upx;
			.scroll-view_H-img{
				width: 100%;
				height: 100%;
			}
			.del-img{
				position: absolute;
				top: 0upx;
				right: -17upx;
				height: 35upx;
				width: 35upx;
				border-radius: 35upx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #FFFFFF;
				font-size: 22upx;
				z-index: 9;
				background: rgba(0, 0, 0, 0.75);
			}
		}
	
	}
	.uni-input{
		text-align: right;
	}
	.popup-content {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 30upx;
		height:700upx;
		border-radius: 20upx 20upx 0upx 0upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		&-top{
			width: 100%;
			height: 108upx;
			font-size: 36upx;
			font-weight: 400;
			color: #333333;
			line-height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			
		}
		&-main{
			flex: 1;
			height:calc(100% - 246upx);
			.scrollView{
				hiehgt:100%;
				.scrollView-item{
					height:108upx;
					border-top: 2upx solid #f4f4f4;
				}
			}
		}
		&-bottom{
			height: 138upx;
			width: 100%;
			.btnn{
				width: 690upx;
				height: 80upx;
				background: linear-gradient(127deg, #FD8A03 0%, #FD5700 100%);
				border-radius: 40upx;
				color: #FFFFFF;
				font-size: 32upx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
