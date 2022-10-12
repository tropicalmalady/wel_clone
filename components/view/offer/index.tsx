import Image from "next/image";
import { Fragment, useEffect } from 'react';
import Images from "../../../utility/images";
import { OfferChip } from '../../builder/chip/offerchip';
import CryptoSection from "../crypto";
import OfferCard from "./card";
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function OfferSection() {

   useEffect(()=>{
    gsap.to(".yyz",{
        y:"-4vw",
        repeat:-1,
        duration:1.1,  
        yoyo:true,  
    })
   },[]);


    return <section>
        <div className="mb-[10vw]">
        <CryptoSection/>
        </div>
        <div className="">
            <div className="
            minitab:max-w-[65%]
            mobile:max-w-[500px] mobile:px-[20px]
            minimobile:px-[0px]
            mx-auto mb-[10vw] ">
            <div>
            <div className="relative mb-[300vh]">
                <div className="absolute left-0 top-0 "> <ChipSection /></div>
                <div className="giveborder relative  "><img src={Images.Landing.rocket.src}  className="w-[100%] h-[100%] yyz"/> </div>
                <div className="giveborder absolute right-0 top-0"><OfferCard /> </div>
            </div>
              <div className="giveborder"> <img src={Images.Landing.exhaust.src} className="w-[100%] h-[100%] laptop:mt-[-55%] minitab:mt-[-55%]"/> </div>
            </div>
            </div>
        </div>
    </section>
}


const style = {
    offerChipContainer: `
    desktop:w-[25vw]
    laptop:w-[300px]
    tab:w-[250px]
    minitab:w-[220px]
    w-[140px]`
}


function ChipSection() {
    return <div className={style.offerChipContainer}>
        {["Technology", "Crypto", "Ethereum", "Daily Top Movers", "Bitcoin", "Altcoins", "IPO Access", "ETFs"].map((item, index) => <Fragment key={index}> <OfferChip text={item} /></Fragment>)}
    </div>
}