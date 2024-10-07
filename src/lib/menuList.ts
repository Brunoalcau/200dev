import { AnyAbility } from '@casl/ability';
import { LucideIcon, User, UserCog } from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  roles?: string[];
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
  roles?: string[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(
  pathname: string,
  userRoles: string[] = [],
  ability: AnyAbility
): Group[] {
  return [
    {
      groupLabel: 'Home',
      menus: [
        {
          href: '/admin',
          label: 'Administrativo',
          active: pathname.includes('/admin'),
          icon: UserCog,
          submenus: [],
          roles: ['admin'],
        },
        {
          href: '/user',
          label: 'Usuário',
          active: pathname.includes('/user'),
          icon: User,
          submenus: [],
          roles: ['user'],
        },
      ],
    },
  ].filter((group) => {
    group.menus = group.menus.filter((menu) => {
      const hasPermission =
        ability.can('view', menu.label) ||
        !menu.roles ||
        menu.roles.some((role) => userRoles.includes(role));

      if (hasPermission) {
        menu.submenus = menu.submenus.filter((submenu: Submenu) => {
          return (
            ability.can('view', submenu.label) ||
            !submenu?.roles ||
            submenu?.roles?.some?.((role) => userRoles.includes(role))
          );
        });
        return true;
      }
      return false;
    });
    return group.menus.length > 0;
  });
}
