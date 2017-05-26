import React from 'react'
import './Map.css'
import { withScriptJs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const GMap = withGoogleMap((props) => {
  console.log(props, ' gmap props')
  return (
    <div>
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={5}
      defaultCenter={{ lat: 39.7392358, lng: -104.990251 }}>
        {props.markers.map(props.createMarkers)}
    </GoogleMap>
  </div>
  )
})

export default GMap
