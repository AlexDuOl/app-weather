import React from 'react'

const Buscador = (props) => (
    <div className="ui logo-contenedor">
        <form className="ui form" onSubmit={props.getWeather}>
            <div className="field">
                <input type="text" name="zip" placeholder="Buscar" />
                <button className="ui button" type="submit">Enviar</button>
            </div>
        </form>
    </div>
)

export default Buscador
