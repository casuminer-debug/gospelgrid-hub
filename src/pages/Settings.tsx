import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Church,
  Mail,
  Phone,
  MapPin,
  Globe,
  Bell,
  Shield,
  Users,
  Palette
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const Settings = () => {
  const settingsSections = [
    {
      title: "Informações da Igreja",
      icon: Church,
      items: [
        { label: "Nome da Igreja", value: "Igreja Comunidade Central", type: "text" },
        { label: "Email Principal", value: "contato@igrejacentral.com", type: "email", icon: Mail },
        { label: "Telefone", value: "(11) 3456-7890", type: "tel", icon: Phone },
        { label: "Endereço", value: "Rua das Flores, 123 - São Paulo, SP", type: "text", icon: MapPin },
        { label: "Site", value: "www.igrejacentral.com", type: "url", icon: Globe }
      ]
    },
    {
      title: "Notificações",
      icon: Bell,
      items: [
        { label: "Novos membros", enabled: true, type: "switch" },
        { label: "Alertas de frequência baixa", enabled: true, type: "switch" },
        { label: "Metas atingidas", enabled: true, type: "switch" },
        { label: "Relatórios semanais", enabled: false, type: "switch" },
        { label: "Eventos próximos", enabled: true, type: "switch" }
      ]
    },
    {
      title: "Segurança e Privacidade",
      icon: Shield,
      items: [
        { label: "Autenticação de dois fatores", enabled: true, type: "switch" },
        { label: "Visibilidade de dados financeiros", enabled: false, type: "switch" },
        { label: "Permitir exportação de dados", enabled: true, type: "switch" },
        { label: "Compartilhar analytics", enabled: false, type: "switch" }
      ]
    },
    {
      title: "Permissões de Acesso",
      icon: Users,
      roles: [
        { role: "Super Admin", count: 2, color: "bg-destructive" },
        { role: "Pastor", count: 5, color: "bg-accent" },
        { role: "Líder de Célula", count: 48, color: "bg-secondary" },
        { role: "Membro", count: 1179, color: "bg-primary" }
      ]
    }
  ];

  return (
    <DashboardLayout title="Configurações">
      <div className="max-w-4xl space-y-6">
        {/* Church Info */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Church className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Informações da Igreja</h3>
              <p className="text-sm text-muted-foreground">
                Dados principais da organização
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label>Nome da Igreja</Label>
              <Input defaultValue="Igreja Comunidade Central" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>Email Principal</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="email" 
                    defaultValue="contato@igrejacentral.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Telefone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="tel" 
                    defaultValue="(11) 3456-7890"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Endereço Completo</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  defaultValue="Rua das Flores, 123 - São Paulo, SP"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="url" 
                  defaultValue="www.igrejacentral.com"
                  className="pl-10"
                />
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Salvar Alterações
            </Button>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Notificações</h3>
              <p className="text-sm text-muted-foreground">
                Configure os alertas que deseja receber
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Novos membros cadastrados", enabled: true },
              { label: "Alertas de frequência baixa em células", enabled: true },
              { label: "Metas financeiras atingidas", enabled: true },
              { label: "Relatórios semanais automáticos", enabled: false },
              { label: "Lembretes de eventos próximos", enabled: true },
              { label: "Aniversariantes do dia", enabled: false }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-card-hover transition-smooth">
                <Label htmlFor={`notif-${index}`} className="cursor-pointer">
                  {item.label}
                </Label>
                <Switch id={`notif-${index}`} defaultChecked={item.enabled} />
              </div>
            ))}
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Segurança e Privacidade</h3>
              <p className="text-sm text-muted-foreground">
                Controle de acesso e proteção de dados
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "Autenticação de dois fatores (2FA)", enabled: true, recommended: true },
              { label: "Visibilidade pública de dados financeiros", enabled: false },
              { label: "Permitir exportação de dados por líderes", enabled: true },
              { label: "Compartilhar analytics com a rede", enabled: false }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg hover:bg-card-hover transition-smooth">
                <div>
                  <Label htmlFor={`sec-${index}`} className="cursor-pointer">
                    {item.label}
                  </Label>
                  {item.recommended && (
                    <p className="text-xs text-secondary mt-1">Recomendado</p>
                  )}
                </div>
                <Switch id={`sec-${index}`} defaultChecked={item.enabled} />
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <div>
            <h4 className="font-semibold mb-3">Alterar Senha</h4>
            <div className="space-y-3">
              <Input type="password" placeholder="Senha atual" />
              <Input type="password" placeholder="Nova senha" />
              <Input type="password" placeholder="Confirmar nova senha" />
              <Button variant="outline">Atualizar Senha</Button>
            </div>
          </div>
        </Card>

        {/* Permissions */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Permissões de Acesso</h3>
              <p className="text-sm text-muted-foreground">
                Gerenciar perfis e permissões por função
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { role: "Super Admin", count: 2, color: "bg-destructive", description: "Acesso total ao sistema" },
              { role: "Pastor", count: 5, color: "bg-accent", description: "Gestão completa da igreja" },
              { role: "Líder de Célula", count: 48, color: "bg-secondary", description: "Gestão de células e membros" },
              { role: "Membro", count: 1179, color: "bg-primary", description: "Acesso básico ao sistema" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border-2 border-transparent hover:border-primary/20 hover:bg-card-hover transition-smooth"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div>
                    <div className="font-semibold">{item.role}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{item.count}</div>
                  <div className="text-xs text-muted-foreground">usuários</div>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4">
            Gerenciar Permissões Detalhadas
          </Button>
        </Card>

        {/* Appearance */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Aparência</h3>
              <p className="text-sm text-muted-foreground">
                Personalize a interface do sistema
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label>Tema</Label>
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary" />
                  <span className="text-xs">Claro</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2 border-primary">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900" />
                  <span className="text-xs">Escuro</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-800" />
                  <span className="text-xs">Auto</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
