import React from 'react'

export const StoreCard = ({ name, address }) => {
  return(
    <div className="store card">
      <h2 className="name-field">{name}</h2>
      <div className="address-field">{address}</div>
      <div className="phone-field">phone</div>
      <div className="neighborhood-field">neighborhood</div>
    </div>
  )

}
