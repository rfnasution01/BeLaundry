import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsMobile, setIsMobile } from '../features/isMobileSlice';
import { useMediaQuery } from '@mui/material';
import { AdminDesktopView, AdminMobileView } from './adminLayout';
import UserMobileView from './userLayout/mobileView';
import UserDesktopView from './userLayout/desktopView';

const MainLayout = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector(getIsMobile);
  const role = localStorage.getItem('role');
  
  const mobileMediaQuery = useMediaQuery('(max-width: 960px)');
  
  useEffect(() => {
    dispatch(setIsMobile(mobileMediaQuery))    
  }, [dispatch, mobileMediaQuery]);

  return (
    <main>
      {
        role === 'user' ?
            isMobile ?
                <UserMobileView />
            :
                <UserDesktopView />
        :
            isMobile ?
                <AdminMobileView />
            :
                <AdminDesktopView />
      }
    </main>
  )
}

export default MainLayout
