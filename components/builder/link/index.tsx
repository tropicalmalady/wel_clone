import Link, { LinkProps } from "next/link";

export interface LinkBuilderInterface
{
    href?:any,
    child:string | JSX.Element,
    style?:string,
}

export function LinkBuilderModel({href="/",child,style="/"}:LinkBuilderInterface)
{
   return {href,child,style};
}

export function LinkBuilder({ linkBuilderData }:{linkBuilderData:LinkBuilderInterface}) {
  return (
    <Link href={linkBuilderData.href}>
      <a className={"block "+linkBuilderData.style}>{linkBuilderData.child}</a>
    </Link>
  );
  }

