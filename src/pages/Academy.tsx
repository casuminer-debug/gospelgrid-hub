import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, BookOpen, Award, Clock, Brain, AlertTriangle, TrendingUp, Target, Sparkles, Users, BarChart3, Lightbulb } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Academy() {
  // Dados de exemplo para cursos
  const courses = [
    {
      id: 1,
      title: "Fundamentos da Fé",
      description: "Curso introdutório sobre os princípios básicos da fé cristã",
      instructor: "Pr. João Silva",
      duration: "8 semanas",
      enrolled: 45,
      image: "/placeholder.svg",
      category: "Discipulado",
      aiRecommended: true,
      matchScore: 95
    },
    {
      id: 2,
      title: "Liderança Cristã",
      description: "Desenvolvimento de habilidades para líderes na igreja",
      instructor: "Pr. Maria Oliveira",
      duration: "12 semanas",
      enrolled: 32,
      image: "/placeholder.svg",
      category: "Liderança",
      aiRecommended: true,
      matchScore: 88
    },
    {
      id: 3,
      title: "Estudo Bíblico Avançado",
      description: "Aprofundamento nos textos bíblicos e hermenêutica",
      instructor: "Dr. Carlos Mendes",
      duration: "16 semanas",
      enrolled: 28,
      image: "/placeholder.svg",
      category: "Bíblia",
      aiRecommended: false,
      matchScore: 72
    },
    {
      id: 4,
      title: "Aconselhamento Pastoral",
      description: "Técnicas e princípios para aconselhamento eficaz",
      instructor: "Dra. Ana Costa",
      duration: "10 semanas",
      enrolled: 22,
      image: "/placeholder.svg",
      category: "Pastoral",
      aiRecommended: true,
      matchScore: 91
    }
  ];

  // Dados de exemplo para trilhas de aprendizado personalizadas
  const personalizedPaths = [
    {
      id: 1,
      title: "Sua Trilha Personalizada: Liderança Espiritual",
      description: "Baseada no seu progresso e objetivos espirituais",
      courses: 5,
      duration: "6 meses",
      enrolled: 18,
      aiGenerated: true,
      completionProbability: 87
    },
    {
      id: 2,
      title: "Recomendado para Você: Discipulado Integral",
      description: "Adaptado ao seu estilo de aprendizagem visual",
      courses: 4,
      duration: "4 meses",
      enrolled: 24,
      aiGenerated: true,
      completionProbability: 92
    }
  ];

  // Dados de exemplo para meus cursos com análise de IA
  const myCourses = [
    {
      id: 1,
      title: "Fundamentos da Fé",
      progress: 75,
      nextLesson: "Módulo 6: A Vida de Oração",
      dueDate: "15/08/2023",
      engagementScore: 85,
      riskLevel: "low",
      adaptedDifficulty: "medium",
      learningStyle: "visual"
    },
    {
      id: 2,
      title: "Liderança Cristã",
      progress: 30,
      nextLesson: "Módulo 3: Comunicação Eficaz",
      dueDate: "22/08/2023",
      engagementScore: 45,
      riskLevel: "high",
      adaptedDifficulty: "easy",
      learningStyle: "practical"
    }
  ];

  // Alertas de risco de evasão
  const riskAlerts = [
    {
      id: 1,
      studentName: "João Pedro Santos",
      course: "Liderança Cristã",
      riskLevel: "high",
      reason: "Sem acesso há 14 dias",
      suggestion: "Enviar mensagem personalizada e oferecer sessão de mentoria"
    },
    {
      id: 2,
      studentName: "Maria Silva Oliveira",
      course: "Estudo Bíblico Avançado",
      riskLevel: "medium",
      reason: "Baixo engajamento nas últimas 3 aulas",
      suggestion: "Adaptar dificuldade do conteúdo e recomendar materiais complementares"
    }
  ];

  // Insights de IA
  const aiInsights = [
    {
      id: 1,
      type: "learning_style",
      title: "Estilo de Aprendizagem Detectado",
      description: "Você aprende melhor com conteúdo visual e prático",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      id: 2,
      type: "progress",
      title: "Progresso Acima da Média",
      description: "Você está 23% mais rápido que outros alunos",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      id: 3,
      type: "recommendation",
      title: "Próximo Curso Recomendado",
      description: "Aconselhamento Pastoral (91% de compatibilidade)",
      icon: Lightbulb,
      color: "text-yellow-500"
    }
  ];

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getRiskLabel = (level: string) => {
    switch (level) {
      case "high":
        return "Alto Risco";
      case "medium":
        return "Risco Médio";
      case "low":
        return "Baixo Risco";
      default:
        return "Sem Risco";
    }
  };

  return (
    <DashboardLayout title="Academia">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Academia <Sparkles className="h-6 w-6 text-primary" />
            </h1>
            <p className="text-muted-foreground mt-1">
              Aprendizado adaptativo com inteligência artificial
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar cursos..."
                className="pl-8 w-[250px]"
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Novo Curso
            </Button>
          </div>
        </div>

        {/* Dashboard de IA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {aiInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <Card key={insight.id} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${insight.color}`} />
                    <CardTitle className="text-base">{insight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="recommended">
          <TabsList className="mb-4">
            <TabsTrigger value="recommended">
              <Sparkles className="mr-2 h-4 w-4" />
              Recomendados para Você
            </TabsTrigger>
            <TabsTrigger value="courses">Todos os Cursos</TabsTrigger>
            <TabsTrigger value="paths">Trilhas Personalizadas</TabsTrigger>
            <TabsTrigger value="my-courses">Meus Cursos</TabsTrigger>
            <TabsTrigger value="risk-alerts">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Alertas de Evasão
            </TabsTrigger>
          </TabsList>

          {/* Tab: Recomendados pela IA */}
          <TabsContent value="recommended">
            <Alert className="mb-4 border-primary">
              <Brain className="h-4 w-4" />
              <AlertTitle>Recomendações Personalizadas</AlertTitle>
              <AlertDescription>
                Estes cursos foram selecionados com base no seu progresso atual, estilo de aprendizagem e objetivos espirituais declarados.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.filter(c => c.aiRecommended).map((course) => (
                <Card key={course.id} className="overflow-hidden border-2 border-primary/20">
                  <div className="aspect-video bg-muted flex items-center justify-center relative">
                    <BookOpen className="h-10 w-10 text-muted-foreground" />
                    <Badge className="absolute top-2 right-2 bg-primary">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {course.matchScore}% Match
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center text-sm mb-2">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm mb-4">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.enrolled} alunos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {course.instructor}
                      </span>
                      <Button>Ver Curso</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab: Todos os Cursos */}
          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center relative">
                    <BookOpen className="h-10 w-10 text-muted-foreground" />
                    {course.aiRecommended && (
                      <Badge className="absolute top-2 right-2 bg-primary">
                        <Sparkles className="h-3 w-3 mr-1" />
                        IA
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">
                          {course.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center text-sm mb-2">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm mb-4">
                      <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{course.enrolled} alunos</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        {course.instructor}
                      </span>
                      <Button>Ver Curso</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab: Trilhas Personalizadas */}
          <TabsContent value="paths">
            <Alert className="mb-4 border-primary">
              <Target className="h-4 w-4" />
              <AlertTitle>Trilhas Adaptadas ao Seu Perfil</AlertTitle>
              <AlertDescription>
                Estas trilhas foram geradas automaticamente com base no seu estilo de aprendizagem e objetivos.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalizedPaths.map((path) => (
                <Card key={path.id} className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {path.title}
                          {path.aiGenerated && (
                            <Badge variant="outline" className="text-xs">
                              <Brain className="h-3 w-3 mr-1" />
                              IA
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription>{path.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{path.courses} cursos</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{path.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{path.enrolled} alunos</span>
                        </div>
                        <Badge variant="secondary">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {path.completionProbability}% de conclusão
                        </Badge>
                      </div>
                      <Button className="w-full">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Iniciar Trilha
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab: Meus Cursos com Análise de IA */}
          <TabsContent value="my-courses">
            <div className="grid grid-cols-1 gap-4">
              {myCourses.map((course) => (
                <Card key={course.id} className="border-l-4" style={{
                  borderLeftColor: course.riskLevel === 'high' ? '#ef4444' : 
                                   course.riskLevel === 'medium' ? '#f59e0b' : '#10b981'
                }}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle>{course.title}</CardTitle>
                          <Badge variant={getRiskBadgeVariant(course.riskLevel)}>
                            {getRiskLabel(course.riskLevel)}
                          </Badge>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="outline">
                            <Brain className="h-3 w-3 mr-1" />
                            Estilo: {course.learningStyle === 'visual' ? 'Visual' : 'Prático'}
                          </Badge>
                          <Badge variant="outline">
                            <BarChart3 className="h-3 w-3 mr-1" />
                            Engajamento: {course.engagementScore}%
                          </Badge>
                          <Badge variant="outline">
                            Dificuldade: {course.adaptedDifficulty === 'easy' ? 'Fácil' : 
                                         course.adaptedDifficulty === 'medium' ? 'Média' : 'Difícil'}
                          </Badge>
                        </div>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        {course.progress}% Concluído
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={course.progress} className="h-2 mb-4" />
                    
                    {course.riskLevel === 'high' && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Atenção: Risco de Evasão</AlertTitle>
                        <AlertDescription>
                          Recomendamos ajustar a dificuldade e aumentar o engajamento. 
                          Que tal uma sessão de mentoria?
                        </AlertDescription>
                      </Alert>
                    )}

                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Próxima Aula</h4>
                        <p className="text-sm text-muted-foreground">{course.nextLesson}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Data de Entrega</h4>
                        <p className="text-sm text-muted-foreground">{course.dueDate}</p>
                      </div>
                      <div className="flex gap-2">
                        {course.riskLevel === 'high' && (
                          <Button variant="outline">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Ajustar
                          </Button>
                        )}
                        <Button>Continuar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tab: Alertas de Risco de Evasão */}
          <TabsContent value="risk-alerts">
            <Alert className="mb-4 border-destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Sistema de Detecção de Risco de Evasão</AlertTitle>
              <AlertDescription>
                A IA monitora continuamente o engajamento dos alunos e sugere intervenções personalizadas para retenção.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 gap-4">
              {riskAlerts.map((alert) => (
                <Card key={alert.id} className="border-l-4" style={{
                  borderLeftColor: alert.riskLevel === 'high' ? '#ef4444' : '#f59e0b'
                }}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{alert.studentName}</CardTitle>
                        <CardDescription>{alert.course}</CardDescription>
                      </div>
                      <Badge variant={alert.riskLevel === 'high' ? 'destructive' : 'default'}>
                        {alert.riskLevel === 'high' ? 'Alto Risco' : 'Risco Médio'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-destructive" />
                          Motivo
                        </h4>
                        <p className="text-sm text-muted-foreground">{alert.reason}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-primary" />
                          Sugestão de Intervenção
                        </h4>
                        <p className="text-sm text-muted-foreground">{alert.suggestion}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button>
                          <Brain className="mr-2 h-4 w-4" />
                          Aplicar Sugestão
                        </Button>
                        <Button variant="outline">Ver Detalhes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

