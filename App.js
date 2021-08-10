/* eslint-disable prettier/prettier */
import * as React from 'react';

import { View, Text, SafeAreaView } from 'react-native';
import MealCategoriesScreen from './screen/MealCategoriesScreen'



function App() {

   return (
      // <SafeAreaView>
      //    <NavigationContainer>
      //       <Stack.Navigator>
      //          <Stack.Screen name="HomeScreen" component={MealCategoriesScreen} />
      //       </Stack.Navigator>
      //    </NavigationContainer>
      // </SafeAreaView>
      <MealCategoriesScreen />
   );
}

export default App;
