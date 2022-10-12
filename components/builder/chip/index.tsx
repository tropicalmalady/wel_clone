const style=`
desktop:text-[1.3vw] desktop:px-[1.4vw] desktop:py-[0.7vw]
laptop:text-[15px] laptop:py-[6px] laptop:px-[17px]
minitab:text-[16px] minitab:px-[18px] minitab:py-[9px]
bg-secondaryColors-outlineBlue text-secondaryColors-fadedPurple font-[14px] inline px-[16px] py-[8px] rounded-[1.2em]`

export default function Chip({text}:{text:string})
{
    return <div className={style}>
            {text}
        </div>
}