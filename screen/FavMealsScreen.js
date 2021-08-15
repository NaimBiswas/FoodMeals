/* eslint-disable prettier/prettier */
import React, { useEffect, useCallback } from 'react'
import {
   View, Text, SafeAreaView, TouchableNativeFeedback, Image, StatusBar, FlatList, StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { MEALS } from '../data/dummyData';
function FavMealsScreen({ navigation }) {




   const datas = useSelector(state => state.mealReducer.favoriteMeals);





   useEffect(() => {
      navigation.setOptions({
         headerStyle: {
            backgroundColor: '#1A1A1A'
         }
      })
   }, [])



   const renderItems = (itemData) => {
      return (

         <TouchableNativeFeedback
            style={style.touchStyle}
            onPress={() => navigation.navigate('MealDetails', {
               id: itemData.item.id,
               title: itemData.item.title,
               color: 'black',
            })}
         >

            <View style={{ ...style.renderView, ...{ backgroundColor: 'black' } }}>
               <Image style={style.tinyLogo} source={{
                  uri: itemData.item.imageUrl,
               }} />
               <Text numberOfLines={2} style={style.renderText}>
                  {itemData.item?.title}
               </Text>

               <View style={style.CardBottom}>
                  <Text style={style.durationText}>
                     {itemData.item?.duration}m
                   </Text>

                  <Text style={style.affordability}>
                     {itemData.item.affordability}
                  </Text>
                  <Text style={style.complexity}>
                     {itemData.item?.complexity}
                  </Text>


               </View>
            </View>
         </TouchableNativeFeedback>
      );
   };





   return (
      <View>
         <StatusBar
            animated={false}
            backgroundColor={'#1A1A1A'} />
         {
            datas.length !== 0 ?
               <FlatList showsVerticalScrollIndicator={false} data={datas} renderItem={renderItems} />
               :
               <View>
                  <Text style={{ textAlign: 'center', marginTop: '50%', fontSize: 24, fontWeight: 'bold', color: 'red' }}>No Favorite items found</Text>
               </View>
         }
      </View>


   );
}

const style = StyleSheet.create({
   affordability: {
      color: '#fff',
      fontSize: 18,
      paddingBottom: 20,
      textTransform: 'capitalize',
   },
   complexity: {
      color: '#fff',
      fontSize: 18,
      paddingRight: 20,
      paddingBottom: 20,
      textTransform: 'capitalize',
   },
   CardBottom: {
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      justifyContent: 'space-between',
   },
   tinyLogo: {
      width: '100%',
      height: 150,
      borderRadius: 6,
   },
   durationText: {
      color: '#fff',
      fontSize: 18,
      paddingLeft: 20,
      paddingBottom: 20,

   },
   renderText: {
      alignContent: 'center',
      textAlignVertical: 'center',
      textAlign: 'center',
      height: 120,
      color: '#fff',
      fontSize: 16,
      padding: 10,

   },
   renderView: {
      display: 'flex',
      flex: 1,
      margin: 10,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 6,

   },
   touchStyle: {

   },
});
export default FavMealsScreen
