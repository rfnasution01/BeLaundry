import { useEffect, useState } from "react";
import { setAuthToken } from "../configs/api";
import { Box, CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({page}) => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  useEffect(() => {
    const checkIsLogin = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    checkIsLogin();
  }, []);

  if (isLoading) {
    return (
        <Box 
            textAlign={'center'}
            my={'30px'}
        >
           <CircularProgress color="success" />
        </Box>
    )
  }

  if (!token) {
    return <Navigate to="/users" replace />;
  }

  return page;
};

export default ProtectedRoute;