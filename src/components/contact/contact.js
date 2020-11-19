import React, { useState } from 'react'

import './contact.css'

export const useContact = () => {
  const [show, toggle] = useState(true)

  return {
    show,
    toggle
  }
}

const Contact = () => {
  const { show } = useContact()

  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('form-test');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }

  if (!show) {
    return null
  }

  return (
    <div className='contact'>
      <form name="contact-form" method="POST" data-netlify="true" id='form-test'>
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit" onClick={handleSubmit}>Send</button>
        </p>
      </form>
    </div>
  )
}

export default Contact