import { ADD_FOOD } from './FoodTypes'

export const AddFoodById = (id) => {
   return {
       type: ADD_FOOD,
       id
   }
}
