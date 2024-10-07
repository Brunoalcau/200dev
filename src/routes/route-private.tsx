import PrivateRoute from '@/components/lib/private-route';
import { Admin } from '@/page/Admin';
import { App } from '@/page/App';
import { Home } from '@/page/Home';
import { User } from '@/page/User';
import { Navigate } from 'react-router';

const RoutePrivate = () => {
  return [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'admin',
          element: (
            <PrivateRoute
              requiredAbility={{ action: 'read', subject: 'Admin' }}
              element={<Admin />}
            />
          ),
        },
        {
          path: 'user',
          element: (
            <PrivateRoute
              requiredAbility={{ action: 'read', subject: 'User' }}
              element={<User />}
            />
          ),
        },
        {
          path: '',
          element: (
            <PrivateRoute
              requiredAbility={{ action: 'read', subject: 'User' }}
              element={<Home />}
            />
          ),
        },
        {
          path: '*',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ];
};

export default RoutePrivate;
