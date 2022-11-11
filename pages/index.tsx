import ChipMarqueeSection from "../components/view/landing/chipmarquee/chipmarquee";
import CryptoSection from "../components/view/landing/crypto";
import LandingFeatureCardsSection from "../components/view/landing/feature/index";
import OverviewSection from "../components/view/landing/overview/index";
import Header from "../components/view/landing/header";
import Layout from "../components/layout";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useRef from 'react';

gsap.registerPlugin(ScrollTrigger);


export default function () {
 
  return (
    <Layout>
      <>
      
        <Header />
        <ChipMarqueeSection />
        <LandingFeatureCardsSection />
        <OverviewSection />
      </>
    </Layout>
  );
}
