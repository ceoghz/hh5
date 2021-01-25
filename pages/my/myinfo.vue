<template>
	<view class="myinfo">
		<Head title="我的信息"></Head>
		<view :style="{height:nav_height+'px',width:'100%'}"></view>
		<view class="myinfo-content">
			<view class="portrait">
				<view class="portrait-left">头像设置</view>
				<view class="portrait-right" @click="chooseImg"><image :src="headimgurl" style="width: 74upx;height: 74upx;border-radius: 37upx;" mode=""></image></view>
			</view>
			<view class="name">
				<view class="name-left">我的昵称</view>
				<view class="name-right"  @click="togglePopup()">
					<text>{{Nickname}}</text>
					<image src="../../static/img/btn_back.png" style="width: 60upx;height: 60upx;" mode=""></image>
				</view>
			</view>
			<view class="birthday">
				<view class="birthday-left">生日日期</view>
				<view class="birthday-right">
					<gpp-date-picker :themeColor="'#FA6E39'" @onCancel="onCancel" @onConfirm="onConfirm" :startDate="startDate" :endDate="endDate" :defaultValue="pickerDate">
					    <text v-if="birthday === 'null'">{{pickerDate1}}</text>
					    <text v-else>{{pickerDate}}</text>
					</gpp-date-picker>
					<image src="../../static/img/btn_back.png" style="width: 60upx;height: 60upx;" mode=""></image>
				</view>
			</view>
		
		</view>
		<uni-popup ref="showtip" :type="type" :mask-click="false" @change="change">
			<view class="uni-tip">
				<text class="uni-tip-title">修改昵称</text>
				<view class="uni-tip-content"> <input type="text"v-model.trim="Nickname" placeholder="请输入昵称"/></view>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" style="border-right: 2upx solid #f4f4f4;" @click="cancel()">取消</text>
					<text class="uni-tip-button" style="color: #FA6E39;" @click="confirm()">确定</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
    import gppDatePicker from "@/components/gpp-datePicker/gpp-datePicker.vue"
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	import uniPopup from '@/components/uni/uni-popup/uni-popup.vue'
	import uniIcons from '@/components/uni/uni-icons/uni-icons.vue'
	import weappJwt from '@/utils/weapp-jwt-decode/weapp-jwt.js'
	export default{
		data(){
			return{
				nav_height:0,
				startDate: "1970-01-01",
				endDate: "2022-09-20",
				pickerDate: '2020-11-25',
				type:'center',
				Nickname:'',
				headimgurl:'https://laikeds.oss-cn-shenzhen.aliyuncs.com/1/0/1602746860861.png',
				pickerDate1:'',
				birthday:''
			}
		},
		components:{
			Head,
			gppDatePicker,
			uniSection,
			uniPopup,
			uniIcons
		},
		methods:{
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
								type:'head',
								file:tempFilePaths
							},
							header:{"Content-Type": "multipart/form-data"},
							success:(res) => {
								console.log(111)
								console.log(res)
								console.log(JSON.parse(res.data))
								if (res.statusCode == 200){
									console.log('文件上传成功')
									
								}
							}
						});
				    }
				});
			},
			
			//上传头像
			requestImg(file){
				let formData  = new FromData();
				formData.append('file', file);
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),//
					store_id:1,
					store_type:2,
					module:'app',
					action:'user',
					app:'uploadImg',
					type:'head',
					file:file
				}).then(res=>{
					console.log(res)
				})
			},
			
			//修改昵称
			modifyName(){
				uni.showLoading()
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'user',
					app:'set_user',
					Nickname:this.Nickname
				}).then(res=>{
					console.log(res)
					uni.hideLoading()
					if(res.data.code === 200){
						uni.showToast({
							title:"修改成功",
							icon:'none'
						})
					}
				})
			},
			settingBirthday(){
				uni.showLoading()
				this.$http.post('',{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'user',
					app:'set_user',
					birthday:this.pickerDate
				}).then(res=>{
					console.log(res)
					uni.hideLoading()
					if(res.data.code === 200){
						uni.showToast({
							title:'设置成功',
							icon:'none'
						})
					}else{
						uni.showToast({
							title:res.data.message,
							icon:'none'
						})
					}
				})
			},
			onCancel(e){
				console.log(e);
			},
			onConfirm(e){
				this.pickerDate = e.dateValue;
				this.birthday =e.dateValue
				this.settingBirthday()
			},
			togglePopup() {
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
				if(this.Nickname === ''){
					uni.showToast({
						title:'请输入昵称',
						icon:'none'
					})
					return false
				}
			    await this.modifyName()
				this.$refs.showtip.close()
			},
		},
		onLoad(options) {
			console.log('options',options)
			this.nav_height = uni.getStorageSync("nav_height")
			this.Nickname = options.user_name
			this.headimgurl = options.headimgurl
			this.birthday = options.birthday
			if(options.birthday === 'null'){
					this.pickerDate1 = "请选择日期"
			}else{
				this.pickerDate = options.birthday
			}
		}
	}
</script>

<style lang="less" scoped>
	.myinfo{
		height: 100%;
		width: 100%;
		background:#f4f4f4;
	}
	.myinfo-content{
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 0 30upx;
		width: 100%;
		>view{
			width: 100%;
			height: 108upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-top: 2upx solid #F4F4F4;
		}
		.portrait{
			.portrait-right{
				height: 74upx;
				width: 74upx;
				border-radius: 37upx;
				>image{
					
				}
			}
		}
		.name{
			.name-right{
				height: 100%;
				display: flex;
				align-items: center;
			}
		}
		.birthday{
			.birthday-right{
				height: 100%;
				display: flex;
				align-items: center;
			}
		}
	}
	
	
	
	/* 提示窗口 */
		.uni-tip {
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			padding: 15px 0 0;
			width: 300px;
			background-color: #fff;
			border-radius: 10px;
		}
	
		.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			// font-weight: bold;
			font-size: 36upx;
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
			border-top: 2upx solid #F4F4F4;
		}
		
		.uni-tip-button {
			flex: 1;
			font-size: 40upx;
			color: #333333;
			height: 118upx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
</style>
