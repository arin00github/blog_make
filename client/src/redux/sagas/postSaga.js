import { POST_LOADING_FAILURE, POST_LOADING_REQUEST, POST_LOADING_SUCCESS } from '../types';
import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { push } from 'connected-react-router';


const loadPostAPI = () =>{
    return axios.get("http://localhost:7000/api/post")
}


function* loadPost (){
    try{
        const result = yield call(loadPostAPI)
        console.log(result,"result")
        yield put({
            type : POST_LOADING_SUCCESS,
            payload : result.data
        })

    }catch(err){
        yield put({
            type : POST_LOADING_FAILURE,
            payload : err
        })
        yield push("/")
    }

   
}

function* watchLoadPost(){
    yield takeEvery(POST_LOADING_REQUEST, loadPost)
}

export default function* postSaga(){
    yield all([fork(watchLoadPost),  ])
}