/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableNativeFeedback, TouchableHighlight, } from 'react-native';

const data = [
   {
      id: '1',
      title: 'Pabna Studio',
      des: 'This is Description',
      color: '#BB2020',
   }, {
      id: '2',
      title: 'Rajshahi Studio',
      des: 'This is Description',
      color: '#121318',
   }, {
      id: '3',
      title: 'Dhaka Studio',
      des: 'This is Description',
      color: '#ff665a',
   }, {
      id: '4',
      title: 'Ishwardi Studio',
      des: 'This is Description',
      color: '#ff8c64',
   }, {
      id: '5',
      title: 'Khustia Studio',
      des: 'This is Description',
      color: '#3eb595',
   }, {
      id: '6',
      title: 'Ruppur Studio',
      des: 'This is Description',
      color: '#1A1A1A',
   }, {
      id: '7',
      title: 'Shatkhira Studio',
      des: 'This is Description',
      color: '#202731',
   }, {
      id: '8',
      title: 'Paris Studio',
      des: 'This is Description',
      color: '#D90B1C',
   }, {
      id: '9',
      title: 'Pakshi Studio',
      des: 'This is Description',
      color: '#F29F05',
   }, {
      id: '10',
      title: 'Chatmohor Studio',
      des: 'This is Description',
      color: '#184059',
   },

];



function MealCategoriesScreen(props) {
   const renderItems = (itemData) => {
      return (
         <TouchableNativeFeedback style={style.touchStyle}>
            <View style={{ ...style.renderView, ...{ backgroundColor: itemData.item.color } }}>
               <Text numberOfLines={2} style={style.renderText}>{itemData.item.title}</Text>
            </View>
         </TouchableNativeFeedback>
      );
   };
   // main function
   return (

      <View>
         <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderItems} />
      </View>
   );
}
const style = StyleSheet.create({

   renderText: {
      alignContent: 'center',
      textAlignVertical: 'center',
      textAlign: 'center',
      height: 150,
      color: '#fff',
      fontSize: 20,
      padding: 10,
      lineHeight: 30
   },
   renderView: {
      display: 'flex',
      flex: 1,
      margin: 15,
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
