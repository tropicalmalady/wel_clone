import Image,{ StaticImageData } from "next/image";

export interface OvalElementProps {
    resource: StaticImageData,
    backgroundColor?: string,
    horizontal?: boolean
}

const style = {
        container: `
        desktop:w-[20vw] desktop:max-w-[initial]
        laptop:max-w-[388px]
        minitab:max-w-[277px]
        max-w-[175px] aspect-[0.71/1]`,

        resourceWrapper:`
        h-[100%] w-[100%] overflow-hidden rounded-[83%/59%]`,
};


export default function OvalElement({ props }: { props: OvalElementProps }) {
    return <div className={style.container}>
        <div className={`${style.resourceWrapper} ${props?.backgroundColor ?? "bg-secondaryColors-fadedPurple" }`}  style={props.horizontal?{transform:"rotate(90deg)"} :{}}>
            <div style={props.horizontal?{transform:"rotate(-90deg) translate(-40%)"}:{}}>
                <div >
            <img src={props.resource.src} alt="feature_img" className="w-[100%] h-[100%] object-center" />
            </div>
            </div>
        </div>
    </div>
}



