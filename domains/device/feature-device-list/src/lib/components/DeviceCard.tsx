import { Device } from '@smart-home/data-access-device';
import classNames from 'classnames';

interface DeviceCardProps {
  device: Device;
  onDeviceCardClick: () => void;
}

export const DeviceCard = ({ device, onDeviceCardClick }: DeviceCardProps) => {
  return (
    <button
      type="button"
      onClick={onDeviceCardClick}
      key={device.id}
      className={classNames(
        'flex flex-col w-[192px] h-[166px] p-4 rounded-3xl text-left',
        {
          'bg-yellow text-primary': device.type === 'bulb',
        },
        {
          'bg-purple text-white': device.type === 'media-player',
        },
        {
          'bg-green text-primary': device.type === 'thermostat',
        }
      )}
    >
      <div className="pb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-white text-primary rounded-full">
          {device.type[0].toUpperCase()}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{device.name}</h3>
        <div className="">{device.type}</div>
      </div>
    </button>
  );
};
