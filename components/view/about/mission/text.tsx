import Images from "../../../../utility/images";
import MissonImageCue from "./imageCue";
import { useRef, useEffect } from 'react';
import { TranslateInView } from "../../../../utility/animations";

export default function MissionText() {
  const textRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    TranslateInView(textRef);
  },[])

  return (
    <div className="font-Museo laptop:text-[1.8rem] minitab:text-[1.6rem] text-[1.2rem] mx-auto minitab:leading-[150%] leading-[165%]" ref={textRef}>
      Support the creation of generational wealth in Latin America through the
      most diverse <MissonImageCue image={Images.About.globe} /> easiest to use{" "}
      <MissonImageCue image={Images.About.hand} /> and most beautiful{" "}
      <MissonImageCue image={Images.About.stars} /> ecosystem
    </div>
  );
}
