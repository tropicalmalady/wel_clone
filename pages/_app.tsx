import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import WeltioLoader from "../components/view/misc/loader/index";
import gsap from "gsap";

function MyApp({ Component, pageProps }: AppProps) {
  const appRef = useRef<HTMLDivElement>(null);
  const [hasAppLoaded, setHasAppLoaded] = useState(false);

  useEffect(() => {
    const q = gsap.utils.selector(appRef);
    const loaderLogoDiv = q(".loader__logo--two");
    const loaderFillDiv = q(".loader__fill");
    const loaderDotDiv = q(".loader__dot");

    const scaleX = appRef.current!.clientWidth / 9;
    const scaleY = appRef.current!.clientHeight / 9;
    const logoWidth = loaderLogoDiv[0]?.clientWidth ?? 0;

    const tl = gsap.timeline();

    tl.fromTo(
      loaderLogoDiv,
      {
        clip: "rect(0, 0, " + logoWidth + "px, 0)",
      },
      {
        clip: "rect(0, " + logoWidth + "px, " + logoWidth + "px, 0)",
        duration: 1,
        ease: "sine.in",
      }
    )
      .fromTo(
        loaderDotDiv,
        { y: 0 },
        {
          y: -20,
          ease: "sine.out",
          fill: "white",
          duration: 1,
        }
      )
      .to(
        loaderDotDiv,
        {
          scaleY: 1.1,
          scaleX: 0.7,
          ease: "sine.out",
          delay: 0.5,
        },
        "<"
      )
      .to(loaderDotDiv, {
        y: 0,
        scaleY: 1,
        scaleX: 1,
        onComplete: () => {
          gsap.set(loaderFillDiv, { display: "block" });
        },
      })
      .to(loaderFillDiv, {
        scale: Math.max(scaleX, scaleY),
        y: 10,
        duration: 0.5,
        transformOrigin: "center",
        onComplete: () => {
          setHasAppLoaded(true);
        },
      });
  }, []);

  return (
    <div ref={appRef}>
      {hasAppLoaded ? <Component {...pageProps} /> : <WeltioLoader />}
    </div>
  );
}

export default MyApp;
