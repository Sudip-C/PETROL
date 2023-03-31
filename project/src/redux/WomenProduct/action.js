import axios from "axios"
import {GET_PRODUCT_FAIL, GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS} from "./actionType"


export const getProduct=(page)=>async (dispatch)=>{
    dispatch({type:GET_PRODUCT_REQ})
    let res=await axios.get(`https://waiting-brief-sort.glitch.me/woman?_limit=12&page=${page}`)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS, payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_PRODUCT_FAIL})
    })

}