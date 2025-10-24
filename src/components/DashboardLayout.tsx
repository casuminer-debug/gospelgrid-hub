import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Church,
  LayoutDashboard,
  Users,
  DollarSign,
  Calendar,
  TrendingUp,
  Network,
  Settings,
  Menu,
  X,
  Bell,
  Award,
  Box,
  UserCheck,
  BookOpen,
  Heart,
  ClipboardList,
  MessageSquare,
  Zap,
  User,
  Moon,
  LogOut,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Membros", path: "/members" },
    { icon: Users, label: "Células", path: "/cells" },
    { icon: DollarSign, label: "Financeiro", path: "/financial" },
    { icon: Calendar, label: "Eventos", path: "/events" },
    { icon: Award, label: "Certificados", path: "/certificates" },
    { icon: Box, label: "Inventário", path: "/inventory" },
    { icon: UserCheck, label: "Voluntários", path: "/volunteers" },
    { icon: BookOpen, label: "Academia", path: "/academy" },
    { icon: Heart, label: "Doações", path: "/donations" },
    { icon: ClipboardList, label: "Inscrições", path: "/registrations" },
    { icon: MessageSquare, label: "Rede Social", path: "/social" },
    { icon: TrendingUp, label: "Insights", path: "/insights" },
    { icon: Zap, label: "Insights Automáticos", path: "/automatic-insights" },
    { icon: Network, label: "Conexões", path: "/connections" },
    { icon: Network, label: "Integração", path: "/module-integration" },
    { icon: DollarSign, label: "Planos e Preços", path: "/pricing" },
    { icon: Settings, label: "Configurações", path: "/settings" }
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <Church className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg gradient-primary bg-clip-text text-transparent">Arca Domini</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-primary" 
                    : "hover:bg-card-hover"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Link to="/" className="block">
            <Button variant="outline" className="w-full">
              Voltar ao Site
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        sidebarOpen ? "lg:ml-64" : "ml-0"
      )}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-card border-b backdrop-blur-sm bg-card/80">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div>
                <p className="text-xs text-muted-foreground">Área do Administrador</p>
                <h1 className="text-2xl font-bold">{title}</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full text-xs flex items-center justify-center text-destructive-foreground">
                  3
                </span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">AD</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">Administrador</p>
                    <p className="text-xs text-muted-foreground">admin@arcadomini.com</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Ver Perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Configurações
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Moon className="mr-2 h-4 w-4" />
                    Modo Escuro
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
