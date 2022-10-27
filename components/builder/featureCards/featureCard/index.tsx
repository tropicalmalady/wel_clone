import OvalElement, { OvalElementProps } from "./ovalElement";
import { FeatureCardText, FeatureCardTextProps } from "./cardText";

export interface FeatureCardProps {
    cardText: FeatureCardTextProps
    ovalResource: OvalElementProps,
    popupCardOne?: JSX.Element,
    popupCardTwo?: JSX.Element,
    isCardCream?:boolean
}

const style = {
    wrapper:(isCardCream:boolean)=> `
    desktop:rounded-[4.67vw]
    laptop:mx-[1rem] laptop:my-[2rem]
    minitab:rounded-[56px]
    overflow-hidden rounded-[24px] ${isCardCream ?"bg-primaryColors-cream300":"bg-primaryColors-purple200" } `,

    container: `
    desktop:px-[10vw]
    laptop:h-[calc(100vh-4rem)]
    mx-auto givelayout`,

    flex: `
    laptop:h-[100%] 
    tab:gap-[0px] tab:flex-row tab:py-[80px]
    flex flex-col-reverse py-[3rem] gap-[25px] `,

    layoutOne: `
    tab:justify-start 
    flex justify-center items-center flex-1 py-[20px] pr-[20px] pl-[20px]`,

    layoutTwo: `
    flex items-center flex-1 p-[20px] justify-center`
}

export default function FeatureCard({ props }: { props: FeatureCardProps }) {
    return <div className="feature__card laptop:mb-[0] mb-[2.5rem]">
        <div className={style.wrapper(!!props?.isCardCream)}>
            <div className={style.container}>
                <div className={style.flex}>
                    <div className={style.layoutOne}>
                        <FeatureCardText props={props.cardText} />
                    </div>

                    <div className={style.layoutTwo}>
                        <div className="inline-block relative">
                             { props?.popupCardOne && props?.popupCardTwo &&   <>
                            <>{props.popupCardOne}</>
                            <>{props.popupCardTwo}</>
                               </> }
                            <OvalElement props={props.ovalResource}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}




