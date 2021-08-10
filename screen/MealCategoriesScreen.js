/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native';
import { Categoires } from '../data/dummyData';




function MealCategoriesScreen({ navigation }) {

   const onclickAlert = (item) => {
      const succ = Alert.alert('Hey!', `You have clicked on ${item.title}`, [{ text: 'Okay', style: 'destructive' }]);

      navigation.navigate('Meals', {
         id: item.id,
         title: item.title
      })


   };




   const renderItems = (itemData) => {
      return (
         <TouchableNativeFeedback
            style={style.touchStyle}
            onPress={() => onclickAlert(itemData.item)}>
            <View style={{ ...style.renderView, ...{ backgroundColor: itemData.item.color } }}>
               <Text numberOfLines={2} style={style.renderText}>{itemData.item.title} </Text>
            </View>
         </TouchableNativeFeedback>
      );
   };
   // main function
   return (

      <View >
         <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={Categoires} renderItem={renderItems} />
      </View>
   );
}
const style = StyleSheet.create({

   renderText: {
      alignContent: 'center',
      textAlignVertical: 'center',
      textAlign: 'center',
      height: 130,
      color: '#fff',
      fontSize: 16,
      padding: 10,
      lineHeight: 30,
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



export default MealCategoriesScreen;
