import campusHero from "@/assets/campus-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${campusHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary/60" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 animate-fade-in text-5xl font-bold text-white md:text-7xl lg:text-8xl">
          Ramaiah Institute of Technology
        </h1>
        <p className="max-w-3xl animate-fade-in text-lg text-white/95 md:text-xl lg:text-2xl" style={{ animationDelay: "0.2s" }}>
          Share your thoughts, gratitude, confessions, and memes with the campus community.
        </p>
      </div>
    </section>
  );
};

export default Hero;
