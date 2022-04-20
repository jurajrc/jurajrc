import { combineReducers } from "redux";
import openNavReducer from "./openNav";

const allReducers = combineReducers({
    isOpenNav: openNavReducer,
})

export default allReducers