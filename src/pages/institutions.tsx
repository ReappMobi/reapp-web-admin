import React from 'react';

import {
  Card,
  CardContent,
} from '../components/ui/card';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';

import { Button } from '../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Input } from '../components/ui/input';
import { Search, MoreHorizontal } from 'lucide-react';

export const Insitutions: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full max-w-screen-lg p-4">
        <span className="text-3xl md:text-4xl font-bold">Instituições</span>
        <div className="flex items-center rounded-md border border-input bg-background px-2 py-1 group">
          <Input
            className="w-64 bg-transparent outline-none ring-transparent"
            placeholder="Buscar instituição"
            variant="clean"
          />
          <Search className="w-6 h-6" />
        </div>
      </div>
      <Card
        x-chunk="dashboard-06-chunk-0"
        className="w-full flex-1 md:max-w-screen-lg"
      >
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden md:table-cell">Id</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>
                  <span>Ações</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium hidden md:table-cell">
                  <span>1</span>
                </TableCell>
                <TableCell className="font-medium">
                  Istituto Floresta Viva
                </TableCell>
                <TableCell className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem className="cursor-pointer">
                        Silenciar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <span className="text-red-500">Remover</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
