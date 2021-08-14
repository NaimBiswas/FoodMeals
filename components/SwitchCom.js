/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

function SwitchCom({ isEnable, value, onValueChange, lable }) {
   return (
      <View>
         <View style={style.filterView}>


            <Text style={style.FilterText}>{lable}</Text>
            <Switch
               trackColor={{ false: "#767577", true: "#03A64A" }}
               thumbColor={isEnable ? "#3EB595" : "#f4f3f4"}
               value={value}
               onValueChange={onValueChange}
            />
         </View>
      </View>
   )
}

const style = StyleSheet.create({
   Filtertitle: {
      textAlign: 'center',
      fontSize: 22, marginTop: 10, marginBottom: 10
   },
   filterView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 15,
      marginRight: 13,
      marginBottom: 7,

   },
   FilterText: {
      fontSize: 14,
      letterSpacing: 1,
      textTransform: 'capitalize'

   }
})
export default SwitchCom
