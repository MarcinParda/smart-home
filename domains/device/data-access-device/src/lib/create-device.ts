import { faker } from '@faker-js/faker';
import { Device } from './model';

export const createDevice = ({
  roomId,
  zoneId,
}: {
  roomId: string;
  zoneId: string;
}): Device => {
  return {
    roomId: roomId,
    zoneId: zoneId,
    id: faker.string.uuid(),
    name: faker.lorem.sentence(1),
    type: faker.helpers.arrayElement(['bulb', 'media-player', 'thermostat']),
    model: faker.helpers.arrayElement(['mt-2', 'mt-4', 'mt-8']),
  };
};
