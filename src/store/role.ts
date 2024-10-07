import { createAbility } from '@/lib/create-ability';
import { create } from 'zustand';

interface AbilityState {
  role: string;
  ability: any;
  setRole: (role: string | undefined) => void;
}

export const useAbilityStore = create<AbilityState>((set) => ({
  role: 'guest', // Role inicial padrão
  ability: createAbility('guest'), // Ability inicial baseada na role 'guest',
  setRole: (role: string | undefined) =>
    set(() => ({
      role,
      ability: createAbility(role), // Atualiza a role e as habilidades
    })),
}));
