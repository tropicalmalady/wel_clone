import gsap from "gsap";
import { RefObject } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimateTopFeatureCard<T extends HTMLElement>(ref:RefObject<T>)
{
    gsap.fromTo(ref.current,{
        rotate: 60,
        opacity:0
    },{
        rotate: 0,
        delay:0.5,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.4)",
        transformOrigin:"bottom right",
        scrollTrigger:{
            trigger:ref.current,      
        }
    })
}

export function AnimateBottomFeatureCard<T extends HTMLElement>(ref:RefObject<T>)
{
    gsap.fromTo(ref.current,{
        rotate: 60,
        opacity:0
    },{
        rotate: 0,
        opacity: 1,
        duration: 2,
        delay:0.7,
        ease: "elastic.out(1, 0.4)",
        transformOrigin:"top left",
        scrollTrigger:{
            trigger:ref.current,      
        }
    })
}