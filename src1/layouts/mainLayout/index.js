import { Box, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsMobile, setIsMobile } from '../../features/isMobile';
import MobileViewLayout from './mobileView';
import DesktopViewLayout from './desktopView';

const MainLayout = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(getIsMobile);

  const mobileMediaQuery = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    dispatch(setIsMobile(mobileMediaQuery))    
  }, [dispatch, mobileMediaQuery]);

  return (
    <Box>
      {
        isMobile ?
          <MobileViewLayout />
        :
          <DesktopViewLayout />
      }
    </Box>
  );
};

export default MainLayout;
