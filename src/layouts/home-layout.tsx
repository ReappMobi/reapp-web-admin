import React from 'react';

import { CircleUser, Sprout } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

export const HomeLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 ">
        <div className="flex items-center gap-4 justify-between w-full max-w-screen-lg mx-auto">
          <nav className="gap-6 flex">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Sprout className="h-8 w-8 text-reapp-primary" />
              <span className="sr-only">Reapp</span>
            </Link>
            <Link
              to="/"
              className="text-foreground transition-colors hover:text-foreground text-lg font-medium"
            >
              Reapp Admin Panel
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Reapp Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Suporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
};
