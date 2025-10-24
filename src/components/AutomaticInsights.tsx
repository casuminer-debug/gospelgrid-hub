import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  Calendar, 
  DollarSign, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Zap
} from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  score: number;
  trend: "up" | "down" | "neutral";
  trendValue: string;
  category: "attendance" | "financial" | "growth" | "engagement";
  priority: "high" | "medium" | "low";
}

const InsightCard = ({ 
  title, 
  description, 
  score, 
  trend, 
  trendValue, 
  category,
  priority
}: InsightCardProps) => {
  const categoryIcons = {
    attendance: Users,
    financial: DollarSign,
    growth: TrendingUp,
    engagement: Calendar
  };

  const Icon = categoryIcons[category];
  
  const trendIcons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
    neutral: Target
  };
  
  const TrendIcon = trendIcons[trend];
  
  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-amber-500"
  };
  
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-amber-100 text-amber-800",
    low: "bg-green-100 text-green-800"
  };

  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
          <Badge className={priorityColors[priority]}>
            {priority === "high" ? "Alta Prioridade" : priority === "medium" ? "Média Prioridade" : "Baixa Prioridade"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-2 mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Health Score</span>
            <span className="text-sm font-bold">{score}/100</span>
          </div>
          <Progress value={score} className="h-2" />
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <TrendIcon className={`w-4 h-4 ${trendColors[trend]}`} />
          <span className={`font-medium ${trendColors[trend]}`}>{trendValue}</span>
          <span className="text-muted-foreground">em relação ao período anterior</span>
        </div>
      </CardContent>
    </Card>
  );
};

const AutomaticInsights = () => {
  const insights: InsightCardProps[] = [
    {
      title: "Frequência em Células",
      description: "Queda na participação das células do setor sul",
      score: 68,
      trend: "down" as const,
      trendValue: "-12%",
      category: "attendance" as const,
      priority: "high" as const
    },
    {
      title: "Crescimento de Membros",
      description: "Aumento significativo de novos membros",
      score: 92,
      trend: "up" as const,
      trendValue: "+23%",
      category: "growth" as const,
      priority: "low" as const
    },
    {
      title: "Engajamento em Eventos",
      description: "Participação abaixo do esperado nos eventos de jovens",
      score: 74,
      trend: "down" as const,
      trendValue: "-8%",
      category: "engagement" as const,
      priority: "medium" as const
    },
    {
      title: "Saúde Financeira",
      description: "Dízimos acima da meta, mas ofertas em queda",
      score: 85,
      trend: "neutral" as const,
      trendValue: "+2%",
      category: "financial" as const,
      priority: "medium" as const
    },
    {
      title: "Retenção de Voluntários",
      description: "Alta rotatividade no ministério infantil",
      score: 62,
      trend: "down" as const,
      trendValue: "-15%",
      category: "attendance" as const,
      priority: "high" as const
    },
    {
      title: "Crescimento de Células",
      description: "Multiplicação de células acima do esperado",
      score: 95,
      trend: "up" as const,
      trendValue: "+28%",
      category: "growth" as const,
      priority: "low" as const
    }
  ];

  const predictions = [
    {
      title: "Projeção de Crescimento",
      description: "Baseado nos últimos 6 meses",
      current: "450 membros",
      projected: "520 membros",
      growth: "+15.5%",
      timeframe: "3 meses"
    },
    {
      title: "Projeção Financeira",
      description: "Baseado no histórico anual",
      current: "R$ 45.200/mês",
      projected: "R$ 52.800/mês",
      growth: "+16.8%",
      timeframe: "6 meses"
    },
    {
      title: "Multiplicação de Células",
      description: "Baseado no ritmo atual",
      current: "24 células",
      projected: "32 células",
      growth: "+33%",
      timeframe: "12 meses"
    }
  ];

  const recommendations = [
    {
      title: "Campanha de Engajamento para Células",
      description: "Implementar programa de incentivo para aumentar a frequência nas células do setor sul",
      impact: "Médio",
      effort: "Baixo",
      category: "attendance"
    },
    {
      title: "Treinamento de Líderes de Células",
      description: "Realizar workshop mensal para capacitação de líderes e auxiliares",
      impact: "Alto",
      effort: "Médio",
      category: "growth"
    },
    {
      title: "Reestruturação do Ministério Infantil",
      description: "Revisar escalas e implementar programa de reconhecimento para voluntários",
      impact: "Alto",
      effort: "Alto",
      category: "attendance"
    },
    {
      title: "Campanha Financeira Específica",
      description: "Comunicar necessidades específicas para aumentar ofertas voluntárias",
      impact: "Médio",
      effort: "Baixo",
      category: "financial"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-2">
        <Zap className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Sistema de Insights Automáticos</h2>
      </div>
      
      {/* Health Scores */}
      <div>
        <h3 className="text-xl font-bold mb-4">Health Score das Células e Ministérios</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>

      {/* Predictions */}
      <div>
        <h3 className="text-xl font-bold mb-4">Análise Preditiva de Crescimento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {predictions.map((prediction, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{prediction.title}</CardTitle>
                </div>
                <CardDescription>{prediction.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Atual</div>
                    <div className="font-bold">{prediction.current}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Projetado</div>
                    <div className="font-bold text-primary">{prediction.projected}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Crescimento</div>
                    <div className="font-bold text-green-500">{prediction.growth}</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Projeção para os próximos {prediction.timeframe}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h3 className="text-xl font-bold mb-4">Recomendações Inteligentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec, index) => (
            <Card key={index} className="hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{rec.title}</CardTitle>
                </div>
                <CardDescription>{rec.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Impacto: {rec.impact}</Badge>
                    <Badge variant="outline">Esforço: {rec.effort}</Badge>
                  </div>
                  <Button size="sm">Implementar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Weekly Reports */}
      <div>
        <h3 className="text-xl font-bold mb-4">Relatórios Automáticos Semanais</h3>
        <Card>
          <CardHeader>
            <CardTitle>Relatórios Disponíveis</CardTitle>
            <CardDescription>Relatórios gerados automaticamente com base nos dados da igreja</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Resumo Semanal de Atividades", date: "22/06/2024", status: "available" },
                { title: "Análise Comparativa de Células", date: "15/06/2024", status: "available" },
                { title: "Tendências de Crescimento", date: "08/06/2024", status: "available" },
                { title: "Relatório Financeiro Consolidado", date: "01/06/2024", status: "available" }
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border hover:bg-card-hover transition-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{report.title}</div>
                      <div className="text-sm text-muted-foreground">Gerado em {report.date}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Visualizar</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AutomaticInsights;