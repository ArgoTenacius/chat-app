import React from 'react';
import { useState } from 'react';
import { Navbar, Chat } from '../index';
import { query, collection, where, getDocs } from 'firebase/firestore'
import './chatApp.css';
import { firestore } from '../../firebase/config';
import { useEffect } from 'react';

const ChatApp = ({user}) => {

  const [chat, setChat] = useState({})
  const [docID, setDocID] = useState("");

  const getDocID = async (id) => {
    const q = query(collection(firestore, "chats"), where("room.id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setChat(doc.data())
      setDocID(doc.id)
    })
  }

  return (
    <div className='chatApp'>
      <Navbar userPhoto={user.photoURL} getDocID={getDocID} />
      <Chat docID={docID} chat={chat}/>
    </div>
  )
}

export default ChatApp