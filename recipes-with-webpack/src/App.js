import React, { Component } from 'react';
import appData from './store/data';
// import logo from './logo.svg';
import Receipe from './components/Recepie'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {appData.map((receipe, index) => <Receipe receipe={receipe} key={index}></Receipe>)}
      </div>
    );
  }
}

export default App;
