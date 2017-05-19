import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import { StoreCard } from './StoreCard/StoreCard.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      storeCards: '',
      filter: ''
    }
  }



  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
