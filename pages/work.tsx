import MobileNav from '../components/view/shared/nav/layout/mobile';
import {BsGlobe} from "react-icons/bs";
import {MdKeyboardArrowDown} from 'react-icons/md';
import { useToggle } from '../hooks/useToggle';
import { LinkBuilder, linkProps, linkModel } from '../components/builder/link';
import { LanguageDropdown } from '../components/view/shared/nav/languageDropdown';
import Nav from '../components/view/shared/nav';




export default function()
{


  return <MobileNav/>
}



function Hmm()
{
  return <div>

  </div>
}


function Hey()
{
  return <div className='givecenter font-[200] desktop:text-[1rem] text-[16px] cursor-pointer '>
        <span className='desktop:text-[2rem] text-[25px]'><BsGlobe/></span>
        <span className='mx-[0.5rem] '>En</span>
       <DropDown/>
       <DropDownCard/>
        </div>
}

function DropDown()
{
  const [toggle,setToggle]=useToggle();
  return <div className='origin-bottom-center ease-in-out transition-all hover:rotate-[180deg] desktop:text-[1.7rem] text-[20px]'>
      <MdKeyboardArrowDown/>
      </div>
}

const style={
  navbarText:`
  font-[400]`
}

const navData: linkProps[] = [
  linkModel({ child: "English", style: style.navbarText }),
  linkModel({ child: "Espanyol", style: style.navbarText }),
]

function DropDownCard()
{

  return <div style={{boxShadow:"rgba(53, 49, 72, 0.09) 0px 2px 8px;"}} className="bg-[white] desktop:p-[1.5rem] desktop:rounded-[1rem] p-[24px] rounded-[16px] dropdown__card">
          <div >
          {navData.map((item, index: number) => <li key={index} className="desktop:py-[0.5rem] desktop:pr-[1.5rem] py-[8px] pr-[32px] block" ><LinkBuilder props={item} /></li>)}
          </div>
        </div>

}