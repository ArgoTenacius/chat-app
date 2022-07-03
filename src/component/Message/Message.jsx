import React from 'react'
import './message.css'

const Message = ({text, title, sent = false}) => {
  return (
    <div className={sent ? 'message sent' : 'message received'}>
      <p>
        {
        !sent && 
          <span className='message__title'>
            {title}
          </span>
        }
        <span className='message__text'>
            {text}
        </span>
      </p>
    </div>
  )
}

export default Message