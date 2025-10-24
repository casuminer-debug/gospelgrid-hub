import React from "react";
import { 
  Check, 
  X, 
  Church, 
  Users, 
  Database, 
  Award, 
  Box, 
  UserCheck, 
  BookOpen, 
  Heart, 
  ClipboardList, 
  MessageSquare,
  Zap,
  Shield,
  Smartphone,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardLayout } from "@/components/DashboardLayout";

const Pricing = () => {
  const plans = [
    {
      name: "PLANO INICIAL",
      price: "R$ 79,00",
      period: "/mês",
      description: "Ideal para igrejas pequenas que estão começando",
      features: [
        { name: "1 igreja", included: true },
        { name: "150 membros", included: true },
        { name: "20 usuários administrativos", included: true },
        { name: "Módulos: Grupos, Finanças Básico, Blog", included: true },
        { name: "Site personalizado incluído", included: true },
        { name: "Rede Social Interna Básica", included: true },
        { name: "Certificados", included: false },
        { name: "Inventário", included: false },
        { name: "Voluntários", included: false },
        { name: "Academia", included: false },
        { name: "Doações Avançadas", included: false },
        { name: "Inscrições", included: false },
        { name: "Insights Automáticos", included: false },
        { name: "App personalizado", included: false },
      ],
      color: "bg-primary",
      textColor: "text-primary",
      buttonVariant: "default",
      popular: false,
    },
    {
      name: "PLANO BÁSICO",
      price: "R$ 139,00",
      period: "/mês",
      description: "Para igrejas em crescimento que precisam de mais recursos",
      features: [
        { name: "1 igreja", included: true },
        { name: "250 membros", included: true },
        { name: "50 usuários administrativos", included: true },
        { name: "Todos do Inicial + Certificados, Inventário, Voluntários", included: true },
        { name: "Site personalizado incluído", included: true },
        { name: "Rede Social Interna Completa", included: true },
        { name: "Academia", included: false },
        { name: "Doações Avançadas", included: false },
        { name: "Inscrições", included: false },
        { name: "Insights Automáticos", included: false },
        { name: "App personalizado", included: false },
      ],
      color: "bg-secondary",
      textColor: "text-secondary",
      buttonVariant: "secondary",
      popular: false,
    },
    {
      name: "PLANO ESSENCIAL",
      price: "R$ 269,00",
      period: "/mês",
      description: "Solução completa para igrejas estabelecidas",
      features: [
        { name: "2 igrejas", included: true },
        { name: "500 membros", included: true },
        { name: "80 usuários administrativos", included: true },
        { name: "Todos do Básico + Academia, Doações, Inscrições", included: true },
        { name: "Site personalizado incluído", included: true },
        { name: "Rede Social Interna Completa", included: true },
        { name: "Insights Básicos", included: true },
        { name: "App personalizado", included: false },
      ],
      color: "bg-accent",
      textColor: "text-accent",
      buttonVariant: "outline",
      popular: true,
    },
    {
      name: "PLANO CRESCIMENTO",
      price: "R$ 799,00",
      period: "/mês",
      description: "Para redes de igrejas com múltiplas congregações",
      features: [
        { name: "5 igrejas", included: true },
        { name: "5000 membros", included: true },
        { name: "1000 usuários administrativos", included: true },
        { name: "Todos os módulos incluídos", included: true },
        { name: "Site personalizado incluído", included: true },
        { name: "Rede Social Interna Completa", included: true },
        { name: "Insights Automáticos Completos", included: true },
        { name: "App personalizado", included: true },
      ],
      color: "bg-destructive",
      textColor: "text-destructive",
      buttonVariant: "destructive",
      popular: false,
    },
    {
      name: "PLANO PERSONALIZADO",
      price: "Sob Consulta",
      period: "",
      description: "Solução personalizada para grandes denominações",
      features: [
        { name: "Igrejas ilimitadas", included: true },
        { name: "Membros ilimitados", included: true },
        { name: "White label", included: true },
        { name: "Consultoria estratégica", included: true },
        { name: "Suporte 24/7", included: true },
      ],
      color: "bg-muted",
      textColor: "text-muted-foreground",
      buttonVariant: "outline",
      popular: false,
    },
  ];

  const modules = [
    { 
      name: "Sistema de Certificados", 
      icon: Award,
      features: [
        "Emissão de certificados para cursos e eventos",
        "Modelos personalizáveis",
        "Validação digital",
        "Histórico de certificações por membro"
      ]
    },
    { 
      name: "Gestão de Inventário", 
      icon: Box,
      features: [
        "Controle de patrimônio da igreja",
        "Categorização de itens (equipamentos, móveis, etc.)",
        "Controle de entrada/saída",
        "Relatórios de inventário"
      ]
    },
    { 
      name: "Gestão de Voluntários", 
      icon: UserCheck,
      features: [
        "Cadastro de habilidades e disponibilidade",
        "Escalas de serviço automáticas",
        "Controle de frequência",
        "Reconhecimento e recompensas"
      ]
    },
    { 
      name: "Plataforma Academia", 
      icon: BookOpen,
      features: [
        "Cursos online para discipulado",
        "Trilhas de aprendizado",
        "Controle de progresso",
        "Certificação automática"
      ]
    },
    { 
      name: "Sistema de Doações Avançado", 
      icon: Heart,
      features: [
        "Múltiplos gateways de pagamento",
        "Doações recorrentes",
        "Recibos automáticos",
        "Campanhas específicas"
      ]
    },
    { 
      name: "Sistema de Inscrições", 
      icon: ClipboardList,
      features: [
        "Eventos e cursos",
        "Pagamentos integrados",
        "Listas de espera",
        "Certificados automáticos"
      ]
    },
    { 
      name: "Rede Social Interna", 
      icon: MessageSquare,
      features: [
        "Feed de atividades com posts, fotos e vídeos",
        "Pedidos de oração públicos e privados",
        "Anúncios comunitários",
        "Grupos de interesse",
        "Sistema de matchmaking de serviços"
      ]
    },
  ];

  const celulahubFeatures = [
    {
      title: "Gestão Multi-Igrejas",
      icon: Church,
      description: "Controle centralizado de múltiplas congregações com dashboard unificado e benchmarking interno entre filiais."
    },
    {
      title: "Rede de Conexões Comunitárias",
      icon: Users,
      description: "Cadastro de habilidades e talentos dos membros com sistema de busca, conexão direta e geolocalização."
    },
    {
      title: "Sistema de Insights Automáticos",
      icon: Zap,
      description: "Health Score das células, alertas proativos de tendências e análise preditiva de crescimento."
    },
    {
      title: "Gestão Ministerial Completa",
      icon: Database,
      description: "Controle de células e membros, gestão financeira e patrimonial, e acompanhamento espiritual."
    }
  ];

  const celulahubPlans = [
    {
      name: "Plano Gratuito",
      price: "7 dias",
      features: [
        "1 igreja",
        "1 célula (até 5 membros)",
        "Funcionalidades básicas",
        "Sem módulo de conexões"
      ],
      color: "bg-muted",
      buttonText: "Começar Gratuitamente"
    },
    {
      name: "Plano Essencial",
      price: "R$ 297,00/mês",
      features: [
        "Até 3 igrejas",
        "5 células por igreja (25 membros cada)",
        "Módulo Conexões Comunitárias",
        "Relatórios administrativos",
        "Suporte prioritário",
        "Membros adicionais: R$ 4,00/mês"
      ],
      color: "bg-primary",
      buttonText: "Contratar Agora",
      popular: true
    }
  ];

  return (
    <DashboardLayout title="Planos e Preços">
      <div className="space-y-12">
        {/* Hero Section */}
        <Card className="p-8 gradient-hero text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Escolha o Plano Ideal para Sua Igreja</h1>
            <p className="text-xl opacity-90 mb-6">
              Soluções completas para gestão eclesiástica, desde pequenas comunidades até grandes denominações
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                Ver Demonstração
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Falar com Consultor
              </Button>
            </div>
          </div>
        </Card>

        {/* GospelGrid Hub Plans */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planos GospelGrid Hub</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano que melhor atende às necessidades da sua igreja
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-6 border-2 ${plan.popular ? 'border-primary' : 'border-border'} h-full flex flex-col`}>
                {plan.popular && (
                  <Badge className="self-start mb-4 bg-primary text-primary-foreground">Mais Popular</Badge>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className={`h-5 w-5 ${plan.textColor} shrink-0`} />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-auto" variant={plan.buttonVariant as any}>
                  Escolher Plano
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Módulos Disponíveis</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça todos os recursos disponíveis em nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{module.name}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* CelulaHub Section */}
        <div className="bg-muted/30 p-8 rounded-xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">NOVO</Badge>
            <h2 className="text-3xl font-bold mb-4">CelulaHub - Plataforma Completa de Gestão Eclesiástica</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sistema completo de gestão para igrejas, conectando comunidades e simplificando a administração ministerial
            </p>
          </div>

          {/* CelulaHub Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {celulahubFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* CelulaHub Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {celulahubPlans.map((plan, index) => (
              <Card key={index} className={`p-6 border-2 ${plan.popular ? 'border-primary' : 'border-border'}`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className={`h-5 w-5 text-primary shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {plan.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diferenciais Competitivos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Por que escolher nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Único no Mercado</h3>
              <ul className="space-y-3">
                {[
                  "Gestão verdadeiramente multi-igrejas",
                  "Rede interna de conexões profissionais",
                  "Sistema de insights automáticos",
                  "Abordagem comunitária integrada"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Vantagens Competitivas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold mb-1">Preço Acessível</h4>
                  <p className="text-sm text-muted-foreground">Custo por igreja abaixo do mercado</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <Zap className="h-8 w-8 text-secondary mb-2" />
                  <h4 className="font-semibold mb-1">ROI Imediato</h4>
                  <p className="text-sm text-muted-foreground">Economia administrativa evidente</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <Smartphone className="h-8 w-8 text-accent mb-2" />
                  <h4 className="font-semibold mb-1">Fácil Implementação</h4>
                  <p className="text-sm text-muted-foreground">Curva de aprendizado baixa</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <Headphones className="h-8 w-8 text-destructive mb-2" />
                  <h4 className="font-semibold mb-1">Suporte Especializado</h4>
                  <p className="text-sm text-muted-foreground">Equipe entende o contexto eclesiástico</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 gradient-hero text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Transformar a Gestão da Sua Igreja?</h2>
            <p className="text-xl opacity-90 mb-6">
              Comece hoje mesmo e experimente por 7 dias gratuitamente
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
                Começar Gratuitamente
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Pricing;