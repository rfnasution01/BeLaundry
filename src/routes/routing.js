import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';
import { NotFound } from '../pages';

const router = createBrowserRouter([
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
