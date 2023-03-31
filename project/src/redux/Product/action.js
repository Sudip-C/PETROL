import axios from "axios"
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_WOMENDATA_SUCCESS } from "./actionType"

export const getMenData=(obj)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.get(`https://waiting-brief-sort.glitch.me/woman`,obj)
    .then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:GET_DATA_FAILURE}))
}

export const getWomenData=(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.get(`https://waiting-brief-sort.glitch.me/kids`)
    .then((res)=>dispatch({type:GET_WOMENDATA_SUCCESS,payload:res.data}))
    .catch(()=>dispatch({type:GET_DATA_FAILURE}))
}