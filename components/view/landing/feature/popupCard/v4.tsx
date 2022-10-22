import Images from "../../../../../utility/images";

const style = {
    container:`
    popup-card__dark flex justify-center items-center px-[1rem] py-[0.3rem] text-[0.6rem] rounded-[5rem]`,

    imageWrapper: `
    desktop:max-w-[2.25vw]
    laptop:max-w-[23px] 
    max-w-[20px] ml-[2.5rem] mr-[1rem]`,

    statsOne: `
    text-[0.5rem] font-[600] font-Museo `,

    statsTwo: `
    text-[0.4rem] font-[600] font-Museo text-primaryColors-green100`

}

export function PopupCardFour() {
    return <div className={style.container} >
        <div>
            <span className="font-[500]">Stock</span>
        </div>
        <div className={style.imageWrapper}>
            <img src={Images.Landing.popupCard4.src} alt="popupCard4" className="w-[100%] h-[100%]" />
        </div>

        <div className="flex flex-col justify-center"> 
            <span className={style.statsOne}>$48.15</span>
            <span className={style.statsTwo}>+0.4%</span>
        </div>
        
    </div>
}