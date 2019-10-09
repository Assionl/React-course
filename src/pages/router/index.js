import React from 'react'
import CitiesComponent from '../cities/cities';
import CitySearchComponent from '../citySearch/citySearch';
import Component404 from '../404/404'
import OrderComponent from '../home/home'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import TakeOutComponent from '../takeOut';
import MineComponent from '../mine';

export default function RouterComponent() {
    return (
        <div>
            {/* 
                /根 模糊匹配 匹配所有的
                exact 严格匹配
            */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={CitiesComponent} />
                    <Route exact path="/city/:id/:name" component={CitySearchComponent} />
                    {/* 嵌套路由的一级路由不能加exact */}
                    <Route path='/order' render={() => {
                        return (
                            <OrderComponent>
                                <Route exact path="/order/takeout" component={TakeOutComponent} />
                                <Route exact path="/order/mine" component={MineComponent} />
                            </OrderComponent>
                        )
                    }}>

                    </Route>
                    {/* 重定向 Redirect*/}
                    {/* <Route from="/order" component={OrderComponent} /> */}
                    <Route component={Component404} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}