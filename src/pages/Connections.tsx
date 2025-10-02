import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Briefcase,
  Star,
  MessageCircle,
  Filter
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const Connections = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const professionals = [
    {
      id: 1,
      name: "João Silva",
      profession: "Designer Gráfico",
      skills: ["Branding", "UI/UX", "Ilustração"],
      location: "São Paulo - SP",
      cell: "Juventude Central",
      rating: 4.8,
      reviews: 12,
      avatar: "JS",
      available: true
    },
    {
      id: 2,
      name: "Maria Santos",
      profession: "Advogada",
      skills: ["Família", "Trabalhista", "Contratos"],
      location: "São Paulo - SP",
      cell: "Mulheres de Fé",
      rating: 5.0,
      reviews: 24,
      avatar: "MS",
      available: true
    },
    {
      id: 3,
      name: "Pedro Costa",
      profession: "Eletricista",
      skills: ["Instalação", "Manutenção", "Automação"],
      location: "Guarulhos - SP",
      cell: "Homens de Fé",
      rating: 4.6,
      reviews: 18,
      avatar: "PC",
      available: false
    },
    {
      id: 4,
      name: "Ana Paula",
      profession: "Nutricionista",
      skills: ["Emagrecimento", "Esporte", "Infantil"],
      location: "São Paulo - SP",
      cell: "Casais Unidos",
      rating: 4.9,
      reviews: 31,
      avatar: "AP",
      available: true
    },
    {
      id: 5,
      name: "Carlos Oliveira",
      profession: "Desenvolvedor Web",
      skills: ["React", "Node.js", "Mobile"],
      location: "Osasco - SP",
      cell: "Juventude Central",
      rating: 4.7,
      reviews: 15,
      avatar: "CO",
      available: true
    },
    {
      id: 6,
      name: "Juliana Lima",
      profession: "Psicóloga",
      skills: ["Terapia", "Família", "Adolescentes"],
      location: "São Paulo - SP",
      cell: "Mulheres de Fé",
      rating: 5.0,
      reviews: 28,
      avatar: "JL",
      available: true
    }
  ];

  const categories = [
    "Saúde", "Educação", "Tecnologia", "Construção", 
    "Jurídico", "Design", "Alimentação", "Automotivo"
  ];

  const filteredProfessionals = professionals.filter(prof => 
    prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <DashboardLayout title="Conexões Comunitárias">
      {/* Header */}
      <Card className="p-6 mb-6 gradient-hero text-white">
        <h2 className="text-2xl font-bold mb-2">Conecte-se com Talentos da Comunidade</h2>
        <p className="text-white/90 mb-6">
          Encontre profissionais e serviços oferecidos por membros da nossa igreja
        </p>

        {/* Search */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
            <Input 
              placeholder="Buscar por profissão, habilidade ou nome..." 
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>
      </Card>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Categorias Populares</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant="outline" 
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6 gradient-card">
          <div className="text-3xl font-bold mb-1">245</div>
          <div className="text-sm text-muted-foreground">Profissionais Cadastrados</div>
        </Card>
        <Card className="p-6 gradient-card">
          <div className="text-3xl font-bold mb-1">18</div>
          <div className="text-sm text-muted-foreground">Categorias de Serviços</div>
        </Card>
        <Card className="p-6 gradient-card">
          <div className="text-3xl font-bold mb-1">4.8</div>
          <div className="text-sm text-muted-foreground">Avaliação Média</div>
        </Card>
      </div>

      {/* Professionals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfessionals.map((prof) => (
          <Card key={prof.id} className="p-6 card-interactive hover:shadow-primary">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">{prof.avatar}</span>
                </div>
                <div>
                  <h4 className="font-bold">{prof.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Briefcase className="w-3 h-3" />
                    <span>{prof.profession}</span>
                  </div>
                </div>
              </div>
              
              {prof.available && (
                <Badge className="bg-secondary text-secondary-foreground">
                  Disponível
                </Badge>
              )}
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {prof.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{prof.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 shrink-0 text-accent fill-accent" />
                <span className="font-medium text-foreground">{prof.rating}</span>
                <span>({prof.reviews} avaliações)</span>
              </div>
            </div>

            {/* Cell Badge */}
            <div className="mb-4">
              <Badge variant="outline" className="text-xs">
                {prof.cell}
              </Badge>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Ver Perfil
              </Button>
              <Button variant="outline" size="icon">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredProfessionals.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">
            Nenhum profissional encontrado com os filtros aplicados
          </p>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default Connections;
