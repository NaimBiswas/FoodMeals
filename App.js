/* eslint-disable prettier/prettier */
import * as React from 'react';

import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealCategoriesScreen from './screen/MealCategoriesScreen'
import CategoryMealsScreen from './screen/CategoryMealsScreen'
import MealsDetailsPage from './screen/MealsDetailsPage';
import MealsNavigator from './navigation/MealsNavigator';
import TabNavigator from './navigation/MealsNavigator';



const Stack = createNativeStackNavigator();


function App() {
   return (


      <TabNavigator />



   );
}

export default App;
