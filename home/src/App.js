import React, { Component } from 'react';
import './App.css';
import GreetingInfo from './Components/GreetingInfo/GreetingInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GreetingInfo></GreetingInfo>
      </div>
    );
  }
}

export default App;
