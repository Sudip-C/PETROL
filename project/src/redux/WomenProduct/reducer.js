import {GET_PRODUCT_FAIL, GET_PRODUCT_REQ, GET_PRODUCT_SUCCESS} from "./actionType"

const initialState={
    isLoading:false,
    isError:false,
    women:[]
}

export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case GET_PRODUCT_REQ:{
        return {...state, isLoading:true}
    }
    case GET_PRODUCT_SUCCESS:{
        return {...state, isLoading:false, women:payload}
    }
    case GET_PRODUCT_FAIL:{
        return {...state, isLoading:false, isError:true}
    }
    default:
        return state
}
}