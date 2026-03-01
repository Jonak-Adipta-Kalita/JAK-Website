"use client";

import { createContext, useContext } from "react";

interface CurtainContextValue {
    navigateTo: (href: string) => void;
    openOnMount: () => void;
}

export const CurtainContext = createContext<CurtainContextValue>({
    navigateTo: () => { },
    openOnMount: () => { },
});

export const useCurtain = () => {
    return useContext(CurtainContext);
}
