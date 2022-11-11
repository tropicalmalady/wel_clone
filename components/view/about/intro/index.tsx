import Images from "../../../../utility/images";
import gsap from "gsap";
import { useEffect,useRef } from 'react';

export default function AboutIntro() {
  const headerRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const q=gsap.utils.selector(headerRef);
    const bannerDiv=q(".header__banner");
    const textDiv=q(".header__text");

    const tl=gsap.timeline();
    tl.fromTo(bannerDiv,{
      y:"-1rem",
    },{
      y:0,
      duration:0.5
    }).fromTo(textDiv,{
      y:"3rem",
    },{
      y:0,
      duration:0.5
    },">")
  },[]);


  return (
    <div className="aboutintro__bg overflow-hidden relative pt-[6rem] laptop:pb-[12rem] tab:pb-[11rem] minitab:pb-[10rem] mobile:pb-[8rem] pb-[6rem]" ref={headerRef}>
      <div className="relative">
        <div className="absolute left-[-20%] right-[-5%] top-[-30%] minitab:pt-[3.5rem] pt-[2.5rem] z-[1] header__banner">
          <img src={Images.About.banner.src} className="w-[100%]" />
        </div>
        <div className="givelayout header__text">
          <p className="font-[300] minitab:text-[1.5rem] text-[1rem]">
            We are naturally
          </p>
          <div className="">
            <h1 className="font-[300] tab:text-[6.5rem] minitab:text-[4.5rem] text-[3rem] font-Museo leading-[130%]">
              <span className="relative z-[-1]">Unsat</span>
              <span className="relative z-[10]">isfied</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
