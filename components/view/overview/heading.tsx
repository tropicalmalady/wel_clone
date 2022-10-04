import Image from "next/image";
import Images from "../../../utility/images";

const style = {
  heading: `
  desktop:text-[210px]  desktop:leading-[initial]
  laptop:text-[140px] laptop:leading-[160px]
  tab:text-[100px]
  minitab:text-[80px]
  text-[50px] font-[300] font-Museo `,

  imageWrapper: `
  desktop:max-w-[100px]
  laptop:max-w-[90px] laptop:top-[20px]
  minitab:max-w-[60px]
  max-w-[40px] relative top-[10px]`,

  textOne: `
  desktop:gap-[60px] desktop:pr-[130px]
  laptop:pr-[80px] 
  tab:gap-[30px]
  minitab:pr-[60px] minitab:gap-[15px]
  flex items-center justify-center pr-[30px] gap-[5px]`,

  textTwo: `
  laptop:gap-[45px]
  minitab:gap-[40px]
  flex items-center gap-[10px]`
}

export default function OverviewHeading() {
  return <div className={style.heading}>
    <div className="flex flex-col items-center">
      <h2 className={style.textOne}>Investing <HandCue /> </h2>
      <h2 className={style.textTwo}> <SignalCue /> Made Easy  </h2>
    </div>
  </div>
}

function HandCue() {
  return <div className={style.imageWrapper}>
    <Image src={Images.Landing.handCue} placeholder="blur" alt="handCue" />
  </div>
}

function SignalCue() {
  return <div className={style.imageWrapper}>
    <Image src={Images.Landing.signalCue} placeholder="blur" alt="signalCue" />
  </div>
}