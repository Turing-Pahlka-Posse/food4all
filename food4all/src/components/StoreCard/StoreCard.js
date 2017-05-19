import React from 'react'
import './StoreCard.css'

export const StoreCard = ({name, address, phone, neighborhood}) => {
  return(
    <div className="store card">
      <h2 className="name-field">{name}</h2>
      <div className="address-field">{address}</div>
      <div className="phone-field">{phone}</div>
      <div className="neighborhood-field">{neighborhood}</div>
    </div>

  )

}
