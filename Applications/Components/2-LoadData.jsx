import React from 'react'
import data from './Data/LoadData/data.js'

export const LoadData = () => {
  return (
    <div className='data'>
      {data.map((item, id) => (
        <div key={id}>
          <h3>{item.name}</h3>
          <p>{item.location}</p>
          <p>{item.car}</p>
        </div>
      ))}
    </div>
  )
}

export default LoadData;