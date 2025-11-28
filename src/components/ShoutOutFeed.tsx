import ShoutOutCard, { ShoutOutType } from "./ShoutOutCard";
import { MessageSquare } from "lucide-react";

interface ShoutOut {
  id: string;
  type: ShoutOutType;
  message: string;
  author?: string;
  timestamp: string;
}

const dummyShoutOuts: ShoutOut[] = [
  {
    id: "1",
    type: "Thank You",
    message: "Huge thanks to the library staff for staying open late during exams week! You're the real MVPs! 📚✨",
    author: "Anonymous Student",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    type: "Confession",
    message: "I've been crushing on someone from the robotics club for months but I'm too shy to talk to them. Maybe one day I'll find the courage! 💙",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    type: "MEME",
    message: "When the professor says 'this won't be on the exam' but then puts it on the exam anyway 😭😂",
    author: "Meme Lord",
    timestamp: "1 day ago",
  },
  {
    id: "4",
    type: "Thank You",
    message: "Shoutout to my project partner who carried our presentation while I forgot all my lines. You're a legend!",
    author: "Grateful 4th Year",
    timestamp: "1 day ago",
  },
  {
    id: "5",
    type: "Confession",
    message: "Sometimes I come to campus early just to enjoy the peaceful morning vibes before everyone arrives. It's my favorite time of day.",
    timestamp: "2 days ago",
  },
  {
    id: "6",
    type: "MEME",
    message: "Me: *doesn't study all semester* Also me during exams: Why didn't they teach us this? 🤡",
    author: "Procrastinator Pro",
    timestamp: "2 days ago",
  },
];

const ShoutOutFeed = () => {
  return (
    <section className="container py-16 px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Latest ShoutOuts
        </h2>
        <p className="text-muted-foreground text-lg">
          See what your fellow students are sharing
        </p>
      </div>

      {dummyShoutOuts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyShoutOuts.map((shoutout, index) => (
            <div 
              key={shoutout.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ShoutOutCard {...shoutout} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <MessageSquare className="h-16 w-16 text-muted-foreground/50 mb-4" />
          <p className="text-xl text-muted-foreground">
            No shoutouts yet — be the first to post!
          </p>
        </div>
      )}
    </section>
  );
};

export default ShoutOutFeed;
