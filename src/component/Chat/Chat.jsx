import React from 'react'
import './chat.css'

const Chat = () => {
  return (
    <div className='chat'>
      <header>
        -Here will be the header
      </header>
      <div className='chat__log'>
        -Here will be where all the chat will happen
      </div>
      <input className='chat__input' maxLength={100}/>
    </div>
  )
}

export default Chat