import OvalElement, { OvalElementProps } from "../../ovalElement";
import { FeatureCardText, FeatureCardTextProps } from "./cardText";

interface FeatureCardProps {
    cardText: FeatureCardTextProps
    ovalResource: OvalElementProps,
    popupCardOne: JSX.Element,
    popupCardTwo: JSX.Element
}

const style = {
    wrapper: `
    desktop:m-[4rem]
    laptop:m-[2rem]
    minitab:rounded-[56px]
    overflow-hidden rounded-[24px] bg-primaryColors-purple200  `,

    container: `
    desktop:px-[120px] desktop:max-w-[1600px] desktop:h-[calc(100vh-8rem)]
    laptop:max-w-[1400px] laptop:px-[100px] laptop:h-[calc(100vh-4rem)]
    minitab:px-[80px] 
    p-[20px]  border-[blue] m-auto `,

    flex: `
    laptop:h-[100%] 
    tab:gap-[0px] tab:flex-row tab:py-[80px]
    flex flex-col-reverse py-[30px] gap-[25px] `,

    layoutOne: `
    tab:justify-start 
    flex justify-center items-center flex-1 py-[20px] pr-[20px] pl-[20px]`,

    layoutTwo: `
    tab:justiy-start
    flex justify-center items-center flex-1 p-[20px] justify-center `
}

export default function FeatureCard({ props }: { props: FeatureCardProps }) {
    return <div className="box">
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.flex}>

                    <div className={style.layoutOne}>
                        <FeatureCardText props={props.cardText} />
                    </div>

                    <div className={style.layoutTwo}>
                        <div className="inline-block relative">
                            <>{props.popupCardOne}</>
                            <>{props.popupCardTwo}</>
                            <OvalElement props={props.ovalResource}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}




