import React from 'react'
import './styles.css'

const Informacion = (props) => {
    
    function toFixNumber(t) {
        const temperaturas = ((t/1000)*100).toFixed();
        return temperaturas;
    }
    const temp = toFixNumber(props.temp)
    const temp_max = toFixNumber(props.temp_max)
    const temp_min = toFixNumber(props.temp_min)
    const feels_like = toFixNumber(props.feels_like)

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
                        <p className="item"><span><i className="small sun centered aligned small icon"></i></span>{props.description}</p>
                    </div>
                </div>
            </div>

            <div className="center aligned row row-color">
                <div className="centered ten wide column">
                    <div className="row title-row">
                        <p className="ui header"><span>Tiempo en {props.name}</span></p>
                        <p className="item temp-item">{temp}°</p>
                    </div>
                    {/* <div className="row title-row">
                        <p className="item">Temperatura: {temp}</p>
                    </div> */}
                    <div className="ui celled list">
                        <p className="item">Sensación termica: {feels_like}</p>
                        <p className="item"><span><i class="fas fa-thermometer-empty"></i></span> Temperatura mínima: {temp_min}</p>
                        <p className="item"><span><i className="fas fa-thermometer-full"></i></span> Temperatura máxima: {temp_max}</p>
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
                        <p className="item"><span><i className="fas fa-sun"></i></span> Amanecer {props.sunrise}</p>
                        <p className="item"><span><i class="fas fa-moon"></i></span> Atardecer {props.sunset}</p>
                        <p className="item"><span><i className="fas fa-wind"></i></span> Viento: {props.speed} km/h</p>
                        <p className="item"><span><i className="fas fa-sort-amount-down"></i></span> Presión: {props.pressure} mb</p>
                        <p className="item"><span><i className="fas fa-tint"></i></span> Humedad: {props.humidity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion