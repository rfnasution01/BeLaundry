import { 
    Box 
} from '@mui/material';
import React from 'react'
import MainRouting from '../../../routes/mainRouting';
import { AdminSidebarDesktopView, AdminTopbarDesktopView } from './component';

const drawerWidth = 280;

const AdminDesktopView = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidebarDesktopView drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
        <AdminTopbarDesktopView drawerWidth={drawerWidth} />
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

export default AdminDesktopView;