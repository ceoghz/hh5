<script>
	import {mapMutations} from 'vuex';
	import QQMapWX from '@/utils/tengxunmap/qqmap-wx-jssdk.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			var that = this;
			//导航信息条高度
			uni.getSystemInfo({
			    success: function(res) {
			        var nate = res.statusBarHeight;
			        uni.setStorageSync('data_height', nate);
					console.log(nate)
			        that.data_height(nate);
			    }
			});
			this.getAddress() //调用获取地址函数
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			//用户授权 获取用户地址
		    getAddress(){
				console.log(6655555)
				uni.getLocation({
				    type: 'gcj02',
				    geocode:true,
				    success: function (res) {
						console.log(55555555)
						console.log(55555555)
						console.log(55555555)
				        const latitude = res.latitude;
				        const longitude = res.longitude;
				         let qqmapsdk = new QQMapWX({
				           key: 'VNSBZ-UMKCU-ZTLVR-2NGQW-IQWZF-T3BM6'
				         });
				         qqmapsdk.reverseGeocoder({
				             location:{
				                 latitude: res.latitude,
				                 longitude: res.longitude
				             },
				             success(res){
								 console.log(res)
								 const address_info = {}
								 address_info.latitude = res.result.location.lat
								 address_info.longitude = res.result.location.lng
				                 address_info.address = res.result.ad_info.name 
				                 uni.setStorageSync('address_info',address_info)
				             },
				             fail: function(error) {
				                     console.error(error);
				             },
				             complete: function(res) {
				                     console.log(res);
				             }
				         })
				        }
				})
			},
			 
			...mapMutations({
			    data_height: 'SET_DATA_HEIGHT'
			})
		},
		mounted() {
		
		}
	}
</script>

<style>
	/* 项目公共样式*/
	@import url("common/common.css");
	/* 图标样式 */
	@import url("common/iconfont.css");
	/* uni-app组件样式 */
	@import url("common/uni.css");
	/* 第三方动画库 */
	@import "/common/animate.css";
	/* UI基础库 */
	@import "/common/zcm-main.css";
	
	
</style>
