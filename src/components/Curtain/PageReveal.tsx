"use client";

import { useEffect } from "react";
import { useCurtain } from "@/lib/CurtainContext";

const PageReveal = ({ children }: { children: React.ReactNode }) => {
    const { openOnMount } = useCurtain();

    useEffect(() => {
        openOnMount();
    }, []);

    return <>{children}</>;
}

export default PageReveal;
