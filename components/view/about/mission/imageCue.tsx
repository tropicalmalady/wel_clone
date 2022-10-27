import { StaticImageData } from "next/image";

const style = `
desktop:border-[0.1rem]
minitab:border-[1.5px] 
relative border-[1px] rounded-[83%/60%] px-[0.35rem] py-[0.6rem] w-[2rem] inline-block align-middle`;

export default function MissonImageCue({ image }: { image: StaticImageData }) {
  return (
    <span className={style}>
      <img src={image.src} alt="cue" className="w-[100%] h-[100%]" />
    </span>
  );
}
