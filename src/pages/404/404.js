import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction } from './store/actions'
class Component404 extends Component {
    constructor() {
        super();
        let defaultState = { name: "Assrion" }
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
                <p>{this.props.value}</p>
                <h1>
                    {this.state.counter}
                    {this.state.name}
                </h1>
                Component404
                <h1>{this.store.getState().counter}</h1>
                <button onClick={() => {
                    this.props.add()
                    // this.store.dispatch({ type: 'A' })
                }}>点击修改</button>
            </div>
        );
    }

}
// 把state映射到当前组件属性上
const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps", state);
    // 把store里面的counter属性映射到当前组件的props里面的value属性 
    return {
        // return出去的就是当前组件的props属性
        value: state.page404.counter
    }
};
// 修改状态
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        add: () => {
            dispatch({ type: 'A' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component404)