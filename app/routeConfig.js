import NotFound from '@containers/NotFoundPage/Loadable';
import routeConstants from '@utils/routeConstants';
// import HomeContainer from './containers/HomeContainer/Loadable';
import ItunesContainer from './containers/ItunesContainer/Loadable';
export const routeConfig = {
  // repos: {
  //   component: HomeContainer,
  //   ...routeConstants.repos
  // },
  itunes: {
    component: ItunesContainer,
    ...routeConstants.repos
  },
  notFoundPage: {
    component: NotFound,
    route: '/'
  }
};
