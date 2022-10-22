import Link from "next/link";

const style = {
  iconSize: `
    desktop:text-[2vw] desktop:mr-[0.2vw]
    laptop:mr-[4px]
    tab:text-[24px] tab:mr-[3px]
    minitab:text-[20px] 
    text-[16px] inline-block mr-[2px]`,

  iconBox: `
    minitab:px-[1.2em] minitab:py-[0.55em] minitab:rounded-[56%/83%] minitab:border-[0.06em]
    px-[40px] py-[8px] rounded-[28px] border-[1.5px]`
}

export interface SocialChipProp {
  icon: JSX.Element,
  href?: string
}

export function SocialChip({ props }: { props: Required<SocialChipProp> }) {
  const { icon, href } = props;
  return <div className={style.iconSize}>
    <div className={style.iconBox}>
      <Link href={href}>
        <a>{icon}</a>
      </Link>
    </div>
  </div>
}
