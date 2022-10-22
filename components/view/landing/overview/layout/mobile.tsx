import { OverviewScreenshot } from "../screenshot";
import OverviewTextSection from '../text';
import { useRef, useEffect, Fragment, useLayoutEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import OverviewCarousel from "../carousel"
import Chip from "../../../../builder/chip";
import { Colors } from "../../../../../tailwind.config";

gsap.registerPlugin(ScrollTrigger);

const style={
  container:`
  mx-auto `,

}

export default function OverviewMobile()
{
  const wrapRef = useRef<HTMLDivElement>(null);
  const containRef = useRef<HTMLDivElement>(null);
  const carouselRef=useRef<HTMLDivElement>(null);
  const subRef=useRef<HTMLDivElement>(null);

  const clutchRef=useRef<HTMLDivElement>(null);


   useEffect(()=>{

    gsap.timeline({
        scrollTrigger: {
           trigger:carouselRef.current,
           scroller:wrapRef.current,
           horizontal:true,
           start:"top top",
           end: () => `top+=${carouselRef.current?.scrollWidth} bottom`,
           onUpdate:(self)=>{
            gsap.to(containRef.current,{
                xPercent: self.progress *200,
                ease:"sine.inOut"
            })
           } ,    
        }
     })
   },[])

  
    return  <div className="hey">

  <div className="w-[100%] overflow-hidden " >
    <div className={style.container}>
       <div className="tab:grid tab:grid-cols-2 tab:grid-rows-2 ">
        <div className="tab:block  flex justify-center tab:pl-[80px]" ref={subRef}>
        <OverviewScreenshot/>
        </div>
        <div className="  tab:m-0 mt-[2rem] mb-[6rem]">
        <OverviewTextSection/>
        </div>
        <div className="tab:col-span-2 tab:mt-[3rem] ">

          <Chips/>
        <div className=" mt-[2em] overflow-x-scroll max-w-[100vw] overview__track minitab:pl-[80px] pl-[20px]" ref={wrapRef}>
          <OverviewCarousel ref={carouselRef}/> 
          </div> 
         
          </div>

        
       </div>
       <div className="bg-secondaryColors-outlineBlue overflow-visible h-[2px] minitab:mx-[80px] mx-[20px] minitab:mt-[1.5em] mt-[2em] relative" ref={clutchRef}>
            <div className="bg-primaryColors-purple600 w-[33.3333%] h-[300px] absolute top-0" ref={containRef}>f</div>
          </div>
       </div>
 
  </div>
         </div>
}
    
    
const Chips=()=><div className="flex overview__chip minitab:pl-[80px] pl-[20px]">{["Invest", "with", "Weltio"].map((item, index) => <Fragment key={index}> <Chip text={item} /></Fragment>)}</div>
    
    
    
    
    
    
    
    
    
