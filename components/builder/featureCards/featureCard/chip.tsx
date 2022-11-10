const style=`
text-[0.7rem] px-[0.85rem] py-[0.35rem] bg-primaryColors-cream100 text-primaryColors-purple600 rounded-[1.2rem] font-[300] feature__chip inline-block`


const Chip=({text}:{text:string})=><div className={style}>{text}</div>

export default function FeatureChips({textOne,textTwo}:{textOne:string,textTwo:string})
{
    return <div>
          <Chip text={textOne}/>
          <Chip text={textTwo}/>
          </div>
}