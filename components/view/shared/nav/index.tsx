import MobileNav from "./layout/mobile";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import DesktopNav from "./layout/desktop";
import { useEffect, useState } from "react";

export default function Nav() {
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);


  return (
    <div className="nav">
      {hasMounted ? isNotMobile ? <DesktopNav /> : <MobileNav /> : <></>}
    </div>
  );
}
