import { createDevice } from './create-device';
import { createNotification } from './create-notification';
import { createRoom } from './create-room';
import { createZone } from './create-zone';

export const getNotifications = () => {
  const zones = [...new Array(10).keys()].map(() => createZone());
  const rooms = [...new Array(10).keys()].map(() => createRoom());
  const devices = rooms
    .map((room, index) =>
      [...new Array(10).keys()].map(() =>
        createDevice({
          roomId: room.id,
          zoneId: index <= 5 ? zones[1].id : zones[2].id,
        })
      )
    )
    .flat();

  return devices.map((device) =>
    createNotification({
      roomId: device.roomId,
      deviceId: device.id,
      deviceType: device.type,
      deviceZoneId: device.zoneId,
    })
  );
};
