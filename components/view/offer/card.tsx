import { Colors } from "../../../tailwind.config";
import { Fragment } from "react";
import Images from "../../../utility/images";

const style = {
    cardText: `
    desktop:text-[1.17vw]
    laptop:text-[14px] laptop:gap-[7px]
    text-[9px]`,

    cardContainer: `
    desktop:w-[18.3vw]
    laptop:w-[220px]
    tab:w-[202px]
    minitab:w-[167px] minitab:py-[1.5em] 
    w-[130px] rounded-[1em] py-[1em] pl-[2em] overflow-hidden relative`
}

const cardItems: CardItemProps[] = [
    {
        text: "ETFs",
        color: Colors.primaryColors.purple500
    },
    {
        text: "Cash",
        color: Colors.primaryColors.green200
    },
    {
        text: "Crypto",
        color: Colors.secondaryColors.pink
    },
    {
        text: "Stocks",
        color: Colors.primaryColors.purple600
    },
    {
        text: "Savings",
        color: Colors.primaryColors.green100
    }
];

export default function OfferCard() {
    return <div className={style.cardText}>
        <div className={style.cardContainer} style={{ boxShadow: "rgba(53, 49, 72, 0.09) 0px 3px 11px" }}>
            <div className="flex justify-between items-center">
                <CardItems />
                <StatsBar />
            </div>
        </div>
    </div>
}


function StatsBar() {
    return <div className="min-h-[10em] min-w-[10em]">
        <div className="translate-x-[40%] h-[100%] ">
            <img src={Images.Landing.bar.src} className="w-[100%] h-[100%] object-contain" />
            <div className="absolute top-[45%] bottom-[50%] minitab:left-[20%] left-[15%] translate-y-[-50%] font-[700] font-Museo">10%</div>
        </div>
    </div>
}
function CardItems() {
    return <div>
        {cardItems.map((item, index) => <Fragment key={index}>
            <CardItem text={item.text} color={item.color} />
        </Fragment>)}
    </div>
}

interface CardItemProps { color: string, text: string }

function CardItem({ text, color }: CardItemProps) {
    return <div className="flex gap-[0.5em] items-center mb-[0.05em]">
        <RoundSpan size={0.4} color={color} />
        <span>{text}</span>
    </div>
}

function RoundSpan({ size, color }: { size: number, color?: string }) {
    return <span className={`rounded-[50%]`} style={{ background: color ?? "black", width: `${size}em`, height: `${size}em` }}> </span>
}