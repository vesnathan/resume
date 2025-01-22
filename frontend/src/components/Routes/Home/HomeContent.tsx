"use client";

import React from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { chunkArray } from "@/utils/chunkArray";
import { techStack, libs } from "@/constants/techLogos";
import { LogoScroller } from "./LogoScroller";

export function HomeContent() {
  const windowDimensions = useWindowDimensions();

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
            />

            {/* LIBS SCROLLER */}
            <LogoScroller
              rows={libsRows}
              label="LIBS"
              parentId="libs-logos-parent"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
