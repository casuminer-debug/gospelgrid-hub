import * as React from "react";
import ModuleIntegration from "@/components/ModuleIntegration";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, CheckCircle2, AlertTriangle, XCircle, ArrowUpDown } from "lucide-react";

const ModuleIntegrationPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Integração entre Módulos</h1>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="details">Detalhes</TabsTrigger>
          <TabsTrigger value="diagnostics">Diagnósticos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Status Geral</CardTitle>
                <CardDescription>Saúde da integração</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Excelente</div>
                <p className="text-xs text-muted-foreground">100% dos módulos estão conectados</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conexões</CardTitle>
                <CardDescription>Total de integrações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-3 h-3" /> 8 Completas
                  </span>
                  <span className="text-xs flex items-center gap-1 text-amber-600">
                    <AlertTriangle className="w-3 h-3" /> 2 Parciais
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Última Verificação</CardTitle>
                <CardDescription>Status da verificação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Hoje, 14:30</div>
                <p className="text-xs text-muted-foreground">Próxima verificação em 2h</p>
              </CardContent>
            </Card>
          </div>
          
          <ModuleIntegration />
        </TabsContent>
        
        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes de Integração</CardTitle>
              <CardDescription>Informações detalhadas sobre cada conexão entre módulos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "Membros", target: "Células", endpoints: 4, dataPoints: 12, lastSync: "14:25" },
                  { source: "Eventos", target: "Inscrições", endpoints: 6, dataPoints: 8, lastSync: "14:20" },
                  { source: "Academia", target: "Certificados", endpoints: 3, dataPoints: 5, lastSync: "14:15" },
                  { source: "Voluntários", target: "Eventos", endpoints: 5, dataPoints: 7, lastSync: "14:10" },
                  { source: "Financeiro", target: "Doações", endpoints: 4, dataPoints: 10, lastSync: "14:05" },
                  { source: "Insights Automáticos", target: "Dashboard", endpoints: 8, dataPoints: 15, lastSync: "14:00" },
                  { source: "Rede Social", target: "Células", endpoints: 3, dataPoints: 6, lastSync: "13:55" },
                  { source: "Inventário", target: "Eventos", endpoints: 2, dataPoints: 4, lastSync: "13:50" },
                  { source: "Certificados", target: "Inscrições", endpoints: 3, dataPoints: 5, lastSync: "13:45" },
                  { source: "Doações", target: "Insights Automáticos", endpoints: 4, dataPoints: 8, lastSync: "13:40" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <ArrowUpDown className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{item.source} ↔ {item.target}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.endpoints} endpoints • {item.dataPoints} pontos de dados
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <div className="font-medium">Última sincronização</div>
                        <div className="text-muted-foreground">{item.lastSync}</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="diagnostics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico de Sistema</CardTitle>
              <CardDescription>Verificação de problemas de integração</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-green-50 border-green-200">
                  <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Todos os serviços estão operando normalmente</span>
                  </div>
                  <p className="text-sm text-green-600">
                    Não foram detectados problemas de integração entre os módulos. O sistema está funcionando conforme esperado.
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Histórico de Diagnósticos</h3>
                  <div className="space-y-2">
                    {[
                      { date: "22/06/2024 09:15", status: "success", message: "Todos os serviços operando normalmente" },
                      { date: "21/06/2024 14:30", status: "warning", message: "Integração parcial entre Inventário e Eventos" },
                      { date: "20/06/2024 10:45", status: "success", message: "Todos os serviços operando normalmente" },
                      { date: "19/06/2024 16:20", status: "error", message: "Falha na integração entre Rede Social e Células" },
                      { date: "18/06/2024 11:10", status: "success", message: "Todos os serviços operando normalmente" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm p-2 hover:bg-accent/50 rounded-md transition-colors">
                        <div className="flex items-center gap-2">
                          {item.status === "success" && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                          {item.status === "warning" && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                          {item.status === "error" && <XCircle className="w-4 h-4 text-red-600" />}
                          <span>{item.message}</span>
                        </div>
                        <span className="text-muted-foreground">{item.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModuleIntegrationPage;