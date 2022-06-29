import React from 'react';
import { Navbar, Chat } from '../index'
import './chatApp.css';

const ChatApp = ({user}) => {
  return (
    <div>
      <Navbar user={user}/>
      <Chat />
    </div>
  )
}

export default ChatApp