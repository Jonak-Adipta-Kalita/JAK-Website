"use client";

import { useRouter } from "next/navigation";

const usePageTransition = () => {
    const router = useRouter();

    return (href: string) => {
        router.push(href);
    };
};

export default usePageTransition;
