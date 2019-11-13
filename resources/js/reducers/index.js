import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    LoginStatus: loginReducer
});

export default rootReducer;
