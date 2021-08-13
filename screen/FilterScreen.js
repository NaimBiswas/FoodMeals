/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import ShowRenderData from '../components/ShowRenderData';
import { MEALS } from '../data/dummyData';

function FilterScreen({ navigation }) {
   useEffect(() => {
      navigation.setOptions({
         headerLeft: () => (
            <Feather name={'align-left'} size={26} color={'#fff'} style={{ marginLeft: 16 }} onPress={() => navigation.toggleDrawer()} />
         ),
      });

   }, [])


   const data = MEALS







   return (
      <ShowRenderData data={data} navigation={navigation} />
   )
}

export default FilterScreen
