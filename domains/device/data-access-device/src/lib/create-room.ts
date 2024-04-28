import { faker } from '@faker-js/faker';
import { Room } from './model';

export const createRoom = (): Room => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.sentence(5),
  };
};
