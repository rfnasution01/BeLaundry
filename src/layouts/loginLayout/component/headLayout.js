import { Box, Typography } from '@mui/material'
import React from 'react'
import { IconBack, IconLogo } from '../../../assets/img'
import { Link, useLocation } from 'react-router-dom';

const HeadLayout = () => {
  const location = useLocation();
  const isMainRoute = location.pathname === '/users' || location.pathname === '/users/';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        marginX: '2rem',
      }}
    >
      {
        isMainRoute ?
          <Link 
            to="." 
          >
            <IconLogo />
          </Link>
        :
        <Link 
          to=".." 
          relative="path"
        >
          <IconBack />
        </Link>
      }
      
      {
        isMainRoute ? 
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '130%',
            color: '#007BFF',
          }}
        >BeLaundry</Typography>
        :
         ''
      }
    </Box>
  )
}

export default HeadLayout
