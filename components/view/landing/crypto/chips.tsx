import { StaticImageData } from "next/image";
import Images from "../../../../utility/images";

const style={
    container:`
    desktop:w-[6vw]
    tab:w-[62px]
    w-[39.2px] aspect-[0.755/1] rounded-[79.4%/59.5%] bg-[white]`
  }
  
  interface CryptoChipProps
  {
    image: StaticImageData,
    position:string
  }

  function CryptoChip({props}:{props:CryptoChipProps})
  {
    return <div className={`absolute z-[2] ${props.position} z-[1] crypto__chip`}> 
         <div className={style.container} style={{boxShadow:"0 2px 20px rgb(63 66 57 / 9%)"}}>
            <img src={props.image.src} alt="cryptochipimg" className="w-[100%] h-[100%]"/>
            </div>
            </div>
  }

  export const CryptoChip1=({position}:{position:string})=><CryptoChip props={{image:Images.Landing.screenshot1,position}}/>
  export const CryptoChip2=({position}:{position:string})=><CryptoChip props={{image:Images.Landing.screenshot2,position}}/>
  export const CryptoChip3=({position}:{position:string})=><CryptoChip props={{image:Images.Landing.screenshot3,position}}/>
  export const CryptoChip4=({position}:{position:string})=><CryptoChip props={{image:Images.Landing.screenshot4,position}}/>
  export const CryptoChip5=({position}:{position:string})=><CryptoChip props={{image:Images.Landing.screenshot5,position}}/>
