import React from 'react';
import { useState } from 'react';
import { Navbar, Chat } from '../index';
import { query, collection, where, getDocs } from 'firebase/firestore'
import './chatApp.css';
import { firestore } from '../../firebase/config';

const ChatApp = ({user}) => {

  const [contactID, setContactID] = useState("");
  const [docID, setDocID] = useState("");

  const getDocID = async (id) => {
    const q = query(collection(firestore, "chats"), where("room.id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setDocID(doc.id)
    })
  }

  return (
    <div className='chatApp'>
      <Navbar userPhoto={user.photoURL} setContactID={setContactID} getDocID={getDocID}/>
      <Chat docID={docID}/>
    </div>
  )
}

export default ChatApp