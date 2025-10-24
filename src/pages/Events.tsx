import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { mockEvents } from "@/lib/mockData";
import { FormModal } from "@/components/FormModal";
import { DetailModal } from "@/components/DetailModal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Events = () => {
  const [newEventModalOpen, setNewEventModalOpen] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const stats = [
    { label: "Eventos este Mês", value: "24" },
    { label: "Participantes Totais", value: "1,892" },
    { label: "Taxa de Presença", value: "87%" },
    { label: "Próximos 7 dias", value: "8" }
  ];

  const calendarDays = [
    { day: 28, events: 1, isToday: false, isOtherMonth: true },
    { day: 29, events: 0, isToday: false, isOtherMonth: true },
    { day: 30, events: 2, isToday: false, isOtherMonth: true },
    { day: 31, events: 1, isToday: false, isOtherMonth: true },
    { day: 1, events: 3, isToday: false, isOtherMonth: false },
    { day: 2, events: 1, isToday: false, isOtherMonth: false },
    { day: 3, events: 4, isToday: true, isOtherMonth: false },
    { day: 4, events: 2, isToday: false, isOtherMonth: false },
    { day: 5, events: 1, isToday: false, isOtherMonth: false },
    { day: 6, events: 0, isToday: false, isOtherMonth: false },
    { day: 7, events: 2, isToday: false, isOtherMonth: false },
    { day: 8, events: 3, isToday: false, isOtherMonth: false },
    { day: 9, events: 2, isToday: false, isOtherMonth: false },
    { day: 10, events: 2, isToday: false, isOtherMonth: false }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Culto": "bg-primary/10 text-primary border-primary/20",
      "Célula": "bg-secondary/10 text-secondary border-secondary/20",
      "Conferência": "bg-accent/10 text-accent border-accent/20",
      "Ensino": "bg-primary/10 text-primary border-primary/20",
      "Evangelismo": "bg-accent/10 text-accent border-accent/20",
      "Oração": "bg-secondary/10 text-secondary border-secondary/20",
      "Retiro": "bg-accent/10 text-accent border-accent/20",
      "Workshop": "bg-primary/10 text-primary border-primary/20",
      "Congresso": "bg-secondary/10 text-secondary border-secondary/20",
      "Reunião": "bg-primary/10 text-primary border-primary/20"
    };
    return colors[category] || "bg-muted/10 text-muted-foreground border-muted/20";
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setDetailModalOpen(true);
  };

  return (
    <DashboardLayout title="Gestão de Eventos">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 gradient-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={() => setNewEventModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Evento
        </Button>
        <Button variant="outline" onClick={() => setCalendarModalOpen(true)}>
          <Calendar className="w-4 h-4 mr-2" />
          Visualizar Calendário
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="p-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Novembro 2024</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                className={`
                  aspect-square p-1 rounded-lg text-sm font-medium transition-smooth
                  ${day.isOtherMonth ? "text-muted-foreground/50" : ""}
                  ${day.isToday ? "bg-primary text-primary-foreground" : "hover:bg-card-hover"}
                  ${day.events > 0 && !day.isToday ? "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary" : ""}
                `}
              >
                {day.day}
              </button>
            ))}
          </div>
        </Card>

        {/* Events List */}
        <div className="lg:col-span-2 space-y-4">
          {mockEvents.map((event, index) => (
            <Card 
              key={event.id} 
              className="p-6 card-interactive hover:shadow-primary cursor-pointer animate-fade-in"
              style={{ animationDelay: `${(index + 6) * 100}ms` }}
              onClick={() => handleEventClick(event)}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-${event.color}/10 flex flex-col items-center justify-center`}>
                    <div className={`text-2xl font-bold text-${event.color}`}>
                      {new Date(event.date).getDate()}
                    </div>
                    <div className={`text-xs uppercase text-${event.color}`}>
                      {new Date(event.date).toLocaleDateString('pt-BR', { month: 'short' })}
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="font-bold text-lg">{event.title}</h4>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{event.time} ({event.duration})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 shrink-0" />
                      <span>{event.attendees} / {event.capacity} participantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">
                        {Math.round((event.attendees / event.capacity) * 100)}% de capacidade
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`absolute inset-y-0 left-0 bg-${event.color} rounded-full transition-all`}
                        style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* New Event Modal */}
      <FormModal
        open={newEventModalOpen}
        onOpenChange={setNewEventModalOpen}
        title="Novo Evento"
        description="Cadastre um novo evento com todas as informações"
        successMessage="Evento criado com sucesso!"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Nome do Evento *</Label>
            <Input placeholder="Ex: Culto de Celebração" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Categoria *</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="culto">Culto</SelectItem>
                  <SelectItem value="celula">Célula</SelectItem>
                  <SelectItem value="conferencia">Conferência</SelectItem>
                  <SelectItem value="ensino">Ensino</SelectItem>
                  <SelectItem value="evangelismo">Evangelismo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Data *</Label>
              <Input type="date" required />
            </div>
            <div className="space-y-2">
              <Label>Horário *</Label>
              <Input type="time" required />
            </div>
            <div className="space-y-2">
              <Label>Duração *</Label>
              <Input placeholder="Ex: 2h" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Local *</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o local" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="templo">Templo Principal</SelectItem>
                <SelectItem value="salas">Salas de Ensino</SelectItem>
                <SelectItem value="externo">Local Externo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Capacidade Máxima</Label>
              <Input type="number" placeholder="Ex: 500" />
            </div>
            <div className="space-y-2">
              <Label>Público-alvo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="jovens">Jovens</SelectItem>
                  <SelectItem value="adultos">Adultos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Descrição</Label>
            <Textarea placeholder="Descrição do evento..." />
          </div>
        </div>
      </FormModal>

      {/* Calendar Full View Modal */}
      <FormModal
        open={calendarModalOpen}
        onOpenChange={setCalendarModalOpen}
        title="Calendário Completo"
        description="Visualização mensal de todos os eventos"
        successMessage=""
      >
        <div className="text-center py-12 text-muted-foreground">
          Calendário em tela cheia seria implementado aqui
        </div>
      </FormModal>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <DetailModal
          open={detailModalOpen}
          onOpenChange={setDetailModalOpen}
          title={selectedEvent.title}
          description="Informações completas do evento"
          data={{
            "Categoria": selectedEvent.category,
            "Data": new Date(selectedEvent.date).toLocaleDateString('pt-BR'),
            "Horário": selectedEvent.time,
            "Duração": selectedEvent.duration,
            "Local": selectedEvent.location,
            "Capacidade": `${selectedEvent.attendees} / ${selectedEvent.capacity}`,
            "Taxa de Ocupação": `${Math.round((selectedEvent.attendees / selectedEvent.capacity) * 100)}%`,
            "Status": "Confirmado"
          }}
        />
      )}
    </DashboardLayout>
  );
};

export default Events;
