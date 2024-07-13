import React from 'react';

import { Home } from './pages/home';
import { HomeLayout } from './layouts/home-layout';
import { Login } from './pages/login';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  { path: '/login', element: <Login /> },
];
