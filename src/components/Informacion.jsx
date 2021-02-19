import React from 'react'
import './styles.css'

import { ValidarTiempo } from '../helpers/tiempo'

const Informacion = (props) => {

    const sunrise = ValidarTiempo(props.sunrise);
    const sunset = ValidarTiempo(props.sunset)

    return (
        <div className="ui stackable three column grid container informacion-contenedor">
            <div className="center aligned row row-color">
                <div className="centered eight wide column">
                    <div className="row title-row">
                        <p className="ui header"><span>Cielo</span></p>
                    </div>
                </div>
                <div className="centered eight wide column">
                    <div className="ui list">
                        <p className="item img-item">
                            <span><img src={`http://openweathermap.org/img/wn/${props.icon}.png`} /></span>
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="center aligned row row-color">
                <div className="centered ten wide column">
                    <div className="row title-row">
                        <p className="ui header"><span>Tiempo en {props.name}</span></p>
                        <p className="item temp-item">{props.temp}°</p>
                    </div>
                    {/* <div className="row title-row">
                        <p className="item">Temperatura: {temp}</p>
                    </div> */}
                    <div className="ui celled list">
                        <p className="item"><span><i className="fas fa-thermometer-empty"></i></span> Sensación termica: {props.feels_like}°</p>
                        <p className="item"><span><i className="fas fa-thermometer-empty"></i></span> Temperatura mínima: {props.temp_min}°</p>
                        <p className="item"><span><i className="fas fa-thermometer-full"></i></span> Temperatura máxima: {props.temp_max}°</p>
                    </div>
                </div>
                <div className="centered six wide column">
                    {/* <div className="row title-row">
                        <p className="ui header"><span>{props.name}, {props.country}</span></p>
                    </div> */}
                    <div className="row title-row">
                        {/* <p className="item"><span><i className="fas fa-sun"></i></span> Amanecer {props.sunrise} <span></span> / <span></span> Atardecer {props.sunset}</p> */}
                    </div>
                    <div className="ui celled list">
                        <p className="item"><span><i className="fas fa-sun"></i></span> Amanecer {sunrise}</p>
                        <p className="item"><span><i className="fas fa-moon"></i></span> Atardecer {sunset}</p>
                        <p className="item"><span><i className="fas fa-wind"></i></span> Viento: {props.speed} m/s</p>
                        <p className="item"><span><i className="fas fa-sort-amount-down"></i></span> Presión: {props.pressure} hPa</p>
                        <p className="item"><span><i className="fas fa-tint"></i></span> Humedad: {props.humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion