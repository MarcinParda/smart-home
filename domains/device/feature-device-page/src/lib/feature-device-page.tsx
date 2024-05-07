import { UiDeviceSidebar } from '@smart-home/ui-device-sidebar';
import { UiDeviceList } from '@smart-home/ui-device-list';
import { UiDeviceSettings } from '@smart-home/ui-device-settings';
import { useState } from 'react';
import { Device } from '@smart-home/data-access-device';

export function FeatureDevicePage() {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  return (
    <div className="min-h-screen w-full flex text-white">
      <UiDeviceSidebar />
      <UiDeviceList setSelectedDevice={setSelectedDevice} />
      {selectedDevice && (
        <UiDeviceSettings
          device={selectedDevice}
          onDeviceIconClick={setSelectedDevice}
        />
      )}
    </div>
  );
}
