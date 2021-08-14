/* eslint-disable prettier/prettier */
import React from 'react'
import { MEALS } from '../../data/dummyData'
import { TOGGLE_FAVORITE } from '../Actions/mealAction';
const initialState = {
   meals: MEALS,
   filteredMeals: MEALS,
   favoriteMeals: [],
   addedOnFav: false
}
const MealReducer = (state = initialState, action) => {
   switch (action.type) {
      case TOGGLE_FAVORITE:
         const existingIitem = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
         if (existingIitem >= 0) {
            const updatedMeals = [...state.favoriteMeals]

            updatedMeals.splice(existingIitem, 1)
            return { ...state, favoriteMeals: updatedMeals, addedOnFav: false, }
         } else {
            const meal = state.meals.find(meals => meals.id === action.mealId)
            return { ...state, favoriteMeals: state.favoriteMeals.concat(meal), addedOnFav: false, }
         }
      default:
         return state;
   }
   return state;
}

export default MealReducer
