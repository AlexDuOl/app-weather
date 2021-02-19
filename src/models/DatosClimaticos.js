import ModeloBase from './ModeloBase'
import Main from './Main'
import Sys from './Sys'
import Wind from './Wind'
import Weather from './Weather'
import Name from './Name'

class DatosClimaticos extends ModeloBase {

  /** @returns {Name} */
  getName(){
    if(!this.name){
      this.name = this.getName('name') ? new Name(this.getName('name')) : null
    }
    return this.name
  }

  /** @returns {Main} */
  getMain(){
    if(!this.main){
      //Generar una instancia de la clase
      this.main = this.getMain('main') ? new Main(this.getMain('main')) : null
    }
    return this.main
  }

  /** @returns {Sys} */
  getSys(){
    if(!this.sys){
      this.sys = this.getSys('sys') ? new Sys(this.getSys('sys')) : null
    }
    return this.sys
  }

  /** @returns {Wind} */
  getWind(){
    if(!this.wind){
      this.wind = this.getWind('wind') ? new Wind(this.getWind('wind')) : null
    }
    return this.wind
  }

  /** @returns {Weather} */
  getWeather(){
    if(!this.weather){
      this.weather = this.getWeather('weather') ? new Weather(this.getWeather('weather')) : null
    }
    return this.weather
  }

}

export default DatosClimaticos