import { combineReducers } from "redux";
import countReducer from "./reducer";

const rootReducer = combineReducers({countReducer});

export default rootReducer;