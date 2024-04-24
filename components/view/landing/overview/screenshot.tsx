import Image from "next/image";
import Images from "../../../../utility/images";

const style = {
  imageWrapper: `
  desktop:max-w-[33vw]
  laptop:max-w-[398px]
  tab:max-w-[300px]
  minitab:max-w-[350px]
  max-w-[281px] m-[16px]`,
};

export function OverviewScreenshot() {
  return (
    <div>
      <div className="relative">
        <div className="desktop:w-[5vw] desktop:h-[5vw] absolute left-[0] bottom-[0]">
          <img src={Images.Landing.splash.src} className=" w-[100%] h-[100%]" />
        </div>

        <div className={style.imageWrapper}>
          <img
            src={Images.Landing.screenshot.src}
            alt="screenshot"
            className="w-[100%] h-[100%]"
          />
          {/* <Image src={Images.Landing.screenshot} alt="screenshot" placeholder="blur" className="w-[100%] h-[100%]"/> */}
        </div>
      </div>
    </div>
  );
}
