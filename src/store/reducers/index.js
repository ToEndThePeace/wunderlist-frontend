import { combineReducers } from "redux";
import { reducer as task } from "./taskReducer";

export default combineReducers({ task });
