import React from 'react'
import { updateDoc, doc, arrayUnion} from 'firebase/firestore'
import './chat.css'
import { auth, firestore } from '../../firebase/config'

const Chat = ({chat, docID}) => {
  console.log(chat)
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
    
    Object.keys(chat).length === 0 ? <h1>Empty</h1> :
    <div className='chat'>
      <header className='chat__header'>
        <img src={chat.room.photoURL} alt="chat_photo" className='app__photo-icon'/>
        <h1 className='app__contact-title'>{chat.room.title}</h1>
      </header>
      <div className='chat__log'>
        {
          chat.messages.map((index) => {
            console.log(index)
          })
        }
      </div>
      <input className='chat__input' maxLength={100} onKeyDown={(e) => {
        e.key === "Enter" && sendMessage(e.target.value)
      }}/>
    </div>
  )
}

export default Chat