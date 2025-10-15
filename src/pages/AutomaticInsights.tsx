import React from "react";
import AutomaticInsights from "@/components/AutomaticInsights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, BarChart, LineChart, PieChart, Activity } from "lucide-react";

const AutomaticInsightsPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Insights Automáticos</h1>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="health">Health Score</TabsTrigger>
          <TabsTrigger value="predictions">Previsões</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Health Score Médio</CardTitle>
                <CardDescription>Todas as células e ministérios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78/100</div>
                <p className="text-xs text-muted-foreground">+5% em relação ao mês anterior</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Alertas Ativos</CardTitle>
                <CardDescription>Requerem atenção</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 de alta prioridade</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Recomendações</CardTitle>
                <CardDescription>Sugestões de melhoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">4 implementadas este mês</p>
              </CardContent>
            </Card>
          </div>
          
          <AutomaticInsights />
        </TabsContent>
        
        <TabsContent value="health" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Health Score por Ministério</CardTitle>
                <CardDescription>Pontuação de 0-100 baseada em múltiplos fatores</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <BarChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Health Score por Célula</CardTitle>
                <CardDescription>Pontuação de 0-100 baseada em múltiplos fatores</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <BarChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tendência de Health Score</CardTitle>
                <CardDescription>Evolução nos últimos 12 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <LineChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Distribuição de Alertas</CardTitle>
                <CardDescription>Por categoria e prioridade</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <PieChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="predictions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Projeção de Crescimento</CardTitle>
                <CardDescription>Baseado nos últimos 12 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <LineChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Projeção Financeira</CardTitle>
                <CardDescription>Receitas e despesas projetadas</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <LineChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tendências de Frequência</CardTitle>
                <CardDescription>Projeção para os próximos 6 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <Activity className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multiplicação de Células</CardTitle>
                <CardDescription>Projeção para os próximos 12 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <BarChart className="h-64 w-64 text-muted-foreground" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Automáticos</CardTitle>
              <CardDescription>Gerados semanalmente com base nos dados da igreja</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Resumo Semanal de Atividades", date: "22/06/2024", type: "PDF" },
                  { title: "Análise Comparativa de Células", date: "15/06/2024", type: "PDF" },
                  { title: "Tendências de Crescimento", date: "08/06/2024", type: "PDF" },
                  { title: "Relatório Financeiro Consolidado", date: "01/06/2024", type: "PDF" },
                  { title: "Análise de Engajamento de Membros", date: "25/05/2024", type: "PDF" },
                  { title: "Relatório de Saúde das Células", date: "18/05/2024", type: "PDF" },
                  { title: "Análise de Efetividade de Ministérios", date: "11/05/2024", type: "PDF" },
                  { title: "Relatório de Conversões e Batismos", date: "04/05/2024", type: "PDF" }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div>
                      <h3 className="font-medium">{report.title}</h3>
                      <p className="text-sm text-muted-foreground">Gerado em {report.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{report.type}</span>
                      <button className="text-sm text-primary hover:underline">Download</button>
                      <button className="text-sm text-primary hover:underline">Visualizar</button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AutomaticInsightsPage;