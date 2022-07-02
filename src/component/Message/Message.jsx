import React from 'react'
import './message.css'

const Message = ({text, sent = false}) => {
  return (
    <div className={sent ? 'message sent' : 'message received'}>
        <h1 className='message__text'>
            {text}
        </h1>
    </div>
  )
}

export default Message