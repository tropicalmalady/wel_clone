import Image from "next/image";
import Images from "../../../../utility/images";


export default function CryptoBanner()
{
  return <div className="w-[100%] laptop:aspect[1/0.578] aspect-[1/0.578] rounded-[4%/8%] overflow-hidden relative">
      <Image src={Images.Landing.screenshotBanner} layout="fill" objectFit="cover" placeholder="blur"/>
        </div>   
}