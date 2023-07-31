import { Box } from '@mui/material';
import React from 'react'
import ProductUser from './productUser';
import ProductAdmin from './productAdmin';

const Products = () => {
  const role = localStorage.getItem("role");

  return (
    <Box>
        {
            role === 'user' ?
                <ProductUser />
            :
                <ProductAdmin />
        }
    </Box>
  )
}

export default Products
