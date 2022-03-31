import axios from "../helpers/axios"
import { productConstants } from "./constants"

export const AllProduct = () =>{
    return async (dispatch) => {

        dispatch({type:productConstants.PRODUCT_GET_REQUEST});
        await axios.get('/product/getAll').then(res=>{
            if(res.data.status === 200){
                const {result} = res.data;
                dispatch({
                    type:productConstants.PRODUCT_GET_SUCCESS,
                    payload:{
                        result
                    }
               }) 
            }else{
                    dispatch({
                        type:productConstants.PRODUCT_GET_FAILURE,
                        payload:{
                            error:res.data
                        }
                    })
                
            }
        }).catch((err)=>{
            dispatch({
                type:productConstants.PRODUCT_GET_FAILURE,
                payload:{
                    error:err.response.data
                }
            })
        })
        

    }
}

export const createProduct = (productData) =>{
    const token = localStorage.getItem('token')
    return async (dispatch) => {
        
        dispatch({type:productConstants.PRODUCT_POST_REQUEST});
        await axios.post('/product/create',productData,{headers:{'Authorization':token}}).then(res=>{
            if(res.data.status === 200){
                const {result,message} = res.data;
                dispatch({
                    type:productConstants.PRODUCT_POST_SUCCESS,
                    payload:{
                        result,message
                    }
               }) 
            }else{
                    dispatch({
                        type:productConstants.PRODUCT_POST_FAILURE,
                        payload:{
                            error:res.data
                        }
                    })
                
            }
        }).catch((err)=>{
            dispatch({
                type:productConstants.PRODUCT_POST_FAILURE,
                payload:{
                    error:err.response.data
                }
            })
        })
        

    }
}
