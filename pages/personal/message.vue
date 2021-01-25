<template>
	<view class="message">
		<view class="message-header">
			<Head title = "消息"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
			<view class="message-header-main">
				<view class="unread">{{meg_info.noread}}条未读消息</view>
				<view class="remov"> <image style="width: 30upx;height: 30upx;vertical-align: middle;" src="../../static/img/icon_seckill_2@2x.png" mode=""></image> <text style="vertical-align: middle;margin-left: 8upx;">清除未读</text></view>
				<view class="enit" @click="editorClick">{{is_editor?'完成':'编辑'}}</view>
			</view>
		</view>
		<view class="message-content">
			<scroll-view class="avv" scroll-y='true' style="height: 100%;" >
				<view class="" style="height: 20upx;width: 100%;"></view>
				<view class="message-list-item" v-for="(item,index) in meg_list" :key = 'index'  >
					<radio @click="radioClick(item.id)" v-if="is_editor" class="radio" color="#FD8A03" value="r1" :checked="item.isChecked" />
					<image class="message-list-item-left" src="../../static/img/system-img.png" mode=""></image>
					<view class="message-list-item-right" @click="jumpDetail(item.id,item.type)">
						<view class="item-name d-flex j-sb">
							<view class="" style="color: #333333;line-height: 50upx;font-size: 36upx;">{{item.title}}</view>
							<view class="" style="color: #999999;line-height: 34upx;font-size: 24upx;">{{item.time}}</view>
						</view>
						<view class="item-content d-flex j-sb">
							<view class="a" style="color: #999999;line-height: 40upx;font-size: 28upx;">{{item.content}}</view>
							<view style="height: 40upx;width: 40upx;background: red;color: #FFFFFF;border-radius: 20upx;line-height: 40upx;text-align: center;font-size: 24upx;">11</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="" v-if="is_editor" style="width: 100%; height: 108upx;"></view>
		<view class="message-footer" v-if="is_editor">
			  <label class="radio"><radio color="#FD8A03" value="r1" :checked="allChecked" @click="allCheckedClick" />全选</label>
			  <view  class="btt" :style="{background:isDel?'':'#999999'}">删除</view>
		</view>
	</view>
</template>

<script>
	import Head from  "../../components/head.vue"
	export default{
		data(){
			return{
				nav_height:0,
				is_editor:false,
				meg_info:[],//消息
				meg_list:[],//消息列表
				id_str:'',
				isDel:false,
				allChecked:false,
				flag:true
			}
		},
		components:{
			Head
		},
		onLoad() {
			this.requestMessage()
		},
		methods:{
			jumpDetail(id,type){
				uni.navigateTo({
					url:`/pages/msg/infoDetail?id=${id}&type=${type}`,
					success() {
						console.log("跳转成功")
					}
				})
			},
			//全部以读
			async allRead(){
				await this.requestAllRead() 
				await this.requestMessage()
			},
			//全选
			allCheckedClick(){
				this.allChecked = !this.allChecked
				this.meg_list.forEach((item,index)=>{
					if(this.flag){
						this.$set(item,'isChecked',true)
						this.isDel = true
						this.flag = false
					}else{
						this.$set(item,'isChecked',false)
						this.flag = true
						this.isDel = false
					}
					this.is_editor = false 
					this.is_editor =true
				})
				this.idArr()
			},
			radioClick(id){
				this.meg_list.forEach((item,index)=>{
					if(item.id === id){
						this.$set(item,'isChecked',!item.isChecked)
						this.is_editor = false 
						this.is_editor =true
					}
				})
				this.isDel = this.meg_list.some(item=>item.isChecked)?true: false
				this.idArr()
			},
			//编辑
			editorClick(){
				this.is_editor = !this.is_editor
			},
			//消息列表请求
			requestMessage(){
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:'message',
					app:'message'
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						this.meg_info = res.data.data
						this.meg_list = this.funArr(res.data.data.messages)
						console.log(this.meg_list)
					}
				})
			},
			funArr(arr){
				arr.forEach((item,index)=>{
					item.isChecked = false
				})
				return  arr
			},
			idArr(){
				let id_str = []
				this.meg_list.forEach((item,index)=>{
					if(item.isChecked){
						id_str.push(item.id)
					}
				})
				this.id_str = id_str.join(',')
				console.log(this.id_str)
			},
			//删除消息 
			delInfo(){
				if(!this.isDel) return false
				this.$http.post('',{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:'message',
					app:'del' ,
					id:this.id_str
				}).then(res=>{
					if(res.data.code === 200){
						uni.showToast({
							title:'操作成功',
							icon:"none"
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:"none"
						})
					}
				})
			},
			//全部以读 
			requestAllRead(){
				this.$http.post('',{
					store_id:1,
					store_type:2,
					module:'app',
					action:'message',
					app:'all',
					access_id:uni.getStorageSync('access_id')
				}).then(res=>{
					if(res.data.code === 200){
						uni.showToast({
							title:"操作成功",
							icon:"none"
						})
					}
				})
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
			console.log('abb',this.nav_height)
		}
	}
</script>

<style lang="less" scode>
	.message{
		height: 100%;
		width: 100%;
		background: #F4F4F4;
		display: flex;
		flex-direction: column;
		.message-header{
			width: 100%;
			&-main{
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				border-top: 2upx solid #F4F4F4;
				background: #FFFFFF;
				height: 74upx;
				.unread,.remov{
					font-size:24upx;
					color: #666666;
					line-height: 34px;
				}
				.enit{
					color: #333333;
				}
			}
		}
		&-content{
			width: 100%;
			height: 100%;
			flex: 1;
			overflow: hidden;
			.message-list-item{
				width: 100%;
				height: 148upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 2upx solid #F4F4F4;
				background-color: #FFFFFF;
				.radio{
					margin-left: 30upx;
					
				}
				&-left{
					height: 100upx;
					width: 100upx;
					border-radius: 50upx;
					margin-left: 30upx;
				}
				&-right{
					flex: 1;
					width: calc(100% - 100upx);
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 20upx;
					margin-right: 20upx;
					.item-name{
						width: 100%;
						>view:first-child{
							width: 240upx;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
					.item-content{
						width: 100%;
						margin-top: 20upx;
						.a{
							flex: 1;
							width: 426upx;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
				}
			}
		}
		.message-footer{
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
		
	}
</style>
