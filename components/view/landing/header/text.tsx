import Images from "../../../../utility/images"
import { AppStoreLink, GoogleStoreLink } from "../../../builder/link/storeLink"

const style={
    headingContainer:`
    tab:text-[2.7rem] tab:max-w-[100%] tab:mx-[initial] tab:mt-[0]
    minitab:text-[3.2rem] minitab:max-w-[60%] 
    font-[350] font-Museo text-[2.5rem] leading-[140%] mb-[1.5rem] mx-auto mt-[3rem] `,

    bodyContainer:`
    desktop:max-w-[80%] 
    laptop:max-w-[67%] 
    tab:max-w-[80%] tab:mx-[initial]
    minitab:max-w-[50%] leading-[160%] mx-auto`,

    imageWrapper: `
    desktop:w-[2rem] 
    laptop:top-[0.33rem]
    minitab:max-w-[2rem] 
    mobile:max-w-[1.8rem] 
    max-w-[1.5rem] inline-block mx-[0.7rem]`,

    action:`
    desktop:mt-[2vw]
    minitab:justify-between
    mobile:flex-row mobile:justify-center 
    minimobile:flex-col minimobile:gap-[1rem] minimobile:items-center
    mt-[2rem] flex `
}

export default function TextLayout()
{
  return <div className="tab:text-left minitab:text-center text-left">
    <TextHeading/>
    <TextBody/>
  </div>
}

function TextHeading() {
  return <div className={style.headingContainer}>
      <h1> <span>More ways</span>
      <div className={style.imageWrapper}><img src={Images.Landing.money.src} alt="moneyCue" className="w-[100%] h-[100%]" /></div>
        <span>to grow</span>
        <div className={style.imageWrapper}><img src={Images.Landing.stats.src} alt="statsCue" className="w-[100%] h-[100%]" /></div>
        <span>your money</span>
      </h1>
    </div>
}


function TextBody()
  {
    return <div className={style.bodyContainer}>
        <div className="mb-[2rem] font-[250]">
        <p>Want to expand your reach? Get access to American and crypto markets with a multi-currency account</p>
        </div>
         <Action/>
         </div>
  }
  
  

  function Action() {
    return <div className={style.action}>
      <AppStoreLink/>
      <GoogleStoreLink/>
    </div>
  }
  
  


