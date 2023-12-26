import React, { useEffect } from 'react'
import axios from 'axios'

export const GetCoord = async (placeName) => {
    try {
        console.log(placeName)
        const {data} = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${placeName}`)
        return {"lat":data[0].lat,"long":data[0].lon}
    } catch (error) {
        console.log(error)
    }
}
