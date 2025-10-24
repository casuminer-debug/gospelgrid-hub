import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, TrendingUp, DollarSign, Users, Calendar, Search } from "lucide-react";

export default function Donations() {
  const donations = [
    { id: 1, donor: "Ana Silva", amount: 500, date: "22/06/2024", type: "Única", purpose: "Projeto Missionário" },
    { id: 2, donor: "João Santos", amount: 200, date: "21/06/2024", type: "Mensal", purpose: "Geral" },
    { id: 3, donor: "Maria Costa", amount: 1000, date: "20/06/2024", type: "Única", purpose: "Reforma" }
  ];

  return (
    <DashboardLayout title="Doações">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Input placeholder="Buscar doações..." className="w-64" />
            <Button variant="outline" size="icon">
              <Search className="w-4 h-4" />
            </Button>
          </div>
          <Button>
            <Heart className="w-4 h-4 mr-2" />
            Nova Doação
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total do Mês</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 12.450</div>
              <p className="text-xs text-muted-foreground">+18% em relação ao mês anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Doadores Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+12 novos este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 140</div>
              <p className="text-xs text-muted-foreground">+5% este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Doações Recorrentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">50% do total</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Doações Recentes</CardTitle>
            <CardDescription>Histórico de doações recebidas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {donations.map((donation) => (
                <div key={donation.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-card-hover transition-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{donation.donor}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{donation.date}</span>
                        <span>•</span>
                        <Badge variant="outline" className="text-xs">{donation.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-primary">R$ {donation.amount}</div>
                    <div className="text-sm text-muted-foreground">{donation.purpose}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
