import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

import GMap from '../Map/Map'

class MapContainer extends Component  {


createMarkers(marker) {

  return <Marker
            position={marker.coordinates}
            id={marker.id}
            key={marker.id}
          />
}

render() {
  return (
    <GMap mapElement={ <div className='map-element' style={{ height: "500px", width: "600px"}}/> }
    containerElement={ <div className='container-element' style={{ height: "500px", width: "600px"}}/>}
    markers={this.props.markers}
    createMarkers={(marker) => this.createMarkers(marker)}
    className="g-map"
    />
  )
}
}

export default MapContainer
