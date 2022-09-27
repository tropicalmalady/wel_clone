import create from "zustand";
import { useEffect,useRef } from 'react';
import { EffectCallback } from 'react'
import useLayoutEffect from 'react';

interface ToggleState
{
   isToggled: boolean,
   toggle(): void
}

export const useToggle= create<ToggleState>((set)=>({
    isToggled:false,
    toggle: ()=>{set((state)=>({
        isToggled: !state.isToggled
    }))}

}))


export function useEffectOnce(effect: EffectCallback) {
    const hasMounted=useRef(false);
    
    useEffect(()=>{
    if(!hasMounted.current)
      {
      effect();
       hasMounted.current=true;
      }
    }, [])
  }
  

