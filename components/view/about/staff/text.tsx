import { useEffect ,useRef} from 'react';
import { TranslateInView } from '../../../../utility/animations';


export default function StaffIntro()
{
  const textRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    TranslateInView(textRef);
  },[])

  return <div className="minitab:w-[50%]" ref={textRef}>
    <h2 className="font-Museo font-[450] text-[1.5rem] mb-[0.5rem]">We are Weltio</h2>
    <p>Creativity, attention to detail and thoughtfulness are the basis for the Wealth ecosystem we are building</p>
    </div>
}

