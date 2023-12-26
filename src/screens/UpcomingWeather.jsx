import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, StatusBar, Dimensions, Text } from 'react-native';
import { HourlyUpdates } from '../components/HourlyUpdates';
import {
  responsiveScreenHeight
} from "react-native-responsive-dimensions";
import { GetUpcoming } from '../apis/GetUpcoming';
import { Appcontext } from '../context/Appcontext';
import { Loading } from '../../utilities/Loading';
import { Error } from '../../utilities/Error';

export const UpcomingWeather = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { location,setError,error } = useContext(Appcontext);
  const { lat, lon } = location;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = await GetUpcoming(lat, lon);
        setData(data?.list)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    fetchData()
  }, [lat, lon])
  return (
    <>
      {!loading ? <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => <HourlyUpdates date={item.dt} temp={item.main.temp} speed={item.wind.speed} humidity={item.main.humidity} />}
          keyExtractor={item => item.dt}
        />
      </View> : <Loading />}
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFAE0',
    marginTop: 0,
    maxHeight: responsiveScreenHeight(89),
    paddingTop: 10
  }
})