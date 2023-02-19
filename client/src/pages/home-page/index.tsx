import React from 'react';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import Header from './header';
import PlantsCard from './plants-card';
import * as Styled from './styled';

const HomePage = () => {
  const [Plants, setPlants] = React.useState<PlantsModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedPlants = await ApiService.fetchPlants();
      setPlants(fetchedPlants);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Styled.PlantsCardGrid>
        {Plants.map((plants) => <PlantsCard key={plants.id} {...plants} />)}
      </Styled.PlantsCardGrid>
    </Container>
  );
};

export default HomePage;
