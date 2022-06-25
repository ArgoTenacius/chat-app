import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './chat.css'
import { Message } from './mensage/Message'

export const Chat = ({user, log, userID, sendMessage}) => {

  const [message, setMessage] = useState("");
  const messageInput = useRef();

  const trySendMessage = () => {
    console.log('test')
    message.trim().length > 0 && sendMessage(message);
    setMessage("");
    messageInput.current.value = "";
  }

  return (
    <>
        {
            user === undefined 
            ? <h1>No chat</h1> 
            :
            <div className='chat'>
                <header className='chat__header'>
                    <img src={user.photoURL} alt='userPhoto' className='chat__header-photo'/>
                    <h1 className='chat__header-name'>{user.name}</h1>
                </header>

                <section className='chat__log'>
                  <Message message={log} user={userID}/>
                </section>

                <footer className='chat__footer'>
                  <input ref={messageInput} placeholder='Message' className='chat__footer-input' onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => {
                    e.key === "Enter" && trySendMessage()
                  }}/>
                </footer>
            </div>
        }
    </>
  )
}