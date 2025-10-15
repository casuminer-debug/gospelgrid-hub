import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Users,
  Activity,
  Target,
  Download
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const Insights = () => {
  const insights = [
    {
      type: "positive",
      title: "Crescimento Acelerado",
      description: "A Célula 'Juventude Central' cresceu 35% nos últimos 2 meses, superando a meta em 15%",
      metric: "+35%",
      action: "Ver detalhes",
      icon: TrendingUp,
      color: "secondary"
    },
    {
      type: "attention",
      title: "Frequência Baixa",
      description: "3 células apresentam frequência abaixo de 70% nas últimas 4 semanas",
      metric: "3 células",
      action: "Tomar ação",
      icon: AlertCircle,
      color: "warning"
    },
    {
      type: "positive",
      title: "Meta Financeira Atingida",
      description: "Arrecadação do mês superou a meta em 12%, totalizando R$ 458.2k",
      metric: "+12%",
      action: "Ver relatório",
      icon: CheckCircle2,
      color: "secondary"
    },
    {
      type: "neutral",
      title: "Novos Convertidos",
      description: "45 novos membros foram batizados este mês, mantendo a média histórica",
      metric: "45 batismos",
      action: "Acompanhar",
      icon: Users,
      color: "primary"
    }
  ];

  const metrics = [
    {
      label: "Taxa de Crescimento Mensal",
      value: "8.5%",
      target: "7%",
      status: "above",
      progress: 121
    },
    {
      label: "Retenção de Membros",
      value: "93.7%",
      target: "90%",
      status: "above",
      progress: 104
    },
    {
      label: "Participação em Células",
      value: "72%",
      target: "80%",
      status: "below",
      progress: 90
    },
    {
      label: "Frequência Média",
      value: "85%",
      target: "85%",
      status: "on-target",
      progress: 100
    }
  ];

  const predictions = [
    {
      title: "Crescimento Projetado - Próximos 6 Meses",
      current: 1234,
      projected: 1512,
      growth: "+22.5%",
      confidence: "Alta"
    },
    {
      title: "Receita Projetada - Próximo Trimestre",
      current: "R$ 1.37M",
      projected: "R$ 1.52M",
      growth: "+10.9%",
      confidence: "Média"
    },
    {
      title: "Taxa de Retenção Estimada",
      current: "93.7%",
      projected: "94.2%",
      growth: "+0.5%",
      confidence: "Alta"
    }
  ];

  const recommendations = [
    {
      title: "Fortalecer Células com Baixa Frequência",
      description: "Agende reuniões com líderes das 3 células com frequência abaixo de 70%",
      priority: "Alta",
      impact: "Alto"
    },
    {
      title: "Expandir Programa de Discipulado",
      description: "Com 45 novos convertidos, considere abrir 2 novas turmas de discipulado",
      priority: "Média",
      impact: "Alto"
    },
    {
      title: "Reconhecer Líderes de Destaque",
      description: "Células 'Juventude Central' e 'Casais Unidos' merecem reconhecimento público",
      priority: "Baixa",
      impact: "Médio"
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === "above") return "text-secondary";
    if (status === "below") return "text-destructive";
    return "text-accent";
  };

  const getStatusBg = (status: string) => {
    if (status === "above") return "bg-secondary";
    if (status === "below") return "bg-destructive";
    return "bg-accent";
  };

  return (
    <DashboardLayout title="Insights & Analytics">
      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {insights.map((insight, index) => (
          <Card 
            key={index} 
            className={`p-6 card-interactive ${
              insight.type === "positive" ? "border-secondary/20" :
              insight.type === "attention" ? "border-warning/20" :
              "border-primary/20"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl bg-${insight.color}/10 flex items-center justify-center shrink-0`}>
                <insight.icon className={`w-6 h-6 text-${insight.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-lg">{insight.title}</h4>
                  <Badge className={`bg-${insight.color}/10 text-${insight.color} border-${insight.color}/20`}>
                    {insight.metric}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{insight.description}</p>
                <Button variant="ghost" size="sm" className={`text-${insight.color} hover:text-${insight.color}`}>
                  {insight.action} →
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Performance Metrics */}
      <Card className="p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Métricas de Performance vs. Metas</h3>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">{metric.label}</span>
                <span className={`text-sm font-medium ${getStatusColor(metric.status)}`}>
                  {metric.value} / {metric.target}
                </span>
              </div>
              
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 ${getStatusBg(metric.status)} rounded-full transition-all`}
                  style={{ width: `${Math.min(metric.progress, 100)}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {metric.status === "above" ? "Acima da meta" : 
                   metric.status === "below" ? "Abaixo da meta" : 
                   "No alvo"}
                </span>
                <span>{metric.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Predictions */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">Análise Preditiva</h3>
          </div>

          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm">{prediction.title}</h4>
                  <Badge variant="outline" className="shrink-0">
                    {prediction.confidence}
                  </Badge>
                </div>
                
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
                    <div className="font-bold text-secondary">{prediction.growth}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-bold">Recomendações Acionáveis</h3>
          </div>

          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg border-2 border-transparent hover:border-primary/20 hover:bg-card-hover transition-smooth">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold">{rec.title}</h4>
                  <div className="flex gap-2 shrink-0">
                    <Badge 
                      variant={rec.priority === "Alta" ? "default" : "secondary"}
                      className={rec.priority === "Alta" ? "bg-destructive" : rec.priority === "Média" ? "bg-accent" : "bg-muted"}
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Impacto: {rec.impact}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary h-8">
                    Implementar →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Insights;
