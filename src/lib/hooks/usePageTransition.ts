"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export type CurtainState = "open" | "closing" | "closed" | "opening";

interface UseCurtainTransitionReturn {
    curtainState: CurtainState;
    navigateTo: (href: string) => void;
    onCurtainAnimationComplete: () => void;
}

export const useCurtainTransition = (): UseCurtainTransitionReturn => {
    const [curtainState, setCurtainState] = useState<CurtainState>("opening");
    const pendingHref = useRef<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const navigateTo = useCallback(
        (href: string) => {
            if (href === pathname) return;
            pendingHref.current = href;
            setCurtainState("closing");
        },
        [pathname]
    );

    const onCurtainAnimationComplete = useCallback(() => {
        if (curtainState === "closing") {
            if (pendingHref.current) {
                router.push(pendingHref.current);
                pendingHref.current = null;
            }
            setCurtainState("opening");
        } else if (curtainState === "opening") {
            setCurtainState("open");
        }
    }, [curtainState, router]);

    return { curtainState, navigateTo, onCurtainAnimationComplete };
}
