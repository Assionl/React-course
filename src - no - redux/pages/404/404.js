import React, { Component } from 'react'

export default class Component404 extends Component {
    constructor() {
        super();
        let defaultState = { name: "书宇" }
        //给当前组件赋初值  (可以加自己的私有状态)
        this.state = { ...this.store.getState(), ...defaultState };
        //订阅redux状态改变
        this.store.subscribe(() => {
            console.log("变了");
            this.setState(this.store.getState())
        })
    }
    render() {
        console.log("404", this.store, this.store.getState())
        console.log(this.store.getState())
        return (
            <div>
                <h1>
                    {this.state.counter}
                    {this.state.name}
                </h1>
                Component404
                <h1>{this.store.getState().counter}</h1>
                <button onClick={() => {
                    this.store.dispatch({ type: 'A' })
                }}>点击修改</button>
            </div>
        );
    }

}
