import Image from "next/image";
import Images from "../../../../utility/images";

const style = {
    subtitle: `
    desktop:text-[16px]
    laptop:text-[10px]
    minitab:text-[8px]
    text-[7px] font-Twk uppercase font-[700] tracking-[0.06em]`,

    imageWrapper: `
    minitab:pr-[35px]
    w-full pr-[15px]`,

    statsOne: `
    laptop:text-[16px]
    minitab:text-[13px]
    text-[9px] font-[600] font-Museo `,

    statsTwo: `
    laptop:text-[12px]
    minitab:text-[9px]
    text-[6px] font-[600] font-Museo  text-primaryColors-green100`,

    button: `
    desktop:text-[12px]
    laptop:text-[8px] laptop:py-[6px] laptop:px-[20px] laptop:rounded-[19px]
    minitab:text-[6px] minitab:py-[6px] minitab:px-[15px] minitab:mt-[16px]
    text-[5px] py-[3px] px-[12px] rounded-[12px] inline-block font-Twk bg-primaryColors-purple100 mt-[8px] mb-[4px]`
}

export default function PopupCardSix() {
    return <div className="popup-card laptop:w-[170px] minitab:w-[150px] w-[140px]">
        <div className="flex justify-between">
            <div className={style.subtitle}>
                <span> ETF</span>
            </div>

            <div className="flex flex-col gap-[3px] px-[8px] minitab:mb-[16px] mb-[8px]">
                <span className={style.statsOne}>$0.078</span>
                <span className={style.statsTwo}>+$0.0003</span>
            </div>


        </div>

        <div className={style.imageWrapper}>
            <Image src={Images.Landing.popupCard6} alt="popupCard6" />
        </div>

        <span className={style.button}>Comprar</span>

    </div>
}