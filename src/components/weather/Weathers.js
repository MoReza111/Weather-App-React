import React from 'react'


const Weathers = ({ forecast }) => {
    console.log(forecast)
    if (forecast) {
        return (
            <div>
                <div className="location__date">
                    <h1>{forecast.location.name}, {forecast.location.country}</h1>
                    <h3>{new Date(forecast.location.localtime).toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}</h3>
                </div>
                <div className="current__condtion">
                    <div className="temp">
                        <img src={forecast.current.condition.icon} />
                        <div className="texts">
                            <p>{forecast.current.temp_c}°</p>
                            <p>{forecast.current.condition.text}</p>
                        </div>
                    </div>
                    <div className="conditions">
                        <div className="row">
                            <div>
                                <p>{forecast.forecast.forecastday[0].day.maxtemp_c}°</p>
                                <p>Hight</p>
                            </div>
                            <div>
                                <p>{forecast.current.wind_mph}mph</p>
                                <p>Wind</p>
                            </div>
                            <div>
                                <p>{forecast.forecast.forecastday[0].astro.sunrise}</p>
                                <p>Sunrise</p>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <p>{forecast.forecast.forecastday[0].day.mintemp_c}°</p>
                                <p>Low</p>
                            </div>
                            <div>
                                <p>{forecast.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                                <p>Rain</p>
                            </div>
                            <div>
                                <p>{forecast.forecast.forecastday[0].astro.sunset}</p>
                                <p>Sunset</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}

export default Weathers
