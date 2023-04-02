import axios from "axios"
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_ADD_SUCCESS} from "./actionType"

export const getAllData=(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.get(`https://waiting-brief-sort.glitch.me/product`)
    .then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:GET_DATA_FAILURE}))
}

export const editData=(data,id)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    return axios.patch(`https://waiting-brief-sort.glitch.me/product/${id}`,data)
    .then(()=>dispatch({type:PATCH_PRODUCT_SUCCESS}))
    .catch(()=>dispatch({type:GET_DATA_FAILURE}))
}

export const postData=(details)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    return  axios.post(`https://waiting-brief-sort.glitch.me/product`,details)
    .then((res)=>dispatch({type:POST_ADD_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:GET_DATA_FAILURE}))
}