// 引入一个创建存储器的方法
// 存储器:用来管理状态(vuex是基于redux的封装)
import { createStore } from "redux"

// 初始状态
let defaultState = {
    counter: 0
}

// redux的核心配置，中间处理器，记录状态的改变
// es6 新语法 可以在参数中赋初值
// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'A':
            // 深拷贝 state,必须写成深拷贝，否则以后出问题监听不到！！！！！
            let tempState = JSON.parse(JSON.stringify(state));
            // 修改
            tempState.counter = tempState.counter + 1;
            // 返回修改后的值
            return tempState;
        case 'B':
            // 深拷贝 state
            let tempState = JSON.parse(JSON.stringify(state));
            // 修改
            tempState.counter = tempState.counter - 1;
            // 返回修改后的值
            return tempState;
        default:
            console.log("default走了....", action);
            return state
    }
}
// 创建存储器：需要状态配置信息参数如:初始状态,修改状态方法)
// 调用创建createStore的时候，reducer会默认执行一次，完成状态的初始化
let store = createStore(reducer);
// {vuex
//     state: {},
//     mutations:{}
// }

// 获取状态store.getState()
console.log('store :', store);
console.log(store.getState());

// 订阅
var n = 0;
// subscribe()会返回一个函数，注销监听器
let unSubscribe = store.subscribe(() => {
    n++;
    console.log("修改了。。", n);
})
unSubscribe();
// 修改
store.dispatch({ type: "A" });
store.dispatch({ type: "A" });
store.dispatch({ type: "B" });

console.log(store.getState());

/*
永远不要在 reducer 里做这些操作：
1.修改传入参数；
2.执行有副作用的操作，如 API 请求和路由跳转；
3.调用非纯函数，如 Date.now() 或 Math.random()。

特点：
1.单一数据源
整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
2.State 是只读的
唯一改变 state 的方法就是触发 action(dispatch)，action 是一个用于描述已发生事件的普通对象。
3.使用纯函数来执行修改
为了描述 action 如何改变 state tree ，你需要编写 reducers。

1. 如何浅拷贝 一个对象/数组 只拷贝最外层
    1.1 var 副本 = Object.assign(副本,{a:1},{b:2});
            副本 = {a:1,b:2}
    1.2 let 副本= {...obj1}
    1.3 自己写for in循环对象

 2. 如何深拷贝一个对象/数组 所有属性都拷贝一份
   2.1 var o2 = JSON.parse(JSON.stringfy(o1))
   2.2 自己写循环 递归

*/
