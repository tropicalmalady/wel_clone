import { useEffect, useRef } from "react";
import { AnimateTopPopupCard } from "../../../../../utility/animations";

const style = {
  top: ` 
    flex gap-[0.5rem] `,

  bottom: `
    flex pl-[1.33rem] gap-[0.5rem] mt-[0.5rem]`,
};

export default function PopupCardFive() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AnimateTopPopupCard(cardRef);
  }, []);

  return (
    <div ref={cardRef}>
      <div className={style.top}>
        <CardItemOne />
        <CardItemTwo />
      </div>

      <div className={style.bottom}>
        <CardItemThree />
        <CardItemFour />
      </div>
    </div>
  );
}

const CardItemOne = () => (
  <CardItem
    props={{
      subtitle: "ETF",
      statOne: "+1.79",
      statTwo: "+1.42%",
    }}
  />
);

const CardItemTwo = () => (
  <CardItem
    props={{
      subtitle: "STOCK",
      statOne: "+3.51",
      statTwo: "+1.35%",
    }}
  />
);

const CardItemThree = () => (
  <CardItem
    props={{
      subtitle: "SAVINGS",
      statOne: "+0.24",
      statTwo: "+0.17%",
    }}
  />
);

const CardItemFour = () => (
  <CardItem
    props={{
      subtitle: "CRYPTO",
      statOne: "+2.88",
      statTwo: "+0.37%",
    }}
  />
);

const cardItemStyle = {
  container: `
    desktop:w-[8.75vw]
    laptop:w-[105px]
    w-[70px] popup-card p-[0.4rem] `,

  subtitle: `
    text-[0.4rem] font-Twk uppercase font-[300] tracking-[0.06em]`,

  statsOne: `
    text-[0.75rem] font-[600] font-Museo `,

  statsTwo: `
    text-[0.5rem] font-[600] font-Museo  text-primaryColors-green100`,
};

interface CardItemProps {
  subtitle: string;
  statOne: string;
  statTwo: string;
}

function CardItem({ props }: { props: CardItemProps }) {
  return (
    <div className={cardItemStyle.container}>
      <div className={cardItemStyle.subtitle}>
        <span>{props.subtitle}</span>
      </div>
      <div className="flex flex-col items-end mr-[0.167rem]">
        <span className={cardItemStyle.statsOne}>{props.statOne}</span>
        <span className={cardItemStyle.statsTwo}>{props.statTwo}</span>
      </div>
    </div>
  );
}
