import { useEffect } from "react";

const listeners = new Set<(t: number) => void>();

let rafId: number;
let time = 0;

const tick = () => {
    time += 0.02;
    listeners.forEach((fn) => fn(time));
    rafId = requestAnimationFrame(tick);
};

export const useAnimationTime = (cb: (t: number) => void) => {
    useEffect(() => {
        if (listeners.size === 0) rafId = requestAnimationFrame(tick);
        listeners.add(cb);
        return () => {
            listeners.delete(cb);
            if (listeners.size === 0) cancelAnimationFrame(rafId);
        };
    }, [cb]);
};
