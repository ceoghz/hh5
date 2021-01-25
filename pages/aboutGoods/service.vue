<template>
    <view class="fen">
		<view class="header">
			<Head title="客服"></Head>
			<view class="" :style="{height:nav_height+'px',width:'100%'}"></view>
		</view>
        <template v-if="kefu_url">
            <web-view :src="kefu_url"></web-view>
        </template>
    </view>
</template>
<script>
	import Head from "@/components/head.vue"
    export default {
		components:{
			Head
		},
        data () {
            return {
				nav_height:0,
                sendInfo: '',
                infos: '',
                pull: false,
                send_display: false,
                imgsrc: '', // 上传的·图片的地址
                show: false, // 图片放大预览
                src: '',
                kefu_url: '',
				pid:""
            }
        },
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
        async onLoad (option) {
            this.setAppTitle()
            this.pid = option.pid
            await this._geturl()
			console.log(this.pid,339333)
        },
		async mounted(){
			await this._geturl()
		},
        methods: {
            setAppTitle () {
                // #ifdef APP-PLUS
                var pageWeb = this.$mp.page.$getAppWebview()
                setTimeout(function () {
                    var web = pageWeb.children()[0]
                    web.onloaded = embedLoaded
                }, 400)

                function embedLoaded () {
                    setTimeout(() => {
                        uni.setNavigationBarTitle({
                            title: '在线客服'
                        })
                    }, 600)
                }

                // #endif
            },
            changeLoginStatus () {
                this._geturl()
            },
			//
            async _geturl () {
                console.log(this.pid,22233)
                var me = this
				this.$http.post(
				 '',
				 { 
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module: 'app',
					action: 'url',
					app: 'geturl',
					get: 'kefu_url',
					pid:this.pid,
					
				 }).then((res)=>{
					if (res.data.code == 200) {
                    this.kefu_url = res.data.url.kefu_url
					console.log(this.kefu_url,'kkkk')
                } else {
                    uni.showToast({
                        title: res.message,
                        duration: 1500,
                        icon: 'none'
                    })
                } 
				 })
            },
			back(){
				uni.navigateBack({
				    delta: 1
				});
			},
        },
        watch: {
            send_display () {
                this.$nextTick(() => {
                    var height = service.scrollHeight
                    service.scrollTop = height
                    console.log(height, service.scrollTop)
                })
            }
        }
    }
</script>
<style scoped lang="less">
    @import url("../../static/css/aboutGoods/service.less");

</style>
