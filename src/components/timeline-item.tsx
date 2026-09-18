"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  year: string;
  badge: string;
  title: string;
  description: string;
  side: "left" | "right";
  isGoal?: boolean;
}

export function TimelineItem({ year, badge, title, description, side, isGoal }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = side === "left";

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row md:items-center md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Точка на таймлайне */}
      <div
        className="absolute left-4 top-6 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 h-4 w-4 rounded-full border-2 border-primary bg-background"
        style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)" }}
      />

      {/* Половина для отступа */}
      <div className={`hidden md:block md:w-1/2 ${isLeft ? "" : ""}`} />

      {/* Карточка */}
      <div
        ref={ref}
        className={`glass-card relative ml-12 md:ml-0 md:w-1/2 rounded-2xl p-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-foreground">{year}</span>
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              isGoal
                ? "bg-[hsl(var(--accent-blue)/0.15)] text-[hsl(var(--accent-blue))] border border-[hsl(var(--accent-blue)/0.3)]"
                : "bg-primary/15 text-primary border border-primary/30"
            }`}
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
          >
            {badge}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}