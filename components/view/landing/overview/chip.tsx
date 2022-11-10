const style=`
laptop:text-[0.6rem] laptop:px-[0.8rem] laptop:py-[0.3rem]
bg-secondaryColors-outlineBlue text-secondaryColors-fadedPurple text-[0.9rem] px-[1rem] py-[0.4rem] rounded-[1.2rem] offerstats__chips`

export default function OverviewChip({text}:{text:string})
{
    return <span className={style}>
            {text}
        </span>
}