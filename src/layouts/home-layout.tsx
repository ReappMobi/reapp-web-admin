import React from 'react';

import { CircleUser, Sprout, PanelLeftOpen } from 'lucide-react';
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
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-2 md:px-6 ">
        <div className="flex items-center gap-4 justify-between w-full max-w-screen-lg mx-auto">
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <PanelLeftOpen className="h-6 w-6" />
          </button>
          <nav className="gap-2 flex">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Sprout className="h-8 w-8 text-reapp-primary" />
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
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
