import {createStore} from "redux";
import FoodReducer from "./FoodReducer";
import rootReducer from "./Reducers";
import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//     FoodReducers
// });

const Store = createStore(rootReducer);

export default Store;
