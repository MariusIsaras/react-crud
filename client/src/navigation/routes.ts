const PlantsPagePath = '/plants-page/' as const;
const PlantsUpdatePagePath = '/plants-update-page/' as const;

const routes = {
  HomePage: '/',
  PlantsPage: {
    routePath: `${PlantsPagePath}:id`,
    createLink: (id: string | number) => `${PlantsPagePath}${id}`,
  },
  PlantsUpdatePage: {
    routePath: `${PlantsUpdatePagePath}:id`,
    createLink: (id: string | number) => `${PlantsUpdatePagePath}${id}`,
  },
  PlantsCreatePage: '/plants-create-page',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
