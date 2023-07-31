import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { IconNote, ImgJeans, ImgLaundry, ImgOrder, ImgTshirt, ImgUserBg, ImgUserBg1, ImgUserBg2 } from '../../assets/img'

const HomepageUser = () => {
  const username = localStorage.getItem('username');

  return (
    <Box 
      sx={{ 
        mt: '2rem',
      }}
    >
      {/* --- Card --- */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgUserBg1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '11rem',
            width: '70%'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '130%',
              color: '#fff',
              mb: '1rem',
            }}
          >Welcome, {username}</Typography>
          <Box
            sx={{
              backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgUserBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              minWidth: '70%',
              minHeight: '30vh',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'end',
              justifyContent: 'end',
              padding: '1rem',
              backgroundColor: '#fff',
              boxShadow: '0px 4px 4px 0px #3B97CB4A',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '130%',
                color: '#535353'
              }}
            >Your Balance</Typography>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '130%',
                color: '#0099EE'
              }}
            >$ 3000</Typography>
          </Box>
        </Box>
      </Box>

      {/* --- Previus --- */}
      <Box
        sx={{
          mt: '9rem',
          mb: '1rem',
          marginX: '1.6rem',
        }}
      >
        <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '130%',
                color: '#3B97CB',
                textTransform: 'uppercase',
              }}
        >Previus Order</Typography>
        <Grid
          container
          columns={3}
        >
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            sx={{
              mt: '1rem',
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              gap: '10px',
              bgcolor: '#fff',
              borderRadius: '8px',
              boxShadow: '0px 4px 4px 0px #3B97CB4A',
            }}
          >
            <img src={ImgLaundry} alt="Laundry" />
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '130%',
                  letterSpacing: '1px',
                  color: '#525252',
                }}
              >Bag of Laundry</Typography>
              <Box 
                sx={{
                  mt: '10px',
                }}
              >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '130%',
                  letterSpacing: '1px',
                  color: '#535353',
                }}
              >Total Order</Typography>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '130%',
                  letterSpacing: '1px',
                  color: '#0099EE',
                }}
              >$ 180</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={1}
            lg={1}
            md={1}
            sm={1}
            xs={1}
          >
            <Box
              sx={{
                backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgUserBg2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%'
              }}
            >
              <IconNote/>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '130%',
                  letterSpacing: '1px',
                  color: '#fff',
                  textTransform: 'uppercase',
                  mt: '10px',
                }}
              >Invoice</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* --- Most Ordered --- */}
      <Box
        sx={{
          mt: '2rem',
          mb: '1rem',
          marginX: '1.6rem',
        }}
      >
        <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '130%',
                color: '#3B97CB',
                textTransform: 'uppercase',
              }}
        >You Most Ordered</Typography>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgOrder})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'end',
            mt: '1rem',
            borderRadius: '8px',
            padding: '1rem',
          }}
        >
          <Box>
          <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '130%',
                color: '#fff',
              }}
        >Dry Cleaning</Typography>
        <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '130%',
                color: '#fff',
              }}
        >12x | total of $ 4.000</Typography>
          </Box>
          
        </Box>
      </Box>

      {/* --- Most Ordered --- */}
      <Box
        sx={{
          mt: '2rem',
          mb: '1rem',
          marginX: '1.6rem',
        }}
      >
        <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '130%',
                color: '#3B97CB',
                textTransform: 'uppercase',
              }}
        >Our Latest Product</Typography>
          <Grid
            container
            columns={2}
            spacing={2}
            sx={{
              mt: '1rem'
            }}
          >
            <Grid
              items
              xl={1}
              lg={1}
              md={2}
              sm={2}
              xs={2}
              sx={{}}
            >
              <Box
                sx={{
                  backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgJeans})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top center',
                  backgroundSize: 'cover',
                  minHeight: '50vh',
                  display: 'flex',
                  alignItems: 'end',
                  mt: '1rem',
                  borderRadius: '8px',
                  padding: '1rem',
                }}
              >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignitems: 'center',
                    gap: '10px'
                  }}
                >
                  <Box  
                    sx={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      bgcolor: '#F36868',
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '130%',
                      color: '#fff',
                    }}
              >Dry Cleaning</Typography>
                </Box>
                <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '28px',
                      lineHeight: '130%',
                      color: '#fff',
                    }}
              >Jeans</Typography>
              <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '130%',
                      color: '#fff',
                    }}
              >$ 10.00/pc</Typography>
            </Box>
        </Box>
          </Grid>
          <Grid
            items
            xl={1}
            lg={1}
            md={2}
            sm={2}
            xs={2}
          >
            <Box
                sx={{
                  backgroundImage: `linear-gradient(to top, rgba(173, 216, 230, 0.2), rgba(173, 216, 230, 0.2)), url(${ImgTshirt})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top center',
                  backgroundSize: 'cover',
                  minHeight: '50vh',
                  display: 'flex',
                  alignItems: 'end',
                  mt: '1rem',
                  borderRadius: '8px',
                  padding: '1rem',
                }}
              >
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignitems: 'center',
                    gap: '10px'
                  }}
                >
                  <Box  
                    sx={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      bgcolor: '#F36868'
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '130%',
                      color: '#fff',
                    }}
              >Dry Cleaning</Typography>
                </Box>
                <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '28px',
                      lineHeight: '130%',
                      color: '#fff',
                    }}
              >T-Shirt</Typography>
              <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '130%',
                      color: '#fff',
                    }}
              >$ 6.00/pc</Typography>
            </Box>
        </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default HomepageUser
