import { Box, Button, CircularProgress, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IconLogoLg } from '../assets/img'
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const storedUsername = localStorage.getItem('username');
    if (storedUsername && storedUsername === username) {
      setSignupMessage('Username already exists, please choose a different username.');
      setIsSuccess(false);
      setIsLoading(false);
      return;
    }
    
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
    localStorage.setItem('password', password);
    setSignupMessage('Signup successful!');
    setIsSuccess(true);
    setIsLoading(false); 
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
        Sign Up
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
        👉 Register now and get exclusive offers! 👈
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              fullWidth
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
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
              Sign Up
            </Button>

            {isLoading ? (
              <CircularProgress sx={{ mt: 2 }} />
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'end',
                }}
                >
                  <Typography variant="body2" color="#333">
                    Already have an account ?
                  </Typography>
                  <Box
                    component={Link}
                    to={'../signin'}
                    relative='path'
                    sx={{
                      textDecoration: 'none',
                      marginLeft: '3px',
                      cursor: 'pointer'
                    }}
                  >Sign In</Box>
              </Box>
            )}
            </Box>
          
         
          <Typography 
            variant="body2" 
            sx={{ 
              color: 
                isSuccess ? 
                  'success.main' 
                : 
                  'error.main' 
            }}
          >            
            {signupMessage}
        </Typography>
      </Box>
          
    </Box>
  )
}

export default SignupPage
