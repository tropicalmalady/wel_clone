import Images from "../../../../utility/images";
import Nav from "../../shared/nav";

export default function AboutIntro()
{
    return <div className=" aboutintro__bg overflow-hidden  relative pt-[6rem]  laptop:pb-[12rem] tab:pb-[11rem] minitab:pb-[10rem] mobile:pb-[8rem] pb-[6rem]  ">
        <div className="relative">
        <div className="absolute left-[-20%] right-[-5%] top-[-30%] minitab:pt-[3.5rem] pt-[2.5rem] z-[1]">
                <img src={Images.About.banner.src} className="w-[100%]"/>
                </div>
                <div className="givelayout">
            <p className="font-[300] minitab:text-[1.5rem] text-[1rem]"> We are naturally </p>
            <div className="">
                <h1 className="font-[300] tab:text-[6.5rem] minitab:text-[4.5rem] text-[3rem] font-Museo leading-[130%]">
                    <span className="relative z-[-1]">Unsat</span><span className="relative z-[10]">isfied</span></h1>
            </div>
        </div>
        </div>

         </div>
}