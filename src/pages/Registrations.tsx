import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, Search, Plus, CheckCircle2, Clock, X } from "lucide-react";

export default function RegistrationsPage() {
  const registrations = [
    { id: 1, name: "Carlos Silva", event: "Retiro Espiritual 2024", date: "15/06/2024", status: "confirmed", paid: true },
    { id: 2, name: "Ana Costa", event: "Congresso de Jovens", date: "14/06/2024", status: "pending", paid: false },
    { id: 3, name: "Pedro Santos", event: "Workshop de Louvor", date: "13/06/2024", status: "confirmed", paid: true }
  ];

  return (
    <DashboardLayout title="Inscrições">
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmadas</TabsTrigger>
          <TabsTrigger value="pending">Pendentes</TabsTrigger>
          <TabsTrigger value="cancelled">Canceladas</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Input placeholder="Buscar inscrições..." className="w-64" />
              <Button variant="outline" size="icon">
                <Search className="w-4 h-4" />
              </Button>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nova Inscrição
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total de Inscrições</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground">+23 esta semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Confirmadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98</div>
                <p className="text-xs text-muted-foreground">77% do total</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">29</div>
                <p className="text-xs text-muted-foreground">23% do total</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inscrições Recentes</CardTitle>
              <CardDescription>Últimas inscrições registradas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {registrations.map((reg) => (
                  <div key={reg.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-card-hover transition-smooth">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <ClipboardList className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{reg.name}</p>
                        <p className="text-sm text-muted-foreground">{reg.event}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium">{reg.date}</div>
                        <div className="flex items-center gap-2">
                          {reg.status === "confirmed" ? (
                            <Badge className="bg-green-100 text-green-800">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Confirmada
                            </Badge>
                          ) : (
                            <Badge variant="secondary">
                              <Clock className="w-3 h-3 mr-1" />
                              Pendente
                            </Badge>
                          )}
                          {reg.paid && (
                            <Badge className="bg-blue-100 text-blue-800">Pago</Badge>
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Detalhes</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}