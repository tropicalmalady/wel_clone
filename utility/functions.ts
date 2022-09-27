export function Desktop(prop:string)
{
   return prop.split(" ").map(item=>`desktop:${item}`).join(" "); 
}