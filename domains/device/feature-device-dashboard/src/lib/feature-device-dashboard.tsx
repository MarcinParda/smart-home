import { FeatureDeviceSidebar } from '@smart-home/feature-device-sidebar';
import { FeatureDeviceList } from '@smart-home/feature-device-list';
import { FeatureDeviceSettings } from '@smart-home/feature-device-settings';

export function FeatureDeviceDashboard() {
  return (
    <div className="min-h-screen w-full flex text-white">
      <FeatureDeviceSidebar />
      <FeatureDeviceList />
      <FeatureDeviceSettings />
    </div>
  );
}
export default FeatureDeviceDashboard;
