import { Device, getDevices } from '@smart-home/data-access-device';
import { DeviceCard } from './components/DeviceCard';
import { useQuery } from '@tanstack/react-query';

interface FeatureDeviceListProps {
  setSelectedDevice: React.Dispatch<React.SetStateAction<Device | null>>;
}

export function FeatureDeviceList({
  setSelectedDevice,
}: FeatureDeviceListProps) {
  const devicesQuery = useQuery({ queryKey: ['devices'], queryFn: getDevices });
  return (
    <main className="flex-1 bg-gray-800">
      <h2 className="pb-12">Living room</h2>
      <ul className="flex flex-wrap gap-4">
        {devicesQuery.data?.map((device) => (
          <li key={device.id}>
            <DeviceCard
              device={device}
              onDeviceCardClick={() => setSelectedDevice(device)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
