import { Fragment } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import LogoSvg from "../../header/svgLogo";
import { SocialChipProp, SocialChip } from "./chip";
import Divider from "./divider";


const style = {
  logoContainer: `
    desktop:w-[13.9vw]
    tab:w-[167px]
    minitab:w-[155px]
    w-[90px]`,
}

export default function SocialSection() {
  return <div>
    <div className="mb-[1.7rem]"><Logo /></div>
    <div><Chips /></div>
    <div className="mt-[6rem] minitab:block hidden"><Divider /></div>
  </div>
}


const chipData: SocialChipProp[] = [
  {
    icon: <ImFacebook />
  },
  {
    icon: <FaInstagram />
  },
  {
    icon: <FaLinkedinIn />
  }
]

function Chips() {
  return <div>
    {chipData.map((item, index) => <Fragment key={index}><SocialChip props={{ icon: item.icon, href: item?.href ?? "" }} /></Fragment>)}
  </div>
}


function Logo() {
  return <div className={style.logoContainer}>
    <LogoSvg />
  </div>
}


