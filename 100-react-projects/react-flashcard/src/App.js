import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
}

export default App;
