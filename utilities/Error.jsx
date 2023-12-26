import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export const Error = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'column',gap:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontFamily:'montserrat-light'}}>
                Something Went Wrong!
            </Text>
            <Entypo name="emoji-sad" size={30} color="black" />
        </View>
    </SafeAreaView>
  )
}
