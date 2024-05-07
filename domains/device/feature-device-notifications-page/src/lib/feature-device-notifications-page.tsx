import { UiDeviceNotificationsList } from '@smart-home/ui-device-notifications-list';
import { UiDeviceSidebar } from '@smart-home/ui-device-sidebar';

export function FeatureDeviceNotificationsPage() {
  return (
    <div className="min-h-screen w-full flex text-white">
      <UiDeviceSidebar />
      <UiDeviceNotificationsList />
    </div>
  );
}
