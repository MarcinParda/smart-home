import { routes } from '@smart-home/routes';
import { UiDeviceListPage } from '@smart-home/ui-device-list-page';
import { Route, Routes } from 'react-router-dom';
import { UIDeviceNotificationsPage } from '@smart-home/ui-device-notifications-page';

export function FeatureDeviceHub() {
  return (
    <Routes>
      <Route path={routes.dashboard.path} element={<UiDeviceListPage />} />
      <Route
        path={routes.notifications.path}
        element={<UIDeviceNotificationsPage />}
      />
    </Routes>
  );
}

export default FeatureDeviceHub;
