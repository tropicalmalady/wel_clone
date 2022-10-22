import { Fragment } from "react";

export interface FeatureCardCounterProps {
    size: number,
    activeIndex: number
}

export default function FeatuerCardCounter({ props }: { props: FeatureCardCounterProps }) {
    const { size, activeIndex } = props;

    console.count();
    return (
        <div>
            {new Array(size).fill("").map((item, index) => (
                <Fragment key={index}>
                    <RoundCount index={index} activeIndex={activeIndex} />
                </Fragment>
            ))}
        </div>
    );
}

function RoundCount({ index, activeIndex }: { index: number, activeIndex: number }) {

    const isIndexActive: boolean = index == activeIndex

    return (
        <div className={`w-[0.8rem] h-[0.8rem] rounded-[50%] text-primaryColors-purple400 border-[0.05rem] border-primaryColors-purple400 flex items-center justify-center text-[0.6rem] mb-[0.5rem] font-Museo
                         ${isIndexActive ? "text-primaryColors-cream200 bg-primaryColors-purple400" : ""}`}>
            {index + 1}
        </div>
    );
}
