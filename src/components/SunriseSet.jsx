import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet,Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import moment from 'moment';

export const SunriseSet = ({ sunrise,sunset }) => {
    return (
        <ImageBackground style={styles.setRise} source={require('../../assets/SetRise.jpg')}>
            <Text style={{ color: '#ffff', fontSize: 12, fontWeight: 500, textTransform: 'uppercase' }}>
                Sunrise & Sunset
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '900', color: '#ffff', textTransform: 'uppercase' }}>{moment(sunrise*1000).format('LT')}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '900', color: '#ffff', textTransform: 'uppercase' }}><Feather name='sunrise' size={20} color={'white'} /></Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontWeight: '900', color: '#ffff', textTransform: 'uppercase' }}><Feather name='sunset' color={'white'} size={20} /></Text>
                    <Text style={{ fontSize: 12, fontWeight: '900', color: '#ffff', textTransform: 'uppercase' }}>{moment(sunset*1000).format('LT')}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
                <Text style={{ color: '#ffff', fontSize: 12, fontWeight: '500' }}>Length of day: <Text style={{ fontWeight: '900' }}>{moment.duration((sunset-sunrise), 'seconds').humanize("h[h] m[m]")}</Text></Text>
                {/* <Text style={{ color: '#ffff', fontSize: 12, fontWeight: '500' }}>Remaining daylight: <Text style={{ fontWeight: '900' }}>{moment.duration(sunset*1000 - Date.now(), 'seconds').humanize("h[h] m[m]")}</Text></Text> */}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    setRise: {
        height: 230,
        width: responsiveWidth(90),
        borderRadius: 11,
        padding: 20,
        flexDirection: 'column',
        gap: 60,
        overflow: 'hidden',
        marginBottom: 20,
        fontFamily:'poppins'
    }
})
