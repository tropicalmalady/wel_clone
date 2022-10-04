const style = {
    subtitle: `
     desktop:text-[12px]
     laptop:text-[8px]
     minitab:text-[6px]
     text-[5px] font-Twk uppercase font-[300] tracking-[0.06em]`,

    title: `
    desktop:text-[22px]
    laptop:text-[18px]
    mintab:text-[14px] 
    font-bold text-[10px] mt-[4px]`,

    buttonContainer: `
    flex gap-[10px] text-primaryColors-purple700 font-[400]`,

    button: ((color: string) => `
    desktop:text-[12px]
    laptop:text-[8px] laptop:py-[6px] laptop:px-[20px] laptop:rounded-[19px]
    minitab:text-[6px] minitab:py-[6px] minitab:px-[15px]
    ${color} text-[5px] py-[3px] px-[12px] rounded-[12px] inline-block font-Twk`)
}

export function PopupCardThree() {
    return <div className="popup-card__dark">
        <div className={style.subtitle}> STOCKS PORTFOLIO</div>
        <div className={style.title}> $43,091.4 USD</div>
        <div className="minitab:text-[8px] minitab:my-[12px] text-[6px] my-[8px]">
            <span className="opacity-40">Hay +12.0</span>
            <span className="text-primaryColors-green300 ml-[3px]"> +25%</span>
        </div>
        <div className={style.buttonContainer}>
            <span className={style.button("bg-primaryColors-purple100")}>Depositar</span>
            <span className={style.button("bg-primaryColors-cream300")}>Descubre</span>
        </div>
    </div>
}