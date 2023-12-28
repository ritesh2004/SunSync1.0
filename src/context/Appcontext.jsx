import { createContext, useEffect, useState } from "react";
import * as Location from 'expo-location';
import { Alert } from "react-native";

export const Appcontext = createContext();

// Appcontext Provider
export const ContextProvider = ({ children }) => {
    const [location, setLocation] = useState({ "lat": "22.5697", "lon": "88.3697" }); // Initialing with a fixed location
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchLocation = async () => {
            // Accessing location permition
            let { status } = await Location.requestForegroundPermissionsAsync();
            // let { status } = await Permisions.askAsync(Permisions.LOCATION_FOREGROUND)
            if (status !== 'granted') {
                Alert.alert("Location permission not granted!")
                return;
            }
            // Fetching current location
            let data = await Location.getCurrentPositionAsync({});
            setLocation({"lat":data.coords.latitude,"lon":data.coords.longitude});
            console.log(data)
            console.log("Location", data.coords.latitude, data.coords.longitude)
        }

        fetchLocation()
    },[])
    // Values which will be provided through appcontext 
    let values = {
        location,
        setLocation,
        error,
        setError
    }
    return (
        <Appcontext.Provider value={values}>
            {children}
        </Appcontext.Provider>
    )
}