import MobileNav from "./layout/mobile";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import DesktopNav from "./layout/desktop";
import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Nav()
{
  const isNotMobile = useMediaQuery('(min-width: 768px)');
  const [hasMounted,setHasMounted]=useState(false);

  const navBarRef=useRef<HTMLDivElement>(null);

  
  useEffect(()=>{
    setHasMounted(true);

    const slideInNav=gsap.to(navBarRef.current,{
     paused:true,
    yPercent:-100,
    duration:0.2,
    ease:"expo.out"
    });
 
    ScrollTrigger.create({
     start:"top top",
     end:"max",
     onUpdate:({direction,isActive})=>{
     if(direction == -1) slideInNav.reverse();
     if(direction == 1) slideInNav.play();
     else if (direction == 1 && isActive ==true) slideInNav.play();
     }
    })
   },[])

  useEffect(()=>{
  
  },[])

  return <div className="fixed left-0 right-0 z-[100]" ref={navBarRef}>
   { hasMounted? isNotMobile ? <DesktopNav/> : <MobileNav/>: <></>}
  </div>
   
     
}