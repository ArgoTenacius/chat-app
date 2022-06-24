import React from 'react'
import './message.css'

export const Message = ({message, author, user}) => {
  console.log(message)
  return (
    <div>
        {
          message.map((index, id) => (
            <h1 key={id}>{index.text}</h1>
          ))
        }
    </div>
  )
}