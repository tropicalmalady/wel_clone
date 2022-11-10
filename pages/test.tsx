const style=`
laptop:text-[0.6rem] laptop:px-[0.6rem] laptop:py-[0.3rem]
bg-primaryColors-cream100 text-primaryColors-purple600 text-[0.9rem] px-[0.8rem] py-[0.4rem] rounded-[1.2rem] giveborder`

export default function OverviewChip({text}:{text:string})
{
    return <span className={style}>
      {text}
        </span>
}