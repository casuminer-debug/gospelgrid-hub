import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, Search, Plus, Calendar, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Volunteers() {
  return (
    <DashboardLayout title="Voluntários">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Gestão de Voluntários</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Voluntário
          </Button>
        </div>

        <Tabs defaultValue="volunteers">
          <TabsList className="mb-4">
            <TabsTrigger value="volunteers">Voluntários</TabsTrigger>
            <TabsTrigger value="schedules">Escalas</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="recognition">Reconhecimento</TabsTrigger>
          </TabsList>

          <TabsContent value="volunteers">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Voluntários</CardTitle>
                <CardDescription>
                  Gerencie todos os voluntários e suas informações.
                </CardDescription>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar voluntários..."
                      className="pl-8"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ministério" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="worship">Louvor</SelectItem>
                      <SelectItem value="children">Infantil</SelectItem>
                      <SelectItem value="welcome">Recepção</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Ministério</TableHead>
                      <TableHead>Habilidades</TableHead>
                      <TableHead>Disponibilidade</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Ana Silva</TableCell>
                      <TableCell>Louvor</TableCell>
                      <TableCell>Vocal, Violão</TableCell>
                      <TableCell>Dom (manhã/noite)</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Escalar</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Carlos Mendes</TableCell>
                      <TableCell>Infantil</TableCell>
                      <TableCell>Contação de histórias</TableCell>
                      <TableCell>Dom (manhã)</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          Ativo
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Escalar</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Mariana Costa</TableCell>
                      <TableCell>Recepção</TableCell>
                      <TableCell>Atendimento</TableCell>
                      <TableCell>Dom (noite), Qua (noite)</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                          Afastado
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Editar</Button>
                        <Button variant="ghost" size="sm">Escalar</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedules">
            <Card>
              <CardHeader>
                <CardTitle>Escalas de Serviço</CardTitle>
                <CardDescription>
                  Gerencie as escalas de serviço dos voluntários.
                </CardDescription>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Nova Escala
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Louvor - Domingo (Manhã)</CardTitle>
                      </div>
                      <CardDescription>Próximo domingo - 09:00h</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex justify-between items-center">
                          <span>Ana Silva</span>
                          <span className="text-xs text-muted-foreground">Vocal</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Ricardo Gomes</span>
                          <span className="text-xs text-muted-foreground">Guitarra</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Juliana Martins</span>
                          <span className="text-xs text-muted-foreground">Teclado</span>
                        </li>
                      </ul>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">Editar</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Infantil - Domingo (Manhã)</CardTitle>
                      </div>
                      <CardDescription>Próximo domingo - 09:00h</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex justify-between items-center">
                          <span>Carlos Mendes</span>
                          <span className="text-xs text-muted-foreground">Professor</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Fernanda Lima</span>
                          <span className="text-xs text-muted-foreground">Auxiliar</span>
                        </li>
                      </ul>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">Editar</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Recepção - Domingo (Noite)</CardTitle>
                      </div>
                      <CardDescription>Próximo domingo - 19:00h</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        <li className="flex justify-between items-center">
                          <span>Paulo Oliveira</span>
                          <span className="text-xs text-muted-foreground">Recepção</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Luciana Santos</span>
                          <span className="text-xs text-muted-foreground">Recepção</span>
                        </li>
                      </ul>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">Editar</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Banco de Habilidades</CardTitle>
                <CardDescription>
                  Gerencie as habilidades e talentos dos voluntários.
                </CardDescription>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Nova Habilidade
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Música</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 mb-4">
                        <li className="text-sm">Vocal (8 voluntários)</li>
                        <li className="text-sm">Violão (5 voluntários)</li>
                        <li className="text-sm">Guitarra (3 voluntários)</li>
                        <li className="text-sm">Bateria (2 voluntários)</li>
                        <li className="text-sm">Teclado (4 voluntários)</li>
                      </ul>
                      <Button variant="outline" size="sm">Gerenciar</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Ensino</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 mb-4">
                        <li className="text-sm">Professores (12 voluntários)</li>
                        <li className="text-sm">Contação de histórias (6 voluntários)</li>
                        <li className="text-sm">Recreação (8 voluntários)</li>
                        <li className="text-sm">Auxiliares (15 voluntários)</li>
                      </ul>
                      <Button variant="outline" size="sm">Gerenciar</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Atendimento</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 mb-4">
                        <li className="text-sm">Recepção (10 voluntários)</li>
                        <li className="text-sm">Acolhimento (7 voluntários)</li>
                        <li className="text-sm">Segurança (5 voluntários)</li>
                        <li className="text-sm">Mídias (6 voluntários)</li>
                      </ul>
                      <Button variant="outline" size="sm">Gerenciar</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recognition">
            <Card>
              <CardHeader>
                <CardTitle>Reconhecimento e Recompensas</CardTitle>
                <CardDescription>
                  Reconheça e valorize o trabalho dos voluntários.
                </CardDescription>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Novo Reconhecimento
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Voluntários Destaque</CardTitle>
                      <CardDescription>Reconhecimento mensal</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-3 bg-primary/10 rounded-lg">
                          <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <Award className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Ana Silva</h4>
                            <p className="text-sm text-muted-foreground">Ministério de Louvor</p>
                            <p className="text-xs mt-1">Destaque de Junho/2023</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 p-3 bg-primary/10 rounded-lg">
                          <div className="bg-primary text-primary-foreground p-3 rounded-full">
                            <Award className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Carlos Mendes</h4>
                            <p className="text-sm text-muted-foreground">Ministério Infantil</p>
                            <p className="text-xs mt-1">Destaque de Maio/2023</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Programa de Pontos</CardTitle>
                      <CardDescription>Recompensas por participação</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2">Como funciona</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Cada serviço = 10 pontos</li>
                            <li>• Pontualidade = +2 pontos</li>
                            <li>• Substituição = +5 pontos</li>
                            <li>• Treinamentos = +15 pontos</li>
                          </ul>
                          <div className="mt-4">
                            <h5 className="text-sm font-medium mb-2">Recompensas:</h5>
                            <ul className="space-y-1 text-sm">
                              <li>• 100 pontos: Certificado</li>
                              <li>• 200 pontos: Camiseta personalizada</li>
                              <li>• 500 pontos: Jantar especial</li>
                            </ul>
                          </div>
                        </div>
                        <Button className="w-full">Ver Ranking de Pontos</Button>
                      </div>
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