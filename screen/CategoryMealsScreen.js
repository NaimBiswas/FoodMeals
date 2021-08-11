/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Button, Dimensions, Text, View } from 'react-native'
import { Categoires } from '../data/dummyData';





function CategoryMealsScreen({ route, navigation }) {
   const { id, title } = route.params
   const [Title, setTitle] = useState(title)
   const [Id, setId] = useState(id)
   navigation.setOptions({ title: Title })

   var newData = Categoires.find(cat => cat.id === Id)



   return (
      <View >
         <Text>{newData.title} meals screen </Text>


         <Button title="Go back" onPress={() => navigation.pop()} color="red" />

      </View>
   )
}

export default CategoryMealsScreen
