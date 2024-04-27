import { FeatureDeviceHub } from '@smart-home/feature-device-hub';
import { routes } from '@smart-home/routes';
import { Route, Routes } from 'react-router-dom';

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path={routes.dashboard.path} element={<FeatureDeviceHub />} />
    </Routes>
  );
};

export default ApplicationRoutes;
