import React from 'react'
import { useState } from 'react'
import { db, firestore } from '../../../firebase/config'
import './chat.css'
import { Message } from './mensage/Message'

export const Chat = ({user, log}) => {

  const test = () => {
    console.log(log);
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
                  <Message message={log} />
                  <button onClick={() => test()}>Click me</button>
                </section>

                <footer className='chat__footer'>
                  <input placeholder='Message' className='chat__footer-input'/>
                </footer>
            </div>
        }
    </>
  )
}