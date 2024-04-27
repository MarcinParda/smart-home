import { routes } from '@smart-home/routes';
import { UiDeviceDashboard } from '@smart-home/ui-device-dashboard';
import { Route, Routes } from 'react-router-dom';

export function FeatureDeviceHub() {
  return (
    <Routes>
      <Route path={routes.dashboard.path} element={<UiDeviceDashboard />} />
    </Routes>
  );
}

export default FeatureDeviceHub;
