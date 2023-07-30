import { Box, Divider, Modal, Typography } from "@mui/material";
import { IconHome, IconLogout } from "../../../../assets/img";
import listMenuSidebar from "../../../component/listMenuSidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNavigation } from "../../../../features/navigationSlice";
import React from "react";

const TopbarModal = ({ open, onClose }) => {
const { pathname } = useLocation();
  const currentPath = pathname === '/' ? 'root' : pathname.split('/')[1];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const color = {
    active: '#3B97CB',
    unactive: '#333',
  };

  const handleClick = (nav) => {
    dispatch(setNavigation(nav))
    onClose()
  }

  const logoutHandle = () => {
    localStorage.removeItem('token');
    navigate('/users');
  }
  
    return (
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            maxWidth: '400px',
            maxHeight: '80vh',
            bgcolor: '#fff',
            borderRadius: '8px',
            boxShadow: 24,
            p: 4,
            outline: 'none',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '130%',
              color: '#000',
              marginBottom: '8px',
            }}
          >
            Menu
          </Typography>
          <Box>
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
                        ? color.active
                        : 'transparent',
                    color:
                        item.path.slice(1) === currentPath ||
                        (item.path.slice(1) === 'home' && currentPath === 'root')
                        ? '#fff'
                        : color.unactive,
                    width: '100%',
                    marginBottom: '8px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex', 
                    alignItems: 'center', 
                    textDecoration: 'none', 
                    ':hover': {
                        backgroundColor: color.active,
                        color: '#fff',
                        '& svg path':{
                        fill: '#fff',
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
                            ? '#fff'
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

            <Divider sx={{ marginY: '1.5vw', bgcolor: color.unactive }} />

            {/* --- Logout --- */}
            <Box
                onClick={logoutHandle}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: '#333',
                    borderRadius: '8px',
                    ':hover': {
                    backgroundColor: color.active,
                    color: '#fff',
                    '& svg path':{
                        fill: '#fff',
                    },
                    },
                }}
            >
            {React.cloneElement(<IconLogout />, {
                style: {
                margin: '12px 1vw 12px 1.5vw',
                padding: 0,
                cursor: 'pointer',
                fill: '#333'
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
            
          </Box>
        </Box>
      </Modal>
    );
};
  
export default TopbarModal;