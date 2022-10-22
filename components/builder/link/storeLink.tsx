import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const style = {
    buttonContainer: (isDarkmode: boolean) => `
    desktop:w-[16vw] desktop:h-[5vw] desktop:rounded-[5vw] desktop:gap-[1.2vw]
    minitab:w-[192px]
    w-[160px] rounded-[60px] h-[62px] flex items-center justify-center gap-[0.7rem] ${isDarkmode ? "bg-primaryColors-purple700" : "bg-primaryColors-cream200"} relative`,

    iconWrapper: (isDarkmode: boolean) => `
    desktop:text-[2vw] 
    minitab:text-[25px] 
    text-[18px] ${isDarkmode ? "text-primaryColors-cream100" : "text-primaryColors-purple700"}`,

    textWrapper: (isDarkmode: boolean) => `
    desktop:leading-[1vw]
    minitab:leading-[15px] 
    leading-[14px] ${isDarkmode ? "text-primaryColors-cream100" : "text-primaryColors-purple700"} text-left font-[400]`,

    textOne: `
    desktop:text-[0.9vw]
    minitab:text-[14px]
    text-[12px] opacity-[0.5]`,

    textTwo: `
    desktop:text-[1.1vw]
    minitab:text-[16px]
    text-[14px]`
}


export default function () {
    return <div className="flex justify-center items-center h-[100vh]">
        <GoogleStoreLink />
    </div>
}

interface StoreLinkProps {
    isDarkmode?: boolean,
    rippleComponent?: JSX.Element,
    textOne: string,
    textTwo: string,
    icon: JSX.Element,
    href?: string,
}

function StoreLink({ props }: { props: StoreLinkProps }) {
    const { textOne, textTwo, rippleComponent, isDarkmode, icon, href } = props
    return <Link href={href || "/"}>
        <a className={style.buttonContainer(!!isDarkmode)}>
            <span className={style.iconWrapper(!!isDarkmode)}>
                {icon}
            </span>
            {rippleComponent}
            <div className={style.textWrapper(!!isDarkmode)}>
                <span className={style.textOne}>{textOne}</span> <br />
                <span className={style.textTwo}>{textTwo}</span>
            </div>
        </a>
    </Link>
}

type GooglePlayAppStoreLinkProps = Pick<StoreLinkProps, "isDarkmode" | "rippleComponent" | "href">;

export function GoogleStoreLink({ props }: { props?: GooglePlayAppStoreLinkProps }) {
    return <StoreLink props={
        {
            icon: <FaGooglePlay />,
            isDarkmode: props?.isDarkmode,
            rippleComponent: props?.rippleComponent,
            textOne: "Get on the",
            textTwo: "Google Play",
            href: props?.href
        }
    } />
}

export function AppStoreLink({ props }: { props?: GooglePlayAppStoreLinkProps }) {
    return <StoreLink props={
        {
            icon: <BsApple />,
            isDarkmode: props?.isDarkmode,
            rippleComponent: props?.rippleComponent,
            textOne: "Get on the",
            textTwo: "App Store",
            href: props?.href
        }
    } />
}



