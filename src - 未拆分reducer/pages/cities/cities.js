import React, { Component } from 'react'
import styles from "./cities.module.scss"
import { NavBar, Icon } from 'antd-mobile';
import axios from "axios"
import { NavLink } from 'react-router-dom'

export default class CitiesComponent extends Component {
    state = {
        guessCity: {},
        hotCity: null,
        groupCity: null
    }
    render() {
        let { guessCity, hotCity, groupCity } = this.state;
        return (
            // js - 不合法
            <div className={styles['cities-wrap']}>
                <NavBar mode="dark">
                    城市选择
                </NavBar>
                <div className={styles.guess}>
                    <div>当前定位城市</div>
                    <div>
                        <NavLink to={`/city/${guessCity.id}/${guessCity.name}`}>
                            <span >{guessCity && guessCity.name}</span>
                        </NavLink>
                        <Icon type="right" />
                    </div>
                </div>
                {/* styles.guess -- end */}
                <div className={styles.hot}>
                    <ul>
                        {hotCity && hotCity.map((city) => {
                            return (
                                <li key={city.id}>
                                    <NavLink to={`/city/${city.id}/${city.name}`}>
                                        {city.name}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* styles.hot -- end */}
                <div className={styles.group}>
                    {/* Object.keys(groupCity)
                        [A,B,C,D,...]
                        kry:A
                    */}
                    {groupCity && Object.keys(groupCity).map((key) => {
                        return (
                            <div key={key}>
                                <p className={styles.title}>
                                    {key}
                                </p>
                                <ul>
                                    {groupCity && groupCity[key].map((city) => {
                                        return (
                                            <li key={city.id}>
                                                <NavLink to={`/city/${city.id}/${city.name}`}>
                                                    {city.name}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                </div>
                {/* styles.group -- end */}
            </div>
        )
    }
    // 定位城市，热门，所有
    requestCities(type) {
        return axios.get(`https://elm.cangdu.org/v1/cities?type=${type}`)
    }

    //排序group_cities
    sortGroupCity(unordered) {
        const ordered = {};
        Object.keys(unordered).sort().forEach(function (key) {
            ordered[key] = unordered[key];
        });
        return ordered;
    }

    componentDidMount() {
        // 加个标识表示这个页面的数据已经请求过了，下次再加载就不发请求了
        let { guessCity } = this.state;
        if (guessCity.id) return;

        let guess = this.requestCities('guess');
        let hot = this.requestCities('hot');
        let group = this.requestCities('group');
        axios.all([guess, hot, group]).then((res) => {
            console.log(res);
            this.setState({
                guessCity: res[0].data,
                hotCity: res[1].data,
                groupCity: this.sortGroupCity(res[2].data),
            })
            console.log(this.state);
        })
    }

}

