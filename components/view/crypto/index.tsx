import { CryptoChip1, CryptoChip2, CryptoChip3, CryptoChip4, CryptoChip5 } from '../../builder/chip/cryptochip';
import CryptoBanner from './banner';
import CryptoText from './text';
import { useRef, useEffect } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CryptoSection()
{
    const cryptoSectionRef=useRef<HTMLDivElement>(null);

    useEffect(()=>{
    const cryptoChipDivs=gsap.utils.selector(cryptoSectionRef)(".crypto__chip");

    const tl= gsap.timeline({
        scrollTrigger: {
            trigger: cryptoSectionRef.current,
            start: "top top",  
            end: `bottom top`,
            scrub: 1,
        }
    });

    cryptoChipDivs.forEach((item)=>{
        tl.fromTo(item,{y:0},{
            y:"5vw"
        },0)
    })
    },[]);

    return <section>
        <div className="givelayout" ref={cryptoSectionRef}>
            <div className='relative pt-[4em] minitab:pt-[12em] desktop:pt-[12vw]'>
                <CryptoChip1 position='top-[0%] minitab:left-[35%] left-[85%]'/>
                <CryptoChip2 position='minitab:top-[35%] left-[23%] top-[50%] minimobile:top-[55%]'/>
                <CryptoChip3 position='top-[55%] left-[75%]'/>
                <CryptoChip4 position='top-[85%] left-[20%]'/>
                <CryptoChip5 position='top-[80%] left-[80%]'/>
            <div className='mb-[2em] minitab:mb-[6em] desktop:mb-[6vw]'>
                <CryptoText/>
            </div>
                <CryptoBanner/>
        </div>
        </div>
          </section>
}