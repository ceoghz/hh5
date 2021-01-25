<template>
	<view class="evaluation">
		<Head title="评价"></Head>
		<view class="" style="width: 100%;height: 64px;"></view>
		<view class="evaluation-content">
			<view class="evaluation-content-top">
				<view class="edge d-flex">
					<image style="" :src="productinfo.product_img" mode=""></image>
					<view class="edge-right d-flex flex-column j-sb">
						<view class="edge-right-name">{{productinfo.product_title}}</view>
						<view class="edge-right-price">¥{{productinfo.price}}</view>
					</view>
				</view>
			</view>
			<view class="evaluation-content-main">
				<view class="main-title">商品评价：</view>
				<view class="main-rate ">
					<uni-rate @change="onChange" :value="0" :size = 33 color="#FA6E39" active-color="#FA6E39" :margin="5" :is-fill="false" />
				</view>
				<view class="eva-box">
					<view class="main-con">
						<view class="uni-textarea">
							<textarea placeholder-style="color:#999999" maxlength = 100 placeholder="快把你的想法告诉老朋友吧！"/>
						</view>
						<view class="upload-img">
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
		</view>
		<view class="evaluation-footer" >
			
			<view class="evaluation-footer-main">
				<view class="evaluation-btn d-flex j-center a-center" @click="releaseRequest">发布</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	import uniBadge from '@/components/uni/uni-badge/uni-badge.vue'
	import uniRate from '@/components/uni/uni-rate/uni-rate.vue'
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	export default{
		data(){
			return{
				nav_height:0,
				files:'',
				imgArr:[],
				comment:'',//评论内容
				start:0,//星级
				order_details_id:'',//商品id
				productinfo:'',//商品信息
			}
		},
		components:{
			Head,
			uniBadge,
			uniSection,
			uniRate
		},
		methods:{
			onChange(e){
				this.start = e
			},
			//删除图片
			delImg(src){
				 this.imgArr.splice(this.imgArr.findIndex(item => item === src), 1)
			},
			//发布请求
			releaseRequest(){
				console.log(this.imgArr)
				if(this.start === this.imgArr0){
					uni.showToast({
						title:'你还没给评分星星奥',
						icon:'none'
					})
					return false
				}else if(this.comment === ''){
					uni.showToast({
						title:'请输入评价内容',
						icon:'none'
					})
					return false
				}
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:'product',
					app:'user_comment',
					order_details_id:productinfo.id,
					// anonymous:0,
					comment:this.comment,
					start:this.start,
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
								type:'comments',
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
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options) {
			this.productinfo = JSON.parse(decodeURIComponent(options.productinfo)) 
		}
		
	}
</script>

<style lang="less" scoped>
	.evaluation{
		width: 100%;
		height: 100%;
		background: #F4F4F4;
		&-content{
			width: 100%;
			box-sizing: border-box;
			padding: 20upx 30upx;
			&-top{
				height: 192upx;
				width: 100%;
				border-radius: 20upx;
				background: #FFFFFF;
				box-sizing: border-box;
				padding: 20upx;
				.edge{
					width: 100%;
					height: 100%;
					image{
						height: 152upx;
						width: 152upx;
						background: #F76260;
					}
					.edge-right{
						flex: 1;
						background: #F4F4F4;
						width: calc(100% - 152upx);
						&-name{
							width: 100%;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							margin-left: 20upx;
							font-size: 28upx;
							color: #333333;
							line-height: 40upx;
							margin-bottom: 20upx;
							margin-top: 25upx;
						}
						&-price{
							margin-left: 20upx;
							margin-bottom: 20upx;
						}
					}
				}
			}
			&-main{
				width: 100%;
				min-height: 300upx;
				border-radius: 20upx;
				background-color: #FFFFFF;
				margin-top: 20upx;
				.main-title{
					width: 100%;
					font-size: 36upx;
					font-weight: 500;
					color: #333333;
					line-height: 50upx;
					overflow: hidden;
					padding-top: 15upx;
					margin-left: 20upx;
				}
				.main-rate{
					width: 100%;
					height: 100upx;
					display: flex;
					justify-content: center;
					align-items: center;
					height: 80upx;
					margin-top: 30upx;
				}
				.eva-box{
					width: 100%;
					min-height: 478upx;
					box-sizing: border-box;
					padding:0 20upx 20upx;
				}
				.main-con{
					width: 100%;
					min-height: 458upx;
					border: 2upx solid #BABABA;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					position: relative;
					z-index: 1000;
					.upload-img{
						min-height: 153upx;
						width: 100%;
						box-sizing: border-box;
						padding: 0 15upx;
					}
				}
			}
		}
		.evaluation-footer{
			height: 138upx;
			width:100% ;
			border-top: 2upx solid #979797;
			position: fixed;
			bottom: 0;
			background: #FFFFFF;
			&-main{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.evaluation-btn{
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
	}
	
	 //评论图
	 .scroll-view_H{
	 	width: 100%;
	 	white-space: nowrap;
	 	position: relative;
		z-index: -1upx;
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
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}
</style>
