import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page';
import PlantsPage from 'pages/plants-page';
import routes from './routes';
import PlantsFormPage from '../pages/plants-form-page/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.PlantsPage.routePath,
        element: <PlantsPage />,
      },
      {
        path: routes.PlantsCreatePage,
        element: <PlantsFormPage />,
      },
      {
        path: routes.PlantsUpdatePage.routePath,
        element: <PlantsFormPage mode="update" />,
      },
    ],
  },
]);

export default router;
