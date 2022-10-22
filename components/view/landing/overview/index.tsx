import useMediaQuery from "../../../../hooks/useMediaQuery"
import OverviewDesktop from './layout/desktop';
import OverviewMobile from "./layout/mobile";
import { useState, useEffect, useRef } from 'react';
import OverviewHeading from "./heading";

export default function OverviewSection()
{
  const isNotMobile = useMediaQuery('(min-width: 1200px)')
  const [hasMounted,setHasMounted]=useState(false);


  useEffect(()=>{
  setHasMounted(true);
  },[])


  return <section>
        <OverviewHeading/>
   {hasMounted?isNotMobile? <OverviewDesktop/> : <OverviewMobile/> : <></>}
   </section>  
}