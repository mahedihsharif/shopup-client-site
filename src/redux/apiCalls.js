import { loginStart, loginSuccess, loginFailure } from "./userRedux"
import axios from 'axios';
 
export const login= async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res= await axios.post("https://shopup-ecommerce.herokuapp.com/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};