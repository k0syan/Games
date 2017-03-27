import React, { Component } from 'react';
import './App.css';

import Square from './Square'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Square choice="fa fa-circle-o"/>
        <Square choice="fa fa-times"/>
      </div>
    );
  }
}

export default App;
