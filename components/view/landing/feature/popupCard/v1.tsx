import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { AnimateTopPopupCard } from "../../../../../utility/animations";

gsap.registerPlugin(ScrollTrigger);

const style = {
  subtitle: `
    text-[0.4rem] uppercase font-[300] tracking-[0.06em]`,

  title: `
    font-bold text-[0.833rem] font-Museo mt-[0.1rem] mb-[0.5rem] font-Twk `,

  buttonContainer: `
    flex gap-[0.2rem] `,

  button: (color: string) => `
    ${color} text-[0.4rem] inline-block font-[700] px-[0.7rem] py-[0.2rem] rounded-[1rem]`,
};

export function PopupCardOne() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AnimateTopPopupCard(cardRef);
  }, []);

  return (
    <div className="popup-card pr-[1.5rem]" ref={cardRef}>
      <div className={style.subtitle}> ahorros</div>
      <div className={style.title}> $27,091.4 USD</div>
      <div className={style.buttonContainer}>
        <span className={style.button("bg-primaryColors-purple100")}>
          Depositar
        </span>
        <span className={style.button("bg-primaryColors-cream300")}>
          Invertir
        </span>
      </div>
    </div>
  );
}
