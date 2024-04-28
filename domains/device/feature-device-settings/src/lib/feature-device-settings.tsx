import { Device, getDevices } from '@smart-home/data-access-device';
import { useQuery } from '@tanstack/react-query';

interface FeatureDeviceSettingsProps {
  device: Device | null;
  onDeviceIconClick: (device: Device) => void;
}

export function FeatureDeviceSettings({
  device,
  onDeviceIconClick,
}: FeatureDeviceSettingsProps) {
  const devicesQuery = useQuery({ queryKey: ['devices'], queryFn: getDevices });
  return (
    <aside className="absolute flex flex-col w-[450px] right-12 top-12 bottom-12 max-h-[850px] p-8 rounded-[32px] bg-gray-500">
      <h2 className="flex-1">{device?.name}</h2>
      <div className="flex justify-center  gap-1">
        {devicesQuery.data?.map((device) => (
          <button
            type="button"
            onClick={() => onDeviceIconClick(device)}
            className="flex justify-center items-center text-primary bg-white w-8 h-8 rounded-full"
            key={device.id}
          >
            {device.name[0]}
          </button>
        ))}
      </div>
    </aside>
  );
}
