import { Can } from '@/components/context/ability-context';
import React from 'react';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

interface PrivateRouteProps {
  element: JSX.Element;
  requiredAbility: { action: string; subject: string };
}

const PrivateRoute = ({ element, requiredAbility }: PrivateRouteProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Can I={requiredAbility.action} a={requiredAbility.subject}>
      {(canAccess) =>
        canAccess ? (
          React.cloneElement(element, { location, navigate, params })
        ) : (
          <Navigate to="/unauthorized" replace />
        )
      }
    </Can>
  );
};

export default PrivateRoute;
