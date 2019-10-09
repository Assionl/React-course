import axios from "axios"
import { Toast } from 'antd-mobile';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
    console.log("请求进来了", config);
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log("请求完成了", response);
    setTimeout(() => {
        Toast.hide();
    }, 2000)

    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});