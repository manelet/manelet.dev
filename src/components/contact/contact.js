import React from 'react'
import { createPortal } from 'react-dom'

import './contact.css'

const Form = ({ handleSubmit }) => {
  return (
    <div className='contact'>
      <form
        name="contact-form"
        method="POST"
        id='contact-form'
        data-netlify={true}
        data-netlify-honeypot="bot-field"
      >
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button onClick={handleSubmit} type="submit">Send</button>
        </p>
        <input type="hidden" name="form-name" value="contact-form" />
        <p className='hidden'>
          <input name="bot-field" />
        </p>
      </form>
    </div>
  )
}

const Contact = ({ show, toggle }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('contact-form');
    let formData = new FormData(myForm)
    const body = new URLSearchParams(formData).toString()
    console.log('body', body);
    fetch(`${process.env.URL}/?no-cache=1`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }

  console.log('render Contact', show);

  if (!show) {
    return null
  }

  if (window.innerWidth <= 768) {
    return createPortal(
      <Form handleSubmit={handleSubmit} />,
      document.getElementById('contact-wrapper')
    )
  }

  return (
    <Form handleSubmit={handleSubmit} />
  )
}

export default Contact