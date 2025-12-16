import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-background-deep">
        {/* Video element - placeholder for hero.mp4 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster=""
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Matte Overlay */}
        <div className="video-overlay" />
        
        {/* Subtle drone silhouettes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.02] animate-drone-float"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 20L70 40H30L50 20ZM25 45H75V55H25V45ZM30 60L50 80L70 60H30Z" />
          </svg>
          <svg
            className="absolute top-1/3 right-1/4 w-24 h-24 opacity-[0.015] animate-drone-float"
            style={{ animationDelay: '-10s' }}
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 20L70 40H30L50 20ZM25 45H75V55H25V45ZM30 60L50 80L70 60H30Z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 w-full">
        <div className="max-w-4xl">
          {/* Title */}
          <h1
            className={`text-display text-foreground mb-6 opacity-0 ${
              isLoaded ? 'animate-fade-up' : ''
            }`}
          >
            Keep Drones Flying.
            <br />
            <span className="text-foreground">24/7.</span>
          </h1>
          
          {/* Accent Line */}
          <div
            className={`accent-line mb-8 opacity-0 ${
              isLoaded ? 'animate-line-reveal delay-300' : ''
            }`}
          />

          {/* Subtitle */}
          <p
            className={`text-subhead text-muted-foreground max-w-2xl mb-12 opacity-0 ${
              isLoaded ? 'animate-fade-up delay-400' : ''
            }`}
          >
            Autonomous dock with instant battery swapping for continuous overwatch, 
            rapid dispatch, and evidence-grade visibility – engineered and built in India.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 opacity-0 ${
              isLoaded ? 'animate-fade-up delay-600' : ''
            }`}
          >
            <a href="#dock" className="btn-primary">
              Explore the Dock
            </a>
            <a href="#careers" className="btn-outline">
              View Open Roles
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-caption text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
