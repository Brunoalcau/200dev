import { Suspense } from 'react';
import { AbilityProvider } from './components/context/ability-context';
import { Toaster } from './components/ui/toaster';
import Route from './routes';

const LoadingScreen = () => <div>Carregando...</div>;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingScreen />}>
        <AbilityProvider>
          <Toaster />
          <Route />
        </AbilityProvider>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
