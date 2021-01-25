<template>
	<view class="collection">
		<view class="collection-header">
			<Head title="我的收藏"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
			<view class="collection-header-main">
				<view class="enit" @click="editorClick">{{is_editor?'完成':'管理'}}</view>
			</view>
		</view>
		<view class="collection-content">
			<scroll-view class="scroll-box" scroll-y='true' style="height: 100%;" >
				<view class="list-item" v-for="(item,index) in pro_list" :key="index">
						<radio @click="radioClick(item.id)" v-if="is_editor" class="radio" color="#FD8A03" value="r1" :checked="item.isChecked" />
						<image class="list-item-c" :src="item.imgurl" mode=""></image>
						<view class="list-item-r d-felx flex-column ">
							<view class="list-item-r-1">森山直供铁皮枫斗100克官方</view>
							<view class="list-item-r-2">1000+人收藏</view>
							<view class="list-item-r-3">
								<view class="money">
									<text style="font-size: 24upx;">¥</text>
									<text>4320.00</text>
								</view>
								<view class="similar">
									找相似
								</view>
							</view>
						</view>
				</view>
			</scroll-view>
		</view>
		<view class="" v-if="is_editor" style="width: 100%; height: 108upx;"></view>
		<view class="collection-footer" v-if="is_editor">
			  <label class="radio"><radio color="#FD8A03" value="r1" :checked="allChecked" @click="allCheckedClick" />全选</label>
			  <view  class="btt" @click="cancelResquest" :style="{background:isDel?'':'#999999'}" >删除</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
				is_editor:false,
				pro_list:[],//商品列表
				id_str:'',
				isDel:false,
				allChecked:false,
				flag:true
			}
		},
		components:{
			Head
		},
		methods:{
			//编辑
			editorClick(){
				this.is_editor = !this.is_editor
			},
			funArr(arr){
				arr.forEach((item,index)=>{
					item.isChecked = false
				})
				return  arr
			},
			idArr(){
				let id_str = []
				this.pro_list.forEach((item,index)=>{
					if(item.isChecked){
						id_str.push(item.id)
					}
				})
				this.id_str = id_str.join(',')
				console.log(this.id_str)
			},
			//全选
			allCheckedClick(){
				this.allChecked = !this.allChecked
				this.pro_list.forEach((item,index)=>{
					if(this.allChecked){
						this.$set(item,'isChecked',true)
						this.isDel = true
					}else{
						this.$set(item,'isChecked',false)
						this.isDel = false
					}
					this.is_editor = false 
					this.is_editor =true
				})
				console.log(this.pro_list)
				this.idArr()
			},
			//获取收藏商品列表
			requestCollectionList(){
				uni.showLoading()
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'addFavorites',
					app:'collection',
					type:1
				}).then(res=>{
					console.log(res)
					uni.hideLoading()
					if(res.data.code === 200){
						this.pro_list = this.funArr(res.data.data)
					}
				})
			},
			//取消收藏请求 
			cancelResquest(){
				if(!this.isDel) return false  //判断是否勾选商品
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'addFavorites',
					app:'removeFavorites',
					collection:this.id_str
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						this.requestCollectionList()
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
				})
			},
			radioClick(id){
				this.pro_list.forEach((item,index)=>{
					if(item.id === id){
						this.$set(item,'isChecked',!item.isChecked)
						this.is_editor = false 
						this.is_editor = true
					}
				})
				this.isDel = this.pro_list.some(item=>item.isChecked)?true: false
				this.idArr()
			},
		},
		onLoad() {
			this.requestCollectionList()
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		}
	}
</script>

<style lang="less" scode>
	.collection{
		height:100%;
		width:100%;
		background: #f4f4f4;
		display: flex;
		flex-direction: column;
		.collection-header{
			width: 100%;
			&-main{
				width: 100%;
				display: flex;
				align-items: center;
				flex-direction: row-reverse;
				border-top: 2upx solid #F4F4F4;
				background: #FFFFFF;
				height: 74upx;
				.enit{
					color: #333333;
					margin-right: 30upx;
				}
			}
		}
	}
	
	.collection-content{
		width: 100%;
		height: 100%;
		flex: 1;
		overflow: hidden;
		.scroll-box{
			width: 100%;
			box-sizing: border-box;
			padding:0upx 30upx 0;
			.list-item{
				width: 100%;
				background: #FFFFFF;
				border-radius: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 20upx;
			}
			.radio{
				margin-left: 20upx;
			}
			.list-item-c{
				height: 200upx;
				width: 200upx;
				border-radius: 20upx;
				margin-top: 20upx;
				margin-left: 20upx;
				margin-bottom: 20upx;
			}
			.list-item-r{
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				margin-left: 20upx;
				height: 200upx;
				width: calc(100% - 200upx);
				.list-item-r-1{
					font-size: 28upx;
					font-weight: 400;
					color: #333333;
					line-height: 40upx;
					margin-top: 6upx;
					width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.list-item-r-2{
					font-size: 24upx;
					font-weight: 400;
					color: #999999;
					line-height: 34upx;
				}
				.list-item-r-3{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.money{
						color: #FA6E39;
						font-size: 36upx;
					}
					.similar{
						color: #FA6E39;
						width: 90upx;
						height: 36upx;
						background: #FFECE6;
						border-radius: 200upx 0upx 0upx 200upx;
						font-size: 20upx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}
			}
		}
	}
	
	.collection-footer{
		width: 100%;
		height: 108upx;
		background: #FFFFFF;
		border-top: 2upx solid #979797;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.radio{
			margin-left: 30upx;
		}
		.btt{
			width: 208upx;
			height: 80upx;
			background: linear-gradient(127deg, #FD8A03 0%, #FD5700 100%);
			border-radius: 40upx;
			padding: 0;
			margin: 0 30upx 0 0;
			line-height: 80upx;
			text-align: center;
			color: #FFFFFF;
			border: none;
			letter-spacing: 6upx;
		}
	}
	/deep/.scroll-box ::-webkit-scrollbar { /* 隐藏滚动条，但依旧具备可以滚动的功能 */ display: none; width: 0; height: 0; color: transparent; background: transparent; } /deep/::-webkit-scrollbar { display: none; width: 0; height: 0; color: transparent; background: transparent; }
</style>
