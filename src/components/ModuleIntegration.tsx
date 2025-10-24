import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

interface ModuleConnectionProps {
  sourceModule: string;
  targetModule: string;
  status: "connected" | "partial" | "disconnected";
  description: string;
}

// Componente personalizado que estende o Badge para aceitar children
const CustomBadge: React.FC<React.PropsWithChildren<BadgeProps & { className?: string }>> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <Badge className={className} {...props}>
      {children}
    </Badge>
  );
};

const ModuleConnection = ({ sourceModule, targetModule, status, description }: ModuleConnectionProps) => {
  const statusColors = {
    connected: "bg-green-100 text-green-800",
    partial: "bg-amber-100 text-amber-800",
    disconnected: "bg-red-100 text-red-800"
  };

  const statusText = {
    connected: "Conectado",
    partial: "Parcialmente Conectado",
    disconnected: "Desconectado"
  };

  const statusIcon = {
    connected: <CheckCircle2 className="w-4 h-4 text-green-600" />,
    partial: <AlertTriangle className="w-4 h-4 text-amber-600" />,
    disconnected: <AlertTriangle className="w-4 h-4 text-red-600" />
  };

  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            <span>{sourceModule}</span>
            <ArrowRight className="inline mx-2" />
            <span>{targetModule}</span>
          </CardTitle>
          <CustomBadge className={statusColors[status]}>
            <span className="flex items-center gap-1">
              {statusIcon[status]}
              {statusText[status]}
            </span>
          </CustomBadge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="outline">Verificar Detalhes</Button>
      </CardContent>
    </Card>
  );
};

const ModuleIntegration = () => {
  const moduleConnections: ModuleConnectionProps[] = [
    {
      sourceModule: "Membros",
      targetModule: "Células",
      status: "connected",
      description: "Integração completa para gerenciamento de membros em células"
    },
    {
      sourceModule: "Eventos",
      targetModule: "Inscrições",
      status: "connected",
      description: "Sistema de inscrições integrado com eventos"
    },
    {
      sourceModule: "Academia",
      targetModule: "Certificados",
      status: "connected",
      description: "Emissão automática de certificados para cursos concluídos"
    },
    {
      sourceModule: "Voluntários",
      targetModule: "Eventos",
      status: "connected",
      description: "Gerenciamento de escalas de voluntários para eventos"
    },
    {
      sourceModule: "Financeiro",
      targetModule: "Doações",
      status: "connected",
      description: "Registro automático de doações no sistema financeiro"
    },
    {
      sourceModule: "Insights Automáticos",
      targetModule: "Dashboard",
      status: "connected",
      description: "Exibição de insights relevantes no dashboard principal"
    },
    {
      sourceModule: "Rede Social",
      targetModule: "Células",
      status: "partial",
      description: "Integração parcial para comunicação entre membros de células"
    },
    {
      sourceModule: "Inventário",
      targetModule: "Eventos",
      status: "partial",
      description: "Reserva de itens para eventos implementada parcialmente"
    },
    {
      sourceModule: "Certificados",
      targetModule: "Inscrições",
      status: "connected",
      description: "Emissão automática de certificados para eventos concluídos"
    },
    {
      sourceModule: "Doações",
      targetModule: "Insights Automáticos",
      status: "connected",
      description: "Análise automática de tendências de doações"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Integração entre Módulos</h2>
          <p className="text-muted-foreground">Verificação da comunicação entre os diferentes módulos do sistema</p>
        </div>
        <div className="flex items-center gap-2">
          <CustomBadge variant="outline" className="bg-green-100 text-green-800">
            <CheckCircle2 className="w-3 h-3 mr-1" /> 8 Conectados
          </CustomBadge>
          <CustomBadge variant="outline" className="bg-amber-100 text-amber-800">
            <AlertTriangle className="w-3 h-3 mr-1" /> 2 Parciais
          </CustomBadge>
          <CustomBadge variant="outline" className="bg-red-100 text-red-800">
            <AlertTriangle className="w-3 h-3 mr-1" /> 0 Desconectados
          </CustomBadge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moduleConnections.map((connection, index) => (
          <ModuleConnection key={index} {...connection} />
        ))}
      </div>
    </div>
  );
};

export default ModuleIntegration;