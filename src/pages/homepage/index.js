import { Box } from '@mui/material';
import React from 'react'
import HomepageUser from './homepageUser';
import HomepageAdmin from './homepageAdmin';

const Homepage = () => {
  const role = localStorage.getItem("role");

  return (
    <Box>
        {
            role === 'user' ?
                <HomepageUser />
            :
                <HomepageAdmin />
        }
    </Box>
  )
}

export default Homepage
