import ModeloBase from './ModeloBase'

class Wind extends ModeloBase {
    constructor(data){
        super(data)
        
        this.speed = this.getWind('speed')
    }
}

export default Wind