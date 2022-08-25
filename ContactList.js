import React from "react";
import Contact from "./Contact";


function ContactList({contacts, handleDelete, saveContact, reRender}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" >Contacts</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" >See More</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" >Add To Favorites</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" >Remove Contact</h3>
          </th>
        </tr>
        {contacts.filter((contact) => contact.brand === 'indie').map((contact, buttcheeks) => {
          return (
          <Contact reRender={reRender} contact={contact} id={contact.id} key={buttcheeks} 
                   saveContact={saveContact} handleDelete={handleDelete} />
        )})}
      </tbody>
    </table>
  );
}

export default ContactList;
