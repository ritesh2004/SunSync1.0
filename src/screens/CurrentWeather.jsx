import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, ScrollView, LogBox } from 'react-native';
import { FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
import { DetailedForcast } from '../components/DetailedForcast';
import { SunriseSet } from '../components/SunriseSet';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { GetCurrentUpdateCity, GetCurrentUpdateCoord } from '../apis/GetCurrentUpdate';
import { Appcontext } from '../context/Appcontext';
import { weatherType } from '../../utilities/WeatherType';
import { Loading } from '../../utilities/Loading';
import { Error } from '../../utilities/Error';
import * as Location from 'expo-location';



export default function CurrentWeather() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const { location, setLocation,setError,error } = useContext(Appcontext);
  const { lat, lon } = location;

  const handleSearch = async (text) => {
    try {
      setLoading(true)
      const weatherData = await GetCurrentUpdateCity(text);
      setCity(weatherData.name);
      setWeather(weatherData);
      setLocation({ "lat": weatherData?.coord?.lat, "lon": weatherData?.coord?.lon })
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // Accessing location permition
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        }
        // Fetching current location
        let data = await Location.getCurrentPositionAsync({});
        setLocation({"lat":data.coords.latitude,"lon":data.coords.longitude});
        // console.log("Location",data.coords.latitude,data.coords.longitude)
        // Fetching current weather
        const weatherData = await GetCurrentUpdateCoord(data.coords.latitude, data.coords.longitude);
        setCity(weatherData.name);
        setWeather(weatherData);
        setIcon(weatherType[weatherData?.weather[0]?.main]?.icon)
        setLoading(false)
        setError(false)
      } catch (error) {
        setError(true)
      }
    })();
  },[]);

  return (
    <>
      {!loading ? <ScrollView style={{ flex: 1, backgroundColor: '#FEFAE0', fontFamily: 'poppins' }}>
        <View style={styles.topContainer}>
          <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
              style={styles.searchBar}
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder='Search Location'
              returnKeyType='search'
              onSubmitEditing={(event) => handleSearch(event.nativeEvent.text)}
            />
            <Text style={styles.searchIcon}>
              <FontAwesome5 name="search-location" size={18} color="#BC6C25" />
            </Text>
          </View>
          <Text style={[{ textAlign: 'center', marginTop: 20, width: responsiveWidth(90), paddingLeft: 15 }, styles.cityName]}>{city}  <Entypo name="location" size={20} color="#2C2C2C" /></Text>
        </View>
        <View style={styles.container}>
          <View style={styles.todayWeather}>
            {/* <Image style={styles.image} source={require('../../assets/Sun.png')} /> */}
            <Feather name={icon} size={50} color="black" />
            {/* <Text style={styles.cityName}>{city} <FontAwesome5 name="location-arrow" size={24} color="#2C2C2C" /></Text> */}
            <Text style={styles.temp}>{weather?.main?.temp}°</Text>
          </View>
          <DetailedForcast
            temp_max={weather?.main?.temp_max}
            temp_min={weather?.main?.temp_min}
            humidity={weather?.main?.humidity}
          />
          <SunriseSet
            sunrise={weather?.sys?.sunrise}
            sunset={weather?.sys?.sunset}
          />
        </View>
      </ScrollView> : <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
  },
  todayWeather: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
    marginTop: 20
  },
  topContainer: {
    marginTop: StatusBar.currentHeight + 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    borderWidth: 0,
    borderRadius: 30,
    paddingLeft: 15,
    backgroundColor: '#DDA15E'
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 17
  },
  cityName: {
    fontSize: 18,
    fontFamily: 'poppins',
    color: '#2C2C2C'
  },
  temp: {
    fontSize: 60,
    fontFamily: 'poppins',
    color: '#2C2C2C',
    fontWeight: '600'
  }
});
