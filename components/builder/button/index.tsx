import { MouseEventHandler } from "react"

export interface ButtonBuilderInterface
{
    readonly title:string,
    readonly onPress?:MouseEventHandler<HTMLButtonElement>,
    readonly style?:string
    isLoading?:boolean
    isError?:boolean
}

export function ButtonBuilderModel({title,onPress=()=>"",style="",isLoading=false,isError=false}:ButtonBuilderInterface)
{
   return {title,onPress,style,isLoading,isError}
}

export function ButtonBuilder({buttonBuilderData}:{buttonBuilderData:ButtonBuilderInterface})
{
  return (
      <button className={`${buttonBuilderData.style}`} onClick={buttonBuilderData.onPress}>
   { buttonBuilderData.title }
      </button>
  )
}



