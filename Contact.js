import React from "react";

function Contact({contact, saveContact, handleDelete, id, reRender}) {

  function deleteContact() {
    fetch(`http://localhost:3000/contacts/${id}`,{
      method: 'DELETE'
    }).then(res=>res.json()).then(() => { 
      handleDelete(id)
      reRender((render=>!render))
    }) 
    .catch(err => console.log(err))
  }

 return (
    <tr>
      <td>
        {contact.name}
      </td>
      <td>
        {'thing that takes u to place'}
      </td>
      <td><button style={{ background: 'transparent', border: 'none' }} onClick={((e) => saveContact(e, contact))}>💾</button></td>
      <td>
        <button style={{ background: 'transparent', border: 'none' }} onClick={deleteContact}>X</button>
      </td>
    </tr>
  );
}

export default Contact;