import { useMediaQuery } from "./useMediaQuery";

export const useIsForcedCollapsedLayout = () => {
  return useMediaQuery(`(min-width: 1024px) and (max-width: 1536px)`);
};
