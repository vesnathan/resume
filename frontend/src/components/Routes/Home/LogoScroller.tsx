"use client";

import React, { useState, useEffect, WheelEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@nextui-org/react";
import { LogosRow } from "./LogosRow";
import { ScrollDownIndicator } from "@/components/ScrollDownIndicator";
import { LogoType } from "@/constants/techLogos";



interface LogoScrollerProps {
  rows: LogoType[][];
  label: string;
  parentId: string;
  rowHeight?: number;
}

export function LogoScroller({
  rows,
  label,
  parentId,
  rowHeight = 160,
}: LogoScrollerProps) {
  const [rowIndex, setRowIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const [arrowDirection, setArrowDirection] = useState<"down" | "up">("down");

  function goToNextRow() {
    if (rowIndex < rows.length - 1) {
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

  // Wheel events
  function handleWheel(e: WheelEvent<HTMLDivElement>) {
    if (isAnimating) return;
    if (e.deltaY > 0) {
      goToNextRow();
    } else if (e.deltaY < 0) {
      goToPreviousRow();
    }
  }

  // Touch events
  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    setTouchStartY(e.touches[0].clientY);
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (isAnimating || touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchEndY - touchStartY;

    if (diff < 0) {
      goToNextRow();
    } else if (diff > 0) {
      goToPreviousRow();
    }
    setTouchStartY(null);
  }

  useEffect(() => {
    if (rowIndex === 0) {
      setArrowDirection("down");
    } else if (rowIndex === rows.length - 1) {
      setArrowDirection("up");
    }
  }, [rowIndex, rows.length]);

  return (
    <>
      {/* Label above the scroller */}
      <h3 className={cn( "opacity-100", "text-white font-bold mt-5")}>
        {label}
      </h3>

      {/* Scroller container */}
      <div
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={cn(
          "relative mt-2 w-full overflow-hidden flex justify-center items-center",
          // 160px from your example
          `h-[160px]`,
          "opacity-100",
          "transition-all duration-500 ease-in-out"
        )}
        id={parentId}
      >
        {rows.map((row, i) => (
          <motion.div
            key={i}
            className="absolute w-full flex justify-center"
            style={{ top: 0 }}
            animate={{ y: (i - rowIndex) * rowHeight }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <LogosRow row={row} />
          </motion.div>
        ))}
      </div>

      {/* Scroll arrow */}
      <div
        className={cn(
          "opacity-100",
          arrowDirection === "down" ? "" : "rotate-180"
        )}
        onClick={arrowDirection === "down" ? goToNextRow : goToPreviousRow}
        role="button"
        tabIndex={0}
        onKeyUp={() => {}}
      >
        <ScrollDownIndicator />
      </div>
    </>
  );
}
