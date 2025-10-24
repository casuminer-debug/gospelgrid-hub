import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Send, 
  Users, 
  Flame, 
  Sparkles,
  Video,
  Camera,
  Award,
  TrendingUp,
  Clock,
  MapPin,
  Star,
  Search,
  ShoppingBag,
  Briefcase
} from "lucide-react";
import { useState } from "react";

export default function Social() {
  const [newPost, setNewPost] = useState("");

  const reactions = [
    { icon: Heart, label: "Curtir", color: "text-red-500" },
    { icon: Sparkles, label: "Glória", color: "text-yellow-500" },
    { icon: Flame, label: "Fogo", color: "text-orange-500" },
    { icon: Heart, label: "Oração", color: "text-blue-500" }
  ];

  const posts = [
    {
      id: 1,
      author: "Maria Silva",
      initials: "MS",
      time: "há 2 horas",
      content: "Louvado seja Deus! Hoje completamos 6 meses da nossa célula e já somos 15 membros! Deus é fiel! 🙏",
      reactions: { likes: 45, prayers: 23, fire: 12, glory: 8 },
      comments: 7,
      category: "Testemunho",
      achievements: ["Líder Destaque"]
    },
    {
      id: 2,
      author: "João Santos",
      initials: "JS",
      time: "há 5 horas",
      content: "Pedido de oração pela minha família. Precisamos de sabedoria e direção neste momento.",
      reactions: { likes: 89, prayers: 156, fire: 0, glory: 34 },
      comments: 23,
      category: "Pedido de Oração",
      privacy: "Comunidade"
    },
    {
      id: 3,
      author: "Ana Costa",
      initials: "AC",
      time: "há 1 dia",
      content: "Compartilhando nossa vigília de hoje! Foi maravilhoso estar na presença de Deus. Quem participou? 🔥",
      reactions: { likes: 67, prayers: 45, fire: 89, glory: 52 },
      comments: 15,
      isLive: true,
      category: "Transmissão",
      achievements: ["Engajamento Alto"]
    }
  ];

  const services = [
    {
      id: 1,
      provider: "Pedro Silva",
      service: "Encanamento e Hidráulica",
      category: "Serviços Presenciais",
      rating: 4.9,
      reviews: 23,
      price: "A partir de R$ 80",
      location: "Zona Sul - SP",
      badge: "Verificado"
    },
    {
      id: 2,
      provider: "Carla Design",
      service: "Design Gráfico e Identidade Visual",
      category: "Serviços Digitais",
      rating: 5.0,
      reviews: 45,
      price: "A partir de R$ 150",
      location: "Remoto",
      badge: "Top Rated"
    },
    {
      id: 3,
      provider: "Roberto Educação",
      service: "Aulas de Reforço Escolar",
      category: "Serviços Presenciais",
      rating: 4.8,
      reviews: 31,
      price: "R$ 60/hora",
      location: "Zona Oeste - SP",
      badge: "Verificado"
    }
  ];

  return (
    <DashboardLayout title="Rede Social Comunitária">
      <Tabs defaultValue="feed" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="prayers">Orações</TabsTrigger>
          <TabsTrigger value="groups">Grupos</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Compartilhe com a comunidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="No que você está pensando?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Foto
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="w-4 h-4 mr-2" />
                    Vídeo
                  </Button>
                </div>
                <Button>
                  <Send className="w-4 h-4 mr-2" />
                  Publicar
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {post.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-base">{post.author}</CardTitle>
                          {post.achievements && post.achievements.map((achievement, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              <Award className="w-3 h-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                        <CardDescription className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {post.time}
                          {post.category && (
                            <>
                              <span>•</span>
                              <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                            </>
                          )}
                          {post.isLive && (
                            <Badge className="bg-red-500 text-white text-xs animate-pulse">
                              AO VIVO
                            </Badge>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base">{post.content}</p>
                  
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500" />
                        {post.reactions.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-blue-500" />
                        {post.reactions.prayers}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        {post.reactions.fire}
                      </span>
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        {post.reactions.glory}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {post.comments} comentários
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2 border-t">
                    {reactions.map((reaction, idx) => (
                      <Button key={idx} variant="ghost" size="sm" className="flex-1">
                        <reaction.icon className={`w-4 h-4 mr-2 ${reaction.color}`} />
                        {reaction.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Marketplace de Serviços
              </CardTitle>
              <CardDescription>Encontre e ofereça serviços dentro da comunidade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Buscar serviços..." className="pl-10" />
                </div>
                <Button>
                  <Briefcase className="w-4 h-4 mr-2" />
                  Ofertar Serviço
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card key={service.id} className="hover:shadow-md transition-smooth">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{service.service}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <span>{service.provider}</span>
                            {service.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {service.badge}
                              </Badge>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Badge variant="outline">{service.category}</Badge>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-muted-foreground">({service.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{service.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t">
                        <span className="font-bold text-primary">{service.price}</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Ver Perfil</Button>
                          <Button size="sm">Contatar</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prayers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos de Oração</CardTitle>
              <CardDescription>Compartilhe suas necessidades e ore pelos irmãos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.filter(p => p.category === "Pedido de Oração").map((post) => (
                  <div key={post.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {post.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.time}</p>
                        </div>
                      </div>
                      {post.privacy && (
                        <Badge variant="outline" className="text-xs">{post.privacy}</Badge>
                      )}
                    </div>
                    <p>{post.content}</p>
                    <div className="flex items-center gap-4">
                      <Button size="sm" variant="outline">
                        <Heart className="w-4 h-4 mr-2 text-blue-500" />
                        Orar ({post.reactions.prayers})
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Encorajar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Célula Renovo", members: 15, activity: "Alta" },
              { name: "Jovens em Ação", members: 42, activity: "Muito Alta" },
              { name: "Intercessão", members: 28, activity: "Média" },
              { name: "Casais", members: 31, activity: "Alta" }
            ].map((group, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {group.name}
                    </CardTitle>
                    <Badge variant={group.activity === "Muito Alta" ? "default" : "secondary"}>
                      {group.activity}
                    </Badge>
                  </div>
                  <CardDescription>{group.members} membros</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Visitar Grupo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
