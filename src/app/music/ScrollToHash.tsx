import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ScrollToHash = ({
    mainRef,
}: {
    mainRef: React.RefObject<HTMLElement | null>;
}) => {
    const params = useParams();
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollToHash = (hash: string) => {
            if (!hash || !mainRef.current) return;
            requestAnimationFrame(() => {
                const target = document.getElementById(hash);
                if (target && mainRef.current) {
                    mainRef.current.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: "smooth",
                    });
                }
            });
        };
        scrollToHash(window.location.hash);
    }, [params, searchParams]);

    return null;
};

export default ScrollToHash;
