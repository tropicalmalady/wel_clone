import FeatureCard from "../components/builder/card/featureCard";
import { FeatureCardTextProps } from "../components/builder/card/featureCard/cardText";
import Images from "../utility/images";
import { PopupCardOne } from '../components/builder/card/popupCard/v1';
import { PopupCardTwo } from '../components/builder/card/popupCard/v2';
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { OvalElementProps } from '../components/builder/ovalElement/index';
import { useAnimation,motion } from "framer-motion";
import { useEffectOnce } from "../hooks";



const cardText: FeatureCardTextProps = {
   heading: "Safe and easy access to USD",
   content:"The US dollar is one of the most stable currencies on the planet. With Weltio, you can open a fully regulated and fully protected USD account",
 };
const ovalResource:OvalElementProps= { resource: Images.Landing.feat1Vid}
const popupCardOne=<div className="minitab:top-[30px] minitab:left-[-70px] left-[-50px] top-[50%] absolute z-[1000]"><PopupCardOne/></div>  
const popupCardTwo=  <div className="minitab:right-[-20px] minitab:bottom-[10px] right-[-60px] bottom-[-40px] absolute"><PopupCardTwo/></div>


export default function()
{
   gsap.registerPlugin(ScrollTrigger);

   const boxRef = useRef<HTMLDivElement>(null);
   let q=gsap.utils.selector(boxRef);


  
   return   <div>

      <div className="h-[70vh] mb-[50rem] bg-primaryColors-green100 "></div>
      <div ref={boxRef} className="border-[1px] boxcon  ">
      <FeatureCard props={{cardText,popupCardOne,popupCardTwo,ovalResource}} />
      
      <div className="two z-[10] relative">
      <FeatureCard props={{cardText,popupCardOne,popupCardTwo,ovalResource}} />
      </div>
      <div className="two z-[20] relative">
      <FeatureCard props={{cardText,popupCardOne,popupCardTwo,ovalResource}} />
      </div>
      </div>
      </div>
   
   
}





// import { useAnimation, useInView ,useScroll,motion, useTransform} from "framer-motion";
// import { useRef, useEffect } from 'react';
// import { start } from "repl";

// export default function()
// {
//    const introRef=useRef<HTMLDivElement>(null)
//    const isIntroInView=useInView(introRef);

//    const firstDivRef=useRef<HTMLDivElement>(null);
//    const isFirstDivInView=useInView(firstDivRef);

//    const ref=useRef<HTMLDivElement>(null);

//    const secondDivRef=useRef<HTMLDivElement>(null);
//    const isSecondDivInView=useInView(secondDivRef);
//    const { scrollYProgress } = useScroll();
//    const y=useTransform(scrollYProgress,[0,1],["0","-90vh"])
//    const opacity=useTransform(scrollYProgress,[0,1],[1,0.5]);
//    const scale=useTransform(scrollYProgress,[0,1],[1,0.9]);

//    const shouldStickFirstDiv= isFirstDivInView && !isIntroInView;

//    useEffect(()=>{
//    const divHeight=secondDivRef.current?.scrollHeight!

//    return scrollYProgress.onChange(x=>console.log("scroll  is",x))

//    },[])

//    useEffect(()=>{
//       console.log("is intro div ",isIntroInView);
//       console.log("is first div",isFirstDivInView)

//       },[isFirstDivInView,isIntroInView])

//    return <div >
//       <div className="h-[700px] giveborder border-[blue] pb-[400px]" ref={introRef}> </div>
//       <div className="h-[100vh]" ref={ref}>
//            <div className={`h-[100%] giveborder  ${shouldStickFirstDiv ?"fixed left-0 right-0 top-0 bottom-0 ":""}`} ref={firstDivRef}>

//              <div className="h-[100vh] p-[2rem]">
//                <motion.div className={`h-[100%] giveborder  bg-secondaryColors-fadedPurple relative`} style={shouldStickFirstDiv ?{opacity,scale}:{}}>   </motion.div>
//             </div>

//             <motion.div className="h-[100vh] p-[2rem]" ref={secondDivRef} style={shouldStickFirstDiv ?{y}:{}}>
//                <div className={`h-[100%] giveborder  bg-secondaryColors-fadedBlue relative`}>   </div>
//             </motion.div>

//             <motion.div className="h-[100vh] py-[2rem]" ref={secondDivRef} style={shouldStickFirstDiv ?{y}:{}}>
//                <div className={`h-[100%] giveborder  bg-secondaryColors-pink relative`}>   </div>
//             </motion.div>

//       </div>

//       </div>

//       {/* <motion.div className="h-[90vh] giveborder m-[2rem] bg-secondaryColors-blue" ref={secondDivRef} style={{ translateY}}> </motion.div> */}

//          </div>
// }

// function Container()
// {
//    const ref=useRef<HTMLDivElement>(null);
//    const { scrollYProgress } = useScroll({ target: ref });

//    return <motion.div ref={ref} style={{translateY:scrollYProgress }} className="h-[90vh] giveborder m-[2rem] bg-secondaryColors-pink">

//          </motion.div>
// }

// export default function()
// {
//    const introRef=useRef<HTMLDivElement>(null)
//    const firstDivRef=useRef<HTMLDivElement>(null);
//    const secondDivRef=useRef<HTMLDivElement>(null);
//    const thirdDivRef=useRef<HTMLDivElement>(null);

//   const containerDivRef=useRef<HTMLDivElement>(null);

//   const isIntroInView=useInView(introRef);
//   const isFirstDivInView=useInView(firstDivRef);
//   const isSecondDivInView=useInView(secondDivRef);
//   const isThirdDivInView=useInView(thirdDivRef);

//   const shouldPushSecondDiv= isFirstDivInView && !isIntroInView;

//   const controler=useAnimation();

//   const { scrollYProgress } = useScroll({
//   container:containerDivRef
//   });

//   const trans=useTransform(scrollYProgress,[],[])
//   useEffect(()=>{

//   },[]);

//    return <>
//     <div className="h-[70vh] giveborder border-[blue] mb-[40vh]"> </div>
// <div className="giveborder border-[black] h-[100vh] overflow-scroll" ref={containerDivRef}>

//  <div className="h-[90vh] giveborder m-[2rem]" ref={firstDivRef}> </div>
//  <motion.div className="h-[90vh] giveborder m-[2rem]" ref={secondDivRef}> </motion.div>
//  <div className="h-[90vh] giveborder m-[2rem]" ref={thirdDivRef}> </div>
// </div>

//    </>

// }

//crush
//chsing

// import {AnimatePresence, motion, useAnimation, useAnimationControls, useMotionValue} from "framer-motion";import React, { useEffect, useRef } from "react";;
// import create from 'zustand';
// import { ReadableByteStreamController } from "stream/web";
// import { useEffectOnce } from "../hooks";





// export default function()
// {

//   return <>
//        <div>
//           <Button/>
//        </div>
//         </>
// }

// function Button()
// {
// const controls=useAnimationControls();
// const rippleDiv=useRef<HTMLDivElement>(null);

// useEffect(()=>{
//    controls.start({

//    })

// },[]);

// function handleClick(e:React.MouseEvent<HTMLElement>)
// {

//    const target=e.target as HTMLElement;
//    const rect=target.getBoundingClientRect();
//    const left = e.clientX - rect.left;
//    const top = e.clientY - rect.top;

//   const element=  rippleDiv.current as HTMLElement;

//   element.style.left=left + "px";
//   element.style.top= top +"px";

// }

//    return <div onMouseOver={handleClick}    className="ripple-container"  >
//         <div ref={rippleDiv}></div>
//         {/* <p classNameName="text">click</p> */}
//          </div>
// }

// interface ShowRippleState
// {
// isRippleShown:boolean;
// setIsRippleShown(isRippleShown:boolean) : void
// }

// const useShowRipple=create<ShowRippleState>((set)=>({
//    isRippleShown:false,
//    setIsRippleShown:(isRippleShown:boolean)=>{
//       set({isRippleShown})
//    }
// }))

// type MouseDimensions= [number,number];
// interface MouseCoordinateState
// {
//   dimensions:MouseDimensions,
//   setDimensions(dimensions:MouseDimensions): void
// }

// const useMouseCoordinates=create<MouseCoordinateState>((set)=>({
// dimensions:[0,0],
// setDimensions:(dimensions:MouseDimensions)=>{
//    set({dimensions})
// }
// }));
