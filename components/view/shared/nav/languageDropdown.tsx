import { linkProps, linkModel, LinkBuilder } from "../../../builder/link";
import { BsGlobe } from "react-icons/bs";
import { MdKeyboardArrowDown } from 'react-icons/md';

const style = {
  container: `
    desktop:rounded-[1rem] desktop:p-[1.5rem] 
    bg-[white] p-[24px] rounded-[16px] dropdown__card hidden`,

  navbarText: `
    font-[400]`,

  listStyle: `
    desktop:py-[0.5rem] desktop:pr-[1.5rem] 
    py-[8px] pr-[32px] block`
}

const navData: linkProps[] = [
  linkModel({ child: "English", style: style.navbarText }),
  linkModel({ child: "Espanyol", style: style.navbarText }),
]

function DropdownCard() {

  return <div style={{ boxShadow: "rgba(53, 49, 72, 0.09) 0px 2px 8px" }} className={style.container}>
    <ul >
      {navData.map((item, index: number) => <li key={index} className={style.listStyle} ><LinkBuilder props={item} /></li>)}
    </ul>
  </div>
}

function DropdownArrow() {

  return <div className='origin-bottom-center ease-in-out transition-all dropdown__arrow desktop:text-[1.2rem] text-[20px] inline-block align-bottom '>
    <MdKeyboardArrowDown />
  </div>
}


export function LanguageDropdown() {
  return <div className='font-[200] desktop:text-[1rem] text-[16px]'>
    <span className='desktop:text-[1.3rem] text-[25px] inline-block align-top'><BsGlobe /></span>
    <span className='ml-[0.5rem] mr-[0.25rem] inline-block'>En</span>
    <div className="dropdown__container inline-block cursor-pointer ">
      <DropdownArrow />
      <div className="relative z-[10]">
        <div className="absolute translate-x-[-50%] pt-[1rem]">
          <DropdownCard />
        </div>
      </div>
    </div>
  </div>
}