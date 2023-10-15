import React from 'react'
import FeatureList from './FeatureList'
import donate from './images/donate.png'
import free_shiping from './images/free shiping.jpg'
import happy_sell from './images/happy sell.jpg'
import online_order from './images/online order.jpg'
import promotions from './images/promotions.jpg'
import support from './images/support.jpg'

const Feature = () => {
  const featureList = [
      {
          id: 1, 
          name: "Free Shipping",
          img: free_shiping
      },
      {
          id: 2, 
          name: "Online Order",
          img: online_order
      },
      {
          id: 3, 
          name: "Donate Money",
          img: donate
      },
      {
          id: 4, 
          name: "Promotions",
          img: promotions
      },
      {
          id: 5, 
          name: "Happy Sell",
          img: happy_sell
      },
      {
          id: 6, 
          name: "24/7 Support",
          img: support
      }
    ]
  return (
    <section id='feature'>
      {featureList.map((feature) => {
        return (
          <FeatureList key={feature.id} {...feature}></FeatureList>
        );
      })}
    </section>
  )
}

export default Feature
