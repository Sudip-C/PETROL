import { ADD_NEW_ADDRESS, BACK_SHIPPING_PAGE, CART_DATA, CHANGE_PAGE, PAYMENT_PAGE } from "./actionType"


const initialState = {
    cartData: [],
    changePage:JSON.parse(localStorage.getItem('changePage'))||false,
    paymentPage:false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CART_DATA:
            return {...state, cartData:payload}
        case CHANGE_PAGE:
            return {...state,changePage:true}
        case ADD_NEW_ADDRESS:
            return {...state,changePage:false}
        case PAYMENT_PAGE:
            return {...state,paymentPage:true}
        case BACK_SHIPPING_PAGE:
            return {...state,paymentPage:false}
        default:
            return state
    }
}