"use client";

import { usePathname } from "next/navigation";
import { useCurtainTransition } from "@/lib/hooks/usePageTransition";

const GotoLobbyButton = () => {
    const pathname = usePathname();
    const { navigateTo } = useCurtainTransition();

    if (pathname === "/") return <></>;

    return (
        <>
            {/* TODO */}
        </>
    )
}

export default GotoLobbyButton;
