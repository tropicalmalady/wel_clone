import ChipMarqueeSection from "../components/view/landing/chipmarquee/chipmarquee";
import CryptoSection from "../components/view/landing/crypto";
import Nav from "../components/view/shared/nav";
import LandingFeatureCardsSection from '../components/view/landing/feature/index';
import OverviewSection from '../components/view/landing/overview/index';
import OfferSection from '../components/view/shared/offer/index';
import ContactSection from '../components/view/shared/contact/index';
import Header from "../components/view/landing/header";
import Footer from "../components/view/shared/footer";

export default function()
{
   return <>
    <div><Nav/></div>
    <div><Header/></div>
    <div className="mt-[1rem] mb-[2rem]"><ChipMarqueeSection/></div>
    <div className="mb-[5rem]"><LandingFeatureCardsSection/></div>
    <div className="laptop:mb-[0rem] mb-[4rem]"><OverviewSection/></div>
    <div className="mb-[8rem]"><CryptoSection/></div>
    <div className="minitab:mb-[10rem] mobile:mb-[8rem]"><OfferSection/></div>
    <div className="mb-[4rem]"><ContactSection/></div>
    <div><Footer/></div>
    </> 
}