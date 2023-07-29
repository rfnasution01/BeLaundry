import { Box, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import React from 'react';
import ListMenu from '../listContent';
import MenuSideNavbar from '../../../../data/menu/menuSidebar';

const MainContent = ({ open }) => {
    // --- Get Pathname ---
    const { pathname } = useLocation();
    const currentPath = pathname === '/' ? 'root' : pathname.split('/')[1];
  

//   --- Icon Theme ---
  const theme = useTheme();
  const color = {
    active: theme.palette.primary.main,
    unactive: '#C4C4C4',
  };
  
  return (
    <List>
      {MenuSideNavbar.map((item, idx) => (
        // --- Manu Utama ---
        <ListMenu
          open={open}
          Symbol={item.icon}
          name={item.judul}
          to={item.path}
          active={item.path.slice(1) === currentPath || item.path.slice(1) === 'dashboard' && currentPath === 'root'}
          key={idx}
        >
          {React.cloneElement(item.icon, {
            style: {
              fill:
                item.path.slice(1) === currentPath || item.path.slice(1) === 'dashboard' && currentPath === 'root'
                  ? color.active
                  : color.unactive,
            },
          })}
        </ListMenu>
      ))}
    </List>
  );
};
export default MainContent;
