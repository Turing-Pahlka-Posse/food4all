import React, { Component } from 'react'
import { Marker, HeatmapLayer } from 'react-google-maps'

import GMap from '../Map/Map'

class MapContainer extends Component  {

   createHeatMap (){
     if(!window.google){
       return <div>no google</div>
     }
    if(window.google) {
      let google = window.google
      var latLngDenver = new google.maps.LatLng(39.7392358, -104.990251)
      var boCo = new google.maps.LatLng(40.0149856, -105.2705456)
      var glendale = new google.maps.LatLng(39.7049873, -104.9335904)

    }

    return (
      <HeatmapLayer data = {[latLngDenver, boCo, glendale]} />
    )
  }
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
    createHeat={() => this.createHeatMap()}
    createMarkers={(marker) => this.createMarkers(marker)}
    className="g-map"
    />
  )
}
}

export default MapContainer
