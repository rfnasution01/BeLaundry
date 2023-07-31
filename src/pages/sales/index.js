import { Box } from '@mui/material';
import React from 'react'
import SalesUser from './salesUser';
import SalesAdmin from './salesAdmin';

const Sales = () => {
  const role = localStorage.getItem("role");

  return (
    <Box>
        {
            role === 'user' ?
                <SalesUser />
            :
                <SalesAdmin />
        }
    </Box>
  )
}

export default Sales
