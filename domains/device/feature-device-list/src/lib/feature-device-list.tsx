import { getDevices } from '@smart-home/data-access-device';
import { useMemo } from 'react';
import { DeviceCard } from './components/DeviceCard';

export function FeatureDeviceList() {
  const data = useMemo(() => getDevices(), []);
  return (
    <main className="flex-1 bg-gray-800">
      <h2 className="pb-12">Living room</h2>
      <ul className="flex flex-wrap gap-4">
        {data.map((device) => (
          <li key={device.id}>
            <DeviceCard device={device} />
          </li>
        ))}
      </ul>
    </main>
  );
}
