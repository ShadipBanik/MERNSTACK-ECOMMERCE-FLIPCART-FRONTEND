import { authConstants } from "../action/constants"

const initState = {
    token:null,
    user:{},
    authenticate:false,
    authenticating:false,
    error:null
}

export default (state=initState,action) => {
  switch(action.type){
      case authConstants.LOGIN_REQUEST:
      state = {
          ...state,
          authenticating:true
      }
      break;
      case authConstants.LOGIN_SUCCESS:
          state = {
              ...state,
              user:action.payload.user,
              token:action.payload.token,
              authenticate:true    
          }
      break;
      case authConstants.LOGIN_FAILURE:
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