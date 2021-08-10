/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Button, Dimensions, Text, View } from 'react-native'

function CategoryMealsScreen({ route, navigation }) {
   const { id, title } = route.params
   const [Title, setTitle] = useState(title)
   navigation.setOptions({ title: Title })

   return (
      <View >
         <Text>{Title} meals screen </Text>


         <Button title="Go back" onPress={() => navigation.pop()} color="red" />

      </View>
   )
}

export default CategoryMealsScreen
