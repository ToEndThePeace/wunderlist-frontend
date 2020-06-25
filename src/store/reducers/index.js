import { combineReducers } from "redux";
import { reducer as task } from "./taskReducer";
import { reducer as auth } from "./authReducer";

export default combineReducers({ task, auth });
