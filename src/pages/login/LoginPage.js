import { Box, Typography } from '@mui/material'
import React from 'react'
import { IconLogoLg } from '../../assets/img'
import { Link } from 'react-router-dom'
import listButtonLogin from './component/listButtonLogin'

const LoginPage = () => {
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
             Welcome to BeLaundry 
        
        </Typography>
        
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '130%',
                color: '#808080',
                marginY: '8px'
            }}
        >
            Get the best experience with BeLaundry. Just log in with your account and enjoy hassle-free washing, drying, ironing and folding services.
        </Typography>
        <Box
            sx={{
                marginY: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >   
            {
                listButtonLogin.map((item, idx)=>(
                    <Box
                        key={idx}
                        component={Link}
                        to={`${item.path}`}
                        sx={{
                            width: '60%',
                            backgroundColor: 
                                item.title === 'Sign In' ?
                                    '#007BFF'
                                :
                                    '#FF4A4A',
                            color: '#fff',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s ease',
                            ':hover': {
                                backgroundColor: 
                                    item.title === 'Sign In' ?
                                        '#0056b3'
                                    :
                                        '#FF1A1A',
                            }
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Roboto',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '130%',
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Box>
                ))
            }
        </Box>
        <Typography
            sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '130%',
                color: '#808080',
            }}
        >
            BeLaundry - Online ordering that makes your life easier. 💧👚🧦
        </Typography>
    </Box>
  )
}

export default LoginPage
