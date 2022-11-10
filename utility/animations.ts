import gsap from "gsap";
import { RefObject } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimateTopPopupCard<T extends HTMLElement>(
  ref: RefObject<T>
) {
  gsap.fromTo(
    ref.current,
    {
      rotate: 60,
      opacity: 0,
    },
    {
      rotate: 0,
      delay: 0.5,
      opacity: 1,
      duration: 2,
      ease: "elastic.out(1, 0.4)",
      transformOrigin: "bottom right",
      scrollTrigger: {
        trigger: ref.current,
      },
    }
  );
}

export function AnimateBottomPopupCard<T extends HTMLElement>(
  ref: RefObject<T>
) {
  gsap.fromTo(
    ref.current,
    {
      rotate: 60,
      opacity: 0,
    },
    {
      rotate: 0,
      opacity: 1,
      duration: 2,
      delay: 0.7,
      ease: "elastic.out(1, 0.4)",
      transformOrigin: "top left",
      scrollTrigger: {
        trigger: ref.current,
      },
    }
  );
}


export function ScaleFromZeroInView<T extends HTMLElement>(ref: RefObject<T> | T[],customProps:{}={}) {
   let selector;
  if(!Array.isArray(ref)) selector=ref.current; else selector=ref;
  
  gsap.fromTo(selector,{
    scale:0
  },{
    scale:1,
    duration:0.5,
    ease:"easeOut",
    ...customProps,
    scrollTrigger: {
      trigger: selector,
    },
  })
}


export function TranslateInView<T extends HTMLElement>(ref: RefObject<T> | T[],customProps:{}={}) {
  let selector;
 if(!Array.isArray(ref)) selector=ref.current; else selector=ref;
 
 gsap.fromTo(selector,{
   y:"3rem"
 },{
   y:0,
   duration:0.5,
   ease:"easeOut",
   ...customProps,
   scrollTrigger: {
     trigger: selector,
   },
 })
}