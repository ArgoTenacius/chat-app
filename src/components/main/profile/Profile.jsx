import React from 'react';
import { Avatar, Text, Button, Paper } from '@mantine/core';
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './profile.css'
import { useRef } from 'react';

export function Profile({ setAddContact, avatar, name, email }) {
  const profile = useRef();

  const _close = () => {
    profile.current.className = "profile slide-in-top-reverse"
    profile.current.onanimationend = () => {
      setAddContact(false);
    }
  }

  return (
      <Paper
        ref={profile}
        radius="md"
        withBorder
        className='profile slide-in-top'
        p="lg"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
        
      >
        <AiOutlineArrowLeft 
        style={{position: "absolute", top: "5", left: "5", fontSize: "1.5rem", cursor: "pointer"}}
        onClick={() => _close()}
        />
        <Avatar src={avatar} size={120} radius={120} mx="auto" />
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "0.3rem"}}>
          <Text align="center" size="lg" weight={500} mt="md">
            {name}
          </Text>
          <BsPencilSquare />
        </div>
        <Text align="center" color="dimmed" size="sm">
          {email}
        </Text>
      </Paper>
  );
}