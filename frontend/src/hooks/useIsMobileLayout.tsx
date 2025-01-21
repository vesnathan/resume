import { useMediaQuery } from "./useMediaQuery";

export const useIsMobileLayout = () => {
  // css media queries size are inclusives
  // tailwind uses min-width 1024px for lg: style so reduce one pixel for
  // max-width media queries
  return useMediaQuery(`(max-width: 1023px)`);
};
