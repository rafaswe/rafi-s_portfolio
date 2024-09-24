"use client";
import { cn } from "@/function/cn";
import { ReactNode, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode[];
  interval?: number; // Interval for autoplay in milliseconds
  autoPlay?: boolean; // Toggle for autoplay
  className?: string;
  containerClassName?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  interval = 3000,
  autoPlay = false,
  className = "",
  containerClassName = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  // Autoplay logic with conditional check
  useEffect(() => {
    let autoPlayTimer: NodeJS.Timeout;
    if (autoPlay) {
      autoPlayTimer = setInterval(() => {
        nextSlide();
      }, interval);
    }
    return () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
      }
    };
  }, [autoPlay, interval]);
  console.log({ activeIndex });
  return (
    <div className={cn("relative w-full", className)}>
      {/* Carousel wrapper */}
      <div
        className={cn(
          "relative h-56 overflow-hidden rounded-lg md:h-96",
          containerClassName
        )}>
        {children.map((child, index) => (
          <div
            key={index}
            className={`absolute inset-0 duration-700 ease-in-out transform ${
              index === activeIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
            style={{
              transition:
                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
            }}>
            {child}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 -translate-x-1/2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        className="absolute top-0 left-0  z-30 flex items-center justify-center h-full px-4"
        onClick={prevSlide}
        aria-label="Previous">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 shadow-2xl group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
        onClick={nextSlide}
        aria-label="Next">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 shadow-2xl group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
