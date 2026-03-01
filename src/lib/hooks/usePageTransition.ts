"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export type CurtainState = "open" | "closing" | "closed" | "opening";

export function useCurtainTransition() {
    const [curtainState, setCurtainState] = useState<CurtainState>("open");
    const stateRef = useRef<CurtainState>("open");
    const pendingHref = useRef<string | null>(null);
    const router = useRouter();

    const setStateSync = useCallback((s: CurtainState) => {
        stateRef.current = s;
        setCurtainState(s);
    }, []);

    const navigateTo = useCallback(
        (href: string) => {
            pendingHref.current = href;
            setStateSync("closing");
        },
        [setStateSync]
    );

    const openOnMount = useCallback(() => {
        setStateSync("opening");
    }, [setStateSync]);

    // Fired by framer-motion when curtains finish animating IN (screen covered)
    const onClosed = useCallback(() => {
        if (stateRef.current !== "closing") return;
        if (pendingHref.current) {
            router.push(pendingHref.current);
            pendingHref.current = null;
        }
        setStateSync("closed");
    }, [router, setStateSync]);

    // Fired by framer-motion when curtains finish animating OUT (screen revealed)
    const onOpened = useCallback(() => {
        if (stateRef.current !== "opening") return;
        setStateSync("open");
    }, [setStateSync]);

    return { curtainState, navigateTo, openOnMount, onClosed, onOpened };
}
