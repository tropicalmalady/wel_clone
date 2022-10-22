import Images from '../../../../../utility/images';

const style = {
    container: `
     desktop:min-w-[11.5vw]
     laptop:min-w-[138px]
     minitab:min-w-[116px]
     min-w-[105px] popup-card`,

    imageOne: `
     desktop:max-w-[1.91vw]
     laptop:max-w-[23px]
     minitab:max-w-[20px]
     max-w-[17px] ml-[auto]`,

    imageTwo: `
     desktop:max-w-[5.58vw]
     laptop:max-w-[67px]
     minitab:max-w-[57px]
     max-w-[51px]`,
}


export function PopupCardTwo() {
    return <div className={style.container}>
        <div className={style.imageOne}>
            <img src={Images.Landing.popupCard2img1.src} className="w-[100%] h-[100%]" />
        </div>

        <div className={style.imageTwo}>
            <img src={Images.Landing.popupCard2img2.src} className="w-[100%] h-[100%]" />
        </div>
    </div>
}

