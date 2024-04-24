import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import ReactLenis from "@studio-freight/react-lenis";

export default function Lenis({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>();

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <Fragment>
    <ReactLenis
      root={true}
      ref={lenisRef}
      autoRaf={false}
      options={{
        duration: 2,
        lerp: 0,
        touchMultiplier: 1,
        wheelMultiplier: 0.5,
      }}
    >
      {children}
    </ReactLenis>
    </Fragment>
  );
}
