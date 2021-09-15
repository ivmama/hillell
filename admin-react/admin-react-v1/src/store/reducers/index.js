import reducerForm from "./reducer-form";
import reducerList from "./reducer-list";
import {combineReducers} from "redux"
export default combineReducers(reducerForm, reducerList);