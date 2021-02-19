import ModeloBase from './ModeloBase'

class Weather extends ModeloBase {
    constructor(data){
        super(data)
        
        this.description= this.getWeather('description')
        this.icon = this.getWeather('icon')
        this.main = this.getWeather('main')
    }
}

export default Weather