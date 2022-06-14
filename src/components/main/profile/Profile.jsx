import React from 'react';
import { Avatar, Text, Button, Paper } from '@mantine/core';
import { BsPencilSquare } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export function Profile({ setAddContact, avatar, name, email }) {
  return (
      <Paper
        radius="md"
        withBorder
        style={{
          position: "absolute", top: "0", left: "0", padding: "0.5%", zIndex: "2",
          width: "360px", minHeight: "100vh"}}
        p="lg"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
      >
        <AiOutlineArrowLeft 
        style={{position: "absolute", top: "5", left: "5", fontSize: "1.5rem", cursor: "pointer"}}
        onClick={() => setAddContact(false)}
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