import {productConstants} from "../action/constants"

const initState = {
    message:'',
    products:[],
    loading:false,
    successProduct:null,
    error:null
}

export default (state=initState,action) => {
    console.log(action)
  switch(action.type){
      case productConstants.PRODUCT_GET_REQUEST:
      state = {
          ...state,
          loading:true
      }
      break;
      case productConstants.PRODUCT_GET_SUCCESS:
          state = {
              ...state,
              message:action.payload.message,
              products:action.payload.result,
              loading:false    
          }
      break;
      case productConstants.PRODUCT_GET_FAILURE:
          state={
              ...state,
              error:action.payload.error,
              loading:false
          } 
      break;
      case productConstants.PRODUCT_POST_REQUEST:
      state = {
          ...state,
          loading:true
      }
      break;
      case productConstants.PRODUCT_POST_SUCCESS:
          state = {
              ...state,
              message:action.payload.message,
              successProduct:action.payload.result,
              loading:false    
          }
      break;
      case productConstants.PRODUCT_POST_FAILURE:
          state={
              ...state,
              error:action.payload.error,
              authenticate:false
          } 
      break;  
      default:
          state={
              ...state
          } 
      break;        
  }
  return state;
}