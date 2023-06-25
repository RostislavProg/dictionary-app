import { combineReducers } from "redux";
import {creationWordsReducer} from "./creationWordsReducer";
import {changeModalReducer} from "./changeModalReducer";
import {autorisationReducer} from "./autorisationReducer";

export const rootReducer = combineReducers({
    creationWordsReducer,
    changeModalReducer,
    autorisationReducer
});