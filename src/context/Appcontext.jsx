import { createContext, useEffect, useState } from "react";
import * as Location from 'expo-location';

export const Appcontext = createContext();

export const ContextProvider = ({ children }) => {
    const [location, setLocation] = useState({});
    const [error,setError] = useState(false);
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