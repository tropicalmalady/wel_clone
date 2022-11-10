import Images from "../../../../utility/images";

const container = `
desktop:w-[20vw] desktop:max-w-[initial]
laptop:max-w-[245px]
tab:max-w-[227px]
minitab:max-w-[245px]
max-w-[162px] aspect-[0.655/1] rounded-[120%/79%] flex-1 bg-secondaryColors-fadedPurple overflow-hidden`;

export default function VideoLayout() {
  return (
    <div className="flex tab:justify-start justify-center minitab:mr-[0] mr-[-10vw] ">
      <div
        className={
          container +
          " relative top-[-10vw] minitab:top-[-6.5vw] header__video"
        }
      >
        <img
          src={Images.Landing.swingVid.src}
          alt="swing_img"
          className="w-[100%] h-[100%]"
        />
      </div>
      <div
        className={
          container +
          " relative minitab:left-[0] left-[-10vw] header__video"
        }
      >
        <img
          src={Images.Landing.scrollVid.src}
          alt="scroll_img"
          className="w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
}
