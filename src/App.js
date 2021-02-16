import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import ClimaContainer from './containers/Clima';
// import Buscador from './components/Buscador';


class App extends Component {
  
  // getWeather = (e) => {
  //   e.preventDefault();
  //   const { zip } = e.target.elements;
  //   const zipCode = zip.value;
  // } 

  render(){
    return (
      <div className="App">
        {/* <Buscador getWeather={this.getWeather}/> */}
        <ClimaContainer />
      </div>
    );
  }
}

export default App;
