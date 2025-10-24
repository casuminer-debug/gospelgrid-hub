import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  ArrowUp,
  ArrowDown,
  ClipboardCheck,
  Wallet,
  UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardLayout } from "@/components/DashboardLayout";
import { QuickActionModal } from "@/components/QuickActionModal";
import { DetailModal } from "@/components/DetailModal";

const Dashboard = () => {
  const [quickActionType, setQuickActionType] = useState<"presence" | "transaction" | "member" | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailData, setDetailData] = useState<any>(null);

  const quickActions = [
    {
      icon: ClipboardCheck,
      label: "Registrar Presença",
      description: "Marcar presença em eventos",
      color: "primary",
      action: () => setQuickActionType("presence")
    },
    {
      icon: Wallet,
      label: "Nova Transação",
      description: "Registrar entrada/saída",
      color: "secondary",
      action: () => setQuickActionType("transaction")
    },
    {
      icon: UserPlus,
      label: "Cadastro Expresso",
      description: "Novo membro rápido",
      color: "accent",
      action: () => setQuickActionType("member")
    }
  ];

  const metrics = [
    {
      title: "Total de Membros",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "primary",
      details: {
        "Membros Ativos": "1,156",
        "Novos este Mês": "45",
        "Taxa de Crescimento": "12.5%",
        "Média de Idade": "32 anos"
      }
    },
    {
      title: "Células Ativas",
      value: "48",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "secondary",
      details: {
        "Células Ativas": "48",
        "Membros em Células": "892",
        "Média por Célula": "18.6",
        "Health Score Médio": "81"
      }
    },
    {
      title: "Frequência Média",
      value: "85%",
      change: "+3.1%",
      trend: "up",
      icon: TrendingUp,
      color: "accent",
      details: {
        "Frequência Atual": "85%",
        "Mês Anterior": "82%",
        "Meta": "80%",
        "Tendência": "Crescente"
      }
    },
    {
      title: "Receita Mensal",
      value: "R$ 45.8k",
      change: "-2.4%",
      trend: "down",
      icon: DollarSign,
      color: "muted",
      details: {
        "Receita Total": "R$ 45.800",
        "Dízimos": "R$ 38.500",
        "Ofertas": "R$ 7.300",
        "Despesas": "R$ 31.200"
      }
    }
  ];

  const alerts = [
    {
      type: "warning",
      title: "Célula com baixa frequência",
      description: "Célula 'Juventude Central' com apenas 45% de presença nas últimas 3 semanas",
      action: "Ver detalhes",
      details: {
        "Célula": "Juventude Central",
        "Líder": "João Silva",
        "Frequência Atual": "45%",
        "Média Histórica": "87%",
        "Última Reunião": "Há 3 dias",
        "Ação Sugerida": "Contatar líder imediatamente"
      }
    },
    {
      type: "success",
      title: "Meta alcançada!",
      description: "Célula 'Casais Unidos' atingiu 100% de crescimento este mês",
      action: "Parabenizar",
      details: {
        "Célula": "Casais Unidos",
        "Líder": "Maria & Pedro Santos",
        "Crescimento": "+100%",
        "Novos Membros": "9",
        "Total Atual": "18",
        "Reconhecimento": "Enviar mensagem de parabéns"
      }
    },
    {
      type: "info",
      title: "Novo membro cadastrado",
      description: "João Silva foi adicionado à Célula 'Homens de Fé'",
      action: "Visualizar",
      details: {
        "Nome": "João Silva",
        "Célula": "Homens de Fé",
        "Data de Cadastro": "Hoje",
        "Telefone": "(11) 98765-4321",
        "Email": "joao.silva@email.com",
        "Status": "Ativo"
      }
    }
  ];

  const healthScores = [
    { name: "Célula Juventude", score: 92, trend: "up" },
    { name: "Célula Casais", score: 88, trend: "up" },
    { name: "Célula Mulheres", score: 76, trend: "stable" },
    { name: "Célula Homens", score: 65, trend: "down" }
  ];

  const handleMetricClick = (metric: any) => {
    setDetailData({ title: metric.title, data: metric.details });
    setDetailModalOpen(true);
  };

  const handleAlertClick = (alert: any) => {
    setDetailData({ title: alert.title, data: alert.details });
    setDetailModalOpen(true);
  };

  return (
    <DashboardLayout title="Dashboard">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {quickActions.map((action, index) => (
          <Card
            key={index}
            className="p-6 cursor-pointer card-interactive hover:shadow-primary animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={action.action}
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl bg-${action.color}/10 flex items-center justify-center`}>
                <action.icon className={`w-7 h-7 text-${action.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{action.label}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {metrics.map((metric, index) => (
          <Card
            key={index}
            className="p-6 cursor-pointer card-interactive animate-fade-in"
            style={{ animationDelay: `${(index + 3) * 100}ms` }}
            onClick={() => handleMetricClick(metric)}
          >
            <div className="flex items-center justify-between">
              <metric.icon className={cn("w-5 h-5", `text-${metric.color}`)} />
              <span
                className={cn(
                  "text-xs font-medium flex items-center",
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                )}
              >
                {metric.change}
                {metric.trend === "up" ? (
                  <ArrowUp className="w-3 h-3 ml-1" />
                ) : (
                  <ArrowDown className="w-3 h-3 ml-1" />
                )}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Alerts Card */}
        <Card className="p-6 lg:col-span-2 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <h3 className="text-xl font-bold mb-6">Alertas & Notificações</h3>

          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth cursor-pointer"
                onClick={() => handleAlertClick(alert)}
              >
                <div
                  className={cn(
                    "p-2 rounded-full",
                    alert.type === "warning" && "bg-yellow-100",
                    alert.type === "success" && "bg-green-100",
                    alert.type === "info" && "bg-blue-100"
                  )}
                >
                  {alert.type === "warning" && (
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                  )}
                  {alert.type === "success" && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  {alert.type === "info" && (
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.description}
                  </p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                    {alert.action}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Health Scores */}
        <Card className="p-6 animate-fade-in" style={{ animationDelay: "800ms" }}>
          <h3 className="text-xl font-bold mb-6">Health Score</h3>

          <div className="space-y-6">
            {healthScores.map((cell, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{cell.name}</span>
                  <span className="text-lg font-bold">{cell.score}</span>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "absolute inset-y-0 left-0 rounded-full transition-all duration-500",
                      cell.score >= 80 && "bg-secondary",
                      cell.score >= 60 && cell.score < 80 && "bg-accent",
                      cell.score < 60 && "bg-destructive"
                    )}
                    style={{ width: `${cell.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
            Ver Relatório Completo
          </Button>
        </Card>
      </div>

      <QuickActionModal
        open={quickActionType !== null}
        onOpenChange={() => setQuickActionType(null)}
        type={quickActionType}
      />

      <DetailModal
        open={detailModalOpen}
        onOpenChange={setDetailModalOpen}
        title={detailData?.title || ""}
        data={detailData?.data || {}}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
