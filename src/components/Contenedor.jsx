import Recat from 'react'

import Cabecera from './Cabecera'
import Logo from './Logo'
import Footer from './Footer'
import Informacion from './Informacion'

const Contenedor = (props) => {
    const name = props
    const main = props.main
    const sys = props.sys
    const wind = props.wind
    const weather = props.weather[0]

    return (
        <div className="ui contenedor-general">
            <Logo />
            <Cabecera 
                country={sys.country}
                temp={main.temp}
                name={name.name}
                icon={weather.icon}
            />
            <Informacion 
                feels_like={main.feels_like}
                humidity={main.humidity}
                pressure={main.pressure}
                temp={main.temp}
                temp_max={main.temp_max}
                temp_min={main.temp_min}
                country={sys.country}
                sunrise={sys.sunrise}
                sunset={sys.sunset}
                name={name.name}
                speed={wind.speed}
                description={weather.description}
                main={weather.main}
                icon={weather.icon}
            />
            <Footer />
        </div>
    )
}

export default Contenedor