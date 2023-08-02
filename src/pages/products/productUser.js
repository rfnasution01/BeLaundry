import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { listProductUser } from './listProductUser'

const styles = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '130%',
  color: '#808080',
  WebkitLineClamp: 1,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  cursor: 'pointer',
};


const ProductUser = () => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box
      sx={{
        bgcolor: '#E7F5FD', 
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        columns={6}
        spacing={2}
        sx={{
          pt: '6rem',
          px: '1.6rem'
        }}
      >
      {listProductUser?.map((item, idx)=>(
        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={3}
          xs={3}
          key={idx}
      >
        <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#fff',
              cursor: 'pointer',
              transform: 'ease 0.3s',
              borderRadius: '5%',
              ':hover': {
                boxShadow: '0px 4px 4px 0px #3B97CB4A'
              }
          }}
        >
          <img 
            src={item.img} 
            alt={item.title} 
            style={{
              width: '100%',
              height: '25vh'
            }}
          />
          <Box 
            sx={{
              p: '1rem'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '130%',
                color: '#333'
              }}
            >{item.name}</Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '130%',
                color: '#333'
              }}
            >{item.price} / pcs</Typography>
            <Typography
              sx={{
                ...styles,
                WebkitLineClamp: expanded ? 'unset' : 1,
              }}
              onClick={handleClick}
            >{item.descr} </Typography>
          </Box>
        </Box>
        </Grid>
      ))}
      </Grid>
    </Box>
    
  )
}

export default ProductUser

