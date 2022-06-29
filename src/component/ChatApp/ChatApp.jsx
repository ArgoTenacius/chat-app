import React from 'react';
import { Navbar, Chat } from '../index'
import './chatApp.css';

const ChatApp = ({user}) => {
  return (
    <div className='chatApp'>
      <Navbar userPhoto={user.photoURL}/>
      <Chat />
    </div>
  )
}

export default ChatApp