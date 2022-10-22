import OfferStats from "./stats";
import OfferText from "./text";

export default function OfferSection()
{
    return <section>
       <div className="mb-[4rem]"><OfferStats/></div> 
       <div><OfferText/></div>
    </section>
}