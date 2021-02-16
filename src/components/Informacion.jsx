import React from 'react'
import './styles.css'

const Informacion = (props) => {
    
    function toFixNumber(t) {
        const temperaturas = ((t/1000)*100).toFixed();
        return temperaturas;
    }

    const temp_max = toFixNumber(props.temp_max)
    const temp_min = toFixNumber(props.temp_min)

    return (
        <div className="ui stackable three column grid container informacion-contenedor">
            <div className="center aligned row row-color bg-clear">
                <div className="centered eight wide column">
                    <div className="row title-row">
                        <p className="ui header"><span>Cielo</span></p>
                    </div>
                </div>
                <div className="centered eight wide column">
                    <div className="ui list">
                        <p className="item"><span><i className="sun centered aligned small icon"></i></span>{props.description}</p>
                    </div>
                </div>
            </div>

            <div className="center aligned row row-color">
                <div className="centered ten wide column">
                    <div className="row title-row">
                        <p className="ui header"><span>Tiempo en Tesistan</span></p>
                    </div>
                    <div className="row title-row">
                        <p className="item">Temperatura: </p>
                    </div>
                    <div className="ui celled list">
                        <p className="item">Sensación termica: </p>
                        <p className="item">Temperatura mínima: {temp_min}</p>
                        <p className="item">Temperatura máxima: {temp_max}</p>
                    </div>
                </div>
                <div className="centered six wide column">
                    <div className="row title-row">
                        <p className="ui header"><span>Tesistan, Jalisco</span></p>
                    </div>
                    <div className="row title-row">
                        <p className="item">Amanecer <span></span> / <span></span> Atardecer </p>
                    </div>
                    <div className="ui celled list">
                        <p className="item">Viento: </p>
                        <p className="item">Presión: </p>
                        <p className="item">Humedad: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion