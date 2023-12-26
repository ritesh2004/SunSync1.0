import React, { useContext } from 'react'
import CurrentWeather from '../src/screens/CurrentWeather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { UpcomingWeather } from '../src/screens/UpcomingWeather'
import { Ionicons } from '@expo/vector-icons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Appcontext } from '../src/context/Appcontext'
import { Error } from './Error'

const Tab = createBottomTabNavigator();
export const Tabs = () => {
  const {error} = useContext(Appcontext);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home"
            }
            else if (route.name === "Upcoming") {
              iconName = "arrow-forward-circle-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#606C38',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle:{
            height:responsiveScreenHeight(6),
            backgroundColor:'#ffff'
          },
          headerStyle:{
            backgroundColor:'#FEFAE0'
          },
          headerTintColor:'#606C38',
          headerTitleStyle:{
            fontFamily:'poppins'
          }
        })}
      >
        <Tab.Screen name='Home' options={{ headerShown: false, tabBarLabel:"" }} component={CurrentWeather} />
        <Tab.Screen name='Upcoming' options={{title:'UPCOMING WEATHER',tabBarLabel:"",headerTitleAlign:'center',headerStatusBarHeight:responsiveScreenHeight(5)}} component={UpcomingWeather} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
