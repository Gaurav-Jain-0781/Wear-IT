import React from 'react'
import logo from '../../images/logo.png'
import app_store from '../../images/pay/app.jpg'
import play_store from '../../images/pay/play.jpg'
import payment_gateway from '../../images/pay/payment gateways.jpg'
import { Socails, About, Account } from './data'

export const Notifications = () => {
    return (
    <section id="notifications">
        <div className="notification_text">
            <h4>Sign up for Latest Comming <span>Premium Releases</span></h4>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button>Sign Up</button>
        </div>
    </section>
    )
}

const Footer = () => {
  return (<>
    <footer>
        <div className="col">
            <img src={logo} alt="Find Your Kicks"/>
            <h4>Contact</h4>
            <p><strong>Address : </strong>SCF NO. 37, First Floor, Shaheed Bhagat</p>
            <p>Singh Nagar, Pakhowal Road, Ludhiana , Punjab</p>
            <p><strong>Phone : </strong>701-108-1063</p>  
            <p><strong>Hours : </strong>10:00 A.M. TO 10:00 P.M.    Mon - Sat</p>  
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    {Socails.map((socail) => {
                        return <a className='socail' key={socail.id} href={socail.url} alt={socail.text}>{socail.icon}</a> 
                    })}
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About</h4>
            {About.map((item) => {
                return <a key={item.id} href={item.url}>{item.text}</a>
            })}
        </div>
        <div className="col">
            <h4>My Account</h4>
            {Account.map((item) => {
                return <a key={item.id} href={item.url}>{item.text}</a>
            })}
        </div>
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Play Store</p>
            <div className="row">
                <img src={app_store} alt="app store"/>
                <img src={play_store} alt="play store"/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={payment_gateway} alt="payment gateways"/>
        </div>
        <div className="copyright">
            <p>© 2021, Tech2 etc - HTML CSS Ecommerce Template</p>
        </div>
    </footer>
  </>)
}

export default Footer
