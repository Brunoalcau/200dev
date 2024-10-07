import { defineAbility } from '@casl/ability';

export const createAbility = (role: string | undefined) =>
  defineAbility((can, cannot) => {
    if (role === 'admin') {
      can('read', 'Admin');
    } else if (role === 'user') {
      can('read', 'User');
      cannot('delete', 'User');
    } else {
      can('read', 'User');
    }
  });
