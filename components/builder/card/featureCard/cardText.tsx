export interface FeatureCardTextProps {
    heading: string;
    content: string;
}

const featureCardTextStyle = {
    container: `
    laptop:text-left
    minitab:text-center`,

    titleContainer: `
    tab:leading-[51.2px]
    minitab:text-[35px] minitab:mb-[1.5rem]
    font-[500] text-[25px] font-Museo mb-[1rem] leading-[36.5px]`,

    contentContainer: `
    desktop:text-[22px]
    laptop:leading-[30px]
    minitab:text-[18px] minitab:leading-[25px]
    text-[14px] font-[200] leading-[20px]`
}

export function FeatureCardText({ props }: { props: FeatureCardTextProps }) {
    return (
        <div className={featureCardTextStyle.container}>
            <div className={featureCardTextStyle.titleContainer}>
                <h2 className="max-w-[400px]">  {props.heading} </h2>
            </div>
            <div className={featureCardTextStyle.contentContainer}>
                <p className="desktop:max-w-[600px] laptop:max-w-[500px] max-w-[400px]">
                    {props.content}
                </p>
            </div>
        </div>
    );
}


