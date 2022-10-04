import Image from 'next/image';
import Images from '../../../../utility/images';

const style = {
    container: `
     desktop:min-w-[179px]
     laptop:min-w-[138px]
     minitab:min-w-[116px]
     min-w-[105px] popup-card`,

    imageOne: `
     desktop:max-w-[33px]
     laptop:max-w-[23px]
     minitab:max-w-[20px]
     max-w-[17px] ml-[auto]`,

    imageTwo: `
     desktop:max-w-[88px]
     laptop:max-w-[67px]
     minitab:max-w-[57px]
     max-w-[51px]`,
}


export function PopupCardTwo() {
    return <div className={style.container}>
        <div className={style.imageOne}>
            <Image src={Images.Landing.popupCard2img1} />
        </div>

        <div className={style.imageTwo}>
            <Image src={Images.Landing.popupCard2img2} />
        </div>
    </div>
}

