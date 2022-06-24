import React from 'react'
import './chat.css'

export const Chat = ({user, log}) => {
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
            </div>
        }
    </>
  )
}