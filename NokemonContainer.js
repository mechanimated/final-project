import React from "react";
import ContactList from "./ContactList";
import Test from "./Test"
import NewContactForm from "./NewContactForm";
import { useState, useEffect } from 'react'

function NokemonContainer() {
  const [contacts, setContacts] = useState([])

  const [render, reRender] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:3000/contacts`)
    .then(res => res.json())
    .then(data => setContacts(data))
  }, [render])

  // render
  function handleDelete(id) {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }

  let savedContacts = []
  function saveContact(e, contact) {
    if (savedContacts.length < 10) {
      savedContacts.push(contact)
      console.log(savedContacts)
    } else {
      console.log('your favorites are full!')
    }
      }
  

let enemyContacts = []

enemyContacts.push(contacts.filter((contact) => contact.brand !== 'indie'))

//  Passing props to appropriate children.
  return (
    <div>
        <div style={{display: 'none'}}>
            <NewContactForm  />
        </div>
      <ContactList contacts={contacts} reRender={reRender} saveContact={saveContact} handleDelete={handleDelete}/>
      <Test />
    </div>
  );
}
// reRender={reRender}

export default NokemonContainer;
