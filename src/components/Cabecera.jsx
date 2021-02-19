import React from 'react'
import './styles.css'

const Cabecera = (props) => {

  return (
    <div className="ui stackable one column grid header-contenedor">
{/*         <div className="eight wide center aligned column">
          <h2>Información del servicio</h2>
        </div> */}
        <div className="eight wide centered column">
          <p className="ui header">
            <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} />
            <span>{props.temp}° </span>
            <span>{props.name}, {props.country}</span>
          </p>
        </div>
    </div>
  )
}

export default Cabecera