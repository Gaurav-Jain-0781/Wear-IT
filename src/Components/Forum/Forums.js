import React, { useState } from 'react'
import { people } from './Data'

// importing Style Sheet for Forum Page
import '../../Styles/forum.css'

const Forums = () => {
    const [reading, setReading] = useState(false);

    const handleClick = (id) =>{
        setReading(!reading)
        const peoples = document.querySelectorAll(".forum-box .people-des p")
        
        peoples.forEach((item) => {
            if(item.id === id){
                const selectedPerson = people.find((person) => person.id === id).text
                item.innerHTML = reading ? selectedPerson.text : selectedPerson.text.substring(0, 200) + "..."
            }
        })
    }

    return (
    <section id="forum">
        {people.map((person) => {
            return <div key={person.id} className="forum-box">
                <div className="people-img">
                    <img src={person.url} alt={person.name.toLowerCase()}/>
                </div>
                <div className="people-des">
                    <h4>#{person.name}</h4>
                    <p>{reading ? person.text : person.text.substring(0, 200) + "..."}</p>
                    <button onClick={() => handleClick(person.id)}>{reading ? 'Collapse' : 'Continue Reading'}</button>
                </div>
            </div>
        })}
    </section>
  )
}

export default Forums
