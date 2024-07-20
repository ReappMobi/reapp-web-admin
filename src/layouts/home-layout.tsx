import React from 'react';

import {
  CircleUser,
  Sprout,
  PanelLeftOpen,
  CircleDollarSign,
  CircleCheckBigIcon,
  Landmark,
} from 'lucide-react';
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
import clsx from 'clsx';

export const HomeLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky z-50 top-0 flex h-16 items-center gap-4 border-b bg-background px-2 md:px-6 ">
        <div className="flex items-center gap-4 justify-between w-full max-w-screen-lg mx-auto">
          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
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
        <aside
          className={clsx(
            'fixed top-0 z-10 left-0 w-64 h-screen bg-background transition-transform sm:translate-x-0',
            ['-translate-x-full', 'translate-x-0'][+isSidebarOpen]
          )}
          aria-label="Sidebar"
        >
          <div className="pt-20 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800  border-r">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 p-2 text-gray-600 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <CircleCheckBigIcon className="h-6 w-6" />
                  Aprovações
                </Link>
              </li>
              <li>
                <Link
                  to="donations"
                  className="flex items-center gap-2 p-2 text-gray-600 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <CircleDollarSign className="h-6 w-6" />
                  Doações
                </Link>
              </li>
              <li>
                <Link
                  to="institutions"
                  className="flex items-center gap-2 p-2 text-gray-600 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Landmark className="h-6 w-6" />
                  Instituições
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
