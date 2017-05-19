import React, { Component } from 'react';
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
        <header className="App-header">
          <h2>Food 4 All</h2>
          <h3>A Community Asset Mapping Project</h3>
        </header>
        <StoreCard name={'store name'}
          address={'1234 E Panama Drive'}
          phone={'303-333-3333'}
          neighborhood={'Chaffee Park'}/>
      </div>
    );
  }
}

export default App;
