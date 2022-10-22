import WeltioLogo from "../../../../builder/logo"
import { LanguageDropdown } from "../languageDropdown"
import { useToggle } from "../../../../../hooks/useToggle";
import Hamburger from "../../../../builder/hamburger";
import { useEffect, useRef } from 'react';
import { LinkBuilder, linkModel, linkProps } from "../../../../builder/link";
import gsap from "gsap";

const style={
    container:(toggle:boolean)=>`
    px-[20px] pt-[20px]  ${toggle ? "h-[100vh] bg-primaryColors-cream100":""}`,

    logo:`
    w-[4.5rem] h-[1.3rem] mr-[50px] inline-block align-middle `,

    listStyle:`
    text-[32px] font-[400] mb-[40px] tracking-[0.02rem] overflow-hidden`,


  }

export default function MobileNav()
{
    const [toggle,handleToggle]=useToggle();
   
    useEffect(() => {
        toggle
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "scroll");
      }, [toggle]);

 return <div className={style.container(toggle)} >
    <div className="flex">
       <div className={style.logo}> <WeltioLogo/> </div>
      {toggle &&  <LanguageDropdown/> }
       <div className="ml-[auto]">
    <Hamburger props={{
      toggle,handleToggle
    }}/>
    </div> 
       </div>
       {toggle && <NavLinks/>}
       </div>
}


  const navData: linkProps[] = [
    linkModel({ child: "About" ,style:"nav__link" }),
    linkModel({ child: "Contact",style:"nav__link" }),
]
  
function NavLinks()
{
    const navRef=useRef<HTMLDivElement>(null);

    useEffect(()=>{
    const q=gsap.utils.selector(navRef);
    const linkDiv=q(".nav__link");

    gsap.fromTo(linkDiv,{
     y:40
    },{
     y:0,
     duration:0.4,
     ease:"easeIn"
    })

    },[])

    return <div className="h-[100%] mt-[60px]" ref={navRef}>
         <ul >
            {navData.map((item, index: number) =><li key={index} className={style.listStyle} ><LinkBuilder props={item} /></li>)}
            </ul>
     </div>

}