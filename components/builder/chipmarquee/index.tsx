import React, { useRef } from "react";
import {motion, useAnimation} from "framer-motion";
import { useEffectOnce } from "../../../hooks";

export default function () {
  return (
    <section className="py-[4rem]">
      <div className="rotate-[-3deg] max-w-[100vw] overflow-hidden">
          <ScrollChipContainer/>
      </div>
    </section>
  );
}

const repeatArray:string[]=["Deposit","Investment","Earnings","Savings"];
const scrollChipsData:string[]=[...repeatArray,...repeatArray,...repeatArray,...repeatArray]

function ScrollChipContainer()
{  
 const containerRef=useRef<HTMLDivElement>(null);
 const controler=useAnimation();

 useEffectOnce(()=>{
   const viewPortWidth=containerRef.current?.clientWidth!;
   const divWidth=containerRef.current?.scrollWidth!

 controler.start({
   x:  divWidth-10 < viewPortWidth ? -1800 : viewPortWidth-divWidth ,
   transition:{
      duration:15,
      repeat:Infinity,
      repeatDelay:0
     }
 })
 });

     return <motion.div className="flex" ref={containerRef}  animate={controler}>
      {scrollChipsData.map((item,index)=><React.Fragment key={index}>
         <ScrollChip child={item}/>
      </React.Fragment>)}
           </motion.div>
}

function ScrollChip({child}:{child:string})
{
   return  <div className="
   desktop:px-[2.2rem] desktop:py-[1.9rem]  desktop:rounded-[4.5rem]
   laptop:text-[2.5rem] laptop:px-[2rem]  laptop:py-[1.2rem] laptop:rounded-[4rem] 
   minitab:text-[1.8rem] minitab:px-[1.5rem] minitab:py-[0.7rem] 
 bg-primaryColors-purple200 text-[1rem] px-[1rem] py-[0.6rem] rounded-[1.8rem]  text-primaryColors-purple700">
         {child}
        </div>
}
