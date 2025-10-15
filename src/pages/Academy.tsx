import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, BookOpen, Award, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

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
      category: "Discipulado"
    },
    {
      id: 2,
      title: "Liderança Cristã",
      description: "Desenvolvimento de habilidades para líderes na igreja",
      instructor: "Pr. Maria Oliveira",
      duration: "12 semanas",
      enrolled: 32,
      image: "/placeholder.svg",
      category: "Liderança"
    },
    {
      id: 3,
      title: "Estudo Bíblico Avançado",
      description: "Aprofundamento nos textos bíblicos e hermenêutica",
      instructor: "Dr. Carlos Mendes",
      duration: "16 semanas",
      enrolled: 28,
      image: "/placeholder.svg",
      category: "Bíblia"
    },
    {
      id: 4,
      title: "Aconselhamento Pastoral",
      description: "Técnicas e princípios para aconselhamento eficaz",
      instructor: "Dra. Ana Costa",
      duration: "10 semanas",
      enrolled: 22,
      image: "/placeholder.svg",
      category: "Pastoral"
    }
  ];

  // Dados de exemplo para trilhas de aprendizado
  const learningPaths = [
    {
      id: 1,
      title: "Formação de Líderes",
      description: "Trilha completa para formação de novos líderes",
      courses: 5,
      duration: "6 meses",
      enrolled: 18
    },
    {
      id: 2,
      title: "Discipulado Integral",
      description: "Jornada de crescimento espiritual e prático",
      courses: 4,
      duration: "4 meses",
      enrolled: 24
    },
    {
      id: 3,
      title: "Ministério de Louvor",
      description: "Preparação teológica e prática para músicos",
      courses: 3,
      duration: "3 meses",
      enrolled: 15
    }
  ];

  // Dados de exemplo para meus cursos
  const myCourses = [
    {
      id: 1,
      title: "Fundamentos da Fé",
      progress: 75,
      nextLesson: "Módulo 6: A Vida de Oração",
      dueDate: "15/08/2023"
    },
    {
      id: 2,
      title: "Liderança Cristã",
      progress: 30,
      nextLesson: "Módulo 3: Comunicação Eficaz",
      dueDate: "22/08/2023"
    }
  ];

  return (
    <DashboardLayout title="Academia">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Academia</h1>
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

        <Tabs defaultValue="courses">
          <TabsList className="mb-4">
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="paths">Trilhas de Aprendizado</TabsTrigger>
            <TabsTrigger value="my-courses">Meus Cursos</TabsTrigger>
            <TabsTrigger value="certificates">Certificados</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-muted-foreground" />
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-muted-foreground"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
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

          <TabsContent value="paths">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningPaths.map((path) => (
                <Card key={path.id}>
                  <CardHeader>
                    <CardTitle>{path.title}</CardTitle>
                    <CardDescription>{path.description}</CardDescription>
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
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-muted-foreground"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <span>{path.enrolled} alunos</span>
                      </div>
                      <Button className="w-full">Ver Trilha</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-courses">
            <div className="grid grid-cols-1 gap-4">
              {myCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge variant="outline">{course.progress}% Concluído</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={course.progress} className="h-2 mb-4" />
                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Próxima Aula</h4>
                        <p className="text-sm text-muted-foreground">{course.nextLesson}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Data de Entrega</h4>
                        <p className="text-sm text-muted-foreground">{course.dueDate}</p>
                      </div>
                      <Button>Continuar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>Meus Certificados</CardTitle>
                <CardDescription>
                  Certificados emitidos para cursos concluídos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Fundamentos da Fé</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <Award className="h-16 w-16 text-primary" />
                      </div>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Emitido em:</span>
                          <span>10/06/2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Carga horária:</span>
                          <span>40 horas</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Código:</span>
                          <span>CERT-FF-2023-001</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">Validar</Button>
                        <Button size="sm">Download</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Evangelismo Prático</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <Award className="h-16 w-16 text-primary" />
                      </div>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Emitido em:</span>
                          <span>22/04/2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Carga horária:</span>
                          <span>30 horas</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Código:</span>
                          <span>CERT-EP-2023-042</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <Button variant="outline" size="sm">Validar</Button>
                        <Button size="sm">Download</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}