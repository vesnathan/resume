"use client";

import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { techLogos } from "@/constants/techLogos";
import React, { useEffect, useState, WheelEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@nextui-org/react";
import { chunkArray } from "@/utils/chunkArray";
import { LogosRow } from "./LogosRow";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export function HomeContent() {
  const [rowIndex, setRowIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const [onTheWay, setOnTheWay] = useState<"down" | "up">("down");

  // For touch scrolling
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const windowDimensions = useWindowDimensions();
  const rows = chunkArray({
    array: techLogos,
    size:
      windowDimensions.width < 404
        ? 2
        : windowDimensions.width < 641
        ? 3
        : windowDimensions.width < 770
        ? 4
        : 5,
  });
  const ROW_HEIGHT = 160;

  function goToNextRow() {
    if (rowIndex < rows.length - 2) {
      setRowIndex((prev) => prev + 1);
      setIsAnimating(true);
    }
  }

  function goToPreviousRow() {
    if (rowIndex > 0) {
      setRowIndex((prev) => prev - 1);
      setIsAnimating(true);
    }
  }

  function handleWheel(e: WheelEvent<HTMLDivElement>) {
    if (isAnimating) return;

    if (e.deltaY > 0) {
      goToNextRow();
    } else if (e.deltaY < 0) {
      goToPreviousRow();
    }
  }

  // --- Touch event handlers ---
  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    // Record where the user first puts their finger down
    setTouchStartY(e.touches[0].clientY);
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (isAnimating || touchStartY === null) return;

    // Compare where the user lifts their finger to where they started
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchEndY - touchStartY;

    if (diff < 0) {
      // Negative => user swiped up => go to next row
      goToNextRow();
    } else if (diff > 0) {
      // Positive => user swiped down => go to previous row
      goToPreviousRow();
    }

    // Reset the start position
    setTouchStartY(null);
  }

  useEffect(() => {
    if (rowIndex === 0) {
      setOnTheWay("down");
    }
    if (rowIndex === rows.length - 2) {
      setOnTheWay("up");
    }
  }, [rowIndex, rows.length]);

  useEffect(() => {
    let frameId: number;
    const checkPosition = () => {
      const parent = document.getElementById("tech-logos-parent");
      const child = document.getElementById("1");
      if (!parent || !child) return;
      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const relativeTop = childRect.top - parentRect.top;
      if (relativeTop > 159) {
        setIsPositioned(true);
      } else {
        frameId = requestAnimationFrame(checkPosition);
      }
    };
    frameId = requestAnimationFrame(checkPosition);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full justify-center items-center">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white items-center justify-center">
            <h1 className="text-primary text-[30px]">
              NATE <span className="text-white">LOUDON</span>
            </h1>
            <h2 className="text-white">Full Stack Web Development</h2>

            {/* Container listening to wheel and touch events */}
            <div
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={cn(
                "relative mt-[100px] h-[320px] w-full overflow-hidden",
                !isPositioned ? "opacity-0" : "opacity-100",
                "transition-all duration-500 ease-in-out"
              )}
              id="tech-logos-parent"
            >
              {rows.map((row, i) => (
                <motion.div
                  key={row[0].name}
                  id={i.toString()}
                  className="absolute w-full flex justify-center"
                  style={{ top: 0 }}
                  animate={{ y: (i - rowIndex) * ROW_HEIGHT }}
                  transition={{ duration: 0.6 }}
                  onAnimationComplete={() => {
                    setIsAnimating(false);
                  }}
                >
                  <LogosRow row={row} />
                </motion.div>
              ))}
            </div>

            <div
              className={cn(
                !isPositioned ? "opacity-0" : "opacity-100",
                onTheWay === "down" ? "" : "rotate-180"
              )}
              onClick={onTheWay === "down" ? goToNextRow : goToPreviousRow}
              role="button"
              tabIndex={0}
              onKeyUp={() => {}}
            >
              <ScrollDownIndicator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
