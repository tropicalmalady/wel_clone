import { Fragment } from 'react';
import SocialSection from './social';

const texts: string[] = [
    "Weltio LLC (“Weltio”) is a Technology Company.",
    "Brokerage and clearing services are provided by Alpaca Securities LLC (“Alpaca”), a FINRA member, a wholly-owned subsidiary of AlpacaDB, Inc. Clearing services are provided by Velox Clearing LLC (Velox) and Vision Financial Markets LLC (Vision). All three are members of the Securities Investor Protection Corporation (SIPC), which protects securities customers of its members up to USD $500,000 (including USD $250,000 for claims for cash) per customer. Explanatory brochure available upon request or at www.sipc.org.",
    "View Alpaca’s disclosures at: https://alpaca.markets/disclosures",
    "Alpaca and Weltio are not affiliated and neither are responsible for the liabilities of the other.",
    "Technology is offered by Weltio.",
    "Weltio is a trading name of Weltio LLC. The information provided by Weltio does not constitute advice or a recommendation to buy, sell, or hold securities. All investments involve risk; the past performance of a security or financial product does not guarantee future results or returns. With any investment in securities or financial products, there is always a risk of losing money. Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors. These risks are to be assumed by the customer.",
    "Trademarks and logos are the property of their respective owners and do not represent endorsements of any kind. Unless otherwise noted, Weltio and its affiliates are not partners, affiliates, or licensees of these companies.",
    "Content, news, research, tools, market data and securities symbols are for educational and illustration purposes only and are not substitutes for professional advice. All information provided is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on this website, our Weltio mobile application or our associated social media pages.",
    "For further details see our Legal Disclosures. By using this website, you accept our Terms of Use and Privacy Policy.",
    "© Copyright 2022, Weltio LLC. All rights reserved."
];

const style = {
    text: `
      desktop:text-[1.3vw]
      tab:text-[16px]
      minitab:text-[14px]
      text-[12px] font-[300] leading-[145%] text-primaryColors-purple700_2 mb-[1rem]`,

    container: `
      mt-[3.5rem] mb-[4.5rem]`
}

export default function Footer() {
    return <footer className="givelayout">
        <div>
            <SocialSection />
        </div>
        <div className={style.container}>
            {texts.map((item, index) => <Fragment key={index}><Paragraph text={item} /></Fragment>)}
        </div>
    </footer>
}

function Paragraph({ text }: { text: string }) {
    return <p className={style.text} >{text}</p>
}

