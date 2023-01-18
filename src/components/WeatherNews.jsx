import React, { useState, useEffect } from 'react';
function WeatherNews() {

    const [weather, setWeather] = useState();
    const handleChange = async (event) => {
        const location = event.target.value;
        const weatherData = await fetch("http://api.weatherapi.com/v1/current.json?key=c566a07e2d93417fb3071739231701&q="+location);
        setWeather(await weatherData.json());
    }

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100 mb-5">
                        <div className="col-md-4">
                            <form>
                            <div className="input-group rounded">
                                <input type="search" className="form-control rounded" placeholder="Enter Your Location" onBlur={handleChange} />
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            {weather &&
                                <div className="card" style={{ color: '#4B515D', borderRadius: '35px' }}>
                                    <div className="card-body p-4">
                                        <div className="d-flex">
                                            <h5 className="flex-grow-1"><strong>{weather.location.name}</strong></h5>
                                            <h6><strong>{weather.location.localtime}</strong></h6>
                                        </div>
                                        <div className="d-flex flex-column text-center mt-5 mb-4">
                                            <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }}> {weather.current.temp_c}°C </h6>
                                            <span className="small" style={{ color: '#868B94' }}>{weather.current.condition.text}</span>
                                        </div>

                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                                <div><i className="fa fa-spinner fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> {weather.current.wind_kph} km/h
                                                </span></div>
                                                <div><i className="fa fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> {weather.current.cloud}% </span>
                                                </div>

                                            </div>
                                            <div>
                                                <img src={weather.current.condition.icon}
                                                    width="100px" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default WeatherNews;