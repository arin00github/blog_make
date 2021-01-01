import { CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST, CLEAR_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS, USER_LOADING_SUCCESS, USER_LOADING_FAILURE, USER_LOADING_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../types';


const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading : false,
    user:"",
    userId :"",
    userName : "",
    userRole : "",
    errorMsg : "",
    successMsg : ""
}
//store에 있는 이름과 같아야 함.


const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case REGISTER_REQUEST :
        case LOGOUT_REQUEST :
        case LOGIN_REQUEST :
            return{
                ...state,
                errorMsg:"",
                isLoading:true
            };
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :
            localStorage.getItem("token", action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                isLoading : false,
                userId : action.payload.user.id,
                userRole : action.payload.user.role,
                errorMsg : ""
            }
        case REGISTER_FAILURE :
        case LOGOUT_FAILURE :
        case LOGIN_FAILURE :
            return{
                ...state,
                ...action.payload,
                token :null,
                user : null,
                userId : null,
                isAuthenticated : false,
                isLoading : false,
                errorMsg : action.payload.data.msg
            }
        case LOGOUT_SUCCESS :
            localStorage.removeItem("token")
            return{
                isAuthenticated : false,
                isLoading : false,
                userId : "",
                userRole : "",
                errorMsg : ""
            }
    //CLEAR_ERROR
        case CLEAR_ERROR_REQUEST :
            return{
                ...state,
                errormsg: null,
            }
        case CLEAR_ERROR_FAILURE :
            return{
                ...state,
                errormsg: null,
            }
        case CLEAR_ERROR_SUCCESS :
            return{
                ...state,
                errormsg: null,
            }
    //USER_LOADING    
        case USER_LOADING_REQUEST :
            return{
                ...state,
                isLoading : true,
            }
        case USER_LOADING_SUCCESS :
            return{
                ...state,
                isAuthenticated : true,
                isLoading : false,
                user : action.payload,
                userId : action.payload._id,
                userName : action.payload.name,
                userRole : action.payload.role
            }
        case USER_LOADING_FAILURE :
            return{
                ...state,
                isAuthenticated : false,
                isLoading : false,
                user : null,
                userRole : "",
            }
        default:
            return state
    }
}


export default authReducer;