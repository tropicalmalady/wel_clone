import { useEffect, useLayoutEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {

    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);


    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);
  
  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize',updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);
  
  return isMobile;
  };
  
  
  