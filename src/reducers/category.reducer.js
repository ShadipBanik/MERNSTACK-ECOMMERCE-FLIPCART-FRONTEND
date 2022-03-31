import {categoryConstants} from "../action/constants"

const initState = {
    message:'',
    result:[],
    loading:false,
    successResult:null,
    error:null
}

export default (state=initState,action) => {
    console.log(action)
  switch(action.type){
      case categoryConstants.CATEGORY_REQUEST:
      state = {
          ...state,
          loading:true
      }
      break;
      case categoryConstants.CATEGORY_SUCCESS:
          state = {
              ...state,
              message:action.payload.message,
              result:action.payload.result,
              loading:false    
          }
      break;
      case categoryConstants.CATEGORY_FAILURE:
          state={
              ...state,
              error:action.payload.error,
              loading:false
          } 
      break;
      case categoryConstants.ADD_CATEGORY_REQUEST:
      state = {
          ...state,
          loading:true
      }
      break;
      case categoryConstants.ADD_CATEGORY_SUCCESS:
          state = {
              ...state,
              message:action.payload.message,
              successResult:action.payload.result,
              loading:false    
          }
      break;
      case categoryConstants.ADD_CATEGORY_FAILURE:
          state={
              ...state,
              error:action.payload.error,
              loading:false
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