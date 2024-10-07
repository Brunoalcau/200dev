import { useAbilityStore } from '@/store/role';
import { AnyAbility, defineAbility } from '@casl/ability';
import { createContextualCan } from '@casl/react';
import { createContext } from 'react';

const defaultAbility = defineAbility((can) => {
  can('read', 'all');
});

export const AbilityContext = createContext<AnyAbility>(defaultAbility);

export const Can = createContextualCan(AbilityContext.Consumer);

export const AbilityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ability } = useAbilityStore();

  return (
    <AbilityContext.Provider value={ability || defaultAbility}>
      {children}
    </AbilityContext.Provider>
  );
};
