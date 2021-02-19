export default class ModeloBase {
    constructor (data) {

      if(!data) throw new Error('Invalid data payload')

      this.data = data
      this.main = data.main
      this.sys = data.sys
      this.weather = data.weather
      this.wind = data.wind
      this.name = data.name
    }

    getName (name) {
        return (this.name[name]) ? this.name[name].data : null
    }

    getMain (name) {
        return (this.main[name]) ? this.main[name].data : null
    }

    getSys (name) {
        return (this.sys[name]) ? this.sys[name].data : null
    }

    getWind (name) {
        return (this.wind[name]) ? this.wind[name].data : null
    }

    getWeather (name) {
        return (this.weather[name]) ? this.weather[name].data : null
    }
}