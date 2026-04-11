"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS = [
  {
    id: 0,
    src: "/gallery/0.png",
    title: "Designing",
    subtitle: "Beside coding, I also design",
  },
  {
    id: 1,
    src: "/gallery/1.png",
    title: "Books",
    subtitle: "I read books (rarely)",
  },
  {
    id: 2,
    src: "/gallery/2.png",
    title: "Doodles",
    subtitle: "I doodle (even in the places I'm not supposed to)",
  },
  {
    id: 3,
    src: "/gallery/3.png",
    title: "My Hometown",
    subtitle: "I love my hometown",
  },
  {
    id: 4,
    src: "/gallery/4.png",
    title: "Traveling",
    subtitle: "I travel very less, but yeah I enjoy",
  },
  {
    id: 5,
    src: "/gallery/5.png",
    title: "Hardwares",
    subtitle: "Sometimes I play with the hardware too",
  },
  {
    id: 6,
    src: "/gallery/6.png",
    title: "My Uni",
    subtitle: "I study in Jadavpur University, India",
  },
  {
    id: 7,
    src: "/gallery/7.png",
    title: "The Sky",
    subtitle: "This is how the sky looks like from my home",
  }
];

const N = ITEMS.length;
const STACK_SIZE = 3;

function makeTilts() {
  return Object.fromEntries(
    ITEMS.map((item) => [item.id, (Math.random() - 0.5) * 10])
  );
}

export default function CardStack() {
  const [current, setCurrent] = useState(0);
  const [tilts] = useState(makeTilts);

  const moveNext = () => setCurrent((p) => (p + 1) % N);
  const movePrev = () => setCurrent((p) => (p - 1 + N) % N);

  const stack = Array.from({ length: STACK_SIZE }, (_, depth) => {
    const idx = (current - depth + N) % N;
    return { item: ITEMS[idx], depth };
  });

  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-full max-w-lg">
        <div className="relative w-full aspect-[3/2.6]">
          {[...stack].reverse().map(({ item, depth }) => (
            <div
              key={item.id}
              className="absolute top-0 left-0 w-full h-full bg-white dark:bg-zinc-100 shadow-xl"
              style={{
                transform: `rotate(${tilts[item.id]}deg) translateY(${depth * 10}px)`,
                zIndex: STACK_SIZE - depth,
              }}
            >
              <div className="flex flex-col h-full p-2 sm:p-3">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>
                <div className="pt-2 pb-1 px-1 min-h-[40px]">
                  {depth === 0 && (
                    <>
                      <p className="text-zinc-900 font-semibold text-sm sm:text-base leading-tight">
                        {item.title}
                      </p>
                      <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">
                        {item.subtitle}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-10">
        <Button variant="outline" size="icon-lg" onClick={movePrev}>
          <ChevronLeft />
        </Button>
        <span className="text-sm font-medium text-muted-foreground tabular-nums w-12 text-center">
          {current + 1} / {N}
        </span>
        <Button variant="outline" size="icon-lg" onClick={moveNext}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
