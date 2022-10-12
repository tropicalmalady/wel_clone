import { OverviewScreenshot } from "./screenshot";
import OverviewTextSection from './text';
import { useRef, useEffect, Fragment, useLayoutEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Colors } from "../../../tailwind.config"
import Chip from "../../builder/chip";
import OverviewCarousel from "./carousel"

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
    absolute left-[80px] desktop:left-[5vw] top-[20%] flex overview__chip opacity-0`
}

export default function OverviewDesktop() {
    const overviewBodyRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const layoutLeftRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const q = gsap.utils.selector(overviewBodyRef);
        const overviewContainerPinDiv = q(".overview__pin");
        const overviewCardTitleDiv = q(".overview__title");
        const overviewChipDiv = q(".overview__chip");
        const overviewWrapperDiv = q(".overview__wrapper");
        const overviewTextSectionDiv = q(".overview__text");
        const overviewBottomDiv = q(".overview__bottom")

        gsap.timeline({
            scrollTrigger: {
                trigger: overviewContainerPinDiv,
                start: "top top",  
                end: () => `+=${carouselRef.current?.scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        })
        .to(overviewWrapperDiv, {
            x: -carouselRef.current!.scrollWidth + layoutLeftRef.current!.clientWidth,
        })


        gsap.timeline({
            scrollTrigger: {
                trigger: layoutLeftRef.current,
                start: "top top",  
                end: () => `+=${layoutLeftRef.current!.clientWidth }`,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })
        .to(overviewWrapperDiv, {
            y: -layoutLeftRef.current!.clientWidth / 5,
        },0)
        .fromTo(
            overviewChipDiv, {
            opacity: 0
        }, {
            opacity: 1,
        });


        gsap.timeline({
            scrollTrigger: {
                trigger: carouselRef.current,
                start: "bottom 55%",  
                end: () => `+=${layoutLeftRef.current?.scrollWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })
        .fromTo(overviewContainerPinDiv, { backgroundColor: Colors.primaryColors.cream100 }, {
            backgroundColor: Colors.secondaryColors.fadedPurple
        }, 0)
        .fromTo(overviewTextSectionDiv, {
            opacity: 1
        }, { opacity: 0 }, 0)
        .fromTo(overviewCardTitleDiv, {
            color: Colors.primaryColors.purple700
        }, {
            color: Colors.secondaryColors.outlineBlue
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: overviewBottomDiv,
                start: "top bottom",
                end: "top top",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })
        .fromTo(overviewBottomDiv, { backgroundColor: Colors.secondaryColors.fadedPurple }, {
            backgroundColor: Colors.primaryColors.cream100
        }, 0)
        .fromTo(overviewContainerPinDiv, { backgroundColor: Colors.secondaryColors.fadedPurple }, {
            backgroundColor: Colors.primaryColors.cream100
        }, 0);
    },[])


    return <div className="overview__body--desktop overflow-hidden" ref={overviewBodyRef}>
        <div className={style.containerPin}>
            <Chips />
            <div className="flex items-center h-[100%] overview__wrapper">
                <div className={style.layoutContainer}>
                    <div className="flex">
                        <div className="flex-1 min-w-[50%] overview__layout--left" ref={layoutLeftRef}>
                            <OverviewScreenshot />
                        </div>
                        <div>
                            <div className="overview__text">
                                <OverviewTextSection />
                            </div>
                            <div className="desktop:mt-[5vw] mt-[5rem] relative hey">
                                <OverviewCarousel ref={carouselRef}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="overview__bottom"></div>
    </div>
}

const Chips=()=><div className={style.chipContainer}>{["Invest", "with", "Weltio"].map((item, index) => <Fragment key={index}> <Chip text={item} /></Fragment>)}</div>
