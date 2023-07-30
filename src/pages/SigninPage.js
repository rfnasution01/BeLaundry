import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IconLogoLg } from '../assets/img'
import { Link, useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      const token = btoa(username);
      localStorage.setItem('token', token);
      setLoginMessage('Login successful!');
      navigate('/');
    } else {
      setLoginMessage('Username or password is incorrect!');
    }
  };
  return (
    <Box
      component='article'
      sx={{
        textAlign: 'center',
        maxWidth: '80%',
        bgcolor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        color: '#333',
      }}
    >   
    
      <IconLogoLg />
      
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '150%',
        }}
      >
        Login Form
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '130%'
        }}
      >
        👉 Log in with your account to order laundry 👈
      </Typography>

      <Box
        sx={{
          marginY: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >   
          <Box
            component='form'
            onSubmit={handleFormSubmit}
            sx={{
              width: '60%',
              mt: 1
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                mb: 1,
              }}
            >
              Login
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
              >
                <Typography variant="body2" color="#333">
                  Don't have an account ?
                </Typography>
                <Box
                  component={Link}
                  to={'../signup'}
                  relative='path'
                  sx={{
                    textDecoration: 'none',
                    marginLeft: '3px',
                    cursor: 'pointer'
                  }}
                >Sign Up</Box>
              </Box>
            </Box>
          
         
          <Typography variant="body2" color="error">
            {loginMessage}
        </Typography>
      </Box>
    </Box>
  )
}

export default SigninPage
