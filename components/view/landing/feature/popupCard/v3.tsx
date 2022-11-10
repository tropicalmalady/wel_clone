import { useEffect, useRef } from "react";
import { AnimateTopPopupCard } from "../../../../../utility/animations";

const style = {
  subtitle: `
    text-[0.4rem] font-Twk uppercase font-[300] tracking-[0.06em]`,

  title: `
    font-bold text-[0.83rem] mt-[0.33rem]`,

  buttonContainer: `
    flex gap-[0.1rem] text-primaryColors-purple700 font-[400] mr-[1rem]`,

  button: (color: string) => `
    ${color} text-[0.4rem] inline-block font-Twk font-[500] px-[0.5rem] py-[0.2rem] rounded-[1rem]`,
};

export function PopupCardThree() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AnimateTopPopupCard(cardRef);
  }, []);

  return (
    <div className="popup-card__dark" ref={cardRef}>
      <div className={style.subtitle}> STOCKS PORTFOLIO</div>
      <div className={style.title}> $43,091.4 USD</div>
      <div className="text-[0.4rem] mt-[0.1rem] mb-[0.5rem]">
        <span className="opacity-40">Hay +12.0</span>
        <span className="text-primaryColors-green300 ml-[0.1rem]"> +25%</span>
      </div>
      <div className={style.buttonContainer}>
        <span className={style.button("bg-primaryColors-purple100")}>
          Depositar
        </span>
        <span className={style.button("bg-primaryColors-cream300")}>
          Descubre
        </span>
      </div>
    </div>
  );
}
