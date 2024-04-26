import { routes } from '@smart-home/routes';
import { Route, Routes } from 'react-router-dom';

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path={routes.dashboard.path} element={<div>123</div>} />
    </Routes>
  );
};

export default ApplicationRoutes;
