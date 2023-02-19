const routes = {
  HomePage: '/',
<<<<<<< HEAD
  PlantsPage: '/Plants',
  
=======
  PlantPage: '/Plants',
>>>>>>> 7a599742d8bfcad7793d6c61335f71985cbc0061
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
