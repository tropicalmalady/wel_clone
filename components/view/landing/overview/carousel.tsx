import Image, { StaticImageData } from "next/image"
import Images from "../../../../utility/images"
import { forwardRef, Fragment } from "react";

const overviewCardData: OverviewCardProps[] = [
    {
        icon: Images.Landing.overview1,
        title: "It only takes 5 minutes!"
    },
    {
        icon: Images.Landing.overview2,
        title: "No minimums and no fees when you trade shares or ETFs"
    },
    {
        icon: Images.Landing.overview3,
        title: "10,000+ financial products to choose from",
    },
    {
        icon: Images.Landing.overview4,
        title: "Your money within minutes",
        subtitle: "From 8am EST to 4pm EST"
    },
    {
        icon: Images.Landing.overview5,
        title: "A user-friendly interface for all knowledge levels"
    }
];

function OverviewCarousel({ }, ref: React.ForwardedRef<HTMLDivElement>) {
    return <div className="whitespace-nowrap">
        <div ref={ref}>
            {
                overviewCardData.map((item, index) => <Fragment key={index}><OverviewCard props={{
                    icon: item.icon,
                    title: item.title,
                    subtitle: item?.subtitle
                }} />
                </Fragment>
                )}
        </div>
    </div>
};

export default forwardRef<HTMLDivElement>(OverviewCarousel);


interface OverviewCardProps {
    icon: StaticImageData,
    title: string,
    subtitle?: string,
}

const style = {
    wrapper: `
    desktop:mr-[3vw] 
    laptop:mr-[3.5em]
    inline-flex whitespace-normal mr-[2.5em]`,

    imageWrapper: `
    desktop:h-[18vw] desktop:rounded-[1.5vw] desktop:border-[0.1vw]
    laptop:h-[293px] laptop:rounded-[32px]
    minitab:h-[250px]
    rounded-[20px] p-[1rem] w-[100%] h-[345px] border-[1.5px] border-secondaryColors-outlineBlue `,

    cardContainer: `
    desktop:w-[22vw]
    laptop:w-[330px]
    w-[280px]`,

    title: `
    desktop:text-[1.3vw]
    text-[22px] leading-[110%] text-primaryColors-purple700 overview__title`,

    subtitle: `
    desktop:text-[0.9vw]
    text-[16px] mt-[4px] text-secondaryColors-outlineBlue opacity-[0.5] `
}



function OverviewCard({ props }: { props: OverviewCardProps }) {

    return <div className={style.wrapper}>
        <div className="inline-block">
            <div className={style.cardContainer}>
                <div className={style.imageWrapper}>
                    <div className="w-[100%] h-[100%] relative">
                        <Image src={props.icon} objectFit="contain" layout="fill" alt=""/>
                    </div>
                </div>

                <div className="desktop:mt-[1.2vw] mt-[20px]">
                    <p className={style.title}>{props.title}  </p>
                    {!!props?.subtitle && <p className={style.subtitle}>{props.subtitle}</p>}
                </div>
            </div>
        </div>
    </div>

}


