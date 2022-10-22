import FeatureCards from "../../../builder/featureCards";
import LandingFeatureCardsData from "./cardData";

export default function LandingFeatureCardsSection()
{
   return <section>
          <FeatureCards props={LandingFeatureCardsData}/>
         </section>
}