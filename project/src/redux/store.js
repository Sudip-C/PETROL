import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./Product/reducer"
import {reducer as womenReducer} from "./WomenProduct/reducer"

import {reducer as cartReducer} from './cartReducer/reducer'
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    productReducer,cartReducer, womenReducer



export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))