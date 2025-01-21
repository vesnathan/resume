import {
  DRAWER_WIDTH_COLLAPSED,
  DRAWER_WIDTH,
} from "@/constants/layout/layout";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useIsForcedCollapsedLayout } from "./useIsForcedCollapsedLayout";
import { useIsMobileLayout } from "./useIsMobileLayout";

export const useSidebarWidth = () => {
  const isMobile = useIsMobileLayout();
  const isForcedCollapsed = useIsForcedCollapsedLayout();
  const sidebarExpanded = useSidebarStore((sb) => sb.expanded);
  if (isMobile) {
    return 0;
  }
  if (isForcedCollapsed) {
    return DRAWER_WIDTH_COLLAPSED;
  }
  return sidebarExpanded ? DRAWER_WIDTH : DRAWER_WIDTH_COLLAPSED;
};
