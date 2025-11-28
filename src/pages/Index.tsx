import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShoutOutFeed from "@/components/ShoutOutFeed";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ShoutOutFeed />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
