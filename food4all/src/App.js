import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import { StoreCard } from './components/StoreCard/StoreCard.js'

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
        <StoreCard name={'7eleven'} address={'1232 street street'} phone={'303-987-6543'} neighborhood={'Baker'}/>
      </div>
    );
  }
}

export default App;
