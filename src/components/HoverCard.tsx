import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface HoverCardProps {
  title: string;
  description: string;
  image?: string;
  videoSrc?: string; // 🆕 ADDED
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
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 0.5;
    }, 25);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  return <span>{displayText}</span>;
};

const HoverCard = ({
  title,
  description,
  image,
  videoSrc, // 🆕 ADDED
  className = '',
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hover-card-container group relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ================= BACKGROUND VIDEO ================= */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40" // 🔹 CHANGED
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* ================= FALLBACK IMAGE ================= */}
      {!videoSrc && image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/30" /> {/* 🔹 CHANGED (simpler overlay) */}

      {/* ================= CONTENT ================= */}

      
      <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          
          <JumbleText text={title} isVisible={isHovered} />
        </h3>

        <div className="card-line mb-3" />

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {description}
          {/* <JumbleText text={description} isVisible={isHovered} /> */}
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
