import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Form from './form'

import './contact.css'

const requestOpts = {
  url: `${process.env.URL}/?no-cache=1`,
  method: 'POST',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": 'application/x-www-form-urlencoded;charset=UTF-8',
  }
}

const Contact = props => {
  const [loading, toggleLoading] = useState(false)
  const [error, setError] = useState()
  const [success, setSuccess] = useState(false)
  const wrapper = document.getElementById('contact-wrapper')
  const handleSubmit = (e) => {
    toggleLoading(true)
    e.preventDefault()
    const body = new URLSearchParams(new FormData(document.getElementById('contact-form'))).toString()
    fetch({ ...requestOpts, body })
      .then(() => setSuccess(true))
      .catch(setError)
      .finally(() => toggleLoading(false))
  }

  useEffect(() => {
    if (props.show) {
      document.body.classList.add('locked')
      wrapper.classList.add('active')
    } else {
      document.body.classList.remove('locked')
      wrapper.classList.remove('active')
    }
  }, [props.show, wrapper.classList])

  if (!props.show) {
    return null
  }

  return createPortal(
    <Form
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      success={success}
      {...props }
    />,
    wrapper
  )
}

export default Contact