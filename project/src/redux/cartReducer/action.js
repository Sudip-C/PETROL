import { ADD_NEW_ADDRESS, BACK_SHIPPING_PAGE, CART_DATA, CHANGE_PAGE, PAYMENT_PAGE } from "./actionType"

export const getCartData=(data)=>(dispatch)=>{
      dispatch({type:CART_DATA,payload:data})
}

export const changePage=()=>(dispatch)=>{
     dispatch({type:CHANGE_PAGE})
}

export const addNewAddress=()=>(dispatch)=>{
     dispatch({type:ADD_NEW_ADDRESS})
}

export const paymentPage=()=>(dispatch)=>{
     dispatch({type:PAYMENT_PAGE})
}

export const backShippingPage=()=>(dispatch)=>{
     dispatch({type:BACK_SHIPPING_PAGE})
}