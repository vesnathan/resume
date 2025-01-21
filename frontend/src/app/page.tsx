"use client";

import { MainLayout } from "@/components/layouts/MainLayout";
import React from "react";
import { HomeContent } from "@/components/Routes/Home/HomeContent";
import useScrollNavigation from "@/hooks/useScrollNavigation";

export default function Home() {
  //
  const [showSection, setShowSection] = React.useState(0);
  useScrollNavigation(showSection, setShowSection);

  return (
    <div className="h-full w-full">
      <MainLayout>
        <HomeContent />
      </MainLayout>
    </div>
  );
}
