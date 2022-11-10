import { useState } from "react";
import FeatureCards from "../../../builder/featureCards";
import LandingFeatureCardsData from "./cardData";

export default function LandingFeatureCardsSection() {
  const [activeIndex, set] = useState<number>(0);
  const setActiveIndex = (value: number) => set(value);

  return (
    <section>
      <div className="mb-[5rem]">
        <FeatureCards
          props={{
            cards: LandingFeatureCardsData,
            activeIndex,
            setActiveIndex,
            chipTextOne:"Why",
            chipTextTwo:"Weltio"
          }}
        />
      </div>
    </section>
  );
}
