<template>
	<view class="address">
		<Head title="地址列表"></Head>
		<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="address-main">
			<scroll-view scroll-y="true"  style="background-color: #F4F4F4;height: 100%;">
				<view @click="jumpOrder(item)" class="address-list d-flex" v-for="(item,index) in adr_list" :key="index">
					<view class="address-list-left d-felx j-sb">
						<image  v-if="item.is_default === '1' " class="img" src="../../static/img/icon_add@2x.png" style="height: 92upx;width: 92upx;" mode=""></image>
						<view v-else class="img d-flex j-center a-center" style="width: 92upx;height: 92upx;border-radius: 50%;background: #BABABA;color: #FFFFFF;font-size: 46upx;">
							{{item.name.slice(0,1)}}
						</view>
						<button v-if="item.is_default === '1' " class="btt" type="default" size="mini" plain=true style="">默认</button>
					</view>
					<view class="address-list-right flex-1 d-flex flex-column j-sb">
						<view class="address-list-right-1 d-felx">
							<view class="" style="color: #333333;font-size: 36upx;line-height: 50upx;">{{item.name}}</view>
							<view class="" style="margin-left: 10upx;font-size: 36upx;line-height: 50upx;color: #666666;">{{item.tel}}</view>
						</view>
						<view class="address-list-right-2">{{item.address_xq}}</view>
						<view class="address-list-right-3">
							<button class="bnn" @click.stop="togglePopup(item.addr_id,item.is_default)" style="color: #FD3E30;"  type="default" size="mini" plain=true>删除</button>
							<button class="bnn" @click.stop="jumpModify(item.addr_id)" style="border-right: 2upx solid #BABABA;color: #666666;" type="default" size="mini" plain=true>修改</button> 
						</view>
					</view>
				</view>
			</scroll-view>
			<view v-if="adr_list.length === 0" style="width: 560upx;margin: 0 auto;" >
				<image src="../../static/img/img_defaultPage_2.png" style="height: 560upx;width: 560upx;" mode=""></image>
				<view style="color:#666666;font-size: 36upx;text-align: center;">您当前还没有收货地址</view>
			</view>
		</view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main" @click="jumpAddAddress">
				<view class="add-btn d-flex j-center a-center">+新增收货地址</view>
			</view>
		</view>
		<uni-popup ref="showtip" :type="type" :mask-click="false" @change="change">
			<view class="uni-tip">
				<text class="uni-tip-title">提示</text>
				<text class="uni-tip-content">是否确认删除地址？</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel()">取消</text>
					<text class="uni-tip-button" @click="confirm()">确定</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Head from "../../components/head.vue"
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	import uniPopup from '@/components/uni/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	export default{
		data(){
			return{
				nav_height:0,
				adr_list:[],//地址列表
				type:'center',
				content: '顶部弹 popup',
				jumpType:0
			}
		},
		components:{
			Head,
			uniSection,
			uniPopup,
			uniIcons
		},
		methods:{
			jumpAddAddress(){
				uni.navigateTo({
					url:"/pages/personal/addAddress",
					success() {
						console.log("跳转成功")
					}
				})
			},
			jumpModify(addr_id){
				console.log(888)
				uni.navigateTo({
					url:`/pages/personal/modify?addr_id=${addr_id}`,
					success() {
						console.log("跳转成功")
					},
					fail() {
						console.log(555)
					}
				})
			},
			//跳转到确认订单页面
			jumpOrder(item){
				if(this.jumpType !== '1' ) return false
				uni.setStorageSync("address_id",item.id)
				uni.navigateBack({
				    delta: 1
				});
			},
			//请求地址列表
			requestList(){
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
					module:'app',
					action:'address',
					app:'index',
					store_id:1,
					store_type:2,
				}).then(res=>{
					console.log(res)
					console.log('res')
					if(res.data.code === 200){
						this.adr_list = res.data.adds
						console.log(this.adr_list)
					}
				})
			},
			togglePopup(addr_id,is_default) {
				console.log(111)
				// if(is_default === '1'){
				// 	uni.showToast({
				// 		title:'默认地址不可删除！',
				// 		icon:'none'
				// 	})
				// 	return false
				// }
				this.addr_id = addr_id
				this.$nextTick(() => {
					this.$refs.showtip.open()
				})
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			//取消
			cancel(type) {
				this.$refs.showtip.close()
			},
			//确定
			async confirm(){
			   await this.requestDel(this.addr_id)
			   await this.requestList()
				this.$refs.showtip.close()
			},
			//删除地址请求
			requestDel(addr_id){
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
					module:'app',
					action:'address',
					app:'del_adds',
					addr_id:addr_id,
					store_id:1,
					store_type:2,
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						uni.showToast({
							title:'删除成功'
						})
					}
				})
			}
		},
		onBackPress() {
			this.$refs['showpopup'].close()
			this.$refs['showtip'].close()
			this.$refs['showimage'].close()
			this.$refs['showshare'].close()
		},
		onShow() {
			this.requestList()
		},
		onLoad(options) {
			this.jumpType = options.type 
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scoped>
	.address{
		height: 100%;
		background-color: #F4F4F4;
		width: 100%;
		.address-main{
			width: 100%;
			min-height: 100upx;
			box-sizing: border-box;
			padding: 20upx 30upx;
			background-color: #F4F4F4;
			position: relative;
				
			.address-list{
				width: 100%;
				min-height: 50upx;
				border-radius: 20upx;
				background-color: #FFFFFF;
				margin-bottom: 20upx;
				&-left{
					width: 123upx;
					.img{
						margin-top: 60upx;
						margin-left: 20upx;
					}
					>view{
						margin-left: 20upx;
					}
					.btt{
						font-size: 32upx;
						color: #FA6E39;
						 display: flex;
						align-items: center;
						justify-content: center;
						 padding: 0;
						 border-radius: 0;
						 margin-top: 72upx;
						 margin-bottom: 20upx;
						 width: 80upx;
						 height: 44upx;
						 background: #FFECE6;
						 border: none;
					}
					
				}
				&-right{
					
					.address-list-right-1{
						display: flex;
						margin-left: 20upx;
						>view{
							line-height: 50upx;
							margin-top: 20upx;
						}
					}
					
					.address-list-right-2{
						line-height: 50upx;
						margin-left: 20upx;
					}
					.address-list-right-3{
						// display: flex;
						margin-left: 20upx;
						margin-bottom: 20upx;
						.bnn{
							height: 60upx;
							width:80upx;
							border: none;
							font-size: 32upx;
							padding: 0;
							float: right;
							border-radius: 0;
							color: #666666;
							line-height: 60upx;
						}
					}
				}
			}
		}
		.address-footer{
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
	}
	
	
	 
	/* 提示窗口 */
		.uni-tip {
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			padding: 15px;
			width: 300px;
			background-color: #fff;
			border-radius: 10px;
		}
	
		.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
			text-align: center;
		}
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 20px;
		}
		
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 14px;
			color: #3b4144;
		}
</style>
