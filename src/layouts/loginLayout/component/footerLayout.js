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
            width: '100%',
            textAlign: 'center',
            color: '#303030'
        }}
    >
        Powered By  <b>BeLaundry</b> 2023-2030
    </Typography>
  )
}

export default FooterLayout
