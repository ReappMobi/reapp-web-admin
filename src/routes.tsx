import React from 'react';

import { Home } from './pages/home';
import { HomeLayout } from './layouts/home-layout';
import { Login } from './pages/login';
import { RouteObject } from 'react-router-dom';
import { Donations } from './pages/donations';
import { Insitutions } from './pages/institutions';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'donations', element: <Donations /> },
      { path: 'institutions', element: <Insitutions /> },
    ],
  },
  { path: '/login', element: <Login /> },
];
