import React, { Component } from 'react'
import axios from 'axios'
import { WEATHER_KEY } from '../keys'

import Contenedor from '../components/Contenedor'
import DatosClimaticos from '../models/DatosClimaticos'

class ClimaContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            clima: null,
        }
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=45079,mx&appid=${WEATHER_KEY}&lang=es&units=metric`)
        /* axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=20.63467132675319&lon=-103.43266311904904&appid=${WEATHER_KEY}`) */
        .then(respuesta => {
            this.setState({
                clima: new DatosClimaticos(respuesta.data)
            }) 
        })
        .catch(console.log)
    }

    render() {
        /** @type {DatosClimaticos} */
        const clima = this.state.clima

        if(!clima){
            return (
                <div>Sin Información de clima</div>
            )
        }else{
            return (
                <Contenedor
                    name = {clima.getName()}
                    main = {clima.getMain()}
                    sys = {clima.getSys()}
                    wind = {clima.getWind()}
                    weather = {clima.getWeather()}
                />
            )
        }
    }
}

export default ClimaContainer
