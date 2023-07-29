import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../../../../features/navigation';
  
  const ListMenu = ({ open, active = false, children, name, to }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    // --- Icon Theme ---
    const color = {
      active: theme.palette.primary.main,
      unactive: '#C4C4C4',
    };
  
    // --- Set Navigation ---
    const handleNavigationClick = (navigationName) => {
      let data = JSON.parse(localStorage.getItem('cvSayaData'));
  
      if (!data) {
        data = {
          coreHRMenu: 0,
          timesheetMenu: 0,
          employeeMenu: 0,
          payrollMenu: 0,
        };
      } else {
        data.coreHRMenu = 0;
        data.timesheetMenu = 0;
        data.employeeMenu = 0;
        data.payrollMenu = 0;
      }
  
      localStorage.setItem('cvSayaData', JSON.stringify(data));
      dispatch(setNavigation(navigationName));
    };
  
    return (
      <Link to={to} onClick={() => handleNavigationClick(name)}>
        <ListItem
          disablePadding
          sx={[
            {
              display: 'block',
              '&:hover': {
                bgcolor: 'rgba(81, 177, 92, 0.04)',
              },
              bgcolor: active ? 'rgba(81, 177, 92, 0.04)' : 'none',
            },
            active && {
              borderLeft: 4,
              borderColor: theme.palette.primary.main,
            },
          ]}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                width: '20px',
                display: 'flex',
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {children}
            </ListItemIcon>
            <ListItemText
              primary={name}
              sx={[
                { opacity: open ? 1 : 0 },
                {
                  '.MuiTypography-root': {
                    fontWeight: active ? 700 : 400,
                    color: active ? color.active : color.unactive,
                  },
                },
              ]}
            />
          </ListItemButton>
        </ListItem>
      </Link>
    );
  };
  
  export default ListMenu;
  