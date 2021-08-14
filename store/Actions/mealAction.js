/* eslint-disable prettier/prettier */
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorie = ({ id }) => {
   return {
      type: TOGGLE_FAVORITE, mealId: id,
   }
}