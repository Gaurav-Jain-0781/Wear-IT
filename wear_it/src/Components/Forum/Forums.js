import React from 'react'
import {People} from './Data'

// importing Style Sheet for Forum Page
import '../../Styles/forum.css'

const Forums = () => {
  return (
    <section id="forum">
        <div className="forum-box">
            <div className="people-img">
                <img src="../images/people/pp2.png"/>
            </div>
            <div className="people-des">
                <h4>#ATHIYA SHETTY</h4>
                <p>Athiya has constantly reset the bar when it comes to her fashion choices.
                Athiya is spotted a many of times wearing sneakers with her suits and tops.
                Shetty has also been seen pairing sneakers with her husband 
                K L Rahul on numerous occcasions and public appearences. 
                She owns and maintains a great passion for sneakers. 
            </p>
                <h1>27/03</h1>
                <a href="#">CONTINUE READING</a>
            </div>
        </div>
    </section>
  )
}

export default Forums
