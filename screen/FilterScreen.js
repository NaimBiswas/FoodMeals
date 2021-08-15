/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert, SafeAreaView, ScrollView, ScrollViewBase, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { CommonActions } from '@react-navigation/native';
import ShowRenderData from '../components/ShowRenderData';
import SwitchCom from '../components/SwitchCom';
// import { MEALS } from '../data/dummyData';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterFuction } from '../store/Actions/mealAction';

function FilterScreen({ route, navigation }) {
   const [isGlutenFree, setIsGlutenFree] = useState(false);
   const [isVegetarian, setVegetarian] = useState(false);
   const [isVegan, setVegan] = useState(false);
   const [isLactoseFree, setLactoseFree] = useState(false);
   const [isEnable, setEnable] = useState(false);
   const [isEnable2, setEnable2] = useState(false);
   const [isEnable3, setEnable3] = useState(false);
   const [isEnable4, setEnable4] = useState(false);
   const data = useSelector(state => state.mealReducer.filteredMeals)


   console.log(data.length);
   const dispatch = useDispatch()
   const saveFilter = useCallback(() => {
      const data2 = {
         isGlutenFree: isGlutenFree,
         isLactoseFree: isLactoseFree,
         isVegan: isVegan,
         isVegetarian: isVegetarian,
      };


      dispatch(filterFuction({
         filter: data2
      }))


      navigation.setParams({ save: data2 });
   }, [dispatch, isGlutenFree, isLactoseFree, isVegan, isVegetarian, navigation]
   );





   useEffect(() => {

      navigation.setOptions({
         headerLeft: () => (
            <Feather name={'align-left'} size={26} color={'#fff'} style={{ marginLeft: 16 }} onPress={() => navigation.toggleDrawer()} />
         ),
         headerRight: () => (
            <Feather name={'save'} size={26} color={'#fff'} style={{ marginRight: 18 }} onPress={saveFilter} />
         ),

      });

   }, [navigation, saveFilter]);




   // const filterData = navigation.dispatch(CommonActions.getParams('filterData'))
   if (route.params) {
      const { save } = route.params;
   }

   if (data.length === 0) {
      return (
         <ScrollView>
            <View style={{ marginBottom: '25%' }}>
               <Text style={style.Filtertitle}>Available filters / Restriction  </Text>
               <SwitchCom
                  lable={'Gluten Free'}
                  isEnable={isEnable}
                  value={isGlutenFree}
                  onValueChange={(newValue) => {
                     setIsGlutenFree(newValue);
                     setEnable(newValue);
                  }} />

               <SwitchCom
                  lable={'Vegetarian'}
                  isEnable={isEnable2}
                  value={isVegetarian}
                  onValueChange={(newValue) => {
                     setVegetarian(newValue);
                     setEnable2(newValue);
                  }} />


               <SwitchCom
                  lable={'Vegan'}
                  isEnable={isEnable3}
                  value={isVegan}
                  onValueChange={(newValue) => {
                     setVegan(newValue);
                     setEnable3(newValue);
                  }} />

               <SwitchCom
                  lable={'Lactose Free'}
                  isEnable={isEnable4}
                  value={isLactoseFree}
                  onValueChange={(newValue) => {
                     setLactoseFree(newValue);
                     setEnable4(newValue);
                  }} />


            </View>
            <View style={{ alignContent: 'center', justifyContent: 'center', flex: 1 }}>
               <Text style={{ textAlign: 'center', fontSize: 22, color: 'red', fontStyle: 'italic' }}>No Items found with those filters</Text>
               <Text style={{ textAlign: 'center', fontSize: 150, color: 'red' }}>🤷‍♀️</Text>
            </View>
         </ScrollView>
      )
   }


   return (
      <ScrollView style={{ backgroundColor: "#f1f1f1", flexDirection: 'column' }}>
         <View>
            <Text style={style.Filtertitle}>Available filters / Restriction  </Text>
            <SwitchCom
               lable={'Gluten Free'}
               isEnable={isEnable}
               value={isGlutenFree}
               onValueChange={(newValue) => {
                  setIsGlutenFree(newValue);
                  setEnable(newValue);
               }} />

            <SwitchCom
               lable={'Vegetarian'}
               isEnable={isEnable2}
               value={isVegetarian}
               onValueChange={(newValue) => {
                  setVegetarian(newValue);
                  setEnable2(newValue);
               }} />


            <SwitchCom
               lable={'Vegan'}
               isEnable={isEnable3}
               value={isVegan}
               onValueChange={(newValue) => {
                  setVegan(newValue);
                  setEnable3(newValue);
               }} />

            <SwitchCom
               lable={'Lactose Free'}
               isEnable={isEnable4}
               value={isLactoseFree}
               onValueChange={(newValue) => {
                  setLactoseFree(newValue);
                  setEnable4(newValue);
               }} />


         </View>

         <ShowRenderData data={data} navigation={navigation} />


      </ScrollView>
   );
}




const style = StyleSheet.create({
   Filtertitle: {
      textAlign: 'center',
      fontSize: 22, marginTop: 10, marginBottom: 10,
   },
   filterView: {
      flex: 1,
      justifyContent: 'space-between',
      marginLeft: 15,
      marginRight: 13,
      marginBottom: 7,

   },
   FilterText: {
      fontSize: 14,
      letterSpacing: 1,
      textTransform: 'capitalize',

   },
});
export default FilterScreen;
