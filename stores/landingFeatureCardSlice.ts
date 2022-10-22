import { StateCreator } from "zustand"
import { FeatureCardCounterState, WeltioState } from "."

export const createLandingFeatureCardCounterSlice: StateCreator<WeltioState, [["zustand/devtools", never]], [], FeatureCardCounterState> = (set) => ({
    index: 0,
    setIndex: (index) => {
        set((state) => ({
            landingFeatureCardCounterState: {
                ...state.landingFeatureCardCounterState, index
            }
        }), false,  "setLandingFeatureCardIndex")
    }
})