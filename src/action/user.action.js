import axios from "../helpers/axios"
import { userConstants } from "./constants"

export const userRegister = (user) =>{
    return async (dispatch) => {

        dispatch({type:userConstants.REGISTER_REQUEST});
        await axios.post('/admin/signUp',{...user}).then(res=>{
            if(res.data.status === 200){
                const {message,result} = res.data;
                dispatch({
                    type:userConstants.REGISTER_SUCCESS,
                    payload:{
                        message,result
                    }
               }) 
            }else{
                    dispatch({
                        type:userConstants.REGISTER_FAILURE,
                        payload:{
                            error:res.data
                        }
                    })
                
            }
        }).catch((err)=>{
            dispatch({
                type:userConstants.REGISTER_FAILURE,
                payload:{
                    error:err.response.data
                }
            })
        })
        

    }
}