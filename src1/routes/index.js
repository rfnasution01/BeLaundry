import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from '../pages';
import MainLayout from '../layouts/mainLayout';

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
