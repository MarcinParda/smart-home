import { routes } from '@smart-home/routes';
import { FeatureDeviceDashboard } from '@smart-home/feature-device-dashboard';
import { Route, Routes } from 'react-router-dom';

export function FeatureDeviceHub() {
  return (
    <Routes>
      <Route
        path={routes.dashboard.path}
        element={<FeatureDeviceDashboard />}
      />
    </Routes>
  );
}

export default FeatureDeviceHub;
