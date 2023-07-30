import { Box, Button, CircularProgress, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IconLogoLg } from '../../assets/img'
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
    setSignupMessage('Signup successful, please login!');
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
      {/* --- Icon Logo --- */}
      <IconLogoLg />
      
      {/* --- Title --- */}
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
      
      {/* --- Deskripsi --- */}
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
      
      {/* --- Status Message --- */}
      {isLoading ? (
        <CircularProgress sx={{ mt: 2 }} />
      ) : (
        <Typography 
            variant="body2" 
            sx={{ 
              mt: 2,
              color: 
                isSuccess ? 
                  'success.main' 
                : 
                  'error.main' 
            }}
          >            
            {signupMessage}
        </Typography> 
      )}

      {/* --- Form Sign Up --- */}
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
            {/* --- Username --- */}
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
            {/* --- Email --- */}
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
            {/* --- Password --- */}
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
            {/* --- Role --- */}
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
            {/* --- Submit --- */}
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
            
            {/* --- Login --- */}
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
                    cursor: 'pointer'                    }}
                >Sign In</Box>
            </Box>
          </Box>
      </Box>
    </Box>
  )
}

export default SignupPage
