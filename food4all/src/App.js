import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import { StoreCard } from './components/StoreCard/StoreCard.js'
import { Map } from './components/Map/Map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      storeCards: [],
      filter: ''
    }
  }

  fetchData() {
    return fetch('http://myfucking.network/api/v1/stores', {
      method: 'GET',
      headers: {'Content-Type' : 'json/application'},
      mode: 'cors'

    })
    .then(response => response.json())
    .then(data => this.setState({
      storeCards: data
    }));
  }



  render() {
    this.fetchData()
    const stores = this.state.storeCards.map((store) => {
      return (
        <StoreCard key={store.id} name={store.name} address={store.address_line1} phone={store.phone} neighborhood={store.neighborhood} />
      )
    })

    return (
      <div className="App">
        <NavBar />
        <aside className="side-bar"> /*this will be a component*/
          <div className="filter-bar">
            Filters
          </div>
        </aside>
        <Map />
        {stores}
      </div>
    );
  }
}

export default App;
