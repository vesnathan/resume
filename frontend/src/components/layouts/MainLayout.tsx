"use client";

import React, { PropsWithChildren } from "react";
import { mainNavConfig } from "@/constants/navigation/navigation";
import { usePathname } from "next/navigation";
import "../../app/globals.css";
import { useSidebarWidth } from "@/hooks/useSidebarWidth";
import { AnimatePresence, motion } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import { ContactBox } from "../common/ContactBox";
import { MainLayoutSidebar } from "./MainLayoutSidebar";

export const MainLayout: React.FC<PropsWithChildren<object>> = ({
  children,
}) => {
  //
  const pathname = usePathname();
  const sidebarWidth = useSidebarWidth();

  const imageName =
    pathname !== "/"
      ? `${pathname.replace("/", "")}.webp` || "home.webp"
      : "home.webp";

  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 0, y: -200, transition: { duration: 0.4 } },
  };

  return (
    <NextUIProvider>
      <AnimatePresence mode="sync">
        <div className="flex h-screen relative overflow-x-hidden ">
          <MainLayoutSidebar items={mainNavConfig} activePath={pathname} />
          <div
            className="absolute flex-1 h-full w-full transition-all duration-200 ease-in-out mr-10"
            style={{ marginLeft: sidebarWidth, marginRight: sidebarWidth }}
          >
            <div className="absolute inset-0">
              <motion.div
                key={pathname}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                className="h-full w-full"
              >
                <div
                  style={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(/images/${imageName})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.1,
                  }}
                />
                {children}
              </motion.div>
            </div>
          </div>
          {pathname !== "/contact" && (
            <div className=" fixed bottom-0 right-[0px] z-50 hidden xl:block">
              <ContactBox />
            </div>
          )}
        </div>
      </AnimatePresence>
    </NextUIProvider>
  );
};
