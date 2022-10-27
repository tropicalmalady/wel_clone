import { RiLinkedinFill } from "react-icons/ri"
import { LinkBuilder } from "../../../builder/link"

interface StaffImageCaptionProps
{
  name:string,
  position:string,
  link?:string
}

export default function StaffImageCaption({props}:{props:StaffImageCaptionProps})
{
  return <div className="text-center text-[0.8rem] font-[350] mt-[1.5rem]">
    <h3>{props.name}</h3>
    <div className="mb-[0.3rem] text-primaryColors-green300">{props.position}</div>
     <LinkBuilder props={{href:"/",child: <span className="rounded-[50%] p-[0.3rem] inline-block text-white bg-primaryColors-green300 ">
     <RiLinkedinFill/>
    </span>}}/>
  </div>
}

