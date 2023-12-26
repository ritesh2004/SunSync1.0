import axios from "axios";
import { WEATHER_API_KEY } from "@env";

export const GetCurrentUpdateCoord = async (lat,long) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);

        return data
    } catch (error) {
        console.log(error)
    }
}

export const GetCurrentUpdateCity = async (city) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);

        return data
    } catch (error) {
        console.log(error)
    }
}