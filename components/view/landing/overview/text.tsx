import React from "react"
import { AppStoreLink, GoogleStoreLink } from "../../../builder/link/storeLink"

const style = {
  container: ` 
    desktop:w-[30vw] desktop:max-w-[100%]
    laptop:w-[450px]
    laptop:pt-[24px] 
    tab:pt-[20px] tab:m-0 
    max-w-[410px] mx-[auto] pt-[15px] px-[20px]`,

  description: `
    desktop:text-[1.67vw]
    laptop:text-[20px] laptop:text-left
    minitab:text-[18px]
    text-[16px] font-[250] text-center`,

  action:`
    desktop:mt-[2vw]
    mobile:flex-row 
    minimobile:flex-col minimobile:gap-[1rem] minimobile:items-center
    justify-between mt-[2rem] flex `
}

 const OverviewTextSection= React.forwardRef<HTMLDivElement>((props,ref)=> {
  return <div className={style.container} ref={ref}>
      <Description/>
      <Action/>
        </div>
})

export default OverviewTextSection;

function Description() {
  return <p className={style.description}>By joining Weltio, you're joining millions of investors worldwide who trade fractional shares, ETFs and cryptos.
    Our easy-to-use platform helps you every step of the way</p>
}

function Action() {
  return <div className={style.action}>
    <AppStoreLink props={{ isDarkmode: true }} />
    <GoogleStoreLink props={{ isDarkmode: true }} />
  </div>
}



