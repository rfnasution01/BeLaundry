import { Typography } from '@mui/material'
import React from 'react'

const FooterLayout = () => {
  return (
    <Typography
        component='footer'
        sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '130%',
            letterSpacing: '0.02em',
            width: '100%',
            textAlign: 'center',
            color: '#303030'
        }}
    >
        Powered By  <b>BeLaundry</b> 2023 - Doomsday
    </Typography>
  )
}

export default FooterLayout
