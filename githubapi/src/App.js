import React, { Component } from 'react';
import GitHub from './Components/Github';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<GitHub />
      </div>
    );
  }
}

export default App;
