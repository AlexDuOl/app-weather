import React from 'react'
import './styles.css'

const Cabecera = (props) => {

  function toFixNumber(t) {
    const temperaturas = ((t/1000)*100).toFixed();
    return temperaturas;
  }
  const temp = toFixNumber(props.temp)

  return (
  <div className="ui stackable one column grid header-contenedor">
    {/* Quitar el two  y colum en el div con row que esta debajo*/}
    <div className="two center aligned column row">
      {/* <div className="centered column">
        <h2 className="ui header"><span>Información del servicio</span></h2>
      </div> */}
      <div className="centered column">
        <p className="ui header">
        <span><i className="sun centered aligned large icon"></i></span>
        <span>{temp}° </span>
          <span>{props.name}, {props.country}</span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Cabecera