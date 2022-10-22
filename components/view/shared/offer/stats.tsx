import Image from "next/image";
import { Fragment, useEffect, useRef } from 'react';
import Images from "../../../../utility/images";
import { OfferChip } from "./chip";
import OfferCard from "./card";
import gsap from "gsap/dist/gsap";

export default function OfferStats() {
 const rocketRef=useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(rocketRef.current, {
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
            mx-auto"
        >
          <div>
            <div className="relative">
              <div className="absolute left-0 top-0 ">
                <ChipSection />
              </div>
              <div className="relative">
                <img
                  src={Images.Landing.rocket.src}
                  className="w-[100%] h-[100%]"
                  ref={rocketRef}
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
