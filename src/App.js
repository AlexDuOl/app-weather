import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ClimaContainer from './containers/Clima';

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <ClimaContainer />
    </div>
  );
}

export default App;
