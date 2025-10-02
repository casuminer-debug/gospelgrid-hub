import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  UserPlus, 
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreVertical,
  Download
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const members = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@email.com",
      phone: "(11) 98765-4321",
      status: "active",
      cell: "Juventude Central",
      role: "Membro",
      joinDate: "2024-01-15",
      city: "São Paulo",
      avatar: "JS"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@email.com",
      phone: "(11) 98765-4322",
      status: "active",
      cell: "Mulheres de Fé",
      role: "Líder",
      joinDate: "2023-06-20",
      city: "São Paulo",
      avatar: "MS"
    },
    {
      id: 3,
      name: "Pedro Costa",
      email: "pedro.costa@email.com",
      phone: "(11) 98765-4323",
      status: "inactive",
      cell: "Homens de Fé",
      role: "Membro",
      joinDate: "2023-11-10",
      city: "Guarulhos",
      avatar: "PC"
    },
    {
      id: 4,
      name: "Ana Paula",
      email: "ana.paula@email.com",
      phone: "(11) 98765-4324",
      status: "active",
      cell: "Casais Unidos",
      role: "Co-líder",
      joinDate: "2024-02-01",
      city: "São Paulo",
      avatar: "AP"
    },
    {
      id: 5,
      name: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      phone: "(11) 98765-4325",
      status: "active",
      cell: "Juventude Central",
      role: "Membro",
      joinDate: "2024-03-12",
      city: "Osasco",
      avatar: "CO"
    },
    {
      id: 6,
      name: "Juliana Lima",
      email: "juliana.lima@email.com",
      phone: "(11) 98765-4326",
      status: "active",
      cell: "Mulheres de Fé",
      role: "Membro",
      joinDate: "2023-09-05",
      city: "São Paulo",
      avatar: "JL"
    }
  ];

  const stats = [
    { label: "Total de Membros", value: "1,234", change: "+12.5%" },
    { label: "Novos este Mês", value: "45", change: "+8.2%" },
    { label: "Membros Ativos", value: "1,156", change: "+3.1%" },
    { label: "Taxa de Retenção", value: "93.7%", change: "+1.2%" }
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.cell.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || member.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout title="Gestão de Membros">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 gradient-card">
            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium text-secondary">{stat.change}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters and Actions */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nome, email ou célula..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Status</SelectItem>
              <SelectItem value="active">Ativos</SelectItem>
              <SelectItem value="inactive">Inativos</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-primary hover:bg-primary/90">
            <UserPlus className="w-4 h-4 mr-2" />
            Novo Membro
          </Button>

          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </Card>

      {/* Members List */}
      <Card className="p-6">
        <div className="space-y-4">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary/20 hover:bg-card-hover transition-smooth cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-bold text-primary">{member.avatar}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold truncate">{member.name}</h4>
                  {member.role === "Líder" && (
                    <Badge className="bg-accent text-accent-foreground">Líder</Badge>
                  )}
                  {member.role === "Co-líder" && (
                    <Badge className="bg-secondary text-secondary-foreground">Co-líder</Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{member.city}</span>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-end gap-2">
                <Badge variant="outline" className="font-normal">
                  {member.cell}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(member.joinDate).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>

              <Badge 
                variant={member.status === "active" ? "default" : "secondary"}
                className={member.status === "active" ? "bg-secondary text-secondary-foreground" : ""}
              >
                {member.status === "active" ? "Ativo" : "Inativo"}
              </Badge>

              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Nenhum membro encontrado com os filtros aplicados
          </div>
        )}
      </Card>
    </DashboardLayout>
  );
};

export default Members;
