import { getNotifications } from './get-notifications';

export const getDeviceNotifications = (deviceId: string) => {
  return getNotifications().filter(
    (notification) => notification.device.id === deviceId
  );
};
