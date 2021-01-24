import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import soreReducer from "./reducer";

const rootReducer = combineReducers({
    bowlStore: soreReducer,
    firebase: firebaseReducer,
});

export default rootReducer;