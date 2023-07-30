import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { IconLogoMd, IconUser } from '../../../../assets/img'
import TopbarModal from './topbarModal';

const AdminTopbarMobileView = () => {
  const name = localStorage.getItem("username");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleLogoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ 
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
        {/* --- Logo --- */}
        <Box
            onClick={handleLogoClick}
            sx={{
                cursor: 'pointer'
            }}
        >
            <IconLogoMd />
        </Box>

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

        {/* --- Modal -- */}
        <TopbarModal 
            open={isModalOpen} 
            onClose={handleCloseModal} 
        />
      </Toolbar>
    </AppBar>
  )
}

export default AdminTopbarMobileView
