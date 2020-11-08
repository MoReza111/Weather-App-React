import {
    GET_WEATHER,
    WEATHER_ERROR,
    SET_LOADING
} from './../types'

export default (state, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                forecast: action.payload,
                loading: false
            }
        case WEATHER_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}