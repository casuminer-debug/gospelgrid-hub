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

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Culto de Celebração",
      date: "2024-11-03",
      time: "19:00",
      duration: "2h",
      location: "Templo Principal",
      attendees: 450,
      capacity: 500,
      category: "Culto",
      status: "upcoming",
      color: "primary"
    },
    {
      id: 2,
      title: "Reunião de Célula - Juventude",
      date: "2024-11-01",
      time: "19:30",
      duration: "1h30",
      location: "Casa do João Silva",
      attendees: 22,
      capacity: 30,
      category: "Célula",
      status: "upcoming",
      color: "secondary"
    },
    {
      id: 3,
      title: "Conferência de Liderança",
      date: "2024-11-15",
      time: "09:00",
      duration: "8h",
      location: "Templo Principal",
      attendees: 85,
      capacity: 120,
      category: "Conferência",
      status: "upcoming",
      color: "accent"
    },
    {
      id: 4,
      title: "Escola Bíblica Dominical",
      date: "2024-11-03",
      time: "09:00",
      duration: "1h",
      location: "Salas de Ensino",
      attendees: 180,
      capacity: 200,
      category: "Ensino",
      status: "upcoming",
      color: "primary"
    },
    {
      id: 5,
      title: "Evangelismo na Praça",
      date: "2024-11-09",
      time: "14:00",
      duration: "3h",
      location: "Praça da Sé",
      attendees: 35,
      capacity: 50,
      category: "Evangelismo",
      status: "upcoming",
      color: "accent"
    },
    {
      id: 6,
      title: "Vigília de Oração",
      date: "2024-11-10",
      time: "22:00",
      duration: "6h",
      location: "Templo Principal",
      attendees: 120,
      capacity: 200,
      category: "Oração",
      status: "upcoming",
      color: "secondary"
    }
  ];

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
      "Oração": "bg-secondary/10 text-secondary border-secondary/20"
    };
    return colors[category] || "bg-muted/10 text-muted-foreground border-muted/20";
  };

  return (
    <DashboardLayout title="Gestão de Eventos">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 gradient-card">
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Novo Evento
        </Button>
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          Visualizar Calendário
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="p-6">
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
          {events.map((event) => (
            <Card key={event.id} className="p-6 card-interactive hover:shadow-primary">
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
    </DashboardLayout>
  );
};

export default Events;
