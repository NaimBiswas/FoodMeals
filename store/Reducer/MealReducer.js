/* eslint-disable prettier/prettier */
import React from 'react'
import { MEALS } from '../../data/dummyData'
const initialState = () => {
   meals: MEALS;
   filteredMeals: MEALS;
   favoriteMeals: [];
}
function MealReducer(state = initialState, action) {
   return state;
}

export default MealReducer
