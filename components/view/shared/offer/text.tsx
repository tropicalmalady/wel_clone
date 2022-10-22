import { AppStoreLink, GoogleStoreLink } from "../../../builder/link/storeLink";

const style = {
  wrapper: `
    tab:max-w-[45%] 
    minitab:max-w-[70%]  minitab:px-[0] 
    max-w-[100%] px-[20px] text-center  mx-[auto]`,

  title: `
    desktop:text-[4.17vw]
    laptop:text-[50px]
    tab:text-[40px]
    minitab:text-[35px]
    text-[35px] font-Museo font-[300] leading-[120%]`,

  content: `
    desktop:text-[1.375vw]
    tab:text-[20px]
    minitab:text-[18px] 
    text-[14px] font-[200] leading-[20px] minitab:max-w-[65%]  max-w-[100%] mx-[auto] leading-[150%]`,

  actions: `
    flex justify-center desktop:gap-[1vw] gap-[0.5em]  mobile:flex-row minimobile:flex-col minimobile:gap-[1rem] minimobile:items-center`,
};

export default function OfferText() {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h2 className="minitab:mb-[0.7em] mb-[0.5em]">
          You're in the driver's seat
        </h2>
      </div>
      <div className={style.content}>
        <div className="minitab:mb-[2em] mb-[1em]">
          <p>
            What do you want your bank account to look like in 10 years? Weltio
            clears the path to shares of some of the world's most exciting
            companies
          </p>
        </div>
        <Action />
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className={style.actions}>
      <GoogleStoreLink props={{ isDarkmode: true }} />
      <AppStoreLink props={{ isDarkmode: true }} />
    </div>
  );
}
