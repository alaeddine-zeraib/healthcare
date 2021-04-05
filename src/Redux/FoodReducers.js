
import FoodList from "./FoodList.json";
import { ADD_FOOD } from "./FoodTypes";

const FoodReducers = (state = FoodList, action) => {
    switch(action.type){
        case ADD_FOOD:
            console.log("Add Grocery Clicked");
            return state;
        default:
            return state;
    }
}

export default FoodReducers;
