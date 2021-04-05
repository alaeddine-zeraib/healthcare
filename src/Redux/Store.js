import {createStore} from "redux";
import FoodReducers from "./FoodReducers";

const Store = createStore(FoodReducers);

export default Store;
