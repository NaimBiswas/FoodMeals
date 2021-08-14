/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoriesScreen from '../screen/MealCategoriesScreen';
import CategoryMealsScreen from '../screen/CategoryMealsScreen';
import MealsDetailsPage from '../screen/MealsDetailsPage';
import FavMealsScreen from '../screen/FavMealsScreen';
import FilterScreen from '../screen/FilterScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Animated from 'react-native-reanimated';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();
function MealsNavigator({ navigation }) {
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
                  <Feather name={'align-left'} size={26} color={'#fff'} style={{ marginRight: 14 }} onPress={() => navigation.toggleDrawer()} />
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

// tab navigator
const Tab = createBottomTabNavigator();
const TabNavigator = ({ navigation }) => {

   const favMeals = useSelector(state => state.mealReducer.favoriteMeals)
   const favMealsLength = favMeals.length
   return (


      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarStyle: { height: 55 },
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
               tabBarBadge: favMealsLength,
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
                  <Feather onPress={() => navigation.toggleDrawer()} name={'align-left'} size={26} color={'#fff'} />
               ),
               headerLeftContainerStyle: {
                  paddingLeft: 16,
               },

            }}

         />
      </Tab.Navigator>


   );
};
const CustomDawaerOption = ({ navigation }) => {
   return (
      <Entypo name={"cross"} size={23} color='red' />


   )
}
// dawer naviagtion
const Drawer = createDrawerNavigator();
const DwareNavigator = () => {

   return (

      <NavigationContainer>

         <Drawer.Navigator
            screenOptions={({ route }) => ({

               drawerIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                     iconName = 'home';
                  } else if (route.name === 'Filter') {
                     iconName = 'filter';
                  }

                  return <AntDesign name={iconName} size={23} color={focused ? 'red' : '#FFF'} />;
               },
               drawerStyle: {
                  backgroundColor: '#202731'

               },
               drawerActiveBackgroundColor: "yellow",
               drawerInactiveTintColor: "#fff",
               drawerActiveTintColor: '#000',
               drawerType: 'slide',
               drawerHideStatusBarOnOpen: false,
               drawerStatusBarAnimation: 'fade'
            })}
         >




            <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Filter" component={FilterScreen}

               options={{

                  title: 'Filters',
                  headerStyle: {
                     backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                     fontWeight: 'bold',

                  },

               }}
            />
         </Drawer.Navigator>




      </NavigationContainer >
   );
};


export default DwareNavigator;
