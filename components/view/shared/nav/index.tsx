import MobileNav from "./layout/mobile";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import DesktopNav from "./layout/desktop";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);


  return (
    <div>
      {hasMounted ? isNotMobile ? <DesktopNav /> : <MobileNav /> : <></>}
    </div>
  );
}
