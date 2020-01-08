import {asyncActionName} from '../utils/asyncUtil'
import {LOG_IN, SIGN_UP, SIGN_OUT} from '../actionTypes/userActionTypes'

const initState = {user:{}, authToken:null, loading:false, error:false, errorMessage:null}
const userReducer = (state=initState, action) =>{
    switch(action.type){
        case asyncActionName(LOG_IN).failure:
            return {...state, error:action.payload.status, errorMessage:action.payload.error}
        case asyncActionName(LOG_IN).loading:
            return {...state, loading:action.payload}
        case asyncActionName(LOG_IN).success:
            return {...state, authToken:action.payload.authToken, user:action.payload.user}
        
        case asyncActionName(SIGN_UP).failure:
            return {...state, error:action.payload.status, errorMessage:action.payload.error}
        case asyncActionName(SIGN_UP).loading:
            return {...state, loading:action.payload}
        case asyncActionName(SIGN_UP).success:
            return {...state, authToken:action.payload.authToken, user:action.payload.user}

        case asyncActionName(SIGN_OUT).success:
            return {...initState}

        default:
            return state
    }
}

export default userReducer