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
  LayoutDashboard,
  Church,
  Settings,
  Bell,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Church, label: "Igrejas", badge: "3" },
    { icon: Users, label: "Membros", badge: "1,234" },
    { icon: Users, label: "Células" },
    { icon: DollarSign, label: "Financeiro" },
    { icon: Calendar, label: "Eventos" },
    { icon: TrendingUp, label: "Insights" },
    { icon: Settings, label: "Configurações" }
  ];

  const metrics = [
    {
      title: "Total de Membros",
      value: "1,234",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "primary"
    },
    {
      title: "Células Ativas",
      value: "48",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "secondary"
    },
    {
      title: "Frequência Média",
      value: "85%",
      change: "+3.1%",
      trend: "up",
      icon: TrendingUp,
      color: "accent"
    },
    {
      title: "Receita Mensal",
      value: "R$ 45.8k",
      change: "-2.4%",
      trend: "down",
      icon: DollarSign,
      color: "muted"
    }
  ];

  const alerts = [
    {
      type: "warning",
      title: "Célula com baixa frequência",
      description: "Célula 'Juventude Central' com apenas 45% de presença nas últimas 3 semanas",
      action: "Ver detalhes"
    },
    {
      type: "success",
      title: "Meta alcançada!",
      description: "Célula 'Casais Unidos' atingiu 100% de crescimento este mês",
      action: "Parabenizar"
    },
    {
      type: "info",
      title: "Novo membro cadastrado",
      description: "João Silva foi adicionado à Célula 'Homens de Fé'",
      action: "Visualizar"
    }
  ];

  const healthScores = [
    { name: "Célula Juventude", score: 92, trend: "up" },
    { name: "Célula Casais", score: 88, trend: "up" },
    { name: "Célula Mulheres", score: 76, trend: "stable" },
    { name: "Célula Homens", score: 65, trend: "down" }
  ];

  return (
    <DashboardLayout title="Dashboard">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <metric.icon className={cn("w-5 h-5", `text-${metric.color}`)} />
              <span className={cn("text-xs font-medium flex items-center", 
                metric.trend === "up" ? "text-green-500" : "text-red-500")}>
                {metric.change}
                {metric.trend === "up" ? 
                  <ArrowUp className="w-3 h-3 ml-1" /> : 
                  <ArrowDown className="w-3 h-3 ml-1" />}
              </span>
            </div>
            <h3 className="text-2xl font-bold mt-4">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Alerts Card */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-xl font-bold mb-6">Alertas & Notificações</h3>
          
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                <div className={cn(
                  "p-2 rounded-full",
                  alert.type === "warning" && "bg-yellow-100",
                  alert.type === "success" && "bg-green-100",
                  alert.type === "info" && "bg-blue-100"
                )}>
                  {alert.type === "warning" && <AlertCircle className="w-5 h-5 text-yellow-600" />}
                  {alert.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {alert.type === "info" && <Bell className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <h4 className="font-medium">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
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
        <Card className="p-6">
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
    </DashboardLayout>
  );
};

export default Dashboard;
