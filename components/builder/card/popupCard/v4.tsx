import Image from "next/image";
import Images from "../../../../utility/images";

const style = {
    imageWrapper: `
    desktop:max-w-[27px]
    laptop:max-w-[23px]
    minitab:ml-[3rem] minitab:mr-[2rem] 
    max-w-[20px] ml-[2rem] mr-[1.5rem] `,

    statsOne: `
    laptop:text-[12px]
    minitab:text-[9px]
    text-[6px] font-[600] font-Museo `,

    statsTwo: `
    laptop:text-[9px]
    minitab:text-[7px]
    text-[5px] font-[600] font-Museo  text-primaryColors-green100`

}

export function PopupCardFour() {
    return <div className="popup-card__dark flex justify-center items-center px-[2rem] rounded-[87px]" >
        <div>
            <span>Stock</span>
        </div>
        <div className={style.imageWrapper}>
            <Image src={Images.Landing.popupCard4} alt="popupCard4" />
        </div>

        <div className="flex flex-col justify-center">
            <span className={style.statsOne}>$48.15</span>
            <span className={style.statsTwo}>+0.4%</span>
        </div>
        
    </div>
}