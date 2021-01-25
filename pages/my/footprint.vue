<template>
	<view class="footprint">
		<Head title="浏览足迹"></Head>
		<view :style="{width: '100%',height:nav_height + 'px' }"></view>
		<view class="footprint-content">
			<ren-calendar ref='ren' :open=false :markDays='markDays' :disabledAfter = true  @onDayClick='onDayClick' ></ren-calendar>
			<view class="footprint-content-main">
				<view class="main-item" v-for="(item,index) in user_foot">
					<view class="main-item-time">{{item.date}}</view>
					<view class="similar-content-main">
						<view class="similar-product-list" v-for="(item,index) in item.products" :key= index >
							<image :src="item.image_url" mode=""></image>
							<view class="pro-name">{{item.product_title}}</view>
							<!-- <view class="shop">{{}}</view> -->
							<view class="pro-price d-flex a-center j-sb">
								<view class="" style="font-size: 24upx;color: #FA6E39;">￥{{item.price}}</view>
								<view class="" style="font-size: 20upx;color: #BABABA;">销量：{{item.volume}}件</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import renCalendar from "@/components/ren-calendar/ren-calendar.vue"
	export default{
		data(){
			return{
				nav_height:0,
				curDate:'',
				markDays:[],
				tagArr:[], //标记时间数组
				user_foot:[]
			}
		},
		components:{
			Head,
			renCalendar
		},
	    onReady() {
			let today = this.$refs.ren.getToday().date;
			this.curDate = today;
			this.markDays.push(today);
		},
		methods:{
			onDayClick(data){
				this.curDate = data.date;
				this.footprintRequest(this.curDate)
			},
			footprintRequest(today){
				this.$http.post("",{
					access_id:uni.getStorageSync("access_id"),
					store_id:1,
					store_type:2,
					module:'app',
					action:'user',
					app:'footprint',
					today:today
				}).then(res=>{
					console.log(res)
					if(res.data.code === 200){
						let result = res.data.data
						this.markDays = this.funTabArr(result.week)  
						this.user_foot = result.user_foot
						if(this.user_foot.length === 0){
							uni.showToast({
								title:"该天没有浏览任何商品",
								icon:'none'
							})
						}
					}
				})
			},
			funTabArr(arr){
				let array = []
				arr.forEach((item,index)=>{
					if(item.flag == 1){
						array.push(item.date)
					}
				})
				return array
			},
		},
		onLoad() {
			this.footprintRequest("")
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
	}
</script>

<style lang="less" scoped>
	.footprint{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.footprint-content{
		width: 100%;
		background: #f4f4f4;
		.footprint-content-main{
			width: 100%;
			.main-item-time{
				width: 100%;
				font-size: 28upx;
				font-weight: 400;
				color: #666666;
				line-height: 40px;
				margin-left: 30upx;
			}
		}
	}
	.similar-content-main{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
		.similar-product-list{
			border-radius: 20upx;
			background: #FFFFFF;
			width: 336upx;
			margin-bottom: 20upx;
			image{
				height: 336upx;
				width: 336upx;
				border-radius: 20upx 20upx 0 0;
			}
			>view{
				margin: 20upx;
			}
			.pro-name{
				font-size: 32upx;
				font-weight: 400;
				color: #333333;
				line-height: 44upx;
				width: 80%;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.shop{
				font-size: 24upx;
				font-weight: 400;
				color: #999999;
				line-height: 34upx;
			}
		}
	}
</style>
