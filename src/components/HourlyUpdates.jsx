import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5,Feather } from '@expo/vector-icons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import moment from 'moment';

export const HourlyUpdates = ({date,temp,speed,humidity}) => {
    return (
        <View style={styles.container}>
            <View style={styles.sections}>
                <Text style={{ fontSize: 14, color: '#FEFAE0', textTransform: 'uppercase',marginBottom:5 }}>{moment(date*1000).format('ddd')}</Text>
                <Text style={{ fontSize: 15, color: '#283618', textTransform: 'uppercase' }}>{moment(date*1000).format('LT')}</Text>
            </View>
            <View style={styles.sections}>
                <Text style={{ fontSize: 12, color: '#FEFAE0', textTransform: 'uppercase' }}><FontAwesome5 name="temperature-high" size={20} color="#FEFAE0" /></Text>
                <Text style={{ fontSize: 15, color: '#283618', textTransform: 'uppercase' }}>{temp}°C</Text>
            </View>
            {/* <View style={styles.sections}>
                <Text style={{ fontSize: 14, color: '#FEFAE0', textTransform: 'uppercase',marginBottom:5 }}>Desc</Text>
                <Text style={{ fontSize: 15, color: '#283618', textTransform: 'uppercase' }}>clear sky</Text>
            </View> */}
            <View style={styles.sections}>
                <Text style={{ fontSize: 12, color: '#FEFAE0', textTransform: 'uppercase' }}><Feather name="wind" size={20} color="#FEFAE0" /></Text>
                <Text style={{ fontSize: 15, color: '#283618', textTransform: 'uppercase' }}>{speed}km/h</Text>
            </View>
            <View style={styles.sections}>
                <Text style={{ fontSize: 12, color: '#FEFAE0', textTransform: 'uppercase' }}><Feather name="droplet" size={20} color="#FEFAE0" /></Text>
                <Text style={{ fontSize: 15, color: '#283618', textTransform: 'uppercase' }}>{humidity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#DDA15E',
        width: responsiveWidth(90),
        borderRadius: 11,
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
        paddingVertical:10,
        fontFamily:'poppins'
    },
    sections: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'poppins'
    }
})
