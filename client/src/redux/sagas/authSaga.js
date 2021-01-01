import axios from 'axios';
import { all, call, fork, put, takeEvery }  from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, REGISTER_SUCCESS, REGISTER_REQUEST, REGISTER_FAILURE, CLEAR_ERROR_SUCCESS, CLEAR_ERROR_FAILURE, CLEAR_ERROR_REQUEST
} from '../types';

//Login

const loginUserAPI = (loginData) => {
    console.log(loginData, "loginData")
    const config = {
        headers:{
            "Content-Type" : "application/json"
        }
    }

    return axios.post('http://localhost:7000/api/auth', loginData, config)
}

function* loginUser(action){
    try{
        const result = yield call(loginUserAPI, action.payload)
        console.log(result)
        yield put({
            type : LOGIN_SUCCESS,
            payload : result.data
        })
    }catch(err){
        yield put({
            type : LOGIN_FAILURE,
            payload : err.response
        })
    }
}

function* watchLoginUser(){
    yield takeEvery(LOGIN_REQUEST, loginUser)
}



function* logout(){
    try{
        yield put({
            type : LOGOUT_SUCCESS
        })
    }catch(err){
        yield put({
            type : LOGOUT_FAILURE
        })
        console.log(err)
    }
}


function* watchLogout(){
    yield takeEvery(LOGOUT_REQUEST, logout)
}


//register
const registerUserAPI = (req) => {
    console.log(req, "req")

    return axios.post('http://localhost:7000/api/user', req)
}

function* registerUser(action){
    try{
        const result = yield call(registerUserAPI, action.payload)
        console.log(result)
        yield put({
            type : REGISTER_SUCCESS,
            payload : result.data
        })
    }catch(err){
        yield put({
            type : REGISTER_FAILURE,
            payload : err.response
        })
    }
}

function* watchRegisterUser(){
    yield takeEvery(REGISTER_REQUEST, registerUser)

}

//register


function* clearError(){
    try{
        
        yield put({
            type : CLEAR_ERROR_SUCCESS
        })
    }catch(err){
        yield put({
            type : CLEAR_ERROR_FAILURE
        })
    }
}

function* watchClearError(){
    yield takeEvery(CLEAR_ERROR_REQUEST, clearError)

}



export default function* authSaga(){
    yield all([
        fork(watchLoginUser), fork(watchLogout), fork(watchRegisterUser), fork(watchClearError)
    ])
}