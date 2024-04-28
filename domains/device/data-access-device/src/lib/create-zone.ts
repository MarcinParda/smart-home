import { faker } from '@faker-js/faker';
import { Zone } from './model';

export const createZone = (): Zone => {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.sentence(5),
  };
};
