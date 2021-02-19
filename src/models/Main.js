import ModeloBase from './ModeloBase'

class Main extends ModeloBase {
    constructor(data){
        super(data)

        this.feels_like = this.getMain('feels_like')
        this.humidity = this.getMain('humidity')
        this.pressure = this.getMain('pressure')
        this.temp = this.getMain('temp')
        this.temp_max = this.getMain('temp_max')
        this.temp_min = this.getMain('temp_min')
    }
}

export default Main