import React from 'react'
import './StoreCard.css'

export const StoreCard = ({name, address, phone, neighborhood, store_type_id}) => {
  return(
    <div className="store-card">
      <div className="info-box">
        <svg className="map-point" width="30" height="40" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg"><path d="M14.68 39.897S29.25 23.097 29.25 14.88C29.252 6.66 22.727 0 14.68 0 6.63 0 .105 6.66.105 14.88c0 8.216 14.573 25.017 14.573 25.017z" fill="#FF6663" fillRule="evenodd"/></svg>
        <h2 className="name-field">{name}</h2>
        <div className="address-field">{address}</div>
        <div className="phone-field">{phone}</div>
        <div className="neighborhood-field">{neighborhood}</div>
      </div>
      <div className="type-field">{store_type_id}</div>
    </div>

  )

}
