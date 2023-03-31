import { CART_DATA } from "./actionType"


const initialState = {
    cartData: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_DATA:
            return {...state, cartData:payload}
        default:
            return state
    }
}