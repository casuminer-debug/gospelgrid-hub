import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  MapPin,
  Calendar,
  Plus,
  BarChart3
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const Cells = () => {
  const cells = [
    {
      id: 1,
      name: "Juventude Central",
      leader: "João Silva",
      members: 24,
      healthScore: 92,
      trend: "up",
      attendance: 87,
      growth: "+12%",
      location: "São Paulo - Zona Sul",
      meetingDay: "Sextas 19h",
      category: "Juventude"
    },
    {
      id: 2,
      name: "Casais Unidos",
      leader: "Maria & Pedro Santos",
      members: 18,
      healthScore: 88,
      trend: "up",
      attendance: 94,
      growth: "+22%",
      location: "São Paulo - Centro",
      meetingDay: "Sábados 18h",
      category: "Casais"
    },
    {
      id: 3,
      name: "Mulheres de Fé",
      leader: "Ana Paula",
      members: 32,
      healthScore: 76,
      trend: "stable",
      attendance: 72,
      growth: "0%",
      location: "Guarulhos",
      meetingDay: "Terças 14h",
      category: "Mulheres"
    },
    {
      id: 4,
      name: "Homens de Fé",
      leader: "Carlos Oliveira",
      members: 15,
      healthScore: 65,
      trend: "down",
      attendance: 60,
      growth: "-8%",
      location: "Osasco",
      meetingDay: "Quintas 20h",
      category: "Homens"
    },
    {
      id: 5,
      name: "Adolescentes em Ação",
      leader: "Juliana Lima",
      members: 28,
      healthScore: 84,
      trend: "up",
      attendance: 82,
      growth: "+15%",
      location: "São Paulo - Zona Norte",
      meetingDay: "Domingos 16h",
      category: "Adolescentes"
    },
    {
      id: 6,
      name: "Terceira Idade Feliz",
      leader: "Roberto Costa",
      members: 22,
      healthScore: 79,
      trend: "stable",
      attendance: 89,
      growth: "+3%",
      location: "São Paulo - Zona Leste",
      meetingDay: "Quartas 15h",
      category: "Idosos"
    }
  ];

  const stats = [
    { label: "Total de Células", value: "48", icon: Users },
    { label: "Total de Membros", value: "892", icon: Users },
    { label: "Health Score Médio", value: "81", icon: BarChart3 },
    { label: "Taxa de Crescimento", value: "+8.5%", icon: TrendingUp }
  ];

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-secondary";
    if (score >= 60) return "text-accent";
    return "text-destructive";
  };

  const getHealthBg = (score: number) => {
    if (score >= 80) return "bg-secondary";
    if (score >= 60) return "bg-accent";
    return "bg-destructive";
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-secondary" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Juventude": "bg-primary/10 text-primary",
      "Casais": "bg-accent/10 text-accent",
      "Mulheres": "bg-secondary/10 text-secondary",
      "Homens": "bg-primary/10 text-primary",
      "Adolescentes": "bg-accent/10 text-accent",
      "Idosos": "bg-secondary/10 text-secondary"
    };
    return colors[category] || "bg-muted/10 text-muted-foreground";
  };

  return (
    <DashboardLayout title="Gestão de Células">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Nova Célula
        </Button>
        <Button variant="outline">
          <BarChart3 className="w-4 h-4 mr-2" />
          Relatório Geral
        </Button>
      </div>

      {/* Cells Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cells.map((cell) => (
          <Card key={cell.id} className="p-6 card-interactive gradient-card hover:shadow-primary">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">{cell.name}</h3>
                <Badge className={getCategoryColor(cell.category)}>
                  {cell.category}
                </Badge>
              </div>
              {getTrendIcon(cell.trend)}
            </div>

            {/* Health Score */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Health Score</span>
                <span className={`text-2xl font-bold ${getHealthColor(cell.healthScore)}`}>
                  {cell.healthScore}
                </span>
              </div>
              <Progress value={cell.healthScore} className="h-2" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-2xl font-bold">{cell.members}</div>
                <div className="text-xs text-muted-foreground">Membros</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{cell.attendance}%</div>
                <div className="text-xs text-muted-foreground">Frequência</div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4 shrink-0" />
                <span className="truncate">{cell.leader}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="truncate">{cell.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>{cell.meetingDay}</span>
              </div>
            </div>

            {/* Growth Badge */}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm text-muted-foreground">Crescimento</span>
              <Badge 
                variant={cell.trend === "up" ? "default" : "secondary"}
                className={cell.trend === "up" ? "bg-secondary text-secondary-foreground" : ""}
              >
                {cell.growth}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Cells;
