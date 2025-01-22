"use client";

import React, { useEffect, useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { chunkArray } from "@/utils/chunkArray";
import { techStack, libs } from "@/constants/techLogos";
import { LogoScroller } from "./LogoScroller";

export function HomeContent() {
  //
  const windowDimensions = useWindowDimensions();
  const [isPositioned, setIsPositioned] = useState(false);
  const chunkSize =
    windowDimensions.width < 404
      ? 2
      : windowDimensions.width < 641
      ? 3
      : windowDimensions.width < 770
      ? 4
      : 5;

  const techStackRows = chunkArray({ array: techStack, size: chunkSize });
  const libsRows = chunkArray({ array: libs, size: chunkSize });

  useEffect(() => {
    let frameId: number;
    const checkPosition = () => {
      const parent = document.getElementById("tech-logos-parent");
      const child = document.getElementById("row-1");
      if (!parent || !child) return;
      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const relativeTop = childRect.top - parentRect.top;
      console.log("relativeTop", relativeTop);
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
            <h2 className="text-white mb-16">Full Stack Web Development</h2>

            {/* STACK SCROLLER */}
            <LogoScroller
              rows={techStackRows}
              label="STACK"
              parentId="tech-logos-parent"
              IsPositioned={isPositioned}
            />

            {/* LIBS SCROLLER */}
            <LogoScroller
              rows={libsRows}
              label="LIBS"
              parentId="libs-logos-parent"
              IsPositioned={isPositioned}
            />

          </div>
        </div>
      </div>
    </div>
  );
}
