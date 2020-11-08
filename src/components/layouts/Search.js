import React, { useRef, useContext } from 'react'

import WeatherContext from './../../context/weather/weatherContext'

const Search = () => {
    const text = useRef('')
    const weatherContext = useContext(WeatherContext)

    const { getWeather } = weatherContext

    const onSubmit = (e) => {
        e.preventDefault()
        getWeather(text.current.value)
    }


    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter City Name" ref={text} />
            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    )
}

export default Search
