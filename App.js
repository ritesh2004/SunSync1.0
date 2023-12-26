import React, { useEffect } from 'react'
import { Tabs } from './utilities/Tabs'
import { useFonts } from 'expo-font'
import { View } from 'react-native';
import { ContextProvider } from './src/context/Appcontext';
import { Loading } from './utilities/Loading';


const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'montserrat-light' : require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'montserrat-bold' : require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <Loading/>
  }
  return (
    <View style={{ flex: 1, fontFamily: 'poppins' }}>
      <ContextProvider>
        <Tabs />
      </ContextProvider>
    </View>
  )
}

export default App