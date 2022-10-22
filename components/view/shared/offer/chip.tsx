const style=`
desktop:text-[1.3vw] desktop:px-[1.3vw] desktop:pt-[0.75vw] desktop:pb-[0.91vw] desktop:rounded-[1.6vw] desktop:mt-[0.4vw] desktop:mr-[0.4vw]
laptop:text-[16px] laptop:px-[16px] laptop:pt-[9px] laptop:pb-[11px]
minitab:text-[12px] minitab:px-[13px] minitab:pt-[7px] minitab:pb-[8px]
text-[8px] px-[8px] pt-[4px] pb-[5px] inline-block font-[650] rounded-[20px] mt-[5px] z-[1] relative`

export function OfferChip({text}:{text:string})
{
  return <span className={style} style={{boxShadow:"rgba(53, 49, 72, 0.08) 0px 3px 8px"}}>
    {text}
   </span>
}