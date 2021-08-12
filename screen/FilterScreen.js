/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

function FilterScreen({ navigation }) {

   useEffect(() => {

      // set header option 
      navigation.setOptions({
         headerLeft: () => (
            <Feather name={'align-left'} size={26} color={'#fff'} style={{ marginLeft: 16 }} onPress={() => navigation.toggleDrawer()} />
         ),
      });

   }, [])
   return (
      <View>
         <Text>Hello </Text>
      </View>
   )
}

export default FilterScreen
