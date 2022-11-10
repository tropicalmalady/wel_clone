import { useEffect, useRef } from "react";
import { AnimateBottomPopupCard } from "../../../../../utility/animations";
import Images from "../../../../../utility/images";

const style = {
  container: `
    desktop:w-[14.16vw] 
    laptop:w-[190px] 
    minitab:w-[150px] 
    w-[140px] popup-card p-[0.6rem] `,

  subtitle: `
    text-[0.58rem] font-Twk uppercase font-[700]`,

  statsOne: `
    text-[0.75rem] font-[600] font-Museo `,

  statsTwo: `
    text-[0.5rem] font-[600] font-Museo  text-primaryColors-green100`,

  button: `
    inline-block font-Twk bg-primaryColors-purple100 font-[700] text-[0.4rem] py-[0.25rem] px-[0.5rem] rounded-[1rem] mt-[0.67rem] mb-[0.33rem]`,
};

export default function PopupCardSix() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AnimateBottomPopupCard(cardRef);
  }, []);

  return (
    <div className={style.container} ref={cardRef}>
      <div className="flex justify-between">
        <div className={style.subtitle}>
          <span> ETF</span>
        </div>

        <div className="flex flex-col gap-[0.1rem] px-[0.667rem] mb-[0.667rem]">
          <span className={style.statsOne}>$0.078</span>
          <span className={style.statsTwo}>+$0.0003</span>
        </div>
      </div>

      <div className="w-[85%] h-[100%]">
        <img
          src={Images.Landing.popupCard6.src}
          alt="popupCard6"
          className="w-[100%] h-[100%]"
        />
      </div>

      <span className={style.button}>Comprar</span>
    </div>
  );
}
