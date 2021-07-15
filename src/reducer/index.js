import { combineReducers } from "redux";
import postData from "./postReducer";
import photoData from "./photosReducer";

const rootReducer = combineReducers({
        postData,
        photoData
});

export default rootReducer;     