import { StateCreator, StoreMutators } from "zustand";
import create  from "zustand";
import { devtools } from 'zustand/middleware';
import { createLandingFeatureCardCounterSlice } from "./landingFeatureCardSlice";


export interface WeltioState
{
 landingFeatureCardCounterState: FeatureCardCounterState
}

export const useGlobalStore=create<WeltioState>()(devtools(
    (...props)=>({
        landingFeatureCardCounterState: createLandingFeatureCardCounterSlice(...props)
    })
))

export default useGlobalStore;

export interface FeatureCardCounterState
{
    index:number,
    setIndex(number:number):void
}

