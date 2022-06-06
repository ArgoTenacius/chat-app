import React from 'react';
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
import { 
  useState,
  useRef 
} from 'react';

export function Auth() {

  const emailInput = useRef(); 
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

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
                setRegisterConfirmPassword(event.target.value);              }}/>
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
            <Button fullWidth mt="xl">
            {isLogin ? 'Sign in' : 'Register'}
            </Button>
        </Paper>
        </Container>
    </MantineProvider>
  );
}