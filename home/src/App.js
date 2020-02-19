import React, { Component } from 'react';
import './App.css';
import GreetingInfo from './Components/GreetingInfo/GreetingInfo';
import Background from './Components/Background/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background></Background>
        <GreetingInfo></GreetingInfo>
      </div>
    );
  }
}

export default App;
