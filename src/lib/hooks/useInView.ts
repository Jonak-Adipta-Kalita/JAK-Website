import { useEffect, useState } from "react";

const useInView = <T extends Element>(
    ref: React.RefObject<T | null>,
    threshold = 0.1
) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) =>
                setInView(
                    entry.isIntersecting && entry.intersectionRatio >= threshold
                ),
            { threshold }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [ref, threshold]);

    return inView;
};

export default useInView;
