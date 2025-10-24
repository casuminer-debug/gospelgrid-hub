import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface QuickActionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "presence" | "transaction" | "member" | null;
}

export function QuickActionModal({ open, onOpenChange, type }: QuickActionModalProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Sucesso!",
        description: type === "presence" ? "Presença registrada com sucesso" :
                     type === "transaction" ? "Transação registrada com sucesso" :
                     "Membro cadastrado com sucesso",
      });
      onOpenChange(false);
    }, 1000);
  };

  if (!type) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md animate-fade-in">
        <DialogHeader>
          <DialogTitle>
            {type === "presence" && "Registrar Presença Rápida"}
            {type === "transaction" && "Nova Transação Rápida"}
            {type === "member" && "Cadastro Expresso de Membro"}
          </DialogTitle>
          <DialogDescription>
            {type === "presence" && "Marque presença nos eventos de hoje"}
            {type === "transaction" && "Registre uma entrada ou saída financeira"}
            {type === "member" && "Cadastro rápido com dados essenciais"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "presence" && (
            <>
              <div className="space-y-2">
                <Label>Evento</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="culto">Culto de Celebração - 19:00</SelectItem>
                    <SelectItem value="ebd">Escola Bíblica Dominical - 09:00</SelectItem>
                    <SelectItem value="celula">Reunião de Célula - 19:30</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Membros Presentes</Label>
                <Input type="number" placeholder="Número de presentes" required defaultValue="45" />
              </div>
            </>
          )}

          {type === "transaction" && (
            <>
              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de transação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entrada">Entrada</SelectItem>
                    <SelectItem value="saida">Saída</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dizimo">Dízimo</SelectItem>
                    <SelectItem value="oferta">Oferta</SelectItem>
                    <SelectItem value="despesa">Despesa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Valor</Label>
                <Input type="number" placeholder="R$ 0,00" required step="0.01" />
              </div>
            </>
          )}

          {type === "member" && (
            <>
              <div className="space-y-2">
                <Label>Nome Completo</Label>
                <Input placeholder="Nome do membro" required />
              </div>
              <div className="space-y-2">
                <Label>Telefone</Label>
                <Input placeholder="(00) 00000-0000" required />
              </div>
              <div className="space-y-2">
                <Label>Célula</Label>
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
            </>
          )}

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Salvar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
