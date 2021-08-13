/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import {
   View, Text, SafeAreaView, TouchableNativeFeedback, Image, StatusBar, FlatList, StyleSheet
} from 'react-native'
import { MEALS } from '../data/dummyData';
function FavMealsScreen({ navigation }) {
   const datas = MEALS.filter(meal => meal.categoryIds.indexOf('c2') >= 0);

   useEffect(() => {
      navigation.setOptions({
         headerStyle: {
            backgroundColor: '#f4511e'
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
               color: '#f4511e',
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
            backgroundColor={'#f4511e'} />
         <FlatList showsVerticalScrollIndicator={false} data={datas} renderItem={renderItems} />
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
