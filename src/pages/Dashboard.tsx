import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard,
  Users,
  Church,
  TrendingUp,
  Calendar,
  DollarSign,
  Bell,
  Settings,
  Menu,
  X,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <Church className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">ChurchHub</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-smooth",
                item.active 
                  ? "bg-primary text-primary-foreground shadow-primary" 
                  : "hover:bg-card-hover"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  item.active ? "bg-white/20" : "bg-muted"
                )}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        sidebarOpen ? "lg:ml-64" : "ml-0"
      )}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-card border-b backdrop-blur-sm bg-card/80">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Visão geral da rede</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full text-xs flex items-center justify-center text-destructive-foreground">
                  3
                </span>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">PS</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 card-interactive gradient-card">
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    `bg-${metric.color}/10`
                  )}>
                    <metric.icon className={cn("w-6 h-6", `text-${metric.color}`)} />
                  </div>
                  <div className={cn(
                    "flex items-center gap-1 text-sm font-medium",
                    metric.trend === "up" ? "text-secondary" : "text-destructive"
                  )}>
                    {metric.trend === "up" ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.title}</div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Alerts */}
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Alertas e Notificações</h3>
                <Button variant="ghost" size="sm">
                  Ver todos
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex gap-4 p-4 rounded-lg border-2 transition-smooth hover:shadow-md",
                      alert.type === "warning" && "border-warning/20 bg-warning/5",
                      alert.type === "success" && "border-secondary/20 bg-secondary/5",
                      alert.type === "info" && "border-primary/20 bg-primary/5"
                    )}
                  >
                    {alert.type === "warning" && <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />}
                    {alert.type === "success" && <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />}
                    {alert.type === "info" && <Bell className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
                    
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{alert.title}</h4>
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
