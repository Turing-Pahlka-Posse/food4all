import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import { StoreCard } from './components/StoreCard/StoreCard.js'
import { Map } from './components/Map/Map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      storeCards: '',
      filter: ''
    }
  }

  fetchData() {
    return fetch('https://food.caak.network/api/v1/stores/find?type=supermarket', {
      method: 'GET',
      headers: {'Content-Type' : 'json/application'},
      // cors: 'no-cors';

    })
    .then(response => console.log(response))
  }



  render() {

    return (
      <div className="App">
        <NavBar />
        <Map />
        {this.fetchData()}
        <StoreCard name={'7eleven'} address={'1232 street street'} phone={'303-987-6543'} neighborhood={'Baker'}/>
      </div>
    );
  }
}

export default App;
