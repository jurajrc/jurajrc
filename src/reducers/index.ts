import { combineReducers } from "redux";
import openNavReducer from "./openNav";
import showNavReducer from "./showNav";

const allReducers = combineReducers({
    isOpenNav: openNavReducer,
    isShowNav: showNavReducer
})

export default allReducers