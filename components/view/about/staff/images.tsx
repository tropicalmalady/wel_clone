import Images from "../../../../utility/images";
import StaffImageCaption from "./image";
import { useEffect, useRef } from "react";
import { ScaleFromZeroInView } from "../../../../utility/animations";
import { StaticImageData } from "next/image";
import gsap from "gsap";

const style = {
  container: `
  minitab:pt-[8rem] minitab:px-[0]
  pt-[3rem] px-[20px] staff`,

  gridLayout: `
 desktop:max-w-[80vw]
 laptop:max-w-[1000px]
 minitab:grid-cols-3 minitab:gap-[1rem] minitab:max-w-[800px] minitab:mx-[initial] minitab:grid-rows-1
 grid gap-[4rem] grid-rows-2 grid-cols-2 mx-auto`,

  imageWapper: `
 minitab:rounded-[65.8%/50%] minitab:aspect-[0.76/1]
 rounded-[71%/46%] w-[full] aspect-[0.66/1] overflow-hidden staff__image`,

  imageStyle: `
 w-[100%] h-[100%] object-cover object-top`,
};

export default function StaffImages() {
  const staffRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageDiv = gsap.utils.selector(staffRef)(".staff__image");
    ScaleFromZeroInView(imageDiv, { stagger: 0.2 });
  }, []);

  return (
    <div className={style.container} ref={staffRef}>
      <div className={style.gridLayout}>
        <div className="row-span-1 col-span-1">
          <div className="minitab:max-w-[initial] max-w-[150px] mx-auto ">
            <StaffImage image={Images.About.staffOne} />
            <div className="flex justify-center">
              <StaffImageCaption
                props={{
                  name: "George",
                  position: "Co-founder & CPO",
                }}
              />
            </div>
          </div>
        </div>

        <div className="row-span-2 col-span-1 relative minitab:top-[-4%]">
          <div className="flex minitab:items-start items-center h-full minitab:max-w-[initial] max-w-[150px] mx-auto">
            <div className="w-full">
              <StaffImage image={Images.About.staffTwo} />
              <div className="flex justify-center">
                <StaffImageCaption
                  props={{
                    name: "David",
                    position: "Co-founder & CEO",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row-span-1 col-span-1 relative minitab:top-[-16%]">
          <div className="minitab:max-w-[initial] max-w-[150px] mx-auto">
            <StaffImage image={Images.About.staffThree} />
            <div className="flex justify-center">
              <StaffImageCaption
                props={{
                  name: "Salvador",
                  position: "CTO",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StaffImage({ image }: { image: StaticImageData }) {
  return (
    <div className={style.imageWapper}>
      <img src={image.src} className={style.imageStyle} alt="staff" />
    </div>
  );
}
