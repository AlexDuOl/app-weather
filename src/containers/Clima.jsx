import React, { Component } from 'react'
import axios from 'axios'
import {WEATHER_KEY} from '../keys'

import Contenedor from '../components/Contenedor'

class ClimaContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description: "",
            main: "",
            icon: "",
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
            sunrise: 0,
            sunset: 0,
            speed: 0,
            deg: 0,
        }
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=34000,mx&appid=${WEATHER_KEY}`)
        .then(res => {
            const respuesta = res.data
            console.log(respuesta) 
            this.setState({
                name: respuesta.name,
                description: respuesta.weather[0].description,
                main: respuesta.weather[0].main,
                icon: respuesta.weather[0].icon,
                feels_like: respuesta.main.feels_like,
                humidity: respuesta.main.humidity,
                pressure: respuesta.main.pressure,
                temp: respuesta.main.temp,
                temp_max: respuesta.main.temp_max,
                temp_min: respuesta.main.temp_min,
                sunrise: respuesta.sys.sunrise,
                sunset: respuesta.sys.sunset,
                speed: respuesta.wind.speed,
                deg: respuesta.wind.deg,
                country: respuesta.sys.country,
            }) 
            
        })
        .catch(console.log)
    }

    render() {
        return (
            <Contenedor 
                name={this.state.name}
                country={this.state.country}
                description={this.state.description}
                main={this.state.main}
                icon={this.state.icon}
                feels_like={this.state.feels_like}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                temp={this.state.temp}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                speed={this.state.speed}
                deg={this.state.deg}
                zipCode={this.zipCode}
            />
        )
    }
}

export default ClimaContainer
