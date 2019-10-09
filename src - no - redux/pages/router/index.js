import React from 'react'
import CitiesComponent from '../cities/cities';
import CitySearchComponent from '../citySearch/citySearch';
import Component404 from '../404/404'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
export default function RouterComponent() {
    return (
        <div>
            {/* 
                /根 模糊匹配 匹配所有的
                exact 严格匹配
            */}
            <BrowserRouter>
                <Switch>
                    <Route exact path="/home" component={CitiesComponent} />
                    <Route exact path="/city/:id/:name" component={CitySearchComponent} />
                    {/* 重定向 */}
                    <Redirect from="/a" to="/" />
                    <Route component={Component404} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}