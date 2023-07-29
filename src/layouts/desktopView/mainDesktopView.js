import { 
    Box 
} from '@mui/material';
import React from 'react'
import SidebarDesktopView from './sidebarDesktopView';
import TopbarDesktopView from './topbarDesktopView';
import MainRouting from '../../routes/mainRouting';

const drawerWidth = 280;

const MainDesktopView = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarDesktopView drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
        <TopbarDesktopView drawerWidth={drawerWidth} />
        <Box
          component='article' 
          sx={{
            bgcolor: '#E7F5FD', 
            minHeight: '100vh',
            padding: '4rem 1.6rem' 
          }}
        >
          <MainRouting />
        </Box>
      </Box>
    </Box>
  );
}

export default MainDesktopView;