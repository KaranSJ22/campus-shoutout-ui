import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Clock } from "lucide-react";

export type ShoutOutType = "Thank You" | "Confession" | "MEME";

interface ShoutOutCardProps {
  type: ShoutOutType;
  message: string;
  author?: string;
  timestamp: string;
}

const ShoutOutCard = ({ type, message, author, timestamp }: ShoutOutCardProps) => {
  const getBadgeVariant = (type: ShoutOutType) => {
    switch (type) {
      case "Thank You":
        return "thankyou";
      case "Confession":
        return "confession";
      case "MEME":
        return "meme";
      default:
        return "default";
    }
  };

  return (
    <Card className="group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="flex items-start justify-between gap-3 mb-4">
        <Badge variant={getBadgeVariant(type)} className="font-semibold">
          {type}
        </Badge>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          <span>{timestamp}</span>
        </div>
      </div>
      
      <p className="text-foreground leading-relaxed mb-4">
        {message}
      </p>
      
      {author && (
        <p className="text-sm font-medium text-muted-foreground">
          — {author}
        </p>
      )}
    </Card>
  );
};

export default ShoutOutCard;
