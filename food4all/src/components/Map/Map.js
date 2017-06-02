import React from 'react'
import './Map.css'

import { withScriptJs, withGoogleMap, HeatmapLayer, GoogleMap, Marker } from 'react-google-maps'
// import { createHeatMap } from '../../ComponentHelper/Map/HeatmapHelper'

const GMap = withGoogleMap((props) => {


  console.log(props, ' gmap props')
  return (
    <div>
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={5}
      defaultCenter={{ lat: 39.7392358, lng: -104.990251 }}>
      <div>
        {props.markers.map(props.createMarkers)}
      </div>
      <div>
        
      </div>
    </GoogleMap>
  </div>
  )
})

export default GMap
