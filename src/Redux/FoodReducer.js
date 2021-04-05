
import FoodList from "./FoodList.json";
import { ADD_FOOD } from "./FoodTypes";

const FoodReducers = (state = FoodList, action) => {
    switch(action.type){
        case ADD_FOOD:
            console.log("Add Grocery Clicked", action);
            let food = state.filter(item=>item.id !== action.id); // to delet the food from food item
            return food;
        default:
            return state;
    }
}

export default FoodReducers;
