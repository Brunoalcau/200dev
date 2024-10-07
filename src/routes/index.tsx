import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useAuthStore } from '@/store/auth';
import { useStore } from '@/store/use-store';
import RoutePrivate from './route-private';
import RoutePublic from './route-public';

const Route = () => {
  const state = useStore(useAuthStore, (state) => state);

  console.log(state);
  const route = createBrowserRouter(
    state?.token ? RoutePrivate() : RoutePublic()
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default Route;
