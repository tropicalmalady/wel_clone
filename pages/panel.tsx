import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);


export default function ()
{
    const boxRef = useRef<HTMLDivElement>(null);
   

    useEffect(()=>{

        gsap.to(boxRef.current,{  
            xPercent: -100 * 4,
            scrollTrigger:{
                trigger:boxRef.current,
                pin:true,
                start:"top top",
                scrub:1,
                end:()=>`+=${boxRef.current?.scrollWidth}`,       
            }
        })


    });

    return <div className="overflow-hidden">
        <Panel props={{title:"A cool title",content:"",color:"bg-secondaryColors-blue"}}/>
       <div className=" overflow-hidden whitespace-nowrap ">
        <div className="horizontal-scroll" id="horizontal-scroll" ref={boxRef}>
        <Panel props={{title:"Panel 1",content:"kjdflkdjflkjdsklfjdklj",color:"bg-secondaryColors-pink"}}/>
        <Panel props={{title:"Panel 2",content:"dfjdklflkdnfkldnflkdn",color:"bg-[orange]"}}/>
        <Panel props={{title:"Panel 3",content:"dfjsdklfdklnfd",color:"bg-primaryColors-purple600"}}/>
        <Panel props={{title:"Panel 4",content:"dfksdkfnjfoenf",color:"bg-primaryColors-green200 "}}/>
        <Panel props={{title:"Panel 5",content:"dofjdjfojfo;df;",color:"bg-[grey]"}}/>
        </div>
    </div>


        <Panel props={{title:"",content:"",color:"bg-[white]"}}/>
           </div>
}


interface PanelProps{
    title:string,
    content:string,
    color:string,
}


function  Panel({props}:{props:PanelProps})
{
    return <div className="inline-block text-[0px]">
     <div className={`w-[100vw] h-[100vh] flex flex-col justify-center items-center text-[white] ${props.color} `}>
           <h2 className="font-[600] text-[34px]">{props.title}</h2>
           <p className="font-[300] text-[17px]"> {props.content}</p>
          </div>
          </div>
}