import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsMobile, setIsMobile } from '../features/isMobileSlice';
import { useMediaQuery } from '@mui/material';
import MainMobileView from './mobileView/mainMobileView';
import MainDesktopView from './desktopView/mainDesktopView';

const MainLayout = () => {
    const dispatch = useDispatch();
    const isMobile = useSelector(getIsMobile);
  
    const mobileMediaQuery = useMediaQuery('(max-width: 450px)');
    // const mobileMediaQuery = useMediaQuery('(max-width: 767px)');
  
    useEffect(() => {
      dispatch(setIsMobile(mobileMediaQuery))    
    }, [dispatch, mobileMediaQuery]);
  return (
    <main>
      {
        isMobile ? 
            <MainMobileView />
        :
            <MainDesktopView />
      }
    </main>
  )
}

export default MainLayout
