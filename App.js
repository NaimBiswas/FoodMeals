/* eslint-disable prettier/prettier */
import * as React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoriesScreen from './screen/MealCategoriesScreen'

const Stack = createNativeStackNavigator();

function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={MealCategoriesScreen} options={{
               title: 'My Home',
               headerStyle: {
                  backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },
            }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App;
