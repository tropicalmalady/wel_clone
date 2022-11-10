import Images from "../../../../utility/images";
import TextLayout from "./text";
import VideoLayout from "./video";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(headerRef);
    const coinDiv = q(".header__coin");
    const textDiv = q(".header__text");
    const videoDiv = q(".header__video");
    const mountTl = gsap.timeline();

    mountTl
      .fromTo(
        coinDiv,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
        },
        0.3
      )
      .fromTo(
        textDiv,
        {
          y: "3rem",
          duration: 1,
        },
        {
          y: 0,
        },
        "<"
      )
      .fromTo(
        videoDiv,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
        },
        "<"
      );
      

    gsap
      .timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: `bottom top`,
          scrub: 1,
        },
      })
      .to(coinDiv, {
        y: "-5vw",
      });
  }, []);

  return (
    <header className="overflow-x-hidden header" ref={headerRef}>
      <div className="givelayout desktop:mt-[11rem] minitab:mt-[9rem] mt-[7rem]">
        <div className="flex tab:flex-row flex-col-reverse ">
          <div className="flex-1">
            <TextLayout />
          </div>
          <div className="flex-1 ">
            <VideoLayout />
          </div>
        </div>
        <div>
          <Coin />
        </div>
      </div>
    </header>
  );
}

function Coin() {
  return (
    <div className="desktop:w-[17.25vw] w-[207px] aspect-[1.11] ml-[30%] tab:block hidden header__coin">
      <img
        src={Images.Landing.coins.src}
        alt="coins"
        className="w-[100%] h-[100%]"
      />
    </div>
  );
}
