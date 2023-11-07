import React from 'react'
import { locations, founders } from './Data'
import video from '../../images/Promotional Video.mp4'

export const Video = () => {
  return (
    <section id="about">
        <div className="video">
            <video src={video} controls></video>
        </div>
        <div>
            <h2>Who Are We ?</h2>
            <p>Find Your Kicks India is an online platform to sell and buy sneakers, apparels with attractive offers. 
            This is a platform buyers and sellers to sell new and used sneakers, new apparels with user-driven 
            interface and quick analytics. Through Find Your Kicks India, one can shop offerings from leading brands 
            such as Adidas, Air Jordan, Nike, Yeezy, Converse, Reebok, Puma and others. They also sell apparel in the 
            form of branded merchandise from music artists such as Beyonce, Cardi B, and Billie Eilish.
            </p>
        </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact">
        <div className='location'>
            <span>GET IN TOUCH</span>
            <h2>Visit our agency location or contact us today</h2>
            <h3>Head office</h3>
            <div>
                {locations.map((location) => {
                    return <li key={location.id}>
                        {location.icon}
                        <p>{location.text}</p>
                    </li>
                })}
            </div>
        </div>
        <div className='map'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3424.3571875137213!2d75.81285667449485!3d30.87666737866416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSCF%20NO.%2037%2C%20Shaheed%20Bhagat%20%20Singh%20Nagar%2C%20Pakhowal%20Road%2C%20Ludhiana%20%2C%20Punjab!5e0!3m2!1sen!2sin!4v1693933583463!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export const Forms = () =>{
    return (
    <section id="form">
        <form action=""> 
            <span>Leave a Message</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea placeholder="Your Message" rows="10" col="15"></textarea>
            <button>Submit</button>
        </form>
        <div id="people">
            {founders.map((founder) => {
                return (
                    <div key={founder.id} className="contact-person">
                        <img src={founder.url} alt={founder.name}/>
                        <div className="des">
                            <h3>{founder.name}</h3>
                            <p>Founder</p>
                            <p>Phone : {founder.phone_no}</p>
                            <p>Email : {founder.email}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
    )
}

export default Contact
