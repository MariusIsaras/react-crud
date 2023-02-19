import React from 'react';
import ApiService from 'services/api-service';

const usePlants = (id: string | undefined) => {
  const [plant, setPlants] = React.useState<PlantsModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedPlants = await ApiService.fetchPlants(id);

        setPlants(fetchedPlants);
      })();
    }
  }, [id]);

  return plant;
};

export default usePlants;
