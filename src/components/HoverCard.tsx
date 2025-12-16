import { useState, useEffect, ReactNode } from 'react';

interface HoverCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

const JumbleText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  useEffect(() => {
    if (!isVisible) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 25);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  return <span>{displayText}</span>;
};

const HoverCard = ({ title, description, image, className = '' }: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hover-card-container group relative aspect-[4/3] bg-card overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {image && (
        <div
          className="card-image absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        {/* Title */}
        <h3 className="card-title text-xl md:text-2xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        
        {/* Green Line */}
        <div className="card-line mb-3" />
        
        {/* Description - reveals on hover */}
        <p className="card-description text-sm md:text-base text-muted-foreground leading-relaxed">
          <JumbleText text={description} isVisible={isHovered} />
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
