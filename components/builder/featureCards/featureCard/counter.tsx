import { Fragment } from "react";
import { Colors } from "../../../../tailwind.config";

export interface FeatureCardCounterProps {
  size: number;
  activeIndex: number;
  isCounterGreen?: boolean;
}

export default function FeatuerCardCounter({
  props,
}: {
  props: FeatureCardCounterProps;
}) {
  const { size, activeIndex, isCounterGreen } = props;

  return (
    <div>
      {new Array(size).fill("").map((item, index) => (
        <Fragment key={index}>
          <RoundCount
            props={{
              index,
              activeIndex,
              isCounterGreen,
            }}
          />
        </Fragment>
      ))}
    </div>
  );
}

interface RoundCountProps {
  index: number;
  activeIndex: number;
  isCounterGreen?: boolean;
}

function RoundCount({ props }: { props: RoundCountProps }) {
  const { index, activeIndex, isCounterGreen } = props;
  const isIndexActive: boolean = index == activeIndex;

  return (
    <div
      className={`w-[0.8rem] h-[0.8rem] rounded-[50%] ${
        isCounterGreen
          ? `text-primaryColors-green200 border-primaryColors-green200`
          : `text-primaryColors-purple400 border-primaryColors-purple400`
      } border-[0.05rem] flex items-center justify-center text-[0.6rem] mb-[0.5rem] font-Museo 
                         ${
                         isIndexActive? isCounterGreen
                               ? "bg-primaryColors-green200"
                               : "bg-primaryColors-purple400" :""
                        
                         }`}
    style={isIndexActive? {color:Colors.primaryColors.cream200}:{}}>
      {index + 1}
    </div>
  );
}
