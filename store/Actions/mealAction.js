/* eslint-disable prettier/prettier */
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const ADD_FILTER = "ADD_FILTER"
export const toggleFavorie = ({ id }) => {
   return {
      type: TOGGLE_FAVORITE, mealId: id,
   }
}


export const filterFuction = ({ filter }) => {
   return {
      type: ADD_FILTER, allFilter: filter
   }
}