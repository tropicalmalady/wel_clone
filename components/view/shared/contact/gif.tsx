import gsap from "gsap";
import { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import Images from "../../../../utility/images";;

const Gifpart = (imageData: StaticImageData) => () => <img src={imageData.src} className="w-[100%] h-[100%]" />

const Body = Gifpart(Images.Landing.body);
const RightHand = Gifpart(Images.Landing.righthand);
const LeftHand = Gifpart(Images.Landing.lefthand);
const Question = Gifpart(Images.Landing.question);
const Head = Gifpart(Images.Landing.head);
const Legs = Gifpart(Images.Landing.legs)

export default function Gif() {
    const gifRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const q = gsap.utils.selector(gifRef);
        const gifHead = q(".contact__head");
        const gifBody = q(".contact__body");
        const gifRighthand = q(".contact__righthand");
        const gifLefthand = q(".contact__lefthand");
        const gifQuestion = q(".contact__question");

        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1,
        });

        tl.to(gifHead, {
            rotate: "10deg",
            y: "-0.3vw",
            duration: 0.8,
            ease: "sine.inOut",
            transformOrigin: "bottom left"
        }, 0).
            to(gifBody, {
                y: "-0.3vw",
                duration: 0.6,
                ease: "sine.inOut",
            }, 0).
            to(gifRighthand, {
                rotate: "-50deg",
                duration: 0.5,
                ease: "easeOut",
                transformOrigin: "bottom left"
            }, 0).
            to(gifLefthand, {
                rotate: "50deg",
                duration: 0.5,
                ease: "easeOut",
                transformOrigin: "bottom right"
            }, 0).
            to(gifQuestion, {
                opacity: 0,
                duration: 0.6,
                ease: "sine.inOut",
            }, 0)
    }, [])


    return <div className="h-[100%] relative" ref={gifRef}>
        <div className="flex flex-col h-[100%]">
            <div className="h-[20%] w-[20%] mx-auto rotate-[3deg] translate-x-[10%] translate-y-[5%] contact__head"><Head />  </div>
            <div className="relative h-[28%] w-[70%] mx-auto">
                <div className="relative z-[1] contact__body"><Body /></div>
                <div className="absolute right-[-20%] top-[-7%] w-[30%] contact__righthand"><RightHand /> </div>
                <div className="absolute left-[-18%] top-[3%] w-[30%] contact__lefthand"><LeftHand /> </div>
                <div className="absolute left-[-13%] top-[-95%] w-[15%] contact__question"><Question /> </div>
            </div>
            <div className="h-[50%] w-[80%] translate-y-[-2%]"><Legs /></div>
        </div>
    </div>
}

