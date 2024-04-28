import { FeatureDeviceNotificationList } from '@smart-home/feature-device-notification-list';
import { FeatureDeviceSidebar } from '@smart-home/feature-device-sidebar';

export function UIDeviceNotificationsPage() {
  return (
    <div className="min-h-screen w-full flex text-white">
      <FeatureDeviceSidebar />
      <FeatureDeviceNotificationList />
    </div>
  );
}
