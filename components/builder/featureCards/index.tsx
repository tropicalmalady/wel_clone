import { useRef, useEffect, useLayoutEffect } from 'react';
import { FeatureCardProps } from "./featureCard";
import FeatuerCardCounter from "./featureCard/counter";
import FeatureCard from './featureCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardsProps{
cards:FeatureCardProps[],
activeIndex:number,
setActiveIndex(value:number):void,
chipTextOne:string,
chipTextTwo:string
}

export default function FeatureCards({props}:{props:FeatureCardsProps}) {
   const containerRef = useRef<HTMLDivElement>(null);
   const innerRef = useRef<HTMLDivElement>(null);
    const {cards,activeIndex,setActiveIndex,chipTextOne,chipTextTwo}=props;
 

   useLayoutEffect(() => {
      const q = gsap.utils.selector(containerRef);
      const cardDivs = q(".feature__card");
      const mm=gsap.matchMedia();
      

      mm.add("(min-width: 1200px",()=>{
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top top",
               end: () => `top+=${innerRef.current?.scrollHeight} bottom`,
               scrub: true,
               pin: true,
            }
         });
   
         cardDivs.map((item, index) => {
            if (index > 0) {
               tl.to(item, {
                  yPercent: -100 * index,
                  y: `-${1.5 * index}rem`,
                  duration: .5,
                  onStart:()=>setActiveIndex(index),
                  onReverseComplete:()=>setActiveIndex(index-1)              
               })
                  .to(cardDivs[index - 1], {
                     opacity: gsap.utils.interpolate(1, 1 - (1 / (index + 2)), 0.8),
                     scale: 1 - (1 / ((index + 2) * 10)),
                     duration: .5,
                     y: `-${1 * index}rem`,
                     transformOrigin: "top center"
                  }, "<")
            }
            else {
               tl.to(item, {
                  yPercent: -100 * index,
                  duration: .5,          
               }, 0)
            }
         })
      })

   },[])

 
   return <div>
      <div className="laptop:h-[100vh] min-h-[700px] overflow-hidden relative " ref={containerRef}>
         <div ref={innerRef} >
            <div className="absolute left-[4%] top-[50%] z-[30] translate-y-[-50%] hidden laptop:block"> <FeatuerCardCounter props={{
               size:cards.length,
               activeIndex,
               isCounterGreen:cards[0].isCardCream
            }}/></div>
            <div>
                {cards.map((item,index)=><div key={index} style={{zIndex:1+index}}> <FeatureCard props={{...item,chipTextOne,chipTextTwo}} /></div>)}     
            </div>
         </div>
      </div>

   </div>


}