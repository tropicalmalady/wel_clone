const style = {
    subtitle: `
     desktop:text-[12px]
     laptop:text-[8px]
     minitab:text-[6px]
     text-[5px] font-Twk uppercase font-[300] tracking-[0.06em]`,

    title: `
    desktop:text-[22px]
    laptop:text-[18px]
    mintab:text-[14px] minitab:pb-[12px]
    font-bold text-[10px] mt-[4px] pb-[8px]`,

    buttonContainer: `
    flex gap-[10px]`,

    button: ((color: string) => `
    desktop:text-[12px]
    laptop:text-[8px] laptop:py-[6px] laptop:px-[20px] laptop:rounded-[19px]
    minitab:text-[6px] minitab:py-[6px] minitab:px-[15px]
    ${color} text-[5px] py-[3px] px-[12px] rounded-[12px] inline-block font-Twk`)
}

export function PopupCardOne() {
    return <div>
        <div className={style.subtitle}> ahorros</div>
        <div className={style.title}> $27,091.4 USD</div>
        <div className={style.buttonContainer}>
            <span className={style.button("bg-primaryColors-purple100")}>Depositar</span>
            <span className={style.button("bg-primaryColors-cream300")}>Invertir</span>
        </div>
    </div>
}