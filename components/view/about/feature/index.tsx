import FeatureCards from "../../../builder/featureCards";
import AboutFeatureCardsData from "./cardData";
import { useState } from "react";

export default function AboutFeatureCardsSection() {
  const [activeIndex, set] = useState<number>(0);
  const setActiveIndex = (value: number) => set(value);

  return (
    <section>
      <div className="mb-[5rem]">
        <FeatureCards
          props={{ cards: AboutFeatureCardsData, activeIndex, setActiveIndex,chipTextOne:"Our",chipTextTwo:"Manifesto" }}
        />
      </div>
    </section>
  );
}
