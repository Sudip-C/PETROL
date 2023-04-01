import axios from "axios"
import {GET_PRODUCT_FAIL, GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS} from "./actionType"


export const getProduct=(paramObj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQ})
    axios.get(`https://waiting-brief-sort.glitch.me/woman`,paramObj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_PRODUCT_FAIL})
    })

}