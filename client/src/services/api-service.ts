import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchPlants = async () => {
  const { data } = await api.get<PlantsModel[]>('/plants');

  return data;
};

const fetchPlant = async (id: string | number) => {
  const { data } = await api.get<PlantsModel>(`/plants/${id}`);

  return data;
};

const ApiService = {
  fetchPlants,
  fetchPlant,
};

export default ApiService;
