import React, { Component } from 'react'
import "./citySearch.module.scss"
import { NavBar, Icon } from 'antd-mobile';

export default class CitySearchComponent extends Component {
    render() {
        let { name } = this.props.match.params;
        return (
            <div className="text">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
                        <span key="1" onClick={() => {
                            this.props.history.push("/home")
                        }}>首页 </span>
                    ]}
                >{name}</NavBar>
            </div>
        )
    }
    componentDidMount() {
        console.log("搜索界面", this.props.match.params.name);
        // let { name } = this.props.match.params;
    }

}
