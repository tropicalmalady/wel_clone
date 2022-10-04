import { AppStoreLink, GoogleStoreLink } from "../../builder/link/storeLink"

const style = {
  container: ` 
    desktop:w-[30vw] desktop:max-w-[100%]
    laptop:pt-[24px] 
    tab:pt-[20px] tab:m-0
    minitab:max-w-[410px] minitab:mx-[auto] 
    pt-[15px] mx-[20px] giveborder border-[10px]`,

  description: `
    desktop:text-[1.3vw]
    laptop:text-[20px] laptop:text-left
    minitab:text-[18px] 
    text-[16px] font-[250] text-center`,

  action:`
    desktop:mt-[2vw]
    mobile:flex-row 
    justify-between mt-[2rem] flex
    minimobile:flex-col minimobile:gap-[1rem] minimobile:items-center`
}

export default function OverviewTextSection() {
  return <div className={style.container}>
      <Description/>
      <Action/>
        </div>
}

function Description() {
  return <p className={style.description}>By joining Weltio, you're joining millions of investors worldwide who trade fractional shares, ETFs and cryptos.
    Our easy-to-use platform helps you every step of the way</p>
}

function Action() {
  return <div className={style.action}>
    <GoogleStoreLink props={{ isDarkmode: true }} />
    <AppStoreLink props={{ isDarkmode: true }} />
  </div>
}



