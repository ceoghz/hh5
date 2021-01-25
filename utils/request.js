import http from './http/index.js'
//设置baseUrl
http.config.baseUrl = "https://test-mall.lhsc99.cn/index.php"
//设置请求前拦截器 
http.interceptor.request = (config) => {
    //添加通用参数
    config.header = {
        // "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		'content-type':'application/x-www-form-urlencoded'
    }
	// config.body = {
	// 	access_id:uni.getStorageSync("access_id")
	// }
}
//设置请求结束后拦截器
http.interceptor.response = (response) => {
    //判断返回状态 执行相应操作
    return response;
}