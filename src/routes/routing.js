import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import { NotFound } from '../pages';
import LoginLayout from '../layouts/loginLayout/loginLayout';

const router = createBrowserRouter([
  {
    path: '/users/*',
    element: <LoginLayout />,
  },
  {
    path: '/*',
    element: <MainLayout />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
