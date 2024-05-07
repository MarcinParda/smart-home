import { FeatureDeviceNotificationsPage } from '@smart-home/feature-device-notifications-page';
import { FeatureDevicePage } from '@smart-home/feature-device-page';
import { routes } from '@smart-home/routes';
import { Route, Routes } from 'react-router-dom';

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path={routes.dashboard.path} element={<FeatureDevicePage />} />
      <Route
        path={routes.notifications.path}
        element={<FeatureDeviceNotificationsPage />}
      />
    </Routes>
  );
};

export default ApplicationRoutes;
