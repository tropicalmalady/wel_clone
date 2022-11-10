import OvalElement, { OvalElementProps } from "./ovalElement";
import { FeatureCardText, FeatureCardTextProps } from "./cardText";
import FeatureChips from "./chip";
import { useEffect,useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface FeatureCardProps {
    cardText: FeatureCardTextProps
    ovalResource: OvalElementProps,
    popupCardOne?: JSX.Element,
    popupCardTwo?: JSX.Element,
    isCardCream?:boolean,
}

interface ChipProps
{
    chipTextOne:string,
    chipTextTwo:string
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
    mx-auto givelayout relative`,

    flex: `
    laptop:h-[100%] 
    tab:gap-[0px] tab:flex-row tab:py-[80px]
    flex flex-col-reverse py-[4rem] gap-[25px]`,

    chipLayout:`
    desktop:top-[3rem]
    tab:top-0 tab:left-[20px]
    absolute mx-[auto] top-[1.5rem]`,

    layoutOne: `
    tab:justify-start 
    flex justify-center items-center flex-1 py-[20px] pr-[20px] pl-[20px] tab:relative`,

    layoutTwo: `
    flex items-center flex-1 p-[20px] justify-center`
}

export default function FeatureCard({ props }: { props: FeatureCardProps & ChipProps }) {
    const featureCardRef=useRef<HTMLDivElement>(null);
    useEffect(()=>{
    const q=gsap.utils.selector(featureCardRef);
    const chipDiv=q(".feature__chip");

    
    gsap.fromTo(chipDiv,{
    scale:0
    },{
    scale:1,
    ease:"easeOut",
    scrollTrigger:{
    trigger:chipDiv
    },
    duration:0.5,
    delay:0.5

    })

    },[]);

    return <div className="feature__card laptop:mb-[0] mb-[2.5rem]" ref={featureCardRef}>
        <div className={style.wrapper(!!props?.isCardCream)}>
            <div className={style.container}>
                <div className={style.flex}>
                    <div className={style.layoutOne}>
                        <div className={style.chipLayout}>
                           <FeatureChips textOne={props.chipTextOne} textTwo={props.chipTextTwo}/>  
                        </div>
                        <FeatureCardText props={props.cardText} />
                    </div>

                    <div className={style.layoutTwo}>
                        <div className="inline-block relative">
                             { props?.popupCardOne && props?.popupCardTwo && <>
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




