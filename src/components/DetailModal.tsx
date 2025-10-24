import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface DetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  data: Record<string, any>;
}

export function DetailModal({ open, onOpenChange, title, description, data }: DetailModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto animate-fade-in">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <div className="space-y-4">
          {Object.entries(data).map(([key, value], index) => (
            <div key={index}>
              <div className="flex items-start justify-between py-3">
                <span className="text-sm font-medium text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                {typeof value === 'boolean' ? (
                  <Badge variant={value ? "default" : "secondary"}>
                    {value ? "Sim" : "Não"}
                  </Badge>
                ) : Array.isArray(value) ? (
                  <div className="flex flex-wrap gap-1">
                    {value.map((item, i) => (
                      <Badge key={i} variant="outline">{item}</Badge>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-right">{value}</span>
                )}
              </div>
              {index < Object.entries(data).length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
