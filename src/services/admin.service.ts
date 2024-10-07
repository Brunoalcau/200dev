import { instance } from '../config/axios';

export const adminService = {
  all: async () => {
    return await instance.get('/fake/admin');
  },
};
