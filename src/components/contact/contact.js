import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Form from './form'

import './contact.css'

const requestOpts = {
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
  const handleSubmit = (e) => {
    toggleLoading(true)
    e.preventDefault()
    const body = new URLSearchParams(new FormData(document.getElementById('contact-form'))).toString()
    fetch(`${process.env.URL}/?no-cache=1`, { ...requestOpts, body })
      .then(() => setSuccess(true))
      .catch(setError)
      .finally(() => toggleLoading(false))
  }

  useEffect(() => {
    const wrapper = document.getElementById('contact-wrapper')

    if (props.show) {
      document.body.classList.add('locked')
      wrapper.classList.add('active')
    } else {
      document.body.classList.remove('locked')
      wrapper.classList.remove('active')
    }
  }, [props.show])

  if (!props.show || typeof window === 'undefined') {
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
    document.getElementById('contact-wrapper')
  )
}

export default Contact