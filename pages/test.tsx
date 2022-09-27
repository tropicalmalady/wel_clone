import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);


 
export default function App() {


  const boxRef = useRef<HTMLDivElement>(null);

 useEffect(()=>{
 gsap.timeline().to(gsap.utils.selector(boxRef),{
  delay:2,
  stagger:0.5,
  y:100
 })
 })


 return (
   <div className="app flex h-[100vh] justify-center items-center">
    <div className="boxcontainer flex" ref={boxRef}>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
    </div>


     <style jsx global>{`

        .box {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #28a92b;
          font-weight: 600;
          color: #fff;
          margin: 10px;
        }
      `}</style>
   </div>
 );
}




































// import Header from "../component/view/header";



// export default function () {
//   return <section className="introduction giveborder">
//     <div className="intro-container">
//       <div className="flex">
//         <TextContent />
//         <VideoContent />
//       </div>
//     </div>
//   </section>
// }


// function TextContentHeading() {
//   return <div className="giveborder">
//     <div className="">
//       <h1> <span>More ways</span>
//         <MoneySvg />
//         <span>to grow</span>
//         <StatsSvg />
//         <span>your money</span>
//       </h1>
//     </div>

//   </div>
// }


// function TextContentBody()
// {
//   return <div className="text-content-body">
//       <p>Want to expand your reach? Get access to American and crypto markets with a multi-currency account</p>
//        </div>
// }


// function TextContentFooter()
// {
//   return <div>

//         </div>
// }


// function RippleButton()
// {
//   return <button>

//        </button>
// }


















// function TextContent()
// {
//   return <div>




//     <TextContentHeading/>
//     <TextContentBody/>

//   </div>
// }




















// function VideoContent() {
//   return <div>

//   </div>
// }


// export function MoneySvg() {
//   return <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline px-[5px]">
//     <path d="M5 27.5V31" stroke="#0B1E5B" stroke-width="2"></path> <path d="M33 27V31" stroke="#0B1E5B" stroke-width="2"></path>
//     <path d="M3 27H35C36.1046 27 37 26.1046 37 25V3C37 1.89543 36.1046 0.999998 35 0.999998H3C1.89543 0.999998 1 1.89543 1 3V25C1 26.1046 1.89543 27 3 27Z" stroke="#0B1E5B" stroke-width="2"></path>
//     <circle cx="20" cy="14" r="5" stroke="#8CAF31" stroke-width="2"></circle>
//     <rect x="2" y="7" width="5" height="2" fill="#8CAF31"></rect>
//     <rect x="2" y="13" width="5" height="2" fill="#8CAF31"></rect>
//     <rect x="2" y="19" width="5" height="2" fill="#8CAF31"></rect>
//   </svg>
// }

// export function StatsSvg() {
//   return <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline px-[5px]">
//     <path d="M0 3.98145V28.9814H2V3.98145H0ZM5 33.9814H32V31.9814H5V33.9814ZM0 28.9814C0 31.7429 2.23858 33.9814 5 33.9814V31.9814C3.34315 31.9814 2 30.6383 2 28.9814H0Z" fill="#0B1E5B"></path>
//     <path d="M21.1679 17.2326L20.499 17.9759L21.1679 17.2326ZM22.6506 17.0705L23.4644 17.6518L22.6506 17.0705ZM15.2493 13.4529L14.414 12.903L15.2493 13.4529ZM16.7534 13.2595L16.0845 14.0028L16.7534 13.2595ZM7.83521 26.5314L16.0845 14.0028L14.414 12.903L6.16479 25.4315L7.83521 26.5314ZM16.0845 14.0028L20.499 17.9759L21.8369 16.4893L17.4224 12.5162L16.0845 14.0028ZM23.4644 17.6518L32.8137 4.56268L31.1863 3.40021L21.8369 16.4893L23.4644 17.6518ZM20.499 17.9759C21.3861 18.7743 22.7706 18.623 23.4644 17.6518L21.8369 16.4893L21.8369 16.4893L20.499 17.9759ZM16.0845 14.0028L17.4224 12.5162C16.5126 11.6974 15.0872 11.8806 14.414 12.903L16.0845 14.0028Z" fill="#8CAF31"></path> <path d="M24.1604 4.75872L32.4278 3.16817L34.444 10.9476" stroke="#8CAF31" stroke-width="2"></path>
//   </svg>
// }
