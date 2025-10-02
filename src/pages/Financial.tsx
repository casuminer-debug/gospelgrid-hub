import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Plus,
  Download,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const Financial = () => {
  const stats = [
    { 
      label: "Receita Total", 
      value: "R$ 458.2k", 
      change: "+12.5%",
      trend: "up",
      color: "primary"
    },
    { 
      label: "Dízimos", 
      value: "R$ 385.6k", 
      change: "+15.2%",
      trend: "up",
      color: "secondary"
    },
    { 
      label: "Ofertas", 
      value: "R$ 72.6k", 
      change: "+8.3%",
      trend: "up",
      color: "accent"
    },
    { 
      label: "Despesas", 
      value: "R$ 312.4k", 
      change: "-3.2%",
      trend: "down",
      color: "muted"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "income",
      category: "Dízimo",
      description: "João Silva - Dízimo Mensal",
      amount: "R$ 1.200,00",
      date: "2024-10-28",
      method: "PIX"
    },
    {
      id: 2,
      type: "income",
      category: "Oferta",
      description: "Oferta Culto Domingo",
      amount: "R$ 2.850,00",
      date: "2024-10-27",
      method: "Dinheiro"
    },
    {
      id: 3,
      type: "expense",
      category: "Infraestrutura",
      description: "Pagamento Aluguel",
      amount: "R$ 8.500,00",
      date: "2024-10-26",
      method: "Transferência"
    },
    {
      id: 4,
      type: "income",
      category: "Dízimo",
      description: "Maria Santos - Dízimo Mensal",
      amount: "R$ 950,00",
      date: "2024-10-25",
      method: "PIX"
    },
    {
      id: 5,
      type: "expense",
      category: "Ministério",
      description: "Material de Ensino",
      amount: "R$ 320,00",
      date: "2024-10-24",
      method: "Cartão"
    },
    {
      id: 6,
      type: "income",
      category: "Oferta",
      description: "Pedro Costa - Oferta Especial",
      amount: "R$ 500,00",
      date: "2024-10-23",
      method: "PIX"
    }
  ];

  const monthlyData = [
    { month: "Jan", income: 42500, expense: 28300 },
    { month: "Fev", income: 38900, expense: 31200 },
    { month: "Mar", income: 45200, expense: 29800 },
    { month: "Abr", income: 41800, expense: 27900 },
    { month: "Mai", income: 48300, expense: 32100 },
    { month: "Jun", income: 52100, expense: 30500 }
  ];

  const categories = [
    { name: "Dízimos", percentage: 84, amount: "R$ 385.6k", color: "bg-secondary" },
    { name: "Ofertas", percentage: 16, amount: "R$ 72.6k", color: "bg-accent" },
    { name: "Infraestrutura", percentage: 45, amount: "R$ 140.6k", color: "bg-destructive" },
    { name: "Ministérios", percentage: 30, amount: "R$ 93.7k", color: "bg-primary" },
    { name: "Missões", percentage: 15, amount: "R$ 46.9k", color: "bg-accent" },
    { name: "Outros", percentage: 10, amount: "R$ 31.2k", color: "bg-muted" }
  ];

  return (
    <DashboardLayout title="Gestão Financeira">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 gradient-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 flex items-center justify-center`}>
                <DollarSign className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === "up" ? "text-secondary" : "text-destructive"
              }`}>
                {stat.trend === "up" ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {stat.change}
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
          Nova Transação
        </Button>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Exportar Relatório
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">Transações Recentes</h3>
            <Button variant="ghost" size="sm">Ver todas</Button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div 
                key={transaction.id}
                className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary/20 hover:bg-card-hover transition-smooth"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  transaction.type === "income" 
                    ? "bg-secondary/10 text-secondary" 
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {transaction.type === "income" ? (
                    <ArrowDownRight className="w-5 h-5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold truncate">{transaction.description}</h4>
                    <Badge variant="outline" className="shrink-0">
                      {transaction.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(transaction.date).toLocaleDateString('pt-BR')}
                    </div>
                    <span>•</span>
                    <span>{transaction.method}</span>
                  </div>
                </div>

                <div className={`text-lg font-bold ${
                  transaction.type === "income" ? "text-secondary" : "text-destructive"
                }`}>
                  {transaction.type === "income" ? "+" : "-"}{transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Categories Breakdown */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-6">Distribuição por Categoria</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Receitas</h4>
              {categories.slice(0, 2).map((category, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm font-bold">{category.amount}</span>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 ${category.color} rounded-full`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-destructive">Despesas</h4>
              {categories.slice(2).map((category, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm font-bold">{category.amount}</span>
                  </div>
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-y-0 left-0 ${category.color} rounded-full`}
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
            Ver Análise Completa
          </Button>
        </Card>
      </div>

      {/* Monthly Chart Preview */}
      <Card className="p-6 mt-6">
        <h3 className="text-xl font-bold mb-6">Evolução Mensal</h3>
        <div className="flex items-end justify-between gap-4 h-48">
          {monthlyData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col gap-1 items-center">
                <div 
                  className="w-full bg-secondary rounded-t transition-all hover:opacity-80"
                  style={{ height: `${(data.income / 60000) * 100}%` }}
                />
                <div 
                  className="w-full bg-destructive/50 rounded-b transition-all hover:opacity-80"
                  style={{ height: `${(data.expense / 60000) * 100}%` }}
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{data.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-sm">Receitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/50" />
            <span className="text-sm">Despesas</span>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Financial;
