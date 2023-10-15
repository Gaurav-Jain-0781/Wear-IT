import React from 'react'

const FeatureList = (feature) => {
  return (
    <div className="fe-box">
        <img src={feature.img} alt={feature.name}/>
        <h6>{feature.name}</h6>
    </div>
  )
}

export default FeatureList
