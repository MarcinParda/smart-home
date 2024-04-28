import { Notification } from "./model";
import { faker } from "@faker-js/faker";

export const createNotification = ({
  roomId,
  deviceId,
  deviceType,
  deviceZoneId,
}: {
  roomId: string;
  deviceId: string;
  deviceZoneId: string;
  deviceType: string;
}): Notification => {
  return {
    id: faker.string.uuid(),
    device: {
      id: deviceId,
      type: deviceType,
      zoneId: deviceZoneId,
      roomId: roomId,
    },
    title: faker.lorem.sentence(5),
    message: faker.lorem.paragraph(),
  };
};
