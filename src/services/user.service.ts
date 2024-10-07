import { instance } from '../config/axios';

export const userService = {
  all: async () => {
    return await instance.get('/fake/user');
  },
};
