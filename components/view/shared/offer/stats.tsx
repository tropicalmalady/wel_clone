import Image from "next/image";
import { Fragment, useEffect, useRef, useLayoutEffect } from 'react';
import Images from "../../../../utility/images";
import { OfferChip } from "./chip";
import OfferCard from "./card";
import gsap from "gsap/dist/gsap";

export default function OfferStats() {
 const offerStatsRef=useRef<HTMLDivElement>(null);

 

  useLayoutEffect(() => {
    const q=gsap.utils.selector(offerStatsRef);
    const rocketDiv=q(".offerstats__rocket");
    // const chipsDiv=q(".offerstats__chips");
    // const cardDiv=q(".offerstats__card");

    // const tl=gsap.timeline();

    
  //  tl.fromTo(chipsDiv,{
  //   rotate:60,
  //  },{
  //   rotate:0,
  //   duration:1,
  //   transformOrigin:"top right",
  //   ease:"easeOut",
  //   scrollTrigger:{
  //     trigger:chipsDiv
  //   }
  //  },0).fromTo(cardDiv,{
  //   rotate:-60,
  //  },{
  //   rotate:0,
  //   duration:1,
  //   transformOrigin:"top left",
  //   ease:"easeOut",
  //   scrollTrigger:{
  //     trigger:cardDiv
  //   }
  //  },0)
  
    gsap.to(rocketDiv, {
      y: "-4vw",
      repeat: -1,
      duration: 1.1,
      yoyo: true,
    });
  }, []);

  return  <div
          className="
            minitab:max-w-[65%]
            max-w-[500px] mobile:px-[20px]
            minimobile:px-[0px]
            mx-auto offerstats"
           
        >
          <div  >
            <div className="relative" ref={offerStatsRef}>
              <div className="absolute left-0 top-0 ">
                <ChipSection />
              </div>
              <div className="relative">
                <img
                  src={Images.Landing.rocket.src}
                  className="w-[100%] h-[100%] offerstats__rocket"
                />
              </div>
              <div className="absolute right-0 top-0">
                <OfferCard />
              </div>
            </div>
            <div>
              <img
                src={Images.Landing.exhaust.src}
                className="w-[100%] h-[100%] minitab:mt-[-55%] mt-[-50%]"
              />
            </div>
          </div>
        </div>
}

const style = {
  offerChipContainer: `
    desktop:w-[25vw]
    laptop:w-[300px]
    tab:w-[250px]
    minitab:w-[220px]
    w-[140px]`,
};

function ChipSection() {
  return (
    <div className={style.offerChipContainer}>
      {[
        "Technology",
        "Crypto",
        "Ethereum",
        "Daily Top Movers",
        "Bitcoin",
        "Altcoins",
        "IPO Access",
        "ETFs",
      ].map((item, index) => (
        <Fragment key={index}>
          {" "}
          <OfferChip text={item} />
        </Fragment>
      ))}
    </div>
  );
}
