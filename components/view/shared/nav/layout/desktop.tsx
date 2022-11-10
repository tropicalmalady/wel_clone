import { LinkBuilder, linkProps, linkModel } from "../../../../builder/link";
import WeltioLogo from "../../../../builder/logo";
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import { LanguageDropdown } from "../languageDropdown";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const style={
   navbarContainer:`
   desktop:max-w-[100%] desktop:px-[12vw] desktop:pt-[1.5rem] 
   laptop:max-w-[1400px]
   minitab:px-[80px] minitab:pt-[25px]
   px-[20px] mx-[auto] pt-[20px]`,

   navbarLogo:`
   desktop:mr-[4rem]
   w-[4.5rem] h-[1.3rem] mr-[50px] inline-block align-middle `,

   navbarText:`
   desktop:text-[0.85rem] desktop:mr-[2.5rem]
   minitab:text-[16px]
   text-[32px] font-[400] mr-[40px] inline-block align-bottom `,

   buttonBorder:`
   desktop:w-[12.4vw] desktop:h-[4.58vw]
   relative flex cursor-pointer items-center justify-center text-[0.7rem] w-[149px] h-[55px] font-[400]`
}


const headerNavData: linkProps[] = [
  linkModel({ child: <WeltioLogo />, style: style.navbarLogo }),
  linkModel({ child: "About", style: style.navbarText,href:"/about" }),
  linkModel({ child: "Contact", style: style.navbarText ,href:"#contact"}),
]

export default function DesktopNav() {
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {


    const slideInNav = gsap.to(navBarRef.current, {
      paused: true,
      yPercent: -100,
      duration: 0.2,
      ease: "expo.out",
    });

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: ({ direction, isActive }) => {
        if (direction == -1) slideInNav.reverse();
        if (direction == 1) slideInNav.play();
        else if (direction == 1 && isActive == true) slideInNav.play();
      },
    });
  }, []);

  useEffect(() => {}, []);

  return <nav>
    <div className="fixed left-0 right-0 z-[100] nav" ref={navBarRef} >
    <div className={style.navbarContainer}>
      <div className="flex justify-between items-center">
        <ul className="flex">
          {headerNavData.map((item, index: number) => <li key={index} className="flex items-center" ><LinkBuilder props={item} /></li>)}  
        <li className={style.navbarText}>
        <LanguageDropdown/>
        </li>
        </ul>
         <div className="minitab:inline-block minitab:align-middle hidden">
          <HeaderDownloadButton/>
         </div>
      </div>
      </div>
    </div>
  </nav>
}


function HeaderDownloadButton()
{
const buttonRef=useRef<HTMLButtonElement>(null);
  function handleMouseEnter()
  {
    gsap.fromTo(buttonRef.current,{
      scaleX: 1,
      scaleY: 1,
    },{
      scaleX: 1.03,
      scaleY: .98,
      ease: "elastic.out(1, 0.3)",
      duration: 1,})
  }

  function handleMouseLeave()
  {
    gsap.fromTo(buttonRef.current,{
      scaleX: 1.03,
      scaleY: .98,},{
      scaleX: 1,
      scaleY: 1,
      ease: "elastic.out(1, 0.3)",
      duration: 1, })
  }

  return    <button className={style.buttonBorder} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={buttonRef} >
         <span className="btn__nav--bg" ></span>
         <span className=""> Download</span>
            </button>
            
}


