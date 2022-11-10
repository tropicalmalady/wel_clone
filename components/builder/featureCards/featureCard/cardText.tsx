export interface FeatureCardTextProps {
  heading: string;
  content: string;
  headingStyle?: string;
  contentStyle?: string;
}

const featureCardTextStyle = {
  container: `
    laptop:text-left
    minitab:text-center`,

  titleContainer: `
    desktop:max-w-[33.3vw]
    minitab:mb-[1.5rem]
    font-[500] font-Museo mb-[0.8rem] leading-[140%] max-w-[500px] text-[1.8rem]`,

  contentContainer: `
    desktop:max-w-[37.5vw] 
    laptop:max-w-[450px] 
    font-[250] leading-[160%] text-[0.9rem] max-w-[400px] laptop:mx-[initial] mx-auto`,
};

export function FeatureCardText({ props }: { props: FeatureCardTextProps }) {
  return (
    <div className={featureCardTextStyle.container}>
      <div
        className={`${featureCardTextStyle.titleContainer} ${props.headingStyle}`}
      >
        <h2> {props.heading} </h2>
      </div>
      <div
        className={`${featureCardTextStyle.contentContainer} ${props.contentStyle}`}
      >
        <p> {props.content} </p>
      </div>
    </div>
  );
}
