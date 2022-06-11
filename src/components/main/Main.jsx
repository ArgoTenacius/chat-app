import React from 'react'
import './main.css'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

const Main = ({user}) => {
    const theme = useMantineTheme();

    return (
        <main className='main'>
            <div className='main__sidebar'>
                <header className='main__sidebar-user'>
                    <img src='https://excellence.truman.edu/files/2022/02/Photo-Placeholder-Image-150x150-1.jpg' alt='profile_photo'/>
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
            </div>
        </main>
    )
}

export default Main