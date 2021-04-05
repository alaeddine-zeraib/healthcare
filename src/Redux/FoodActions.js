import { ADD_FOOD } from './FoodTypes'

export const FoodActions = (id) => {
   return {
       type: ADD_FOOD,
       id
   }
}
