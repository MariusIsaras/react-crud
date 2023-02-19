import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import { Box } from '@mui/material';
import usePlants from 'hooks/usePlants';

const PlantsPage = () => {
  const { id } = useParams();
  const plant = usePlants(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(plant, null, 4)}
    </Box>
  );
};

export default PlantsPage;
