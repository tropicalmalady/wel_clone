import { BsChatLeft, BsSuitHeart } from "react-icons/bs";
import { Colors } from "../../../tailwind.config";

const style = `
desktop:text-[1.67vw]
laptop:text-[20px]
tab:text-[16px]
minitab:text-[14px] 
mobile:text-[12px] 
minimobile:text-[10px]
font-[300] leading-[20px] mx-[auto] leading-[150%]`

interface ContactInfoProps {
    icon: JSX.Element,
    iconColor: string
    title: string,
    content: string
}

function ContactInfo({ props }: { props: ContactInfoProps }) {
    return <div className={style}>
        <div className="flex gap-[0.7em]">
            <div className="text-[1.4em] pt-[0.15em]" style={{ color: props.iconColor }}>
                {props.icon}
            </div>
            <div>
                <div><span>{props.title}</span></div>
                <div><a href="#" className="text-secondaryColors-blue">{props.content}</a></div>
            </div>
        </div>

    </div>
}

export const InfoOne = () => <ContactInfo props={{
    icon: <BsSuitHeart />,
    iconColor: Colors.secondaryColors.pink,
    title: "New account",
    content: "hola@weltio.com"
}} />;

export const InfoTwo = () => <ContactInfo props={{
    icon: <BsChatLeft />,
    iconColor: Colors.primaryColors.green300,
    title: "Already a customer",
    content: "soporte@weltio.com"
}} />