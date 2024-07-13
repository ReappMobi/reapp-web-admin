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
import { Badge } from '../components/ui/badge';

export const Donations: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col  gap-6 w-full max-w-screen-lg">
      <div className="flex flex-col items-start gap-4 justify-between sm:flex-row sm:items-center">
        <span className="text-3xl md:text-4xl font-bold">Doações</span>
        <div className="flex gap-4 flex-col w-full sm:flex-row sm:w-max">
          <Card className="w-full">
            <CardHeader className="pb-4">
              <CardDescription>Esta Semana</CardDescription>
              <CardTitle className="text-xl">R$250,00</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <CardDescription>Este mês</CardDescription>
              <CardTitle className="text-xl">R$10.000,00</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
      <Card className="flex-1">
        <CardHeader className="pb-4">
          <CardTitle>Histórico de doações</CardTitle>
          <CardDescription>Últimas doações recebidas</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doador</TableHead>
                <TableHead className="hidden sm:table-cell">Tipo</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Data</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">João Silva</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    joao.silva@teste.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">Pontual</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs">Concluído</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  23-06-2021
                </TableCell>
                <TableCell className="text-right">R$50.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
