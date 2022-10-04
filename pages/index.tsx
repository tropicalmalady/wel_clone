import FeatureCard from "../components/builder/card/featureCard";
import { FeatureCardTextProps } from "../components/builder/card/featureCard/cardText";
import Images from "../utility/images";
import { PopupCardOne } from '../components/builder/card/popupCard/v1';
import { PopupCardTwo } from '../components/builder/card/popupCard/v2';
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { OvalElementProps } from '../components/builder/ovalElement/index';
import { useEffectOnce } from "../hooks";
import PopupCardSix from "../components/builder/card/popupCard/v6";
import OverviewHeading from "../components/view/overview/heading";
import Chipmarquee from "../components/builder/chipmarquee";

gsap.registerPlugin(ScrollTrigger);


const cardText: FeatureCardTextProps = {
   heading: "Safe and easy access to USD",
   content: "The US dollar is one of the most stable currencies on the planet. With Weltio, you can open a fully regulated and fully protected USD account",
};
const ovalResource: OvalElementProps = { resource: Images.Landing.featureCard2, horizontal: true, style: "bg-primaryColors-cream100" }
const popupCardOne = <div className="minitab:top-[30px] minitab:left-[-70px] left-[-50px] top-[50%] absolute z-[1000]"><PopupCardSix /></div>
const popupCardTwo = <div className="minitab:right-[-20px] minitab:bottom-[10px] right-[-60px] bottom-[-40px] absolute"><PopupCardTwo /></div>


export default function () {
   const oneRef = useRef<HTMLDivElement>(null);
   const twoRef = useRef<HTMLDivElement>(null);
   const threeRef = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const innerRef=useRef<HTMLDivElement>(null);

   useLayoutEffect(() => {
   
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `top+=${innerRef.current?.scrollHeight} bottom`,
            toggleActions:"play complete reverse complete",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
         }
      });

      tl.to(twoRef.current, {
         delay: 1,
         yPercent: -100,
         y: -80,
         duration: 5
      }).to(oneRef.current, {
         opacity: gsap.utils.interpolate(1, 0.5, 0.5),
         scale: 0.95,
         duration: 5,
         y: -40,
         transformOrigin: "top center"
      }, "<").to(threeRef.current,{
        yPercent:-100
      }).

         to(threeRef.current, {
            delay: 1,
            yPercent: `-=100`,
            y:-100,
            duration: 5
         }).to(twoRef.current, {
            opacity: gsap.utils.interpolate(1, 0.7, 0.5),
            scale: 0.97,
            duration: 5,
            transformOrigin: "top center",
         }, "<")

   })


   return <div>
      <div className="h-[70vh] mb-[50rem] bg-primaryColors-green100 "></div>

      <div className=" h-[100vh] min-h-[700px] overflow-hidden" ref={containerRef}>
         <div className=" boxcon" ref={innerRef} >
            <div>

               <div className="one" ref={oneRef}>
                  <FeatureCard props={{ cardText, popupCardOne, popupCardTwo, ovalResource }} />
               </div>

               <div className="two z-[10] relative " ref={twoRef}>
                  <FeatureCard props={{ cardText, popupCardOne, popupCardTwo, ovalResource }} />
               </div>

               <div className=" z-[20] relative" ref={threeRef}>
                  <FeatureCard props={{ cardText, popupCardOne, popupCardTwo, ovalResource }} />
               </div>
               
            </div>
         </div>
      </div>
      
      <div className="h-[700vh] mb-[50rem]  ">
      <OverviewHeading/>
      </div>
   </div>


}

