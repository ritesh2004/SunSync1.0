import axios from "axios";
import { WEATHER_API_KEY } from "@env";

export const GetUpcoming = async (lat,lon) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        return data;
    } catch (error) {
        console.log(error)
    }
}