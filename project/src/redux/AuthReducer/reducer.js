import { AUTH_FAIL, AUTH_SUCCESS } from "./actionType"

const initial={
    isAuth:false
}

export const reducer=(state=initial,{type,payload})=>{
   switch(type){
    case AUTH_SUCCESS:
        return{
            ...state,isAuth:true
        }
    case AUTH_FAIL:
        return{
            ...state,isAuth:false
        }
        default:
            return state
   }
}