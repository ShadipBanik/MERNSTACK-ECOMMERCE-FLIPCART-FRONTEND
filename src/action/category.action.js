import { toast } from "react-toastify";
import axios from "../helpers/axios"
import { categoryConstants } from "./constants"

export const Category = () =>{
    return async (dispatch) => {

        dispatch({type:categoryConstants.CATEGORY_REQUEST});
        await axios.get('/category/getAll').then(res=>{
            if(res.data.status === 200){
                const {result} = res.data;
                dispatch({
                    type:categoryConstants.CATEGORY_SUCCESS,
                    payload:{
                        result
                    }
               }) 
            }else{
                    dispatch({
                        type:categoryConstants.CATEGORY_FAILURE,
                        payload:{
                            error:res.data
                        }
                    })
                
            }
        }).catch((err)=>{
            dispatch({
                type:categoryConstants.CATEGORY_FAILURE,
                payload:{
                    error:err.response.data
                }
            })
        })
        

    }
}

export const createCategory = (catgoryData) =>{
    const token = localStorage.getItem('token')
    return async (dispatch) => {
        
        dispatch({type:categoryConstants.ADD_CATEGORY_REQUEST});
        await axios.post('/category/create',catgoryData,{headers:{'Authorization':token}}).then(res=>{
            const {result,message} = res.data;
            if(res.data.status === 200){               
                toast.success(message,{position:'top-right',type:'success',autoClose:3000,theme:'colored'});
                dispatch({
                    type:categoryConstants.ADD_CATEGORY_SUCCESS,
                    payload:{
                        result,message
                    }
               }) 
            }else{

                toast.error(message,{position:'top-right',type:'error',autoClose:3000,theme:'colored'});
            
                    dispatch({
                        type:categoryConstants.ADD_CATEGORY_FAILURE,
                        payload:{
                            error:res.data
                        }
                    })
                
            }
        }).catch((err)=>{
            toast.error(err.response.data.error.message,{position:'top-right',type:'error',autoClose:3000,theme:'colored'});
            dispatch({
                type:categoryConstants.ADD_CATEGORY_FAILURE,
                payload:{
                    error:err.response.data
                }
            })
        })
        

    }
}
