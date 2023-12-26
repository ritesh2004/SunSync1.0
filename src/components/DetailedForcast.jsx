import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import moment from 'moment';

export const DetailedForcast = ({ temp_max,temp_min,humidity }) => {
  return (
    <View style={styles.det}>
    <View style={styles.sections}>
      <Text style={{ fontSize: 12, color: '#ffff', fontWeight: '800', textTransform: 'uppercase'}}>Time</Text>
      <Text style={{ fontSize: 15, color: '#FEFAE0', fontWeight: '500', textTransform: 'uppercase' }}>{moment().format('LT')}</Text>
    </View>
    <View style={styles.sections}>
      <Text style={{ fontSize: 12, color: '#ffff', fontWeight: '800', textTransform: 'uppercase' }}>Temp Max</Text>
      <Text style={{ fontSize: 15, color: '#FEFAE0', fontWeight: '500', textTransform: 'uppercase' }}>{temp_max}°C</Text>
    </View>
    <View style={styles.sections}>
      <Text style={{ fontSize: 12, color: '#ffff', fontWeight: '800', textTransform: 'uppercase' }}>Temp Min</Text>
      <Text style={{ fontSize: 15, color: '#FEFAE0', fontWeight: '500', textTransform: 'uppercase' }}>{temp_min}°C</Text>
    </View>
    <View style={styles.sections}>
      <Text style={{ fontSize: 12, color: '#ffff', fontWeight: '800', textTransform: 'uppercase' }}>Hu</Text>
      <Text style={{ fontSize: 15, color: '#FEFAE0', fontWeight: '500', textTransform: 'uppercase' }}>{humidity}</Text>
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
    det: {
        height: 60,
        width: responsiveWidth(90),
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#606C38',
        borderRadius: 11,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        marginVertical: 30,
        fontFamily:'montserrat-light'
    },
    sections: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        fontFamily:'montserrat-light'
    }
})

