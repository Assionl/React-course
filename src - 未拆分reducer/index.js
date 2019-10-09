// 引用react核心文件
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 根组件
import App from './App';

// 引入监听屏幕尺寸，设置html字体大小
import "./assets/js/resize"

// UI样式
import 'antd-mobile/dist/antd-mobile.css';

// 引入axios 会默认找axios里面的index
import "./axios"

// 导入
import store from './store/index';
// redux
import { Provider } from 'react-redux'

// 怎么让每个界面/组件都访问到store，因为整个项目只有一个store
// 放在组件顶层的原型上 react的组件顶层是
Component.prototype.store = store;

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));