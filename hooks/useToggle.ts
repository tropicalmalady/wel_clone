import { useState } from 'react';

export function useToggle()
{
  const [isToggled,setIsToggled]=useState(false);

  return [isToggled,()=>setIsToggled(!isToggled)] as const;
}


