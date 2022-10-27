import Images from "../../../../utility/images";
import { FeatureCardProps } from "../../../builder/featureCards/featureCard";
import aboutFeatureImage2 from "/public/images/about/feature/aboutFeatureImage2.png";
import aboutFeatureImage6 from "/public/images/about/feature/aboutFeatureImage6.png";

const headingAndContentStyle = {
  headingStyle: "text-[1.3rem]",
  contentStyle: "text-[0.8rem]",
};

const isCardCream=true

const AboutFeatureCardOne: FeatureCardProps = {
  cardText: {
    heading: "Always look for new and better ways to solve problems",
    content:
      "We are naturally unsatisfied. We’re not afraid of making mistakes and learning from them. Failure is a step towards success.",
    ...headingAndContentStyle,
  },
  ovalResource: {
    resource: Images.About.aboutFeatureImage1,
    horizontal: true,
    backgroundColor: "bg-primaryColors-cream100",
  
  },
  isCardCream
};

const AboutFeatureCardTwo: FeatureCardProps = {
  cardText: {
    heading: "Focus on getting the results our customers need",
    content:
      "We will only be successful if our customers are. We ask ourselves: “Is what we are doing making a positive impact towards our customer goals? Are we delivering that our customers need?",
    ...headingAndContentStyle,
  },
  ovalResource: {
    resource: Images.About.aboutFeatureImage2,
    horizontal: true,
    backgroundColor: "bg-primaryColors-cream100",
  },
  isCardCream
};

const AboutFeatureCardFour: FeatureCardProps = {
  cardText: {
    heading:
      "It is not enough to get where our customers need, they need to be delighted",
    content:
      "The journey to success is as important as achieving it – we believe in giving each customer the experience they deserve, with the info and tools needed to make their financial decisions, in a fun and simple manner.",
    ...headingAndContentStyle,
  },
  ovalResource: { resource: Images.About.aboutFeatureImage3 },
  isCardCream
};

const AboutFeatureCardThree: FeatureCardProps = {
  cardText: {
    heading: "No Bullsh*t",
    content:
      "We tell the truth, we treat people fairly and acknowledge our mistakes.",
    ...headingAndContentStyle,
  },
  ovalResource: { resource: Images.About.aboutFeatureImage4 },
  isCardCream
};

const AboutFeatureCardFive: FeatureCardProps = {
  cardText: {
    heading: "We are inclusive, respectful, and fun",
    content:
      "Everybody should feel safe and encourage to be who they are. Each person has a different perspective, we empathize and respect that.",
    ...headingAndContentStyle,
  },
  ovalResource: {
    resource: Images.About.aboutFeatureImage5,
    horizontal: true,
    backgroundColor: "bg-primaryColors-cream100",
  },
  isCardCream
};

const AboutFeatureCardSix: FeatureCardProps = {
  cardText: {
    heading: "We are prosperity",
    content:
      "Weltio is a catalyst to growth: our customer’s wealth growth, sure, but also our team’s personal and professional growth.",
    ...headingAndContentStyle,
  },
  ovalResource: { resource: Images.About.aboutFeatureImage6 },
  isCardCream
};

export default [
  AboutFeatureCardOne,
  AboutFeatureCardTwo,
  AboutFeatureCardThree,
  AboutFeatureCardFour,
  AboutFeatureCardFive,
  AboutFeatureCardSix,
];
