import { useEffect } from "react";

const debounce = <Args extends unknown[]>(
  func: (...args: Args) => void,
  wait: number,
): ((...args: Args) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const useScrollNavigation = (
  showSection: number,
  setShowSection: (section: number) => void,
) => {
  const handleScroll = debounce<[WheelEvent]>((event) => {
    if (event.deltaY > 0 && showSection === 0) {
      setShowSection(1);
    } else if (event.deltaY < 0 && showSection === 1) {
      setShowSection(0);
    }
  }, 100);

  useEffect(() => {
    const listener = (event: Event) => {
      if (event instanceof WheelEvent) {
        handleScroll(event);
      }
    };

    window.addEventListener("wheel", listener);
    return () => {
      window.removeEventListener("wheel", listener);
    };
  }, [showSection, handleScroll]);
};

export default useScrollNavigation;
