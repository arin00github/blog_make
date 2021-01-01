import { USER_LOADING_REQUEST } from '../../redux/types';
import store from '../../store';

 
const LoadUser = () =>{
    try{
        store.dispatch({
            type : USER_LOADING_REQUEST,
            payload : localStorage.getItem("token")
        })

    }catch(err){
        console.log(err)
    }

}


export default LoadUser;