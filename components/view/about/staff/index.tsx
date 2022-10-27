import StaffImages from "./images";
import StaffIntro from "./text";

const style={
    container:`
    desktop:max-w-[100%] 
    minitab:px-[85px] 
    mr-auto `
}


export default function StaffSection()
{
    return <section >
         <div className="givelayout mt-[6rem]">
     <div className={style.container}>
        <StaffIntro/>
        <StaffImages/>
        </div>
        </div>
          </section>
}