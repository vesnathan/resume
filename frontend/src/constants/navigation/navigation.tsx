import { ReactNode } from "react";
import { Icon } from "@iconify/react";

export interface NavItemData {
  id: number;
  title: string;
  path: string;
  icon: (isActive: boolean) => ReactNode;
}

export interface SidebarItems {
  [key: string]: NavItemData;
}

export const mainNavConfig = {
  home: {
    id: 0,
    title: "HOME",
    path: "/",
    icon: () => {
      return <Icon icon="clarity:home-line" width={25} />;
    },
  },
  about: {
    id: 1,
    title: "ABOUT",
    path: "/about",
    icon: () => {
      return <Icon icon="clarity:info-circle-line" width={25} />;
    },
  },
  employment: {
    id: 2,
    title: "EMPLOYMENT",
    path: "/employment",
    icon: () => {
      return <Icon icon="qlementine-icons:resume-16" width={25} />;
    },
  },
  education: {
    id: 3,
    title: "EDUCATION",
    path: "/education",
    icon: () => {
      return <Icon icon="qlementine-icons:resume-16" width={25} />;
    },
  },
  referees: {
    id: 4,
    title: "REFEREES",
    path: "/referees",
    icon: () => {
      return <Icon icon="qlementine-icons:resume-16" width={25} />;
    },
  },
  projects: {
    id: 5,
    title: "PROJECTS",
    path: "/projects",
    icon: () => {
      return <Icon icon="si:projects-alt-line" width={25} />;
    },
  },
  contact: {
    id: 6,
    title: "CONTACT",
    path: "/contact",
    icon: () => {
      return <Icon icon="fluent-mdl2:contact-card" width={25} />;
    },
  },
} as const satisfies SidebarItems;
