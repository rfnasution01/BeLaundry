import { AppBar, Box, Typography } from '@mui/material';

const TopbarHomepage = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        shadow: 'none',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <Box
        p= {'21px 17px'}
        sx={{
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          justifyContent: {
            xl: 'space-between',
            lg: 'space-between',
            md: 'space-between',
            sm: '',
            xs: '',
          },
          alignItems: {
            xl: 'center',
            lg: 'center',
            md: 'center',
            sm: '',
            xs: '',
          },
        }}
      >
      </Box>
      <Typography 
        sx={{
          color: '#333'
        }}
      >
      Hello World
      </Typography>
    </AppBar>
  );
};

export default TopbarHomepage;
