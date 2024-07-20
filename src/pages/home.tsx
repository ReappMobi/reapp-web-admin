import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { Badge } from '../components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      <Card
        x-chunk="dashboard-06-chunk-0"
        className="w-full flex-1 md:max-w-screen-lg"
      >
        <CardHeader>
          <CardTitle>Aprovações</CardTitle>
          <CardDescription>
            Lista de instituições que estão aguardando aprovação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden md:table-cell">Id</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead className="hidden md:table-cell">
                  Criado em
                </TableHead>
                <TableHead>Status</TableHead>
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
                <TableCell className="font-medium">Istituto Floresta Viva</TableCell>
                <TableCell className="hidden md:table-cell">
                  2023-07-12 10:42 AM
                </TableCell>
                <TableCell>
                  <Badge variant="outline">Pendente</Badge>
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
                      <DropdownMenuItem>Aprovar</DropdownMenuItem>
                      <DropdownMenuItem>Recusar</DropdownMenuItem>
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
