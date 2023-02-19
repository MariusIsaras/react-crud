import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/home-page';
<<<<<<< HEAD
import PlantsPage from 'pages/PlantsPage';
=======
import PlantPage from 'pages/PlantPage';
>>>>>>> 7a599742d8bfcad7793d6c61335f71985cbc0061
import routes from './routes';

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
<<<<<<< HEAD
        path: routes.HomePage,
        element: <PlantsPage />,
=======
        path: routes.PlantPage,
        element: <PlantPage />,
>>>>>>> 7a599742d8bfcad7793d6c61335f71985cbc0061
      },
    ],
  },
]);

export default router;
