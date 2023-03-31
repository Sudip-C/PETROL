import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./Product/reducer"
import {reducer as womenReducer} from "./WomenProduct/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    productReducer,
    womenReducer
    })

const rootReducer=combineReducers({
    productReducer,cartReducer

})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))