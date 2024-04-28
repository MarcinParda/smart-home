import { FeatureDeviceSidebar } from '@smart-home/feature-device-sidebar';
import { FeatureDeviceList } from '@smart-home/feature-device-list';
import { FeatureDeviceSettings } from '@smart-home/feature-device-settings';
import { useState } from 'react';
import { Device } from '@smart-home/data-access-device';

export function UiDeviceListPage() {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  return (
    <div className="min-h-screen w-full flex text-white">
      <FeatureDeviceSidebar />
      <FeatureDeviceList setSelectedDevice={setSelectedDevice} />
      {selectedDevice && (
        <FeatureDeviceSettings
          device={selectedDevice}
          onDeviceIconClick={setSelectedDevice}
        />
      )}
    </div>
  );
}
