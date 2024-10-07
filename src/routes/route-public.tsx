import { Login } from '@/page/Login';
import { Navigate } from 'react-router-dom';

const RoutePublic = () => {
  return [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ];
};

export default RoutePublic;
