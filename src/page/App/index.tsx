import PanelLayout from '@/components/panel/panel-layout';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    <PanelLayout>
      <Outlet />
    </PanelLayout>
  </>
);
