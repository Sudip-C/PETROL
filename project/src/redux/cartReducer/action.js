import { CART_DATA } from "./actionType"

export const getCartData=(data)=>(dispatch)=>{
      dispatch({type:CART_DATA,payload:data})
}