/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

import { MEALS } from '../data/dummyData';
import AntDesign from 'react-native-vector-icons/AntDesign';




function MealsDetailsPage({ route, navigation }) {
   const { id, title, color } = route.params;
   const [Title, setTitle] = useState();
   const [Id, setId] = useState();
   const [BgColor, setBgColor] = useState();
   const [AddFavList, setAddFavList] = useState(false)



   useEffect(() => {
      setTitle(title)
      setId(id)
      setBgColor(color)

   }, [])

   const favFun = () => {
      setAddFavList(pre => !pre)
   }
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




   var data = MEALS.find(meals => meals.id === Id);

   return (
      <ScrollView >
         <StatusBar backgroundColor={BgColor} />

         <View>
            <Image style={style.HeartSVG} source={{ uri: data?.imageUrl }} />
            <View style={style.CardBottom}>
               <Text style={{ ...style.durationText, ...{ color: BgColor } }}>
                  {data?.duration}m
               </Text>

               <Text style={{ ...style.affordability, ...{ color: BgColor } }}>
                  {data?.affordability}
               </Text>
               <Text style={{ ...style.complexity, ...{ color: BgColor } }}>
                  {data?.complexity}
               </Text>
            </View>
            <View style={style.ingredientsView}>
               <Text style={style.renderHeaders}>Ingredients</Text>
               {
                  data?.ingredients.map((listIng, index) =>
                  (
                     <TouchableNativeFeedback key={index}>
                        <View style={style.ingView} >
                           <Text style={{ fontSize: 16 }}> {listIng}</Text>
                        </View>
                     </TouchableNativeFeedback>
                  ))
               }
            </View>


            <View style={style.ingredientsView}>
               <Text style={style.renderHeaders}>Steps</Text>
               {
                  data?.steps.map((listIng, index) =>
                  (
                     <TouchableNativeFeedback key={index}>
                        <View style={{ ...style.ingView, ...{ alignItems: 'flex-start' } }} >
                           <Text style={{ fontSize: 16 }}>#{index + 1}. {listIng}</Text>
                        </View>
                     </TouchableNativeFeedback>
                  ))
               }
            </View>







         </View>
      </ScrollView>
   );
}
const style = StyleSheet.create({
   ingView: {
      flex: 1,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 12,
      alignItems: 'center',

   },
   ingredientsView: {
      marginTop: 10
   },
   renderHeaders: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 1.7,
      marginBottom: 10,
   },
   durationText: {

      fontSize: 18,
      paddingLeft: 20,
      paddingBottom: 20,

   },
   affordability: {

      fontSize: 18,
      paddingBottom: 20,
      textTransform: 'capitalize',
   },
   complexity: {

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
      paddingTop: '5%',
      paddingBottom: '5%',
   },
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
      width: "100%",
      height: 240,


   }
})




export default MealsDetailsPage;
