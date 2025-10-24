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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  UserPlus, 
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreVertical,
  Download,
  Eye,
  Edit,
  MessageSquare,
  Trash2,
  History
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { mockMembers } from "@/lib/mockData";
import { FormModal } from "@/components/FormModal";
import { DetailModal } from "@/components/DetailModal";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [newMemberModalOpen, setNewMemberModalOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const { toast } = useToast();

  const stats = [
    { label: "Total de Membros", value: "1,234", change: "+12.5%" },
    { label: "Novos este Mês", value: "45", change: "+8.2%" },
    { label: "Membros Ativos", value: "1,156", change: "+3.1%" },
    { label: "Taxa de Retenção", value: "93.7%", change: "+1.2%" }
  ];

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.cell.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || member.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleMemberAction = (action: string, member: any) => {
    setSelectedMember(member);
    
    switch(action) {
      case "view":
        setDetailModalOpen(true);
        break;
      case "edit":
        toast({ title: "Editar Membro", description: "Abrindo formulário de edição..." });
        break;
      case "history":
        toast({ title: "Histórico", description: "Carregando histórico do membro..." });
        break;
      case "message":
        toast({ title: "Mensagem", description: "Abrindo composição de mensagem..." });
        break;
      case "delete":
        toast({ 
          title: "Excluir Membro", 
          description: "Membro removido com sucesso",
          variant: "destructive"
        });
        break;
    }
  };

  return (
    <DashboardLayout title="Gestão de Membros">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 gradient-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium text-secondary">{stat.change}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters and Actions */}
      <Card className="p-6 mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
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

          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => setNewMemberModalOpen(true)}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Novo Membro
          </Button>

          <Button variant="outline" onClick={() => setExportModalOpen(true)}>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </Card>

      {/* Members List */}
      <Card className="p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <div className="space-y-4">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              className="flex items-center gap-4 p-4 rounded-lg border-2 border-transparent hover:border-primary/20 hover:bg-card-hover transition-smooth"
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleMemberAction("view", member)}>
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleMemberAction("edit", member)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleMemberAction("history", member)}>
                    <History className="w-4 h-4 mr-2" />
                    Histórico
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleMemberAction("message", member)}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-destructive"
                    onClick={() => handleMemberAction("delete", member)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Deletar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Nenhum membro encontrado com os filtros aplicados
          </div>
        )}
      </Card>

      {/* New Member Modal */}
      <FormModal
        open={newMemberModalOpen}
        onOpenChange={setNewMemberModalOpen}
        title="Novo Membro"
        description="Cadastre um novo membro com todas as informações"
        successMessage="Membro cadastrado com sucesso!"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 col-span-2">
              <Label>Nome Completo *</Label>
              <Input placeholder="Nome do membro" required />
            </div>
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input type="email" placeholder="email@exemplo.com" required />
            </div>
            <div className="space-y-2">
              <Label>Telefone *</Label>
              <Input placeholder="(00) 00000-0000" required />
            </div>
            <div className="space-y-2">
              <Label>Data de Nascimento</Label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <Label>CPF</Label>
              <Input placeholder="000.000.000-00" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label>Endereço Completo</Label>
              <Input placeholder="Rua, número, bairro" />
            </div>
            <div className="space-y-2">
              <Label>Cidade *</Label>
              <Input placeholder="São Paulo" required />
            </div>
            <div className="space-y-2">
              <Label>Estado *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Célula *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a célula" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="juventude">Juventude Central</SelectItem>
                  <SelectItem value="casais">Casais Unidos</SelectItem>
                  <SelectItem value="mulheres">Mulheres de Fé</SelectItem>
                  <SelectItem value="homens">Homens de Fé</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Cargo/Função</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="membro">Membro</SelectItem>
                  <SelectItem value="lider">Líder</SelectItem>
                  <SelectItem value="colider">Co-líder</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </FormModal>

      {/* Export Modal */}
      <FormModal
        open={exportModalOpen}
        onOpenChange={setExportModalOpen}
        title="Exportar Membros"
        description="Escolha o formato e filtros para exportação"
        successMessage="Exportação iniciada com sucesso!"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Formato</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o formato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Apenas Ativos</SelectItem>
                <SelectItem value="inactive">Apenas Inativos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </FormModal>

      {/* Detail Modal */}
      {selectedMember && (
        <DetailModal
          open={detailModalOpen}
          onOpenChange={setDetailModalOpen}
          title={selectedMember.name}
          description="Informações completas do membro"
          data={{
            "Email": selectedMember.email,
            "Telefone": selectedMember.phone,
            "Cidade": selectedMember.city,
            "Célula": selectedMember.cell,
            "Cargo": selectedMember.role,
            "Status": selectedMember.status === "active" ? "Ativo" : "Inativo",
            "Data de Entrada": new Date(selectedMember.joinDate).toLocaleDateString('pt-BR')
          }}
        />
      )}
    </DashboardLayout>
  );
};

export default Members;
