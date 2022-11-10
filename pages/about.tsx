import Layout from "../components/layout";
import AboutFeatureCardsSection from "../components/view/about/feature";
import AboutIntro from "../components/view/about/intro";
import MissionSection from "../components/view/about/mission";
import StaffSection from "../components/view/about/staff";

export default function () {
  return (
    <Layout>
      <>
        <AboutIntro />
        <MissionSection />
        <StaffSection />
        <AboutFeatureCardsSection />
      </>
    </Layout>
  );
}
