import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const style = {
    buttonContainer: (isDarkmode: boolean) => `
    desktop:w-[12vw] desktop:h-[3.5vw] desktop:rounded-[2vw] desktop:gap-[1vw]
    minitab:w-[192px]
    w-[160px] rounded-[60px] h-[62px] flex items-center justify-center gap-[0.7rem] ${isDarkmode ? "bg-primaryColors-purple700" : "bg-primaryColors-cream200"} relative`,

    iconWrapper: (isDarkmode: boolean) => `
    desktop:text-[1.3vw]
    minitab:text-[25px] 
    text-[18px] ${isDarkmode ? "text-primaryColors-cream100" : "text-primaryColors-purple700"}`,

    textWrapper: (isDarkmode: boolean) => `
    desktop:leading-[0.9vw]
    minitab:leading-[16.8px] 
    leading-[14px] ${isDarkmode ? "text-primaryColors-cream100" : "text-primaryColors-purple700"} text-left`,

    textOne: `
    desktop:text-[0.9vw]
    minitab:text-[14px]
    text-[12px] opacity-[0.5]`,

    textTwo: `
    desktop:text-[1vw]
    minitab:text-[16.8px]
    text-[14.4px] `
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
            textOne: "Get it on",
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
            textOne: "Get it on",
            textTwo: "App Store",
            href: props?.href
        }
    } />
}



