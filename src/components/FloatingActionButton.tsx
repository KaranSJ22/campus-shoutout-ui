import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const FloatingActionButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/create" className="fixed bottom-8 right-8 z-50">
            <Button 
              size="lg" 
              className="h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-90 animate-float"
            >
              <Plus className="h-8 w-8" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="font-medium">
          <p>Add ShoutOut</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingActionButton;
