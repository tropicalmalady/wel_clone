import { useEffect, useRef, Fragment, useState, useLayoutEffect } from 'react';
import gsap from "gsap";

export default function ChipMarqueeSection() {
  return (
    <section className="py-[4rem] max-w-[100vw] overflow-hidden">
      <div className="rotate-[-3deg] ">
        <ScrollChipContainer />
      </div>
    </section>
  );
}

const repeatArray: string[] = ["Deposit", "Investment", "Earnings", "Savings"];
const scrollChipsData: string[] = [...repeatArray, ...repeatArray, ...repeatArray, ...repeatArray]


interface DimensionState
{
  viewportWidth:number,
  scrollWidth:number,
}

function ScrollChipContainer() {
  const [{viewportWidth,scrollWidth},setDimension]=useState<DimensionState>({
    viewportWidth:0,
    scrollWidth:0
  });
  const containerRef=useRef<HTMLDivElement>(null);


  function handleResize()
  {
    setDimension({
      viewportWidth:containerRef.current?.offsetWidth!,
      scrollWidth:containerRef.current?.scrollWidth!   })
  }


  useLayoutEffect(() => {
    handleResize();
  }, []);


  useLayoutEffect(()=>{

    console.log(viewportWidth,scrollWidth)

    gsap.set(containerRef.current,{
     x:0
    })
    gsap.to(containerRef.current, {
      x: viewportWidth - scrollWidth,
      duration: 20,
      repeatDelay: 0,
      repeat: -1,
      ease: "linear"
    })
  },[viewportWidth,scrollWidth])

  useLayoutEffect(()=>{
    window.addEventListener("resize",handleResize);
    ()=>window.removeEventListener("resize",handleResize);
  },[]);

  return <div className="flex" ref={containerRef}>
    {scrollChipsData.map((item, index) => <Fragment key={index}> <ScrollChip child={item} /></Fragment>)}
  </div>
}

function ScrollChip({ child }: { child: string }) {
  return <div className=" 
   minitab:text-[1.8rem] minitab:px-[1.5rem] minitab:py-[0.7rem] 
 bg-primaryColors-purple200 text-[1rem] px-[1rem] py-[0.6rem] rounded-[1.8rem] font-[350]">
    {child}
  </div>
}
