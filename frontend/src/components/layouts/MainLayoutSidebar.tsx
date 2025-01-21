import { NavItemData, SidebarItems } from "@/constants/navigation/navigation";
import { useIsForcedCollapsedLayout } from "@/hooks/useIsForcedCollapsedLayout";
import { useIsMobileLayout } from "@/hooks/useIsMobileLayout";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useEffect } from "react";
import { cn } from "@nextui-org/react";
import NextLink from "next/link";
import {
  DRAWER_WIDTH,
  DRAWER_WIDTH_COLLAPSED,
} from "@/constants/layout/layout";
import Image from "next/image";
import MugShotImage from "@/assets/images/mugshot.png";
import { Icon } from "@iconify/react";
import ArrowRightSvg from "../../assets/images/svgr/arrowRightSvg";
import ArrowLeftSvg from "../../assets/images/svgr/arrowLeftSvg";

interface NavItemProps {
  item: NavItemData;
  collapsed: boolean;
  isActive: boolean;
}

function NavItem({
  isActive,
  item: { title, path, icon },
  collapsed,
}: NavItemProps) {
  const renderIcon = () => {
    return <span>{icon(isActive)}</span>;
  };

  const renderText = () => {
    return (
      <span className={cn(collapsed ? "text-sm leading-[30px]" : "text-base")}>
        {collapsed && title}
        {!collapsed && title}
      </span>
    );
  };

  const renderNavItem = () => {
    return (
      <NextLink href={path} id={title}>
        <div
          className={cn(
            "flex p-2.5 items-center rounded",
            "font-medium",
            collapsed ? "flex-col gap-1 w-16 h-16 mb-1" : "gap-3",
            "hover:text-white",
            isActive ? "text-white" : "text-[#6b6b6d]",
          )}
        >
          {renderIcon()}
          {renderText()}
        </div>
      </NextLink>
    );
  };

  return <>{renderNavItem()}</>;
}

interface MainLayoutSidebarProps {
  items: SidebarItems;
  activePath: string;
}

export const MainLayoutSidebar = ({
  items,
  activePath,
}: MainLayoutSidebarProps) => {
  const sidebarExpanded = useSidebarStore((sb) => sb.expanded);
  const isMobile = useIsMobileLayout();
  const isForcedCollapsed = useIsForcedCollapsedLayout();
  const setSidebarExpanded = useSidebarStore((sb) => sb.setExpanded);
  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  const ArrowIcon = sidebarExpanded ? ArrowLeftSvg : ArrowRightSvg;

  useEffect(() => {
    if (isMobile) {
      setSidebarExpanded(false);
    }
  }, [isMobile, setSidebarExpanded]);

  const showBackdrop = isMobile && sidebarExpanded;

  const renderToggleSidebar = () => {
    return (
      <div
        className={cn(
          "absolute bottom-5 right-0 translate-x-[50%]",
          "rounded-[50%] bg-[#474747]",
          "w-[50px] h-[50px]",
          "flex justify-center items-center",
          isForcedCollapsed && "hidden",
        )}
        style={{ zIndex: "1000" }}
        onClick={toggleSidebar}
        onKeyUp={() => {}}
        role="button"
        tabIndex={0}
      >
        <ArrowIcon
          pathProps={{
            fill: "#ffffff",
          }}
        />
      </div>
    );
  };
  const renderDrawerContent = () => {
    const collapsed =
      isForcedCollapsed || (!isMobile && !sidebarExpanded) || isMobile;
    return (
      <nav
        style={{
          width: collapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH,
        }}
        className={cn(
          "fixed top-0 bottom-0",
          "flex flex-col z-10",
          "transition-all duration-200 ease-in-out",
        )}
      >
        {renderToggleSidebar()}
        <div className="relative p-5 bg-[#17181b]">
          <Image src={MugShotImage} alt="Hero Image" width={500} height={500} />
        </div>

        {/* Item list */}
        <div
          className={cn(
            "flex flex-col w-full h-full gap-4 pt-5",
            collapsed ? "px-[18px]" : "px-3.5",
            "overflow-y-auto",
            "bg-[#17181b]",
          )}
        >
          {Object.values(items).map((item) => {
            const isActive =
              activePath === item.path ||
              (item.path === "/" && activePath === "/home");
            return (
              <NavItem
                key={item.title}
                item={item}
                collapsed={collapsed}
                isActive={isActive}
              />
            );
          })}
        </div>
      </nav>
    );
  };

  const renderPermanentDrawer = () => {
    return renderDrawerContent();
  };

  const renderTemporaryDrawer = () => {
    return (
      <div
        id="temporary-drawer-backdrop"
        role="presentation"
        className={cn(
          "fixed left-0 top-0 w-[100vw] h-[100vh] bg-black bg-opacity-50",
          !showBackdrop && "hidden",
        )}
        style={{ zIndex: "1000" }}
        onClick={() => {
          toggleSidebar();
        }}
      >
        {renderDrawerContent()}
      </div>
    );
  };

  return (
    <>
      {/* permanent drawer for large screen  */}
      {!isMobile && renderPermanentDrawer()}

      {/* temporary drawer for small screen  */}
      {isMobile && renderTemporaryDrawer()}
      {isMobile && (
        <div
          className="fixed top-2 left-2 text-white cursor-pointer"
          style={{ zIndex: 100 }}
        >
          <Icon
            icon="charm:menu-hamburger"
            width={30}
            className="text-white"
            onClick={() => toggleSidebar()}
          />
        </div>
      )}
    </>
  );
};
