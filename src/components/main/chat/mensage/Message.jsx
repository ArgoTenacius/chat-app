import React from 'react'
import './message.css'

export const Message = ({message, user}) => {
  return (
    <div className='message'>
        {
          message.map((index, id) => (
            <h1 key={id} className={ user === index.by ? "message__sender" : "message__recipient"}>
              {index.text}
            </h1>
          ))
        }
    </div>
  )
}