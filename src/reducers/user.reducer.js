import {userConstants } from "../action/constants"

const initState = {
    message:'',
    result:null,
    loading:false,
    error:null
}

export default (state=initState,action) => {
  switch(action.type){
      case userConstants.REGISTER_REQUEST:
      state = {
          ...state,
          loading:true
      }
      break;
      case userConstants.REGISTER_SUCCESS:
          state = {
              ...state,
              message:action.payload.message,
              result:action.payload.result,
              loading:false    
          }
      break;
      case userConstants.REGISTER_FAILURE:
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