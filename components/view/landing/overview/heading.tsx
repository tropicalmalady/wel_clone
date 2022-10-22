import Image from "next/image";
import Images from "../../../../utility/images";

const style = {
  heading: `
  desktop:mb-[0rem]
  minitab:text-[6rem] minitab:leading-[110%] 
  mobile:text-[3.3rem] 
  text-[3rem] leading-[120%] font-[350] font-Museo mb-[4rem]`,

  imageWrapper: `
  desktop:w-[4rem] desktop:border-[0.125rem]
  laptop:top-[0.67rem]
  minitab:max-w-[4rem] minitab:top-[0.5rem]
  mobile:max-w-[2.4rem] 
  max-w-[2rem] relative tab-[0rem] border-[1.5px] rounded-[83%/60%]`,

  textOne: `
  desktop:gap-[1.5rem] desktop:pr-[4rem]
  laptop:pr-[80px] laptop:gap-[45px]
  minitab:gap-[40px] minitab:pr-[60px] minitab:gap-[15px]
  flex items-center justify-center pr-[30px] gap-[15px]`,

  textTwo: `
  desktop:gap-[1.5rem] 
  laptop:gap-[45px]
  minitab:gap-[40px]
  flex items-center gap-[15px]`
}

export default function OverviewHeading() {
  return <div className={style.heading}>
    <div className="flex flex-col items-center">
      <h2 className={style.textOne}>Investing <SignalCue /> </h2>
      <h2 className={style.textTwo}> <HandCue />  made easy  </h2>
    </div>
  </div>
}

function HandCue() {
  return <div className={style.imageWrapper}>
    <img src={Images.Landing.handCue.src} alt="handCue" className="w-[100%] h-[100%]" />
  </div>
}

function SignalCue() {
  return <div className={style.imageWrapper}>
    <img src={Images.Landing.signalCue.src} alt="signalCue" className="w-[100%] h-[100%]" />
  </div>
}