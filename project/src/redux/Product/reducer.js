import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_WOMENDATA_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actionType"



const initialState={
    isLoading:false,
    isError:false,
    product:[],
   

}

export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case GET_DATA_REQUEST:
        return{
            ...state,isLoading:true
        }
    case GET_DATA_SUCCESS:
        return{
            ...state,isLoading:false,product:payload
        }
    case GET_WOMENDATA_SUCCESS:
        return{
            ...state,isLoading:false,Womenproduct:payload
        }
    case GET_DATA_FAILURE:
        return{
            ...state,isError:true
        }
        case PATCH_PRODUCT_SUCCESS:
            return{
                ...state,isLoading:false
            } 
    default:
        return state
}
}