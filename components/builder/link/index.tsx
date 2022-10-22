import Link, { LinkProps } from "next/link";

export interface linkProps
{
    href?:any,
    child:string | JSX.Element,
    style?:string,
}

export function linkModel({href="/",child,style="/"}:linkProps)
{
   return {href,child,style};
}

export function LinkBuilder({ props }:{props:linkProps}) {
  return (
    <Link href={props.href}>
      <a className={"block "+props.style}>{props.child}</a>
    </Link>
  );
  }

