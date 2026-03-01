"use client";

import { createContext, useContext } from "react";

interface CurtainContextValue {
    navigateTo: (href: string) => void;
}

export const CurtainContext = createContext<CurtainContextValue>({
    navigateTo: () => { },
});

export const useCurtain = () => {
    return useContext(CurtainContext);
}
