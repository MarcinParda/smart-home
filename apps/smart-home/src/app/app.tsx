import { BrowserRouter } from 'react-router-dom';
import ApplicationRoutes from './routes';

export function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  );
}

export default App;
