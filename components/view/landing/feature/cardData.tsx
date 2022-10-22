import Images from '../../../../utility/images';
import { FeatureCardProps } from '../../../builder/featureCards/featureCard';
import { PopupCardOne } from './popupCard/v1';
import { PopupCardTwo } from './popupCard/v2';
import { PopupCardThree } from './popupCard/v3';
import { PopupCardFour } from './popupCard/v4';
import PopupCardFive from './popupCard/v5';
import PopupCardSix from './popupCard/v6';

 const FeatureCardOne:FeatureCardProps={
   cardText:{
   heading: "Safe and easy access to USD",
   content: "The US dollar is one of the most stable currencies on the planet. With Weltio, you can open a fully regulated and fully protected USD account"},
   ovalResource:{ resource: Images.Landing.featureCard1 },
   popupCardOne: <div className="desktop:left-[-40%] minitab:top-[3%] minitab:left-[-23%] left-[-50px] top-[50%] absolute z-[1]"><PopupCardOne/></div>,
   popupCardTwo:  <div className="desktop:right-[-35%] minitab:right-[-15%] minitab:bottom-[10%] right-[-50px] bottom-[-20px] absolute"><PopupCardTwo /></div>
 }
 
 const FeatureCardTwo:FeatureCardProps={
    cardText:{
    heading: "No fancy degrees needed",
    content: "Investing is for everyone! Whether you're a beginner or a seasoned pro, we welcome investors of all levels"},
    ovalResource:{ resource: Images.Landing.featureCard2,horizontal:true, backgroundColor: "bg-primaryColors-cream100" },
    popupCardOne: <div className="minitab:top-[-2%] minitab:left-[0%] left-[50%] top-[0%] absolute z-[1]"><PopupCardThree/></div>,
    popupCardTwo:  <div className="minitab:left-[-5%] minitab:bottom-[12%] left-[-10%] bottom-[10%] absolute"><PopupCardFour /></div>
  }
 
  const FeatureCardThree:FeatureCardProps={
    cardText:{
    heading: "Start investing from just MXN $50",
    content: "Weltio offers fractional shares, meaning you can buy just part of a share if you're not in a position to pay for a full one"},
    ovalResource:{ resource: Images.Landing.featureCard3 },
    popupCardOne: <div className="desktop:left-[-55%] desktop:top-[-15%] minitab:top-[3%] minitab:left-[-30%] left-[-35%] top-[-20%] absolute z-[1]"><PopupCardFive/></div>,
    popupCardTwo:  <div className="desktop:right-[-45%] desktop:bottom-[-10%] minitab:right-[-20%] minitab:bottom-[5%] right-[-50px] bottom-[-30px] absolute"><PopupCardSix /></div>
  }
  

  export default [FeatureCardOne,FeatureCardTwo,FeatureCardThree];