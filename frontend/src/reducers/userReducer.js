import { USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstant"

function userLoginReducer(state ={},{type,payload}){
    switch(type){
        case USER_SIGNIN_REQUEST:
            return {loading:true}
        case USER_SIGNIN_SUCCESS:
            return {loading:false,userInfo: payload}
        case USER_SIGNIN_FAIL:
            return {loading:false,error: payload}
        case USER_LOGOUT:
            return {}
        default: return state
    }
}

function userRegisterReducer(state ={},{type,payload}){
    switch(type){
        case USER_REGISTER_REQUEST:
            return {loading:true}
        case USER_REGISTER_SUCCESS:
            return {loading:false,userInfo: payload}
        case USER_REGISTER_FAIL:
            return {loading:false,error: payload}
        default: return state
    }
}

export {userLoginReducer,userRegisterReducer}