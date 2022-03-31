import axios from "../helpers/axios"
import { authConstants } from "./constants"

export const login = (user) =>{
    return async (dispatch) => {

        dispatch({type:authConstants.LOGIN_REQUEST});
        await axios.post('/admin/signIn',{...user}).then(res=>{
            if(res.data.status === 200){
                const {token,user} = res.data;
                localStorage.setItem('token','Bearer '+token);
                localStorage.setItem('user',JSON.stringify(user));
   
                dispatch({
                    type:authConstants.LOGIN_SUCCESS,
                    payload:{
                        token,user
                    }
               }) 
            }else{
                    dispatch({
                        type:authConstants.LOGIN_FAILURE,
                        payload:{
                            error:res.data
                        }
                    })
                
            }
        }).catch((err)=>{
            dispatch({
                type:authConstants.LOGIN_FAILURE,
                payload:{
                    error:err.response.data
                }
            })
        })
        

    }
}
