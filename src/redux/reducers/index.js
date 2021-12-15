import formReducer from "./form";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ form: formReducer });

export default rootReducer;