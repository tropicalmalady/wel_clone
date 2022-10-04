import Image,{ StaticImageData } from "next/image";

export interface OvalElementProps {
    resource: StaticImageData,
    style?: string,
    horizontal?: boolean
}

const style = {
        container: `
        desktop:max-w-[600px]
        laptop:max-w-[388px]
        minitab:max-w-[277px]
        max-w-[175px] aspect-[0.71/1]`,

        resourceWrapper:`
        h-[100%] w-[100%] bg-secondaryColors-fadedPurple overflow-hidden rounded-[83%/59%]`,
};


export default function OvalElement({ props }: { props: OvalElementProps }) {
    return <div className={style.container}>
        <div className={`${style.resourceWrapper}  ${props?.style}`}  style={props.horizontal?{transform:"rotate(90deg)"} :{}}>
            <div style={props.horizontal?{transform:"rotate(-90deg) translate(-50%)"}:{}}>
            <Image src={props.resource} alt="feature_img" objectFit="contain" placeholder="blur"/>
            </div>
        </div>
    </div>
}