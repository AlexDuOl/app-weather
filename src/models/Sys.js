import ModeloBase from './ModeloBase'

class Sys extends ModeloBase {
    constructor(data){
        super(data)

        this.country = this.getSys('country')
        this.sunrise = this.getSys('sunrise')
        this.sunset = this.getSys('sunset')    
    }
}

export default Sys