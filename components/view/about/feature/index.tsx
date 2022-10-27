import FeatureCards from "../../../builder/featureCards";
import AboutFeatureCardsData from "./cardData";

export default function AboutFeatureCardsSection()
{
   return <section>
          <FeatureCards props={AboutFeatureCardsData}/>
         </section>
}