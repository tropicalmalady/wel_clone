import AboutIntro from "../components/view/about/intro";
import Nav from "../components/view/shared/nav";
import Images from '../utility/images';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import MissionSection from "../components/view/about/mission";
import {RiLinkedinFill} from "react-icons/ri";
import { LinkBuilder } from "../components/builder/link";

export default function()
{
  return <div className="givecenter">

    <StaffImageCaption props={{
      name:"hflkfn",
      position:"dfnkfd"
    }}/>
   

  </div>
}

// export default function ()
// {
//   return <>
//   <AboutIntro/>
//   <MissionSection/>
//   </> 
// }


interface StaffImageCaptionProps
{
  name:string,
  position:string,
  link?:string
}

function StaffImageCaption({props}:{props:StaffImageCaptionProps})
{
  return <div className="text-center text-[0.8rem] font-[350]">
    <h3>{props.name}</h3>
    <div className="mb-[0.3rem] text-primaryColors-green300">{props.position}</div>
     <LinkBuilder props={{href:"/",child: <span className="rounded-[50%] p-[0.3rem] inline-block text-white bg-primaryColors-green300 ">
     <RiLinkedinFill/>
    </span>}}/>
  </div>
}


