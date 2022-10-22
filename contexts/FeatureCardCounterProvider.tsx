import { createContext, useContext, ReactNode, useState } from 'react';

export interface FeatureCardConterState {
    index: number,
    setIndex(index: number): void
}

const FeatureCardCounterContext = createContext<FeatureCardConterState>({} as FeatureCardConterState);

export function useFeatureCardCounter(): FeatureCardConterState {
    return useContext(FeatureCardCounterContext);
}

export default function FeatureCardCounterProvider(children: ReactNode) {
    const [index, setIndex] = useState<number>(0)


    return <FeatureCardCounterContext.Provider value={{ index, setIndex }}>
        {children}
    </FeatureCardCounterContext.Provider>
}