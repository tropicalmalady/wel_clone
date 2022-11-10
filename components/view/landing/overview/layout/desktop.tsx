import { OverviewScreenshot } from "../screenshot";
import OverviewTextSection from "../text";
import { useRef, useEffect, Fragment, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Colors } from "../../../../../tailwind.config";
import OverviewCarousel from "../carousel";
import OverviewHeading from "../heading";
import OverviewChip from "../chip";
import CryptoSection from "../../crypto";

gsap.registerPlugin(ScrollTrigger);

const style = {
  layoutContainer: `
    desktop:max-w-[100%] desktop:pl-[10vw] desktop:flex-1
    laptop:max-w-[1400px] laptop:pl-[100px]
    tab:pl-[80px]
    mx-auto `,

  containerPin: `
    max-w-[100vw] overflow-hidden h-[100vh] relative overview__pin`,

  chipContainer: `
    absolute left-[80px] desktop:left-[5vw] top-[20%] flex overview__chip opacity-0`,
};

export default function OverviewDesktop() {
  const overviewBodyRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const layoutLeftRef = useRef<HTMLDivElement>(null);
  const cryptoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = gsap.utils.selector(overviewBodyRef);
    const overviewContainerPinDiv = q(".overview__pin");
    const overviewCardTitleDiv = q(".overview__title");
    const overviewChipDiv = q(".overview__chip");
    const overviewWrapperDiv = q(".overview__wrapper");
    const overviewTextSectionDiv = q(".overview__text");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: overviewContainerPinDiv,
        start: "top top",
        end: () => `+=${carouselRef.current?.scrollWidth}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    const tlInverse = gsap.timeline({
      scrollTrigger: {
        trigger: cryptoRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    tl.to(
      overviewWrapperDiv,
      {
        x:
          -carouselRef.current!.scrollWidth +
          layoutLeftRef.current!.clientWidth,
        duration: 1,
      },
      0
    )
      .to(
        overviewWrapperDiv,
        {
          y: -layoutLeftRef.current!.clientWidth / 5,
          duration: 0.2,
        },
        0
      )
      .fromTo(
        overviewBodyRef.current,
        {
          backgroundColor: Colors.primaryColors.cream100,
        },
        { backgroundColor: Colors.secondaryColors.fadedPurple, duration: 0.2 },
        0.15
      )
      .fromTo(
        overviewCardTitleDiv,
        {
          color: Colors.primaryColors.purple700,
        },
        {
          color: Colors.secondaryColors.outlineBlue,
        },
        0.15
      )
      .fromTo(
        overviewTextSectionDiv,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.15,
        },
        0.2
      )
      .fromTo(
        overviewChipDiv,
        {
          opacity: 0,
        },
        { opacity: 1, duration: 0.5 },
        0.25
      );

    tlInverse
      .fromTo(
        overviewBodyRef.current,
        {
          backgroundColor: Colors.secondaryColors.fadedPurple,
        },
        {
          backgroundColor: Colors.primaryColors.cream100,
        }
      )
      .fromTo(
        overviewCardTitleDiv,
        {
          color: Colors.secondaryColors.outlineBlue,
        },
        {
          color: Colors.primaryColors.purple700,
        },
        0.15
      );
  }, []);

  return (
    <div className="laptop:mb-[0rem] mb-[4rem]">
      <OverviewHeading />
      <div
        className="overview__body--desktop overflow-hidden"
        ref={overviewBodyRef}
      >
        <div className={style.containerPin}>
          <Chips />
          <div className="flex items-center h-[100%] overview__wrapper">
            <div className={style.layoutContainer}>
              <div className="flex">
                <div
                  className="flex-1 min-w-[50%] overview__layout--left"
                  ref={layoutLeftRef}
                >
                  <OverviewScreenshot />
                </div>
                <div>
                  <div className="overview__text">
                    <OverviewTextSection />
                  </div>
                  <div className="desktop:mt-[5vw] mt-[5rem] relative">
                    <OverviewCarousel ref={carouselRef} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={cryptoRef}>
          <CryptoSection />
        </div>
      </div>
    </div>
  );
}

const Chips = () => (
  <div className={style.chipContainer}>
    {["Invest", "with", "Weltio"].map((item, index) => (
      <Fragment key={index}>
        <OverviewChip text={item} />
      </Fragment>
    ))}
  </div>
);
