import { createStore, combineReducers } from "redux"
import reducer404 from '../pages/404/store/reducer404'
import reducerCity from '../pages/cities/store/reducerCity'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
// 整个存储器只有一个/根store
let allReducers = combineReducers({
    page404: reducer404,
    pageCity: reducerCity
})
const persistedReducer = persistReducer(persistConfig, allReducers);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
export default store;
export { persistor }