import { 
  Box 
} from '@mui/material';
import React from 'react'
import MainRouting from '../../../routes/mainRouting';
import AdminTopbarMobileView from './component/topbarMobileView';

const AdminMobileView = () => {
return (
  <Box sx={{ display: 'flex' }}>
    <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
      <AdminTopbarMobileView />
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

export default AdminMobileView;