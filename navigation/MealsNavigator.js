/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoriesScreen from '../screen/MealCategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealsDetailsPage from '../screen/MealsDetailsPage';
import FavMealsScreen from '../screen/FavMealsScreen';
import FilterScreen from '../screen/FilterScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
function MealsNavigator() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Home" component={MealCategoriesScreen}
            options={{
               title: 'My Home',
               headerStyle: {
                  backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',

               },
               headerLeft: () => (
                  <Feather name={'align-left'} size={26} color={'#fff'} style={{ marginRight: 14 }} />
               ),
            }} />

         <Stack.Screen name="Meals" component={CategoryMealsScreen}
            options={{

               title: 'Meals',
               headerStyle: {
                  backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                  fontWeight: 'bold',
               },

            }} />

         <Stack.Screen name="MealDetails" component={MealsDetailsPage} options={{

            title: 'Meals Details',
            headerStyle: {
               backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
               fontWeight: 'bold',
            },


         }} />
      </Stack.Navigator>

   );
}
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
   return (
      <NavigationContainer>
         <Tab.Navigator
            screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Start') {
                     iconName = focused
                        ? 'android1'
                        : 'android';
                  } else if (route.name === 'Fav') {
                     iconName = focused ? 'heart' : 'hearto';
                  }

                  // You can return any component that you like here!
                  return <AntDesign name={iconName} size={20} color={focused ? '#fff' : '#1A1A1A'} />;
               },
               tabBarActiveTintColor: '#fff',
               tabBarInactiveTintColor: 'gray',
               tabBarActiveBackgroundColor: '#184059',
               tabBarInactiveBackgroundColor: '#fff',
            })}


         >
            <Tab.Screen name="Start" component={MealsNavigator} options={{
               headerShown: false,
               tabBarLabelStyle: {
                  fontSize: 13,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  paddingBottom: 3,
               },

            }} />
            <Tab.Screen name="Fav" component={FavMealsScreen}

               options={{
                  title: 'Favourite',
                  tabBarBadge: 3,
                  headerStyle: {
                     backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                     fontWeight: 'bold',
                  },
                  tabBarLabelStyle: {
                     fontSize: 13,
                     fontWeight: 'bold',
                     textTransform: 'uppercase',
                     paddingBottom: 3,

                  },
                  headerLeft: () => (
                     <Feather name={'align-left'} size={26} color={'#fff'} />
                  ),
                  headerLeftContainerStyle: {
                     paddingLeft: 16,
                  },

               }}

            />
         </Tab.Navigator>
      </NavigationContainer>
   );
};







export default TabNavigator;
