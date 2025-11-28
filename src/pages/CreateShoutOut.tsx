import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Heart, MessageCircle, Laugh, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ShoutOutType } from "@/components/ShoutOutCard";

const CreateShoutOut = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState<ShoutOutType | null>(null);
  const [message, setMessage] = useState("");

  const shoutOutTypes = [
    {
      type: "Thank You" as ShoutOutType,
      icon: Heart,
      color: "thankyou",
      description: "Express gratitude to someone",
    },
    {
      type: "Confession" as ShoutOutType,
      icon: MessageCircle,
      color: "confession",
      description: "Share your honest feelings",
    },
    {
      type: "MEME" as ShoutOutType,
      icon: Laugh,
      color: "meme",
      description: "Share something funny",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) {
      toast({
        title: "Please select a type",
        description: "Choose whether this is a Thank You, Confession, or MEME",
        variant: "destructive",
      });
      return;
    }
    
    // Submit logic will be implemented later
    toast({
      title: "ShoutOut posted! 🎉",
      description: "Your message has been shared with the community.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 py-12">
      <div className="container max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="animate-scale-in shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Create a ShoutOut</CardTitle>
            <CardDescription className="text-base">
              Share your thoughts with the RIT community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label className="text-lg font-semibold">Choose Type</Label>
                <div className="grid gap-4 md:grid-cols-3">
                  {shoutOutTypes.map(({ type, icon: Icon, color, description }) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`group relative flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition-all duration-300 hover:scale-105 ${
                        selectedType === type
                          ? `border-${color} bg-${color}/10 shadow-lg`
                          : "border-border bg-card hover:border-${color}/50"
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 transition-colors ${
                          selectedType === type ? `text-${color}` : "text-muted-foreground group-hover:text-${color}"
                        }`}
                      />
                      <div className="text-center">
                        <p className="font-semibold">{type}</p>
                        <p className="text-xs text-muted-foreground">{description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-lg font-semibold">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Share your thoughts..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[200px] resize-none text-base"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  {message.length}/500 characters
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg font-semibold"
              >
                Post ShoutOut
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateShoutOut;
