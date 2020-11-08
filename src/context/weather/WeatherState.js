import { useReducer } from 'react'
import WeatherContext from './weatherContext'
import WeatherReducer from './WeatherReducer'
import {
    GET_WEATHER,
    WEATHER_ERROR,
    SET_LOADING
} from './../types'

const WeatherState = props => {
    const initialState = {
        forecast: null,
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(WeatherReducer, initialState)

    // GET Weather 
    const getWeather = async (city) => {
        try {
            setLoading()

            const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=31aacb8d5aff43d29a9194740203110&q=${city}&days=1`)
            const data = await res.json()

            dispatch({ type: GET_WEATHER, payload: data })
        } catch (err) {
            dispatch({ type: WEATHER_ERROR, payload: err })
        }
    }

    // SET Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <WeatherContext.Provider
        value={{
            forecast: state.forecast,
            loading: state.loading,
            error: state.error,
            getWeather,
            setLoading
        }}
    >
        {props.children}
    </WeatherContext.Provider>
}

export default WeatherState