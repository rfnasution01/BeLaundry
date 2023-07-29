import { Box, Typography } from '@mui/material';
import { IconLogo } from '../../../../assets/sideNav/icons';

const HeaderContent = ({ open }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.2,
        my: '20px',
      }}
    >
      <IconLogo />
      {open && (
        <Typography
          color="primary"
          fontWeight={700}
          fontSize={'18px'}
          lineHeight={'25px'}
          sx={{ opacity: open ? 1 : 0 }}
        >
          CV Saya
        </Typography>
      )}
    </Box>
  );
};

export default HeaderContent;
