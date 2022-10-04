import Image, { StaticImageData } from "next/image"
import React from "react"
import Overview from "../components/view/overview"
import Images from "../utility/images"

const style = {
  imageWrapper: `
  desktop:h-[18vw] desktop:rounded-[1.5vw] desktop:border-[0.1vw]
  laptop:h-[293px] laptop:rounded-[32px]
  minitab:h-[250px]
  rounded-[20px] p-[1rem] w-[100%] h-[345px] border-[1px] border-secondaryColors-outlineBlue `,

  container: `
  desktop:w-[22vw]
  laptop:w-[330px]
  w-[280px]`,

  title: `
  desktop:text-[1.3vw]
  text-[22px] leading-[110%] text-secondaryColors-outlineBlue `,

  subtitle: `
  desktop:text-[0.9vw]
  text-[16px] mt-[4px] text-secondaryColors-outlineBlue `
}

const overViewCardData:OverviewCardProps[]=[
   {
    icon: Images.Landing.overview1,
    title:"It only takes 5 minutes!"
   },
   {
    icon:Images.Landing.overview2,
    title:"No minimums and no fees when you trade shares or ETFs"
   },
   {
    icon:Images.Landing.overview3,
    title:"10,000+ financial products to choose from",
   },
   {
    icon:Images.Landing.overview4,
    title:"Your money within minutes",
    subtitle:"From 8am EST to 4pm EST"
   },
   {
    icon:Images.Landing.overview5,
    title:"A user-friendly interface for all knowledge levels"
   }
]


export default function () {


  return <Overview/>
    
}





export const OverViewCarosel= React.forwardRef<HTMLDivElement>((props,ref)=>
{
 
  return <div className="">
    <div className="whitespace-nowrap">
      <div ref={ref}>
       {
        overViewCardData.map((item,index)=> <React.Fragment key={index}><OverviewCard props={{
          icon: item.icon,
          title:item.title,
          subtitle:item?.subtitle
        }}/>
            </React.Fragment>
        )}
     </div>
     </div>   
        </div>
});



interface OverviewCardProps {
  icon: StaticImageData,
  title: string,
  subtitle?: string,
}

function OverviewCard({ props }: { props: OverviewCardProps }) {

  return <div className="inline-flex whitespace-normal desktop:mr-[3vw] mr-[3.5em]">
  <div className="inline-block">
  <div className={style.container}>
    <div className={style.imageWrapper}>
      <div className="w-[100%] h-[100%] relative">
        <Image src={props.icon} objectFit="contain" layout="fill" />
      </div>
    </div>

    <div className="desktop:mt-[1.2vw] mt-[20px]">
      <p className={style.title}>{props.title}  </p>
     {!!props?.subtitle && <p className={style.subtitle}>{props.subtitle}</p> }
    </div>
  </div>
  </div>
  </div>

}