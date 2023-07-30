import { Box, Typography } from '@mui/material'
import React from 'react'
import { IconLogoLg } from '../assets/img'

const SignupPage = () => {
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
        </Box>   
          
    </Box>
  )
}

export default SignupPage
