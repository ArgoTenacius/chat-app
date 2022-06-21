import React from 'react'
import './main.css'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import { Profile } from './profile/Profile'
import { useState } from 'react';

const Main = ({user}) => {
    const theme = useMantineTheme();
    const [addContact, setAddContact] = useState(false);

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

                <section className='main__sidebar-contacts'>
                </section>
            </div>
        </main>
    )
}

export default Main