import React from 'react'

const Weather = ({ hour }) => {
    return (
        <div className="forecast__card">
            <p>{new Date(hour.time).toLocaleString('en-US', { day: 'numeric', month: 'numeric' })}</p>
            <p>{hour.time.split(' ')[1]}</p>
            <img src={hour.condition.icon} />
            <p>{hour.temp_c}°</p>
        </div>
    )
}

export default Weather
