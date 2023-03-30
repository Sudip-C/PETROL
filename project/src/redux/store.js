import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as productReducer} from "./Product/reducer"
import {reducer as womenReducer} from "./WomenProduct/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    productReducer,
    womenReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))