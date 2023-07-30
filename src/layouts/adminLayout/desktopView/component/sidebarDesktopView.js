import { Box, Divider, Drawer, Typography } from '@mui/material';
import React from 'react';
import listMenuSidebar from '../../../component/listMenuSidebar';
import { IconLogo, IconLogout } from '../../../../assets/img';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../../../../features/navigationSlice';


const AdminSidebarDesktopView = ({drawerWidth}) => {
  const { pathname } = useLocation();
  const currentPath = pathname === '/' ? 'root' : pathname.split('/')[1];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const color = {
    active: '#3B97CB',
    unactive: '#fff',
  };

  const handleClick = (nav) => {
    dispatch(setNavigation(nav))
  }

  const logoutHandle = () => {
    localStorage.removeItem('token');
    navigate('/users');
  }
  
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#3B97CB',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* --- Logo --- */}
      <Link
        to={'/'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '5vh 1.5vw 10vh 1.5vw',
          color: '#fff',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <IconLogo />
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '130%',
          }}
        >
          BeLaundry
        </Typography>
      </Link>

      {/* --- Menu --- */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          marginX: '1.5vw',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '130%',
            color: '#fff',
            marginBottom: '8px',
          }}
        >
          Menu
        </Typography>
        {listMenuSidebar.map((item, idx) => (
          <Box
            key={idx}
            component={Link} 
            onClick={()=>handleClick(item.title)}
            to={item.path}
            sx={{
              backgroundColor:
                item.path.slice(1) === currentPath ||
                (item.path.slice(1) === 'home' && currentPath === 'root')
                  ? color.unactive
                  : 'transparent',
              color:
                item.path.slice(1) === currentPath ||
                (item.path.slice(1) === 'home' && currentPath === 'root')
                  ? color.active
                  : color.unactive,
              width: '100%',
              marginBottom: '8px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              ':hover': {
                backgroundColor: '#fff',
                color: color.active,
                '& svg path':{
                  fill: color.active,
                },
              },
            }}
          >
            {React.cloneElement(item.icon, {
              style: {
                margin: '12px 1vw 12px 1.5vw',
                padding: 0,
                cursor: 'pointer',
                fill:
                  item.path.slice(1) === currentPath ||
                  (item.path.slice(1) === 'home' && currentPath === 'root')
                    ? color.active
                    : color.unactive,
              },
            })}

            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '130%',
                marginY: '12px',
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ margin: '1.5vw', bgcolor: '#fff' }} />

      {/* --- Logout --- */}
      <Box
        onClick={logoutHandle}
        sx={{
          marginX: '1.5vw',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          color: '#fff',
          ':hover': {
            backgroundColor: '#fff',
            color: color.active,
            '& svg path':{
              fill: color.active,
            },
          },
        }}
      >
        {React.cloneElement(<IconLogout />, {
          style: {
            margin: '12px 1vw 12px 1.5vw',
            padding: 0,
            cursor: 'pointer',
            fill: '#fff'
          },
        })}

        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '130%',
            marginY: '12px',
          }}
        >
          Logout
        </Typography>
      </Box>
    </Drawer>
  );
};

export default AdminSidebarDesktopView;
