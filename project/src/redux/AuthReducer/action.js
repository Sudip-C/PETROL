import { AUTH_FAIL, AUTH_SUCCESS } from "./actionType"

export const Authentication=(dispatch)=>{
    dispatch({type:AUTH_SUCCESS})
}
export const LoggedOut=(dispatch)=>{
    dispatch({type:AUTH_FAIL})
}