import React, { Component } from 'react'
import axios from 'axios'

import Contenedor from '../components/Contenedor'
import Cabecera from '../components/Cabecera'

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

    /* componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=45079,mx&appid=73fcf40c7606e44994e8611c28c67651`)
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
            }) 
            
        })
        .catch(console.log)
    } */

    render() {
        console.log(this.state) 
        return (
            <Cabecera nombre={this.state.name} />
        )
    }
}

export default ClimaContainer
