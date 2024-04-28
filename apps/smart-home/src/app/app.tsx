import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApplicationRoutes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
