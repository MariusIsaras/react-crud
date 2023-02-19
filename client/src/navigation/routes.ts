const routes = {
  HomePage: '/',
  PlantPage: '/Plants',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
