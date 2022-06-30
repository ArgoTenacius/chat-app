import React from 'react'
import { updateDoc, doc, arrayUnion, query, collection, where, getDocs } from 'firebase/firestore'
import './chat.css'
import { auth, firestore } from '../../firebase/config'

const Chat = ({docID}) => {
  const sendMessage = async (text) => {
    const ref = doc(firestore, "chats", docID);
    
    await updateDoc(ref, {
      messages: arrayUnion({
        sendBy: auth.currentUser.uid,
        text: text
      })
    }, {merge: true})
  }

  return (
    <div className='chat'>
      <header>
        -Here will be the header
      </header>
      <div className='chat__log'>
        -Here will be where all the chat will happen
      </div>
      <input className='chat__input' maxLength={100} onKeyDown={(e) => {
        e.key === "Enter" && sendMessage(e.target.value)
      }}/>
    </div>
  )
}

export default Chat