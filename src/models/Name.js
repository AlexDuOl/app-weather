import ModeloBase from './ModeloBase'

class Name extends ModeloBase {
    constructor(data){
        super(data)

        this.name = this.getName('name')   
    }
}

export default Name