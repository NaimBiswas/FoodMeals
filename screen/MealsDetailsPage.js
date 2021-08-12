/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import svgIcon from '../svgIcons/Heart.svg'



function MealsDetailsPage({ route, navigation }) {
   const { id, title, color } = route.params;
   const [Title, setTitle] = useState(title);
   const [Id, setId] = useState(id);
   const [BgColor, setBgColor] = useState(color);
   const [AddFavList, setAddFavList] = useState(false)


   const favFun = () => {
      setAddFavList(pre => !pre)
   }


   // set header option 
   navigation.setOptions({
      title: Title,
      headerStyle: {
         backgroundColor: BgColor,
      },
      headerRight: () => (
         <Text onPress={favFun}>
            {
               AddFavList ?
                  <AntDesign name={'heart'} size={26} color={"red"} />
                  :
                  <AntDesign name={'hearto'} size={26} color={"#fff"} />
            }
         </Text>
      ),
   });



   const data = MEALS.find(meals => meals.id === Id);


   return (
      <ScrollView style={{ backgroundColor: 'gray' }}>
         <StatusBar backgroundColor={BgColor} />

         <View>
            <Text>
               <Image style={style.HeartSVG} source={require('../svgIcons/Heart.svg')} />
               Meal Details page</Text>
         </View>
      </ScrollView>
   );
}
const style = StyleSheet.create({
   headerRightText: {
      fontSize: 14,
      color: '#fff',
      backgroundColor: 'red',
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 8,
   },
   HeartSVG: {
      height: 140,
      width: 140,


   }
})
export default MealsDetailsPage;
