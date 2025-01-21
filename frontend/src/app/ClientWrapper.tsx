"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      router.replace(currentPath);
    }
  }, [pathname, router]);

  return <>{children}</>;
}
