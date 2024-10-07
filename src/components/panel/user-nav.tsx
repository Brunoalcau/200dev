import { LogOut, User, UserCog } from 'lucide-react';

import { Can } from '@/components/context/ability-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useAuthStore } from '@/store/auth';
import { Link } from 'react-router-dom';

function getFirstTwoCharacters(str?: string | null): string {
  return str?.slice?.(0, 2)?.toUpperCase?.() || '';
}

export function UserNav() {
  const { user, logout } = useAuthStore();
  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="relative h-8 w-8 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="#" alt="Avatar" />
                  <AvatarFallback className="bg-transparent">
                    {getFirstTwoCharacters(user)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="bottom">Perfil</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex gap-2">
            <Button variant="outline" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="#" alt="Avatar" />
                <AvatarFallback className="bg-transparent">
                  {getFirstTwoCharacters(user)}
                </AvatarFallback>
              </Avatar>
            </Button>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Can I="read" a="Admin">
            <DropdownMenuItem className="hover:cursor-pointer" asChild>
              <Link to="/admin" className="flex items-center">
                <UserCog className="w-4 h-4 mr-3 text-muted-foreground" />
                Administrador
              </Link>
            </DropdownMenuItem>
          </Can>
          <Can I="read" a="User">
            <DropdownMenuItem className="hover:cursor-pointer" asChild>
              <Link to="/user" className="flex items-center">
                <User className="w-4 h-4 mr-3 text-muted-foreground" />
                User
              </Link>
            </DropdownMenuItem>
          </Can>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
