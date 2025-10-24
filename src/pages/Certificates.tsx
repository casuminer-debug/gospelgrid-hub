import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Download, FileText, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Certificates() {
  // Dados de exemplo para certificados
  const certificates = [
    { id: 1, name: "Curso de Liderança", member: "João Silva", date: "10/06/2023", status: "Emitido" },
    { id: 2, name: "Treinamento de Células", member: "Maria Oliveira", date: "15/07/2023", status: "Emitido" },
    { id: 3, name: "Discipulado Básico", member: "Pedro Santos", date: "20/08/2023", status: "Pendente" },
    { id: 4, name: "Escola Bíblica", member: "Ana Costa", date: "05/09/2023", status: "Emitido" },
    { id: 5, name: "Formação de Professores", member: "Carlos Mendes", date: "12/10/2023", status: "Pendente" },
  ];

  // Dados de exemplo para modelos
  const templates = [
    { id: 1, name: "Certificado Padrão", description: "Modelo padrão para cursos e eventos", uses: 15 },
    { id: 2, name: "Certificado de Conclusão", description: "Para conclusão de cursos completos", uses: 8 },
    { id: 3, name: "Certificado de Participação", description: "Para participação em eventos", uses: 12 },
    { id: 4, name: "Certificado de Mérito", description: "Para reconhecimento de mérito", uses: 5 },
  ];

  return (
    <DashboardLayout title="Certificados">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Certificados</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Novo Certificado
          </Button>
        </div>

        <Tabs defaultValue="emitidos">
          <TabsList className="mb-4">
            <TabsTrigger value="emitidos">Certificados Emitidos</TabsTrigger>
            <TabsTrigger value="modelos">Modelos</TabsTrigger>
            <TabsTrigger value="validacao">Validação</TabsTrigger>
          </TabsList>

          <TabsContent value="emitidos">
            <Card>
              <CardHeader>
                <CardTitle>Certificados Emitidos</CardTitle>
                <CardDescription>
                  Gerencie todos os certificados emitidos para membros da igreja.
                </CardDescription>
                <div className="flex items-center gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar certificados..."
                      className="pl-8"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="issued">Emitidos</SelectItem>
                      <SelectItem value="pending">Pendentes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome do Certificado</TableHead>
                      <TableHead>Membro</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certificates.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-medium">{cert.name}</TableCell>
                        <TableCell>{cert.member}</TableCell>
                        <TableCell>{cert.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            cert.status === "Emitido" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {cert.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modelos">
            <Card>
              <CardHeader>
                <CardTitle>Modelos de Certificados</CardTitle>
                <CardDescription>
                  Crie e gerencie modelos personalizados para diferentes tipos de certificados.
                </CardDescription>
                <div className="flex justify-end mt-4">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Novo Modelo
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map((template) => (
                    <Card key={template.id} className="overflow-hidden">
                      <div className="bg-primary/10 p-6 flex justify-center">
                        <Award className="h-16 w-16 text-primary" />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{template.name}</CardTitle>
                        <CardDescription>{template.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Usado {template.uses} vezes</span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Editar</Button>
                            <Button variant="default" size="sm">Usar</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="validacao">
            <Card>
              <CardHeader>
                <CardTitle>Validação de Certificados</CardTitle>
                <CardDescription>
                  Verifique a autenticidade de certificados através do código de validação.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Código de Validação</label>
                    <div className="flex gap-2">
                      <Input placeholder="Digite o código de validação" />
                      <Button>Verificar</Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold">Como validar um certificado</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Cada certificado possui um código único de validação. 
                      Digite o código no campo acima para verificar a autenticidade 
                      do certificado e visualizar os detalhes completos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}