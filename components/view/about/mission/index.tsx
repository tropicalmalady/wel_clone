import MissionChip from "./chip"
import MissionText from "./text"

const style={
    container:`
    desktop:max-w-[100%] 
    tab:max-w-[900px]
    minitab:px-[85px] 
    mr-auto `
}

export default function MissionSection()
{
    return <div className="givelayout">
     <div className={style.container}>
        <div className="pb-[1rem]">
        <MissionChip text="Our"/>
        <MissionChip text="Mission"/>
        </div>
        <MissionText/>
          </div>
          </div>
}
