import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS,PATCH_PRODUCT_SUCCESS, POST_ADD_SUCCESS } from "./actionType"



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
  
    case GET_DATA_FAILURE:
        return{
            ...state,isError:true
        }
    case PATCH_PRODUCT_SUCCESS:
         return{
                ...state,isLoading:false
            } 
    case POST_ADD_SUCCESS:
        return {
                    ...state,isLoading:false
        }   
    default:
        return state
}
}