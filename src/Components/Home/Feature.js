import React from 'react'
import { FeatureList } from './Data'

const Feature = () => {
  return (
    <section id='feature'>
      {FeatureList.map((feature) => {
        return <div className="fe-box" key={feature.id}>
            <img src={feature.url} alt={feature.name}/>
            <h6>{feature.name}</h6>
          </div>
      })}
    </section>
  )
}

export default Feature
