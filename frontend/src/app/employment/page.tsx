"use client";

import { MainLayout } from "@/components/layouts/MainLayout";
import { EmploymentContent } from "@/components/Routes/Employment/EmploymentContent";

export default function Resume() {
  return (
    <MainLayout>
      <EmploymentContent />
    </MainLayout>
  );
}
