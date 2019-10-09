import React, { Component } from 'react'
import styles from './home.module.scss'
import { NavLink } from 'react-router-dom'
export default class orderComponent extends Component {
    render() {
        return (
            <div>
                {/* 占位符 */}
                {this.props.children}
                <div className={styles.tabBar}>
                    <ul>
                        <li>
                            {/* NavLink to属性必须写 */}
                            <NavLink to='/order/takeout' activeClassName={styles.selected}>
                                <i className='myFont'></i>
                                <p>外卖</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='' activeClassName={styles.selected}>
                                <i className='myFont'></i>
                                <p>搜索</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='' activeClassName={styles.selected}>
                                <i className='myFont'></i>
                                <p>订单</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/order/mine' activeClassName={styles.selected}>
                                <i className='myFont'></i>
                                <p>我的</p>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
