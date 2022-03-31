import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
const rootReducers=combineReducers({
    auth:authReducer,
    user:userReducer,
    category:categoryReducer,
    product:productReducer
})

export default rootReducers;