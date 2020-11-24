import React from 'react'
import Close from './close'
import { ReactComponent as Loading } from './loading.svg'

const Form = props => {
  return (
    <>
      <form
        name="contact-form"
        method="POST"
        id='contact-form'
        data-netlify={true}
        data-netlify-honeypot="bot-field"
        className='contact'
      >
        <h3><span role='img' aria-label='write'>✍️</span> Drop a line!</h3>

        {props.success && (
          <div className='noty success'>
            <span role='img' aria-label='confetti'>🎉</span> Message sent. I'll get back to you ASAP!
          </div>
        )}

        {props.error && (
          <div className='noty error'>
            <span role='img' aria-label='error'>☹️</span> Oops! An error occured. I'll check it out ASAP, please feel free to contact me via <a href='https://twitter.com/manelescuer' target='_blank' rel='noopener noreferrer'>Twitter</a>
          </div>
        )}

        <p>
          <input type="text" name="name" placeholder='Name' />
        </p>
        <p>
          <input type="email" name="email" placeholder='E-mail' />
        </p>
        <p>
          <textarea name="message" placeholder='Message'></textarea>
        </p>
        <p>
          <button
            disabled={props.loading}
            onClick={props.handleSubmit}
            type="submit"
          >
            {props.loading && (<Loading width={50} className='mr-3' />)}
            {props.loading ? 'Sending...' : 'Send'}
          </button>
        </p>
        <input type="hidden" name="form-name" value="contact-form" />
        <p className='hidden'>
          <input name="bot-field" />
        </p>
      </form>
      <Close {...props} />
    </>
  )
}

export default Form