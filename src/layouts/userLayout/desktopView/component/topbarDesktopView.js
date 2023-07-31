import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { getNavigation } from '../../../../features/navigationSlice'
import { IconUser } from '../../../../assets/img'

const AdminTopbarDesktopView = ({drawerWidth}) => {
  const navigation = useSelector(getNavigation);
  const name = localStorage.getItem("username");
  
  return (
    <AppBar
      position="fixed"
      sx={{ 
        width: `calc(100% - ${drawerWidth}px)`, 
        ml: `${drawerWidth}px`,
        backgroundColor: '#fff' 
      }}
    >
      <Toolbar 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* --- Navigation --- */}
        <Typography 
          variant="h6" 
          noWrap 
          component="div"
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '130%',
            color: '#303030'
          }}
        >
          {navigation}
        </Typography>

        {/* --- User --- */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
          }}
        >
          <IconUser />
          <Typography 
            variant="h6" 
            noWrap 
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '130%',
              color: '#0099EE'
            }}
          >
            {name}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AdminTopbarDesktopView
