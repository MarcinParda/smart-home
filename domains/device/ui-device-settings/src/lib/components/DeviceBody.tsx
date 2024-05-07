import { Device } from '@smart-home/data-access-device';

interface DeviceBodyProps {
  type: Device['type'];
}

const BulbBody = () => <div>Bulb Body</div>;
const ThermostatBody = () => <div>Thermostat Body</div>;
const MediaPlayerBody = () => <div>Media Player Body</div>;
const UnknownBody = () => <div>Uknown Device Body</div>;

export function DeviceBody({ type }: DeviceBodyProps) {
  switch (type) {
    case 'bulb':
      return <BulbBody />;
    case 'media-player':
      return <MediaPlayerBody />;
    case 'thermostat':
      return <ThermostatBody />;
    default:
      return <UnknownBody />;
  }
}
