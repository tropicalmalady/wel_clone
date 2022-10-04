const style = {
    top: `
    tab:gap-[12px] 
    flex gap-[6px] `,

    bottom: `
    tab:mt-[12px] tab:gap-[12px] tab:pl-[24px]
    flex pl-[16px] gap-[6px] mt-[6px]`
}

export default function PopupCardFive() {
    return <div>
        <div className={style.top}>
            <CardItemOne />
            <CardItemTwo />
        </div>

        <div className={style.bottom}>
            <CardItemThree />
            <CardItemFour />
        </div>

    </div>
}

const CardItemOne = () => <CardItem props={{
    subtitle: "ETF",
    statOne: "+1.79",
    statTwo: "+1.42%"
}} />

const CardItemTwo = () => <CardItem props={{
    subtitle: "STOCK",
    statOne: "+3.51",
    statTwo: "+1.35%"
}} />

const CardItemThree = () => <CardItem props={{
    subtitle: "SAVINGS",
    statOne: "+0.24",
    statTwo: "+0.17%"
}} />

const CardItemFour = () => <CardItem props={{
    subtitle: "CRYPTO",
    statOne: "+2.88",
    statTwo: "+0.37%"
}} />



const cardItemStyle = {
    container: `
    laptop:w-[100px]
    minitab:w-[70px]
    popup-card w-[54px] `,

    subtitle: `
    desktop:text-[12px]
    laptop:text-[8px]
    minitab:text-[6px]
    text-[5px] font-Twk uppercase font-[300] tracking-[0.06em]`,

    statsOne: `
    laptop:text-[16px]
    minitab:text-[13px]
    text-[9px] font-[600] font-Museo `,

    statsTwo: `
    laptop:text-[12px]
    minitab:text-[9px]
    text-[6px] font-[600] font-Museo  text-primaryColors-green100`
}

interface CardItemProps {
    subtitle: string,
    statOne: string,
    statTwo: string
}

function CardItem({ props }: { props: CardItemProps }) {
    return <div className={cardItemStyle.container}>
        <div className={cardItemStyle.subtitle}><span>{props.subtitle}</span></div>
        <div className="flex flex-col items-end minitab:pr-[4px] pr-[2px]">
            <span className={cardItemStyle.statsOne}>{props.statOne}</span>
            <span className={cardItemStyle.statsTwo}>{props.statTwo}</span>
        </div>
    </div>
}