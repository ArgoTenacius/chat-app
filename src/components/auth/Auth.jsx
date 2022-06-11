import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  MantineProvider
} from '@mantine/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useRef } from 'react'
import { auth } from '../../firebase/config'

const Auth = ({navigate, routes}) => {

  const emailInput = useRef(); 
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const register = async () => {
    try {
      if(registerPassword === registerConfirmPassword){
        navigate(routes.MAIN);
        await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        await signInWithEmailAndPassword(auth, registerEmail, registerPassword);
      }else{
        confirmPasswordInput.current.style.color = "red"
      }
    } catch (error){
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error){
      console.log(error.message)
    }
  }

  const changeAuthState = () => {
    const resetInputs = () => {
      emailInput.current.value = "";
      passwordInput.current.value = "";
      if(isLogin){
        setLoginEmail("");
        setLoginPassword("");
      }else{
        setRegisterEmail("");
        setRegisterPassword("");
        setRegisterConfirmPassword("");
      }
    }

    isLogin === false ? setIsLogin(true) : setIsLogin(false);
    resetInputs();
    if(confirmPasswordInput.current !== null){
      confirmPasswordInput.current.style.color = "black"
    }
  }

  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
        <Container size={420} my={40}>
        <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
            Chat-app
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
            {isLogin ? 'Do not have an account yet?' : 'Already have an account ?'}{' '}
            <Anchor href="#" size="sm" onClick={(event) => {
              event.preventDefault();
              changeAuthState();
            }}>
            {isLogin ? 'Create account' : 'Login account'}
            </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput ref={emailInput} label="Email" placeholder="example@gmail.com" required onChange={(event) => {
              isLogin ? setLoginEmail(event.target.value) : setRegisterEmail(event.target.value)
            }}/>
            <PasswordInput ref={passwordInput} label="Password" placeholder="Your password" required mt="md" onChange={(event) => {
              isLogin ? setLoginPassword(event.target.value) : setRegisterPassword(event.target.value)
            }}/>
            {
              !isLogin && <PasswordInput ref={confirmPasswordInput} label="Confirm password" placeholder="Password" required mt="md" onChange={(event) => {
                setRegisterConfirmPassword(event.target.value); 
            }}/>
            }
            <Group position="apart" mt="md">
            {isLogin && 
            <>
              <Checkbox label="Remember me" />
              <Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
                  Forgot password?
              </Anchor>
            </>
            }
            </Group>
            <Button fullWidth mt="xl" onClick={() => {
              isLogin ? login() : register()
            }}>
            {isLogin ? 'Sign in' : 'Register'}
            </Button>
        </Paper>
        </Container>
    </MantineProvider>
  );
}

export default Auth;