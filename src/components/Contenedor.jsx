import Recat from 'react'

import Cabecera from './Cabecera'
import Logo from './Logo'
import Footer from './Footer'
import Informacion from './Informacion'
// import Slideshow from './Slideshow'

const Contenedor = (props) => (
    
    <div className="ui contenedor-general">
        <Logo />
        <Cabecera 
            name={props.name} 
            temp={props.temp}
            country={props.country}
        />
        <Informacion 
            name={props.name}
            country={props.country}
            description={props.description}
            main={props.main}
            icon={props.icon}
            feels_like={props.feels_like}
            humidity={props.humidity}
            pressure={props.pressure}
            temp={props.temp}
            temp_max={props.temp_max}
            temp_min={props.temp_min}
            sunrise={props.sunrise}
            sunset={props.sunset}
            speed={props.speed}
            deg={props.deg}
        />
        {/* <Slideshow /> */}
        <Footer />
    </div>
)

export default Contenedor