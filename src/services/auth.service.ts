import { instance } from '../config/axios';
import { User } from '../interface/User';

export const authService = {
  auth: async (user: User) => {
    return await instance.post('/fake/token', null, { params: { ...user } });
  },
};
