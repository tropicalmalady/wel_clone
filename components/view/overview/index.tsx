import { OverViewCarosel } from "../../../pages/work";
import OverviewHeading from "./heading";
import { OverviewScreenshot } from "./screenshot";
import OverviewTextSection from './textSection';
import {useRef,useLayoutEffect} from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const style={
  container:`
  desktop:max-w-[100%] desktop:pl-[10vw] desktop:flex-1
  laptop:max-w-[1400px] laptop:pl-[100px]
  tab:pr-[80px]
  mx-auto giveborder`
}

export default function Overview()
{
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef=useRef<HTMLDivElement>(null);
  const subRef=useRef<HTMLDivElement>(null);


   useLayoutEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
         trigger: wrapperRef.current,
         start: "top top",
         end: () => `+=${carouselRef.current?.scrollWidth}`,
        //  toggleActions:"play complete reverse complete",
         scrub: 1,
         pin: true,
         anticipatePin: 1,
         invalidateOnRefresh: true,
      }
   }).to(containerRef.current,{
    x:-carouselRef.current!.scrollWidth + subRef.current!.clientWidth,
   })




   })

  
    return  <div>
      <div className="h-[100vh]">

      </div>
    <div className="max-w-[100vw] overflow-hidden h-[100vh]" ref={wrapperRef}>
         <div className="giveborder flex items-center h-[100%] " ref={containerRef}>
      <div className={style.container}>
         <div className="flex  giveborder border-[blue]">
          <div className="flex-1 giveborder min-w-[50%]" ref={subRef}>
          <OverviewScreenshot/>
          </div>
          <div className=" giveborder">
            <OverviewTextSection/>
            <div className="desktop:mt-[5vw] mt-[5rem]">
            <OverViewCarosel ref={carouselRef}/>
            </div> 
          </div>
         </div>
         </div>
    </div>
    </div>







           <div className="h-[100vh]"> km</div>
           </div>
}