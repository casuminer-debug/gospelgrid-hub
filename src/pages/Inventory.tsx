import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, FileText, Plus, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Inventory() {
  // Dados de exemplo para itens do inventário
  const items = [
    { id: 1, name: "Cadeira de escritório", category: "Móveis", location: "Sala Administrativa", status: "Ativo", quantity: 5 },
    { id: 2, name: "Projetor", category: "Equipamentos", location: "Auditório Principal", status: "Ativo", quantity: 2 },
    { id: 3, name: "Microfone sem fio", category: "Equipamentos", location: "Estúdio", status: "Em manutenção", quantity: 3 },
    { id: 4, name: "Mesa dobrável", category: "Móveis", location: "Salão Multiuso", status: "Ativo", quantity: 10 },
    { id: 5, name: "Notebook", category: "Equipamentos", location: "Sala Administrativa", status: "Ativo", quantity: 2 },
  ];

  // Dados de exemplo para movimentações
  const movements = [
    { id: 1, item: "Projetor", type: "Saída", quantity: 1, date: "15/05/2023", responsible: "Carlos Silva", destination: "Evento Externo" },
    { id: 2, item: "Microfone sem fio", type: "Saída", quantity: 2, date: "20/05/2023", responsible: "Ana Oliveira", destination: "Manutenção" },
    { id: 3, item: "Mesa dobrável", type: "Saída", quantity: 5, date: "25/05/2023", responsible: "João Santos", destination: "Evento Comunitário" },
    { id: 4, item: "Microfone sem fio", type: "Entrada", quantity: 2, date: "28/05/2023", responsible: "Ana Oliveira", destination: "Retorno da Manutenção" },
    { id: 5, item: "Projetor", type: "Entrada", quantity: 1, date: "30/05/2023", responsible: "Carlos Silva", destination: "Retorno de Evento" },
  ];

  return (
    <DashboardLayout title="Inventário">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Inventário</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Adicionar Item
          </Button>
        </div>

        <Tabs defaultValue="items">
          <TabsList className="mb-4">
            <TabsTrigger value="items">Itens</TabsTrigger>
            <TabsTrigger value="categories">Categorias</TabsTrigger>
            <TabsTrigger value="movements">Movimentações</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            <Card>
              <CardHeader>
                <CardTitle>Itens do Inventário</CardTitle>
                <CardDescription>
                  Gerencie todos os itens do patrimônio da igreja.
                </CardDescription>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar itens..."
                      className="pl-8"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="furniture">Móveis</SelectItem>
                      <SelectItem value="equipment">Equipamentos</SelectItem>
                      <SelectItem value="supplies">Suprimentos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Localização</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === "Ativo" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Editar</Button>
                          <Button variant="ghost" size="sm">Movimentar</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <Card>
              <CardHeader>
                <CardTitle>Categorias</CardTitle>
                <CardDescription>
                  Gerencie as categorias para organizar os itens do inventário.
                </CardDescription>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Nova Categoria
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Tag className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Móveis</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">15 itens cadastrados</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Ver Itens</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Tag className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Equipamentos</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">23 itens cadastrados</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Ver Itens</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Tag className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Suprimentos</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">8 itens cadastrados</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Ver Itens</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="movements">
            <Card>
              <CardHeader>
                <CardTitle>Movimentações</CardTitle>
                <CardDescription>
                  Registre e acompanhe todas as movimentações de entrada e saída de itens.
                </CardDescription>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Nova Movimentação
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Responsável</TableHead>
                      <TableHead>Destino/Origem</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {movements.map((movement) => (
                      <TableRow key={movement.id}>
                        <TableCell className="font-medium">{movement.item}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            movement.type === "Entrada" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {movement.type}
                          </span>
                        </TableCell>
                        <TableCell>{movement.quantity}</TableCell>
                        <TableCell>{movement.date}</TableCell>
                        <TableCell>{movement.responsible}</TableCell>
                        <TableCell>{movement.destination}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Detalhes</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Relatórios de Inventário</CardTitle>
                <CardDescription>
                  Gere relatórios detalhados sobre o patrimônio da igreja.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Inventário Completo</CardTitle>
                      </div>
                      <CardDescription>Relatório com todos os itens do inventário</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Gerar Relatório</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Movimentações</CardTitle>
                      </div>
                      <CardDescription>Relatório de entradas e saídas por período</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Gerar Relatório</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Itens por Categoria</CardTitle>
                      </div>
                      <CardDescription>Relatório agrupado por categorias</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Gerar Relatório</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Itens por Localização</CardTitle>
                      </div>
                      <CardDescription>Relatório agrupado por locais</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Gerar Relatório</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}