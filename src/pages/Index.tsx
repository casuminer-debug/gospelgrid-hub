import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Church, 
  Users, 
  TrendingUp, 
  Shield, 
  Network,
  BarChart3,
  Heart,
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Church,
      title: "Gestão Multi-Igrejas",
      description: "Gerencie redes, igrejas e congregações em uma única plataforma unificada"
    },
    {
      icon: Users,
      title: "Comunidade Conectada",
      description: "Rede social interna para conectar membros, talentos e profissionais"
    },
    {
      icon: BarChart3,
      title: "Insights Automáticos",
      description: "Analytics inteligente com alertas proativos e recomendações acionáveis"
    },
    {
      icon: Heart,
      title: "Acompanhamento Espiritual",
      description: "Ferramentas completas para cuidado pastoral e crescimento da igreja"
    },
    {
      icon: TrendingUp,
      title: "Health Score",
      description: "Sistema de pontuação 0-100 para monitorar a saúde das células e grupos"
    },
    {
      icon: Shield,
      title: "Segurança & Privacidade",
      description: "Proteção de dados sensíveis com permissões granulares por nível"
    }
  ];

  const stats = [
    { number: "1000+", label: "Igrejas conectadas" },
    { number: "50k+", label: "Membros ativos" },
    { number: "98%", label: "Satisfação" },
    { number: "24/7", label: "Suporte" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMCAwdjhoOHYtOGgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-white">Plataforma All-in-One de Gestão Eclesiástica</span>
            </div>
            
            <h1 className="text-white mb-6">
              Transforme a Gestão da Sua Igreja
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Sistema completo de gestão multi-igrejas com rede comunitária, insights automáticos e ferramentas ministeriais integradas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-lg px-8 w-full sm:w-auto"
                >
                  Começar Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg px-8 w-full sm:w-auto"
                >
                  Ver Demonstração
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Recursos Poderosos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar e crescer sua igreja em uma única plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 card-interactive border-2 hover:border-primary/20 gradient-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Por Que Escolher Nossa Plataforma?</h2>
                <div className="space-y-4">
                  {[
                    "Dashboard intuitivo com métricas em tempo real",
                    "Sistema hierárquico: Rede > Igreja > Célula > Membro",
                    "Relatórios consolidados e benchmarking entre filiais",
                    "Comunicação integrada via WhatsApp",
                    "Controle financeiro completo de dízimos e ofertas",
                    "Mobile-first e totalmente responsivo"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-8 gradient-card shadow-primary">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Network className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">+250%</div>
                      <div className="text-sm text-muted-foreground">Crescimento médio</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">15h/mês</div>
                      <div className="text-sm text-muted-foreground">Tempo economizado</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">92%</div>
                      <div className="text-sm text-muted-foreground">Retenção de membros</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">
            Pronto para Transformar Sua Igreja?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de igrejas que já estão crescendo com nossa plataforma
          </p>
          <Link to="/dashboard">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-lg px-8"
            >
              Começar Agora - É Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Church className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">ChurchHub</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 ChurchHub. Transformando a gestão eclesiástica.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
