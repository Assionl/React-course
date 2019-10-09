import { createStore, combineReducers } from "redux"
import reducer404 from '../pages/404/store/reducer404'
import reducerCity from '../pages/cities/store/reducerCity'
// 整个存储器只有一个/根store
let allReducers = combineReducers({
    page404: reducer404,
    pageCity: reducerCity
})
let store = createStore(allReducers);
export default store;
