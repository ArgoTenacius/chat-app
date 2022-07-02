import React from 'react'
import { updateDoc, doc, arrayUnion, collection, serverTimestamp} from 'firebase/firestore'
import './chat.css'
import { auth, firestore } from '../../firebase/config'
import Message from '../Message/Message'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const Chat = ({docID}) => {
  const messagesRef = doc(collection(firestore, "chats"), docID);
  const [messages, loading] = useDocumentData(messagesRef, {idField: 'id'});

  console.log(messages)

  const sendMessage = async (text) => {
    
    await updateDoc(messagesRef, {
      messages: arrayUnion({
        sendBy: auth.currentUser.uid,
        text: text,
        createdAt: new Date().getTime()
      })
    }, {merge: true})
  }

  return (
    loading === false && 
    <div className='chat'>
      <header className='chat__header'>
        <img src={messages.room.photoURL} alt="chat_photo" className='app__photo-icon'/>
        <h1 className='app__contact-title'>{messages.room.title}</h1>
      </header>
      <div className='chat__log'>
        {
          messages.messages.map((index, id) => (
            <Message key={id} text={index.text} sent={index.sendBy === auth.currentUser.uid ? true : false}/>
          ))
        }
      </div>
      <input className='chat__input' maxLength={100} onKeyDown={(e) => {
        e.key === "Enter" && sendMessage(e.target.value)
      }}/>
    </div>
  )
}

export default Chat