import React from 'react'
import './main.css'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import { collection, getDocs, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { db, auth } from '../../firebase/config';
import { Profile } from './profile/Profile';
import { Contact } from './contact/Contact';
import { Chat } from './chat/Chat'
import { useState } from 'react';
import { useEffect } from 'react';

const Main = ({user}) => {
    const theme = useMantineTheme();
    const [chatLog, setChatLog] = useState();
    const [chatUser, setChatUser] = useState(undefined);
    const [addContact, setAddContact] = useState(false);
    const [contact, setContact] = useState([]);
    const appContacts = collection(db, "contacts");
    const docRef = doc(db, "contacts", "cVngHwW6zFh2WxbQDqU8");

    const sendMessage = async(text = "an error occurred") => {
        const { uid, photoURL } = auth.currentUser;

        await updateDoc(docRef, {
            log: arrayUnion({
                text: text,
                by: uid
            })
        }, {merge: true})
    }

    const getContacts = async () => {
        const dataContact = await getDocs(appContacts);
        const contacts = dataContact.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setContact(contacts);
    }

    useEffect(() => {
        getContacts();
    }, [])

    return (
        <main className='main'>
            <div className='main__sidebar'>
                {
                    addContact && <Profile
                        setAddContact={setAddContact}
                        avatar={user.photoURL}
                        name={user.displayName}
                        email={user.email}
                    />
                }

                <header className='main__sidebar-user'>
                    <img src='https://excellence.truman.edu/files/2022/02/Photo-Placeholder-Image-150x150-1.jpg' 
                    alt='profile_photo'
                    onClick={() => setAddContact(true)} />
                    <div>
                        <BsFillChatLeftTextFill className='app-icon'/>
                    </div>
                </header>

                <TextInput
                    icon={<Search size={18} />}
                    radius="xl"
                    style={{marginBlock: "1rem"}}
                    size="md"
                    rightSection={
                        <ActionIcon size={32} style={{cursor: "pointer"}} radius="xl" color={theme.primaryColor} variant="filled">
                        {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                        </ActionIcon>
                    }
                    placeholder="Search someone"
                    rightSectionWidth={42}
                />

                <div className='main__chatList'>
                    {
                        contact.map((index, id) => (
                            <Contact key={id} user={index.user} log={index.log} setChatUser={setChatUser} setChatLog={setChatLog}/>
                        ))
                    }
                </div>
            </div>
            <Chat user={chatUser} log={chatLog} userID={user.uid} sendMessage={sendMessage}/>
        </main>
    )
}

export default Main