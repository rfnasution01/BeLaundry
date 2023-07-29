import { Box, Typography } from '@mui/material';
import { IconLogo } from '../../../../../assets/sideNav/icons';

const HeaderContent = ({ open, setOpen }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.2,
        my: '20px',
        cursor: 'pointer',
        marginTop: '3vh',
      }}
      onClick={()=>setOpen(!open)}
    >
      <IconLogo />
        {open && (
            <Typography
                sx={{
                    fontFamily: 'roboto',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '35px',
                    color: '#fff'
                }}
            >BeLaundry</Typography>
        )}
    </Box>
  );
};

export default HeaderContent;
