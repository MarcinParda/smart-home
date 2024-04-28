import { createDevice } from './create-device';
import { createRoom } from './create-room';
import { createZone } from './create-zone';

export const getDevices = () => {
  const zones = [...new Array(3).keys()].map(() => createZone());
  const rooms = [...new Array(3).keys()].map(() => createRoom());
  const devices = rooms
    .map((room, index) =>
      [...new Array(3).keys()].map(() =>
        createDevice({
          roomId: room.id,
          zoneId: index <= 5 ? zones[1].id : zones[2].id,
        })
      )
    )
    .flat();
  return devices;
};
