import { 
    Box 
} from '@mui/material';
import React from 'react'
import MainRouting from '../../../routes/mainRouting';
import { AdminSidebarDesktopView, AdminTopbarDesktopView } from './component';
import { useLocation } from 'react-router-dom';

const drawerWidth = 280;

const AdminDesktopView = () => {
  const path = useLocation().pathname;
  console.log({path})
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidebarDesktopView drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
        <AdminTopbarDesktopView drawerWidth={drawerWidth} />
        {
          path === '/products' ?
            <Box>
              <MainRouting />
            </Box>
          :
            <Box
              component='article' 
              sx={{
                bgcolor: '#E7F5FD', 
                minHeight: '80vh',
                padding: '4rem 1.6rem' 
              }}
            >
              <MainRouting />
            </Box> 
        }
      </Box>
    </Box>
  );
}

export default AdminDesktopView;